import "./App.css";
import React, { useState } from "react";
import hexToRgb from "hex-to-rgb";

function App() {
  const [form, setForm] = useState("");

  const handleChange = ({ target }) => {
    setForm(target.value);
  };

  return (
    <div className="App" style={{ background: `${form}` }}>
      <form>
        <input name="backgroundColor" value={form} onChange={handleChange} />
        <input
          name="output"
          readOnly={true}
          value={`rgb (${hexToRgb(form)})`}
        />
      </form>
    </div>
  );
}

export default App;
