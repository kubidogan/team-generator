import React from "react";

const PlayerForm = ({
  playerData,
  setPlayerData,
  addPlayer,
  generateTeams,
}) => {
  const handleNameChange = (id, value) => {
    setPlayerData((prevData) => {
      const newPlayerData = prevData.map((player) =>
        player.id === id ? { ...player, name: value } : player
      );
      return newPlayerData;
    });
  };

  const handlePositionChange = (id, value) => {
    setPlayerData((prevData) => {
      const newPlayerData = prevData.map((player) =>
        player.id === id ? { ...player, position: value } : player
      );
      return newPlayerData;
    });
  };

  const handleImageChange = (id, event) => {
    const file = event.target.files[0];
    setPlayerData((prevData) => {
      const newPlayerData = prevData.map((player) =>
        player.id === id ? { ...player, image: file } : player
      );
      return newPlayerData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter out players with empty names
    const newPlayers = playerData.filter((player) => player.name.trim() !== "");

    addPlayer(newPlayers); // Call the addPlayer function from the parent component
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {playerData.map((player) => (
          <div key={player.id}>
            <label>
              Player Name:
              <input
                type="text"
                value={player.name}
                onChange={(e) => handleNameChange(player.id, e.target.value)}
              />
            </label>
            <label>
              Player Position:
              <input
                type="text"
                value={player.position}
                onChange={(e) =>
                  handlePositionChange(player.id, e.target.value)
                }
              />
            </label>
            <label>
              Player Image:
              <input
                type="file"
                onChange={(e) => handleImageChange(player.id, e)}
              />
            </label>
            {player.image && (
              <img
                src={URL.createObjectURL(player.image)}
                alt={player.name}
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </div>
        ))}
        <button type="submit">Add Players</button>
        <button type="button" onClick={generateTeams}>
          Generate Teams
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
