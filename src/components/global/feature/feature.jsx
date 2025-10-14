import MarkdownIt from "markdown-it";
import Carousel from "@components/feature/carousel/carousel";

const md = new MarkdownIt({ html: true });

export default function GlobalFeature(block) {
  let content = "";
  content = (
    <>
      <div className="row align-items-center">
        <div className={`col-lg-6 ${block.reversed ? "order-lg-2" : ""}`}>
          <div className="feature-content">
            <h2 className="h1">{block.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(block.description),
              }}
            />
            {block.button && (
              <div className="d-block mb-6">
                <a
                  href={block.button.link}
                  className="btn btn-primary btn-lg"
                >
                  {block.button.text}
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={`col-lg-6 ${block.reversed ? "order-lg-1" : ""}`}>
          <div className="feature-image">
            <img src={block.image} alt={block.image_alt} loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <section className="feature pt-sm-10 pt-5 pb-4">
      <div className="container">{content}</div>
    </section>
  );
}
