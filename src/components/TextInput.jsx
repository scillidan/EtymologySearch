import React from "react";

const TextInput = ({ textRef, setText }) => {
  return (
    <div
      ref={textRef}
      contentEditable
      onInput={(e) => setText(e.target.textContent)}
      placeholder="type your text here"
      style={{
        border: "2px solid black",
        borderRadius: "5px",
        padding: "10px",
        width: "600px",
        height: "150px",
        fontSize: "16px",
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
