// PlayerEditModal.js
import React, { useState } from "react";

const PlayerEditModal = ({ player, onClose, updatePlayer }) => {
  const [editedName, setEditedName] = useState(player.name);
  const [editedImage, setEditedImage] = useState(player.image);

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditedImage(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Update the player data in the state with the edited information
    updatePlayer(player.id, { name: editedName, image: editedImage });
    onClose(); // Close the modal after submitting
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Player Name:
          <input type="text" value={editedName} onChange={handleNameChange} />
        </label>
        <label>
          Player Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PlayerEditModal;
