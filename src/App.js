import "./App.css";
import React, { useState } from "react";
import hexToRgb from "hex-to-rgb";

function App() {
  const error = "Ошибка";
  const validNumber = 7;

  const [form, setForm] = useState("");
  const [valid, setValid] = useState(true);

  const RegExp = /^#[0-9A-F]{6}$/i;
  const validateValue = (value) =>
    RegExp.test(value) ? setValid(value) : setValid(RegExp.test(value));

  const handleChange = ({ target: { value } }) => {
    value.length === validNumber && validateValue(value);
    setForm(value);
  };

  return (
    <div
      className="App"
      style={valid ? { background: `${valid}` } : { background: "#ff0000" }}
    >
      <form>
        <input name="backgroundColor" value={form} onChange={handleChange} />
        <input
          name="output"
          readOnly={true}
          value={valid ? `rgb (${hexToRgb(valid)})` : error}
        />
      </form>
    </div>
  );
}

export default App;
