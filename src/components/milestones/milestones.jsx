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
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 30px !important;
            max-width: 1400px !important;
            margin: 0 auto !important;
            padding: 0 40px !important;
          }
          .features .features-content {
            display: block !important;
            text-decoration: none !important;
            transition: transform 0.3s ease !important;
            position: relative !important;
            border: none !important;
            background: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
          .features .features-content:hover {
            transform: scale(1.02) !important;
            box-shadow: none !important;
          }
          .features .features-image {
            width: 100% !important;
            position: relative !important;
            overflow: hidden !important;
            border: none !important;
            background: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          .features .features-image::before {
            content: '' !important;
            display: block !important;
            padding-top: 100% !important;
          }
          .features .features-image img {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            transition: transform 0.3s ease !important;
          }
          .features .features-content:hover .features-image img {
            transform: scale(1.05) !important;
          }
          .features .features-text {
            display: block !important;
            margin-top: 15px !important;
            font-size: 1.2rem !important;
            font-weight: 600 !important;
            text-align: center !important;
            color: #333 !important;
            transition: color 0.3s ease !important;
          }
          .features .features-content:hover .features-text {
            color: #009fba !important;
          }
          .features .section-header h2 {
            font-size: 3.5rem !important;
            margin-bottom: 10px !important;
          }
          .features .section-header div {
            font-size: 1.1rem !important;
            line-height: 1.4 !important;
          }
          
          /* Tablets */
          @media (max-width: 1024px) {
            .features .features-wrapper {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 25px !important;
              padding: 0 30px !important;
            }
          }
          
          /* Mobile */
          @media (max-width: 768px) {
            .features .features-wrapper {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
              padding: 0 20px !important;
            }
            .features .features-text {
              font-size: 1rem !important;
              margin-top: 10px !important;
            }
            .features .section-header h2 {
              font-size: 2rem !important;
            }
            .features .section-header div {
              font-size: 1rem !important;
            }
          }
          
          /* Small Mobile */
          @media (max-width: 480px) {
            .features .features-wrapper {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 0 15px !important;
            }
            .features .features-text {
              font-size: 1.1rem !important;
            }
            .features .section-header h2 {
              font-size: 1.75rem !important;
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="features-wrapper">
                {block.milestones.map((milestone, i) => (
                  <a href={milestone.link} className="features-content" key={i}>
                    <div className="features-image">
                      <img src={milestone.image} alt={milestone.text} />
                    </div>
                    <span className="features-text">{milestone.text}</span>
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

