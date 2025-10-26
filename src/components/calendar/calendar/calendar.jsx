import { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
// static fallback import (raw) — Vite supports ?raw to import file content as string
import calendarRaw from '/src/content/calendar/calendar.md?raw';

const md = new MarkdownIt({ html: true });

export default function CalendarCalendar(block) {
  // initialize with static fallback so page shows content even if glob fails
  const [calendarMarkdown, setCalendarMarkdown] = useState(typeof calendarRaw === 'string' ? calendarRaw : '');

  useEffect(() => {
    const modules = import.meta.glob('/src/content/calendar/*.md', { as: 'raw' });
    const load = async () => {
      const keys = Object.keys(modules);
      if (keys.length === 0) {
        // leave the static fallback in place
        return;
      }
      // pick a file: prefer block.md_file if specified
      let chosen = keys[0];
      if (block && block.md_file) {
        const match = keys.find(k => k.endsWith('/' + block.md_file));
        if (match) chosen = match;
      }
      try {
        if (modules[chosen]) {
          const loaded = await modules[chosen]();
          const mdText = typeof loaded === 'string' ? loaded : (loaded && loaded.default) ? loaded.default : '';
          if (mdText && mdText.length > 0) setCalendarMarkdown(mdText);
        }
      } catch (e) {
        console.error('Failed loading calendar md', e);
        // keep static fallback
      }
    };
    load();
  }, [block]);

  return (
    <section className="calendar-calendar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <style>{`
              .calendar-calendar { padding-top: 32px; padding-bottom: 32px; }
              .calendar-calendar__table { width: 100%; border-collapse: collapse; }
              .calendar-calendar__table thead th { text-align: left; font-weight: 800; padding: 18px 12px; font-size: 16px; }
              .calendar-calendar__table tbody tr { border-top: 1px solid #e6e6e6; }
              .calendar-calendar__table td { vertical-align: top; padding: 24px 12px; }
              .calendar-calendar__milestone a { font-weight: 800; color: #0f1720; text-decoration: underline; }
              .calendar-calendar__date { color: #6b7280; white-space: nowrap; width: 180px; }
              .calendar-calendar__tasks { color: #6b7280; }
              .calendar-calendar__tasks ul { margin: 0; padding-left: 18px; }
              @media (max-width: 768px) {
                .calendar-calendar__table td { padding: 12px 8px; }
              }
            `}</style>
            {calendarMarkdown ? (
              (() => {
                const parseCalendar = (mdText) => {
                  const lines = mdText.split(/\r?\n/);
                  const entries = [];
                  let current = null;
                  for (let rawLine of lines) {
                    const line = rawLine.trim();
                    if (!line) continue;
                    const headingMatch = line.match(/^#{3,4}\s*(.+)/);
                    if (headingMatch) {
                      const text = headingMatch[1].trim();
                      // prefer em-dash separator
                      let title = '';
                      let date = '';
                      if (text.indexOf('—') !== -1) {
                        const parts = text.split(/\s+—\s+/);
                        title = parts[0].trim();
                        date = parts.slice(1).join(' — ').trim();
                      } else if (/\w/.test(text) && text.indexOf(' - ') !== -1 && /[A-Za-zÀ-ÿ]/.test(text)) {
                        const parts = text.split(/\s+-\s+/);
                        title = parts[0].trim();
                        date = parts.slice(1).join(' - ').trim();
                      } else {
                        // treat as date-only heading
                        title = '';
                        date = text;
                      }
                      current = { title, date, tasks: [] };
                      entries.push(current);
                    } else if (rawLine.match(/^-\s+/) || rawLine.match(/^\s{2,}-\s+/)) {
                      // Handle both top-level and indented bullet points
                      if (!current) { current = { title: '', date: '', tasks: [] }; entries.push(current); }
                      const indent = rawLine.match(/^(\s*)/)[1].length;
                      const taskText = rawLine.replace(/^\s*-\s+/, '').trim();
                      const task = { text: taskText, indent: indent };
                      current.tasks.push(task);
                    }
                  }
                  return entries;
                };

                const entries = parseCalendar(calendarMarkdown);
                return (
                  <div className="calendar-content">
                    <table className="calendar-calendar__table">
                      <thead>
                        <tr>
                          <th>Milestone</th>
                          <th>Date</th>
                          <th>Task List</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entries.map((e, i) => (
                          <tr key={i}>
                            <td className="calendar-calendar__milestone">{e.title ? <a href={`/milestones/${e.title.toLowerCase().match(/m(\d+)/)?.[0] || 'm1'}`}>{e.title}</a> : ''}</td>
                            <td className="calendar-calendar__date">{e.date}</td>
                            <td className="calendar-calendar__tasks">
                              <ul>
                                {e.tasks.map((t, idx) => {
                                  const isObject = typeof t === 'object';
                                  const text = isObject ? t.text : t;
                                  const indent = isObject ? t.indent : 0;
                                  const isSubItem = indent > 0;
                                  
                                  return (
                                    <li 
                                      key={idx} 
                                      style={{ 
                                        marginLeft: isSubItem ? '20px' : '0px',
                                        listStyle: isSubItem ? 'circle' : 'disc',
                                        fontSize: isSubItem ? '0.9em' : '1em'
                                      }}
                                    >
                                      {text}
                                    </li>
                                  );
                                })}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })()
            ) : (
              <div className="calendar-calendar__placeholder">No calendar content found.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
