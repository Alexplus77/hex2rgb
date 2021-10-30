import React from "react";
import "../App.css";
import hexToRgb from "hex-to-rgb";

const Converter = ({ valid, error, form, handleChange }) => {
  return (
    <form
      className="container"
      style={valid ? { background: `${valid}` } : { background: "#ff0000" }}
    >
      <input
        className="input"
        name="backgroundColor"
        value={form}
        onChange={handleChange}
      />
      <input
        className="output"
        name="output"
        readOnly={true}
        value={valid ? `rgb (${hexToRgb(valid)})` : error}
      />
    </form>
  );
};

export default Converter;
