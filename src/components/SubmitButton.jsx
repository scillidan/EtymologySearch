import React from "react";

const SubmitButton = ({ isLoading }) => {
  return (
    <button type="submit" disabled={isLoading} style={//TODO: make this look nicer
        {
          appearance: "none",
          backgroundColor: "#FAFBFC",
          border: "1px solid rgba(27, 31, 35, 0.15)",
          borderRadius: "6px",
          boxShadow: "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
          boxSizing: "border-box",
          color:" #24292E",
          cursor: "pointer",
          display: "inline-block",
          fontFamily:"Segoe UI",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
          padding: "6px 16px",
          position: "relative",
          transition:"background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
          userSelect: "none"
        }
    }>
      {isLoading ? "Processing..." : "Color Words"}
    </button>
  );
};

export default SubmitButton;

// <!-- HTML !-->
// <button class="button-4" role="button">Button 4</button>

// /* CSS */
// .button-4 {
  
// }

// .button-4:hover {
//   background-color: #F3F4F6;
//   text-decoration: none;
//   transition-duration: 0.1s;
// }

// .button-4:disabled {
//   background-color: #FAFBFC;
//   border-color: rgba(27, 31, 35, 0.15);
//   color: #959DA5;
//   cursor: default;
// }

// .button-4:active {
//   background-color: #EDEFF2;
//   box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
//   transition: none 0s;
// }

// .button-4:focus {
//   outline: 1px transparent;
// }

// .button-4:before {
//   display: none;
// }

// .button-4:-webkit-details-marker {
//   display: none;
// }