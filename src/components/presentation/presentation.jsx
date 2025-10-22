export default function Presentation(block) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        height: "675px",
        margin: "1.6em auto",
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        borderRadius: "8px",
        overflow: "hidden",
        willChange: "transform",
      }}
    >
      <iframe
        title={block.title}
        src={block.src}
        allow="fullscreen"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          left: 0,
          padding: 0,
          margin: 0,
          height: "100%",
          border: "none",
        }}
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
