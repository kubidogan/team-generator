import React, { useState } from "react";
import PlayerEditModal from "./PlayerEditModal";

const PlayerCard = ({ player, updatePlayer, deletePlayer }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <p>Name: {player.name}</p>
      <p>Position: {player.position}</p>
      {player.image && (
        <img
          src={URL.createObjectURL(player.image)}
          alt={player.name}
          style={{ width: "100px", height: "100px" }} // Set your desired width and height here
        />
      )}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => deletePlayer(player.id)}>Delete</button>

      {/* Edit modal */}
      {isEditModalOpen && (
        <PlayerEditModal
          player={player}
          onClose={handleCloseModal}
          updatePlayer={updatePlayer}
        />
      )}
    </div>
  );
};

export default PlayerCard;
