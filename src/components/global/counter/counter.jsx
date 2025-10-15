import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalCounter(block) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .counter-up .counter-up-wrapper {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: 16px !important;
            max-width: 100% !important;
          }
          .counter-up .counter-up-content {
            padding: 14px 10px !important;
            text-align: center !important;
            background: rgba(255,255,255,0.04) !important;
            border-radius: 10px !important;
            border: 1px solid #eee !important;
          }
          .counter-up .counter-percent {
            margin-bottom: 4px !important;
          }
          .counter-up .counter {
            font-size: 2rem !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            display: block !important;
            word-break: break-word !important;
            max-width: 100% !important;
          }
          .counter-up .section-header h2 {
            font-size: 3.5rem !important;
            margin-bottom: 10px !important;
          }
          .counter-up .section-header div {
            font-size: 1.1rem !important;
            line-height: 1.4 !important;
          }
          @media (max-width: 768px) {
            .counter-up .counter-up-wrapper {
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
              gap: 10px !important;
            }
            .counter-up .counter-up-content {
              padding: 10px 6px !important;
            }
            .counter-up .counter {
              font-size: 1.6rem !important;
            }
            .counter-up .section-header h2 {
              font-size: 2rem !important;
            }
            .counter-up .section-header div {
              font-size: 1rem !important;
            }
          }
        `
      }} />
      <section
        className={`counter-up ${
          block.alternate_style ? "counter-up-two pb-xxl-14 pb-lg-13" : ""
        }`}
        id="counter-up"
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
            <div className="counter-up-wrapper d-grid">
              {block.features.map((feature, i) => (
                <div className="counter-up-content" key={i}>
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      <span className="counter">{feature.text}</span>
                    </div>
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
