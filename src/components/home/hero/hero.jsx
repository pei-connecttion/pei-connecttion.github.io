import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
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
                  marginLeft: "-15px"
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
                style={{
                  width: "800px",
                  height: "auto",
                  objectFit: "contain",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
