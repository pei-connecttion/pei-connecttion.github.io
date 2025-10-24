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
            gap: 24px !important;
            max-width: 100% !important;
            justify-content: center !important;
            margin-bottom: 120px !important;
          }
          .features .features-content {
            padding: 32px 24px !important;
            text-align: center !important;
            background: #cee3eb !important;
            border-radius: 16px !important;
            border: 2px solid rgba(0, 159, 186, 0.2) !important;
            width: calc(50% - 12px) !important;
            box-sizing: border-box !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .features .features-content::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 4px !important;
            background: #009fba !important;
            transform: scaleX(0) !important;
            transition: transform 0.3s ease !important;
          }
          .features .features-content:hover {
            transform: translateY(-8px) !important;
            border-color: #009fba !important;
            // background: #009fba !important;
            box-shadow: 0 12px 40px rgba(0, 159, 186, 0.15) !important;
          }
          .features .features-content:hover::before {
            transform: scaleX(1) !important;
          }
          .features .features-percent {
            margin-bottom: 4px !important;
          }
          .features .features-text {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            line-height: 1.3 !important;
            display: block !important;
            word-break: break-word !important;
            max-width: 100% !important;
            color: #009fba !important;
            transition: color 0.3s ease !important;
          }
          .features .section-header h2 {
            font-size: 3.5rem !important;
            margin-bottom: 10px !important;
          }
          .features .section-header h2 span {
            background: #009fba !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          .features .section-header div {
            font-size: 1.1rem !important;
            line-height: 1.4 !important;
          }
          @media (max-width: 768px) {
            .features .features-wrapper {
              flex-direction: column !important;
              gap: 16px !important;
            }
            .features .features-content {
              padding: 24px 20px !important;
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
