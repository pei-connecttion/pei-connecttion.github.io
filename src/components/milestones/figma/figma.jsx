export default function FigmaEmbed(block) {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "1.6em auto" }}>
      <h1 style={{ textAlign: "left", margin: "0 0 0.8em 0" }}>{block.title}</h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "675px",
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
        />
      </div>
    </div>
  );
}
