import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCard from "./components/PlayerCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="btn btn-primary">Team Generator</h1>
        <button className="btn btn-primary">Button</button>
      </header>
      <PlayerCard />
    </div>
  );
}

export default App;
