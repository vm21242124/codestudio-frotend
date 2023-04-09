import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { snippet } from "../../tempdata/snippets.js";

function NumberedTextarea() {
  const lang = useSelector((state) => state.user.language);
  let def = "";
  switch (lang) {
    case "cpp":
      def = snippet.cpp;
      break;
    case "java":
      def = snippet.java;
      break;

    case "python":
      def = snippet.python;
      break;

    case "c":
      def = snippet.c;
      break;
    default:
      def = "java";
      break;
  }

  return (
    <div className="numbered-textarea">
      <textarea value={def}  className="edit"/>
    </div>
  );
}
export default NumberedTextarea;
