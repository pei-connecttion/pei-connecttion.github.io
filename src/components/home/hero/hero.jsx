import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
      <div className="hero-two-shape"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <img
                src={block.logo}
                alt={block.title}
                className="mb-4"
                style={{
                  width: "600px",
                  height: "auto",
                }}
              />
              <div
                className="mb-7 w-xxl-80"
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-two-banner">
              <img
                src={block.image}
                alt={block.image_alt}
              />
              <div className="hero-two-banner-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
