export default function Presentation(block) {
  return (
    <>
      <style>{`
        .presentation-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 750px;
          margin: 1.6em auto;
          padding: 0 40px;
          box-sizing: border-box;
        }
        .presentation-container {
          width: 100%;
          height: 100%;
          box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16);
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .presentation-wrapper {
            height: 600px;
            padding: 0 30px;
          }
        }
        @media (max-width: 768px) {
          .presentation-wrapper {
            height: 450px;
            padding: 0 20px;
          }
        }
        @media (max-width: 480px) {
          .presentation-wrapper {
            height: 350px;
            padding: 0 15px;
          }
        }
      `}</style>
      <div className="presentation-wrapper">
        <div className="presentation-container">
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
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </>
  );
}
