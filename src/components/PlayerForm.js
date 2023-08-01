import React, { useState, useEffect } from "react";
import playersData from "./playersData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";

const PlayerForm = ({ onPlayerSelect }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    rating: "",
  });

  const [selectedCount, setSelectedCount] = useState(0);

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

  useEffect(() => {
    setSelectedCount(selectedPlayers.length);
  }, [selectedPlayers]);

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
    <div className="players-container">
      <div className="players__carousel">
        <h1>Football Team Generator</h1>
        <h2>Selected Players ({selectedCount})</h2>
        <ProgressBar animated now={45} />
        <ProgressBar striped variant="success" now={35} key={1} />
        <h2>Select Players</h2>
        <Carousel>
          {playersData.map((player) => (
            <Carousel.Item key={player.id}>
              <div className="player-card">
                <Card
                  style={{ width: "18rem" }}
                  className="player-card-contents"
                >
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
      </div>
      {/* <input
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
        <button onClick={handleAddPlayer}>Add Player</button> */}
      <div className="add__player">
        <h2>Add New Player</h2>
        <Form.Control
          size="sm"
          type="text"
          name="name"
          value={newPlayer.name}
          placeholder="Name"
          onChange={handleInputChange}
        />

        <Form.Control
          type="text"
          name="position"
          value={newPlayer.position}
          placeholder="Position"
          onChange={handleInputChange}
        />

        <Form.Control
          type="number"
          name="rating"
          value={newPlayer.rating}
          placeholder="Rating"
          onChange={handleInputChange}
        />
        <button onClick={handleAddPlayer} className="btn btn-warning">
          Add Player
        </button>
      </div>

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
      <div className="selected__players">
        {selectedPlayers.map((player) => (
          <ListGroup>
            {/* <ListGroup.Item as="li">{player.id}</ListGroup.Item> */}
            <ListGroup.Item>{player.name}</ListGroup.Item>
            {/* <ListGroup.Item as="li">{player.position}</ListGroup.Item>
            <ListGroup.Item as="li">{player.rating}</ListGroup.Item> */}
          </ListGroup>
        ))}
        ;
        <button
          onClick={() => onPlayerSelect(selectedPlayers)}
          className="btn btn-dark"
        >
          Generate Teams
        </button>
      </div>
    </div>
  );
};

export default PlayerForm;
