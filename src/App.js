import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import TeamGenerator from "./components/TeamGenerator";
import PlayerForm from "./components/PlayerForm";

function App() {
  return (
    <div className="App">
      <h1>Team Generator</h1>
      <PlayerForm />
    </div>
  );
}

export default App;
