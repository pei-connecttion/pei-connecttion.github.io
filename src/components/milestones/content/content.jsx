import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MilestonesContent(block) {
  return (
    <section className="documentation-hero">
      <style>{`
        .documentation-hero-content {
          max-width: 1400px;
          margin: 1.6em auto;
          padding: 0 40px;
        }
        .documentation-hero-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
        @media (max-width: 768px) {
          .documentation-hero-content {
            padding: 0 20px;
          }
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
