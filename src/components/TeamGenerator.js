import React, { useState } from "react";
import PlayerForm, { playersData } from "./PlayerForm";

const TeamGenerator = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const handleGenerateTeams = (selectedPlayers) => {
    if (selectedPlayers.length === 14) {
      // Shuffle the selectedPlayers array to randomize the order
      const shuffledPlayers = selectedPlayers.sort(() => Math.random() - 0.5);

      // Divide the shuffled players array into two teams
      const teamSize = Math.ceil(shuffledPlayers.length / 2);
      setTeam1(shuffledPlayers.slice(0, teamSize));
      setTeam2(shuffledPlayers.slice(teamSize));
    } else {
      alert("Please select exactly 14 players to generate teams.");
    }
  };

  return (
    <div>
      <PlayerForm onPlayerSelect={handleGenerateTeams} />

      <div>
        <h2>Team 1</h2>
        <ul>
          {team1.map((player) => (
            <li key={player.id}>
              {player.name} - {player.position} - {player.rating}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Team 2</h2>
        <ul>
          {team2.map((player) => (
            <li key={player.id}>
              {player.name} - {player.position} - {player.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamGenerator;
