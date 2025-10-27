import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
      <style>{`
        @media (max-width: 1200px) {
          .hero-logo { width: 500px !important; }
          .hero-image { width: 650px !important; }
        }
        @media (max-width: 992px) {
          .hero-logo { width: 80% !important; }
          .hero-image { width: 550px !important; }
        }
        @media (max-width: 768px) {
          .hero-logo { width: 80%!important; }
          .hero-image { width: 450px !important; }
        }
        @media (max-width: 576px) {
          .hero-logo { width: 100% !important; }
          .hero-image { width: 100% !important; }
        }
        @media (max-width: 400px) {
          .hero-logo { width: 100% !important; }
          .hero-image { width: 100% !important; }
        }
      `}</style>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <img
                src={block.logo}
                alt={block.title}
                className="mb-4 hero-logo"
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
                className="hero-image"
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
