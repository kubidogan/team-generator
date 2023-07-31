import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import playersData from "./playersData";

const PlayerForm = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    rating: "",
  });

  const handlePlayerChange = (playerId, isChecked) => {
    if (isChecked) {
      const selectedPlayer = playersData.find(
        (player) => player.id === playerId
      );
      setSelectedPlayers((prevSelected) => [...prevSelected, selectedPlayer]);
    } else {
      setSelectedPlayers((prevSelected) =>
        prevSelected.filter((player) => player.id !== playerId)
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevNewPlayer) => ({ ...prevNewPlayer, [name]: value }));
  };

  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.position && newPlayer.rating) {
      const newPlayerWithId = {
        ...newPlayer,
        id: Date.now(), // Assign a unique ID to the new player
      };
      setSelectedPlayers((prevSelected) => [...prevSelected, newPlayerWithId]);
      setNewPlayer({
        name: "",
        position: "",
        rating: "",
      });
    } else {
      alert("Please fill in all required fields to add a new player.");
    }
  };

  return (
    <div>
      <h2>Add Player</h2>
      <div>
        {playersData.map((player) => (
          <div key={player.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedPlayers.some((p) => p.id === player.id)}
                onChange={(e) =>
                  handlePlayerChange(player.id, e.target.checked)
                }
              />
              {player.name}
            </label>
          </div>
        ))}
      </div>

      {/* Selected Players */}
      <div>
        <h2>Selected Players</h2>
        {selectedPlayers.map((player) => (
          <div key={player.id}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>

      {/* Add New Player */}
      <div>
        <h2>Add New Player</h2>
        <input
          type="text"
          name="name"
          value={newPlayer.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          value={newPlayer.position}
          placeholder="Position"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          value={newPlayer.rating}
          placeholder="Rating"
          onChange={handleInputChange}
        />
        <button onClick={handleAddPlayer}>Add Player</button>
      </div>

      <button onClick={() => console.log(selectedPlayers)}>
        Generate Teams
      </button>
    </div>
  );
};

export default PlayerForm;
