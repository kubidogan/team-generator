import React, { useState } from "react";
import playersData from "./playersData";

const PlayerForm = ({ onPlayerSelect }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    rating: "",
  });

  const handlePlayerChange = (playerId, isChecked) => {
    if (isChecked) {
      setSelectedPlayers((prevSelected) => [...prevSelected, playerId]);
    } else {
      setSelectedPlayers((prevSelected) =>
        prevSelected.filter((id) => id !== playerId)
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
      setSelectedPlayers((prevSelected) => [
        ...prevSelected,
        newPlayerWithId.id,
      ]);
      setNewPlayer({
        name: "",
        position: "",
        rating: "",
      });
    } else {
      alert("Please fill in all required fields to add a new player.");
    }
  };

  const handleGenerateTeams = () => {
    // Pass the selectedPlayers array to the parent component for team generation
    onPlayerSelect(selectedPlayers);
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
                checked={selectedPlayers.includes(player.id)}
                onChange={(e) =>
                  handlePlayerChange(player.id, e.target.checked)
                }
              />
              {player.name}
            </label>
          </div>
        ))}
      </div>

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

      <button onClick={handleGenerateTeams}>Generate Teams</button>
    </div>
  );
};

export default PlayerForm;
