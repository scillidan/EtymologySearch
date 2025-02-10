import React from "react";
import colorMap from "../utils/colorMap";

const Legend = () => {//This takes the colors and names from colorMap
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>Legend</h3>
      <div style={
        { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }
      }>
        {Object.entries(colorMap).map(([language, color]) => (
          <div key={language} style={{ 
            backgroundColor: "#FAFBFC",
            display: "flex", 
            alignItems: "center", 
            gap: "3px" ,
            border: "2px solid rgba(25, 26, 28, 0.12)",
            borderRadius: "6px",
            color:" #24292E",
            display: "inline-block",
            padding: "5px"
            }}>
            <span style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: color,
              border: "1px solid rgba(0, 0, 0, 0.27)",
              borderRadius: "50%",
              
            }}></span>
            <span style={{
              color: 'black',
              fontFamily:"Segoe UI"              
              }}>{language}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
