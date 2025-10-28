import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MilestonesContent(block) {
  return (
    <section className="documentation-hero">
      <style>{`
        .documentation-hero-content {
          max-width: 1200px;
          margin: 1.6em auto;
          padding: 0 20px;
        }
        .documentation-hero-content a {
          color: #009fba;
          text-decoration: underline;
          font-weight: 500;
        }
        .documentation-hero-content a:hover {
          color: #cee3eb;
          text-decoration: underline;
        }
     `}</style>
      <div className="documentation-hero-content">
        <h1>{block.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(block.description),
          }}
        />
      </div>
    </section>
  );
}
