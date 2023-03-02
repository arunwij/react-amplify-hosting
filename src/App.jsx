import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(null);
  const [answer, setAnswer] = useState("None");

  const multiply = (value) => parseFloat(value) * 2;
  return (
    <div className="App">
      <h1>React + AWS Code Pipeline</h1>
      <h2>Reading ENV</h2>
      <h3>VITE_MODE: {import.meta.env.VITE_MODE}</h3>
      <h4>Multiply by 2 (input number between 0 - 999)</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAnswer(multiply(value));
        }}
      >
        <input
          type="number"
          placeholder="Your Value"
          onChange={(e) => setValue(e.target.value)}
          min="0"
          max="999"
          maxLength={3}
          style={{ width: "100px" }}
          required
        />{" "}
        x 2 <button style={{ marginLeft: "8px" }}>Calculate</button>
        <h4>Answer: {answer}</h4>
      </form>
    </div>
  );
}

export default App;
