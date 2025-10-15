import { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });

export default function PricingCalendar(block) {
  const [content, setContent] = useState('');

  useEffect(() => {
    // load all markdown files from the calendar folder as raw text
    const modules = import.meta.glob('/src/content/calendar/*.md', { as: 'raw' });

    // Helper to pick a file: prefer block.md_file if provided, else pick the first file
    const load = async () => {
      const keys = Object.keys(modules);
      if (keys.length === 0) {
        setContent('<!-- calendar: no file found in src/content/calendar -->');
        return;
      }

      let chosenKey = keys[0];
      if (block && block.md_file) {
        const wanted = block.md_file;
        const match = keys.find(k => k.endsWith('/' + wanted) || k.endsWith('/' + wanted.replace(/^\/.*/, '')));
        if (match) chosenKey = match;
      }

      try {
        const loaded = await modules[chosenKey]();
        // modules[...]() returns the raw string directly (Vite as: 'raw')
        const mdText = typeof loaded === 'string' ? loaded : (loaded && loaded.default) ? loaded.default : '';
        setContent(mdText);
      } catch (e) {
        console.error('Error loading calendar markdown', e);
        setContent('<!-- calendar: failed to load file -->');
      }
    };

    load();
  }, [block]);

  return (
    <section className="pricing-calendar">
      <div className="container">
        <div
          className="pricing-calendar__content"
          dangerouslySetInnerHTML={{ __html: md.render(content || '') }}
        />
      </div>
    </section>
  );
}
