import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import PlayerCard from "./PlayerCard";
import PlayerEditModal from "./PlayerEditModal";

const TeamGenerator = () => {
  const [players, setPlayers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const addPlayer = (newPlayers) => {
    setPlayers([...players, ...newPlayers]);
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

  const generateTeams = () => {
    if (players.length !== 14) {
      alert("Please enter 14 players before generating teams.");
      return;
    }

    // Shuffle the players array to randomize the order
    const shuffledPlayers = players.sort(() => Math.random() - 0.5);

    // Divide the shuffled players array into two teams
    const team1 = shuffledPlayers.slice(0, 7);
    const team2 = shuffledPlayers.slice(7, 14);

    // Display the teams in the console (you can modify this to display on the screen)
    console.log("Team 1:", team1);
    console.log("Team 2:", team2);
  };

  return (
    <div>
      <PlayerForm
        playerData={players}
        setPlayerData={setPlayers}
        addPlayer={addPlayer}
        generateTeams={generateTeams}
      />

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
