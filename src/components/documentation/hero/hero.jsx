import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function DocumentationHero(block) {
  return (
    <section className="documentation-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="documentation-hero-content">
              <h1>{block.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
