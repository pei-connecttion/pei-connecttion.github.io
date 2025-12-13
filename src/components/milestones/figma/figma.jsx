export default function FigmaEmbed(block) {
  return (
    <>
      <style>{`
        .figma-wrapper {
          width: 100%;
          max-width: 1400px;
          margin: 1.6em auto;
          padding: 0 40px;
          box-sizing: border-box;
        }
        .figma-title {
          text-align: left;
          margin: 0 0 0.8em 0;
        }
        .figma-container {
          position: relative;
          width: 100%;
          height: 750px;
          box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .figma-wrapper {
            padding: 0 30px;
          }
          .figma-container {
            height: 600px;
          }
        }
        @media (max-width: 768px) {
          .figma-wrapper {
            padding: 0 20px;
          }
          .figma-container {
            height: 450px;
          }
        }
        @media (max-width: 480px) {
          .figma-wrapper {
            padding: 0 15px;
          }
          .figma-container {
            height: 350px;
          }
        }
      `}</style>
      <div className="figma-wrapper">
        <h1 className="figma-title">{block.title}</h1>
        <div className="figma-container">
          <iframe
            title={block.title}
            src={block.src}
            allow="fullscreen"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </>
  );
}
