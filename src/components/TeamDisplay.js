import React from "react";

const TeamDisplay = ({ team1, team2 }) => {
  return (
    <div>
      <h2>Team 1</h2>
      <ul>
        {team1.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - Rating: {player.rating}
          </li>
        ))}
      </ul>

      <h2>Team 2</h2>
      <ul>
        {team2.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - Rating: {player.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDisplay;
