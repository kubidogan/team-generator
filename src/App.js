import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TeamGenerator from "./components/TeamGenerator";

function App() {
  return (
    <div className="App">
      <h1>Team Generator</h1>
      <TeamGenerator />
    </div>
  );
}

export default App;
