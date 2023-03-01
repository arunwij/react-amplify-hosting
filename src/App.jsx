import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React + AWS Code Pipeline</h1>
      <h2>Reading ENV</h2>
      <h3>VITE_MODE: {import.meta.env.VITE_MODE}</h3>
    </div>
  );
}

export default App;
