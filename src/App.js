import "./App.css";
import React, { useState } from "react";

function App() {
  const [form, setForm] = useState("");
  const handleChange = ({ target }) => {
    setForm(target.value);
  };
  console.log(form);

  return (
    <div className="App" style={{ background: `${form}` }}>
      <form>
        <input
          name="backgroundColor"
          value={form.backgroundColor}
          onChange={handleChange}
        />
        <input name="output" readOnly={true} defaultValue={form} />
      </form>
    </div>
  );
}

export default App;
