import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.avatar} alt={player.name} />
      <h3>{player.name}</h3>
      <p>Star Rating: {player.starRating}</p>
    </div>
  );
};

export default PlayerCard;
