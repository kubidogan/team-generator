import React, { useState, useEffect } from "react";
import playersData from "./playersData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";

const PlayerForm = ({ onPlayerSelect }) => {
  const TOTAL_PLAYERS = 14; // Total number of players you want to select
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    rating: "",
  });
  const [selectedCount, setSelectedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate the progress percentage and the selected count based on the number of selected players
    const selectedCount = selectedPlayers.length;
    const progress = (selectedCount / TOTAL_PLAYERS) * 100;
    setSelectedCount(selectedCount);
    setProgress(progress);
  }, [selectedPlayers]);

  const handlePlayerChange = (playerId) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.some((p) => p.id === playerId)) {
        // If the player is already selected, remove it from the list
        return prevSelected.filter((player) => player.id !== playerId);
      } else {
        // If the player is not selected, add it to the list
        return [
          ...prevSelected,
          playersData.find((player) => player.id === playerId),
        ];
      }
    });
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

  const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);

  const handleCloseAddPlayerModal = () => {
    setShowAddPlayerModal(false);
  };

  const handleShowAddPlayerModal = () => {
    setShowAddPlayerModal(true);
  };

  return (
    <div>
      <h1>Football Team Generator</h1>
      <h2>Selected Players ({selectedCount})</h2>
      <ProgressBar
        animated
        now={progress}
        label={`${selectedCount} / ${TOTAL_PLAYERS}`}
      />
      <Carousel slide={false}>
        {playersData.map((player) => (
          <Carousel.Item key={player.id}>
            <div className="player-card">
              <Card style={{ width: "18rem" }} className="player-card-contents">
                <Card.Img src={player.avatar} style={{ width: "150px" }} />
                <Card.Body>
                  <Card.Title>{player.name}</Card.Title>
                  <Card.Text>
                    {player.position} - {player.rating}{" "}
                    {Array.from({ length: player.rating }).map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} />
                    ))}
                  </Card.Text>
                  <Button
                    variant={
                      selectedPlayers.some((p) => p.id === player.id)
                        ? "secondary"
                        : "primary"
                    }
                    onClick={() => handlePlayerChange(player.id)}
                  >
                    {selectedPlayers.some((p) => p.id === player.id)
                      ? "Selected"
                      : "Select"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Button onClick={handleShowAddPlayerModal} className="btn btn-warning">
        Add Player
      </Button>

      {/* <div className="selected__player">
        <h2>Selected Players</h2>
        {selectedPlayers.map((player) => (
          <div key={player.id}>
            <span>{player.name}</span>
            <span>{player.position}</span>
            <span>{player.rating}</span>
          </div>
        ))}
      </div> */}

      <button
        onClick={() => onPlayerSelect(selectedPlayers)}
        className="btn btn-warning"
      >
        Generate Teams
      </button>

      <Modal show={showAddPlayerModal} onHide={handleCloseAddPlayerModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your form for adding a new player goes here */}
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddPlayerModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddPlayer}>
            Add Player
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlayerForm;
