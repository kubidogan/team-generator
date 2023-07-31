// TeamGenerator.js
import React from "react";

const TeamGenerator = ({ team1Players, team2Players }) => {
  return (
    <div>
      <h2>Team 1</h2>
      <ul>
        {team1Players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.rating}
          </li>
        ))}
      </ul>
      <h2>Team 2</h2>
      <ul>
        {team2Players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamGenerator;
