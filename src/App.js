import "./App.css";
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ backgroundColor: "" });
  const [stileColor, setStileColor] = useState({});

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStileColor({ ...stileColor, ...form });
  };
  return (
    <div className="App" style={stileColor}>
      <form onSubmit={handleSubmit}>
        <input
          name="backgroundColor"
          value={form.backgroundColor}
          onChange={handleChange}
        />
        <input
          name="output"
          readOnly={true}
          defaultValue={stileColor.backgroundColor}
        />
        <input type="submit" value="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
}

export default App;
