// App.js
import React, { useState } from "react";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import TeamGenerator from "./components/TeamGenerator";
import "bootstrap/dist/css/bootstrap.min.css";
// import PlayerCard from "./components/PlayerCard";
import "./components/Card.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default function App() {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);

  const handlePlayerSelect = (selectedPlayers) => {
    const shuffledPlayers = [...selectedPlayers];
    shuffleArray(shuffledPlayers);

    const half = Math.ceil(shuffledPlayers.length / 2);
    const team1 = shuffledPlayers.slice(0, half);
    const team2 = shuffledPlayers.slice(half);

    setTeam1Players(team1);
    setTeam2Players(team2);
  };

  return (
    <div className="App">
      <div>
        <PlayerForm onPlayerSelect={handlePlayerSelect} />
        <TeamGenerator
          team1Players={team1Players}
          team2Players={team2Players}
        />
        {/* <PlayerCard /> */}
      </div>
    </div>
  );
}
