import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
        <h2>Select Players</h2>
          {playersData.map((player) => (
            <div key={player.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img {player.avatar}/>
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
              <Card.Text>
                {player.position}
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
    </div>
  );
};

export default PlayerCard;
