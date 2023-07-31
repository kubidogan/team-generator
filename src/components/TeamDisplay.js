import React from "react";
import PlayerCard from "./PlayerCard";

const TeamDisplay = ({ teamName, players }) => {
  return (
    <div className="team-display">
      <h2>{teamName}</h2>
      <div>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default TeamDisplay;
