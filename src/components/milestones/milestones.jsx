import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function Milestones(block) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .features {
            position: relative !important;
            margin-bottom: 2rem !important;
            padding-bottom: 2rem !important;
          }
          .features .features-wrapper {
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 20px !important;
            max-width: 100% !important;
            justify-content: center !important;
            overflow-x: auto !important;
          }
          .features .features-content {
            padding: 0 !important;
            text-align: center !important;
            background: transparent !important;
            border-radius: 10px !important;
            border: 1px solid #eee !important;
            width: calc(25% - 15px) !important;
            min-width: 200px !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            flex-shrink: 0 !important;
          }
          .features .features-content:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
          }
          .features .features-image {
            width: 100% !important;
            height: 280px !important;
            overflow: hidden !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: #f8f9fa !important;
          }
          .features .features-image.no-image {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            position: relative !important;
          }
          .features .features-image.no-image::after {
            content: '📋' !important;
            font-size: 3rem !important;
            color: white !important;
          }
          .features .features-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            transition: transform 0.3s ease !important;
          }
          .features .features-content:hover .features-image img {
            transform: scale(1.02) !important;
          }
          .features .features-percent {
            padding: 20px !important;
            flex: 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .features .features-text {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            line-height: 1.2 !important;
            display: block !important;
            word-break: break-word !important;
            max-width: 100% !important;
            margin: 0 !important;
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
              gap: 15px !important;
              justify-content: flex-start !important;
            }
            .features .features-content {
              min-width: 180px !important;
              width: 180px !important;
            }
            .features .features-image {
              height: 150px !important;
            }
            .features .features-percent {
              padding: 15px !important;
            }
            .features .features-text {
              font-size: 1.1rem !important;
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
        className={`features`}
        id="features"
        style={{ marginTop: "0px", marginBottom: "2rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="features-wrapper d-grid">
                {block.milestones.map((milestone, i) => (
                  <a href={milestone.link} className="features-content" key={i}>
                    <div className={`features-image`}>
                        <img src={milestone.image} alt={milestone.text} />
                    </div>
                    <div className="features-percent">
                      <span className="features-text">{milestone.text}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

