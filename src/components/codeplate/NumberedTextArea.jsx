import React, { useState, useRef, useEffect } from "react";

function NumberedTextarea() {
  const [lines, setLines] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const updateLines = () => {
      const lines = textarea.value.split("\n");
      setLines(lines);
    };
    updateLines();
    textarea.addEventListener("input", updateLines);
    return () => {
      textarea.removeEventListener("input", updateLines);
    };
  }, []);

  return (
    <div className="numbered-textarea">
      <div className="line-number">
        {lines.map((line, index) => (
          <div key={index}>{index + 1}~</div>
        ))}
      </div>
      <textarea className="edit" ref={textareaRef} />
    </div>
  );
}
export default NumberedTextarea;
