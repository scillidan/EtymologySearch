import React from "react";
import '../index.css'


const SubmitButton = ({ isLoading }) => {
  return (
    <button type="submit" disabled={isLoading} className = "submitButton "style={//TODO: make this look nicer
        {
          // appearance: "none",
          // backgroundColor: "#FAFBFC",
          // border: "1px solid rgba(27, 31, 35, 0.15)",
          // borderRadius: "6px",
          // boxShadow: "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
          // boxSizing: "border-box",
          // color:" #24292E",
          // cursor: "pointer",
          // display: "inline-block",
          // fontFamily:"Segoe UI",
          // fontSize: "14px",
          // fontWeight: "500",
          // lineHeight: "20px",
          // padding: "6px 16px",
          // position: "relative",
          // transition:"background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
          // userSelect: "none"
        }
    }>
      {isLoading ? "Processing..." : "Color Words"}
    </button>
  );
};

export default SubmitButton;
