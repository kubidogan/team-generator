import React, { useState } from "react";
import playersData from "./playersData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";

const PlayerForm = ({ onPlayerSelect }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    position: "",
    rating: "",
  });

  const handlePlayerChange = (playerId, isChecked) => {
    if (isChecked) {
      setSelectedPlayers((prevSelected) => [
        ...prevSelected,
        playersData.find((player) => player.id === playerId),
      ]);
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
    <div className="player-card">
      <h1>Football Team Generator</h1>
      <Carousel>
        <Carousel.Item>
          <img src="/avatar.png" alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/path/to/your/second/image.jpg"
            alt="Second slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/path/to/your/third/image.jpg"
            alt="Third slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2>Select Players</h2>
      {playersData.map((player) => (
        <div key={player.id}>
          <Card style={{ width: "18rem" }} className="player-card-contents">
            <Card.Img src={player.avatar} style={{ width: "150px" }} />{" "}
            {/* Add 'src' attribute here */}
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
              <Card.Text>
                {player.position} - {player.rating}{" "}
                {Array.from({ length: player.rating }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </Card.Text>
              <input
                type="checkbox"
                checked={selectedPlayers.some((p) => p.id === player.id)}
                onChange={(e) =>
                  handlePlayerChange(player.id, e.target.checked)
                }
              />
              <Button variant="primary">Stats</Button>
            </Card.Body>
          </Card>
        </div>
      ))}

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

      <h2>Selected Players</h2>
      <div>
        {selectedPlayers.map((player) => (
          <div key={player.id}>
            <span>{player.name}</span>
            <span>{player.position}</span>
            <span>{player.rating}</span>
          </div>
        ))}
      </div>

      <button onClick={() => onPlayerSelect(selectedPlayers)}>
        Generate Teams
      </button>
    </div>
  );
};

export default PlayerForm;
