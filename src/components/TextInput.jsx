import React from "react";

const TextInput = ({ textRef, setText }) => {
  return (
    <div
      ref={textRef}
      contentEditable
      placeholder="Type some text"
      onInput={(e) => setText(e.target.textContent)}
      style={{
        border: "3px solid rgba(27, 31, 35, 0.27)",
        borderRadius: "5px",
        outline: "none",
        padding: "10px",
        width: "55vw",
        height: "10em",
        fontSize: "22px",
        fontFamiy: "Segoe UI",
        fontWeight: "bold",
        textAlign: "left",
        overflowY: "auto",
        resize: "none",
        whiteSpace: "pre-wrap",
        marginBottom: "10px",
      }}
    />
  );
};

export default TextInput;
