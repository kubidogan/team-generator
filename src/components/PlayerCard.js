import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div>
      <img src={player.avatar} alt={player.name} />
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Star Rating: {player.starRating}</p>
    </div>
  );
};

export default PlayerCard;
