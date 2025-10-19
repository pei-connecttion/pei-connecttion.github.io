import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFeatures(block) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .features .features-wrapper {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 20px !important;
            max-width: 100% !important;
            justify-content: center !important;
          }
          .features .features-content {
            padding: 20px !important;
            text-align: center !important;
            background: transparent !important;
            border-radius: 10px !important;
            border: 1px solid #eee !important;
            width: calc(50% - 10px) !important;
            box-sizing: border-box !important;
          }
          .features .features-percent {
            margin-bottom: 4px !important;
          }
          .features .features-text {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            display: block !important;
            word-break: break-word !important;
            max-width: 100% !important;
          }
          .features .section-header h2 {
            font-size: 3.5rem !important;
            margin-bottom: 10px !important;
          }
          .features .section-header div {
            font-size: 1.1rem !important;
            line-height: 1.4 !important;
          }
          @media (max-width: 768px) {
            .features .features-wrapper {
              flex-direction: column !important;
              gap: 15px !important;
            }
            .features .features-content {
              padding: 15px !important;
              width: 100% !important;
            }
            .features .features-text {
              font-size: 1.3rem !important;
            }
            .features .section-header h2 {
              font-size: 2rem !important;
            }
            .features .section-header div {
              font-size: 1rem !important;
            }
          }
        `,
        }}
      />
      <section
        className={`features ${
          block.alternate_style ? "features-two pb-xxl-14 pb-lg-13" : ""
        }`}
        id="features"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header">
                <h2>
                  {block.title} <span>{block.title_suffix}</span>
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(block.description),
                  }}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="features-wrapper d-grid">
                {block.features.map((feature, i) => (
                  <div className="features-content" key={i}>
                    <div className="features-percent">
                      <span className="features-text">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
