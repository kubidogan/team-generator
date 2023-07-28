import React, { useState } from "react";

const PlayerForm = ({ addPlayer }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerImage, setPlayerImage] = useState(null);

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPlayerPosition(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPlayerImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlayer = {
      name: playerName,
      position: playerPosition,
      image: playerImage,
    };
    addPlayer(newPlayer); // Call the addPlayer function from the parent component
    setPlayerName("");
    setPlayerPosition("");
    setPlayerImage(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name:
          <input type="text" value={playerName} onChange={handleNameChange} />
        </label>
        <label>
          Player Position:
          <input
            type="text"
            value={playerPosition}
            onChange={handlePositionChange}
          />
        </label>
        <label>
          Player Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;
