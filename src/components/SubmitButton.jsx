import React from "react";

const SubmitButton = ({ isLoading }) => {
  return (
    <button type="submit" disabled={isLoading} style={
        {
            backgroundColor: '#555555',
            color:'white'
        }
    }>
      {isLoading ? "Processing..." : "Color Words"}
    </button>
  );
};

export default SubmitButton;
