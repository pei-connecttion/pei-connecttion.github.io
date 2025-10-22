import React from "react";

export default function Presentation(block) {
  return (
    <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2500%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
      <iframe
        title={block.title}
        src={block.src}
        allow="fullscreen"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          top: 0,
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
