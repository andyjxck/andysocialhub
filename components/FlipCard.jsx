import React, { useState } from "react";

export default function FlipCard({ frontTitle = "Privacy Policy", backTitle = "Terms", front, back }) {
  const [isBack, setIsBack] = useState(false);
  return (
    <div>
      <div className="flip-wrap">
        <div className={`flip ${isBack ? "isBack" : ""}`}>
          <div className="flip-face">
            <h3 style={{margin: "6px 0 8px 0"}}>{frontTitle}</h3>
            <div className="small">{front}</div>
          </div>
          <div className="flip-face back">
            <h3 style={{margin: "6px 0 8px 0"}}>{backTitle}</h3>
            <div className="small">{back}</div>
          </div>
        </div>
      </div>
      <button className="btn flip-toggle" onClick={() => setIsBack(v => !v)}>
        Flip to {isBack ? frontTitle : backTitle}
      </button>
    </div>
  );
}
