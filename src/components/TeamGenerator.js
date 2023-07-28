import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import PlayerCard from "./PlayerCard";
import PlayerEditModal from "./PlayerEditModal";

const TeamGenerator = () => {
  const [players, setPlayers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const addPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const updatePlayer = (playerId, updatedData) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, ...updatedData } : player
      )
    );
  };

  const deletePlayer = (playerId) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== playerId)
    );
  };

  const handleEditClick = (player) => {
    setSelectedPlayer(player);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <PlayerForm addPlayer={addPlayer} />

      <div>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            updatePlayer={updatePlayer}
            deletePlayer={deletePlayer}
            onEditClick={handleEditClick}
          />
        ))}
      </div>

      {isEditModalOpen && (
        <PlayerEditModal
          player={selectedPlayer}
          onClose={handleCloseModal}
          updatePlayer={updatePlayer}
        />
      )}
    </div>
  );
};

export default TeamGenerator;
