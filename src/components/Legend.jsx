import React from "react";
import colorMap from "../utils/colorMap";

const Legend = () => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>Legend</h3>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
        {Object.entries(colorMap).map(([language, color]) => (
          <div key={language} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: color,
              borderRadius: "50%",
            }}></span>
            <span style={{color: 'white'}}>{language}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
