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

      {selectedPlayers.length > 0 && (
        <div>
          <h2>Selected Players</h2>
          {selectedPlayers.map((playerId) => {
            const player = playersData.find((p) => p.id === playerId);
            return (
              <div key={player.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={(e) =>
                      handlePlayerChange(player.id, e.target.checked)
                    }
                  />
                  {player.name}
                </label>
              </div>
            );
          })}
        </div>
      )}

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

      <button onClick={() => onPlayerSelect(selectedPlayers)}>
        Generate Teams
      </button>
    </div>
  );
};

export default PlayerForm;
