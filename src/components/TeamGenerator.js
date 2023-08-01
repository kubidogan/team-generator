// TeamGenerator.js
import React from "react";
import Table from "react-bootstrap/Table";

const TeamGenerator = ({ team1Players, team2Players }) => {
  // Helper function to shuffle an array using Fisher-Yates (Knuth) Shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle the players in each team
  const shuffledTeam1Players = shuffleArray(team1Players);
  const shuffledTeam2Players = shuffleArray(team2Players);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Team 1</th>
            <th>First Name</th>
            <th>Position</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {shuffledTeam1Players.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Team 2</th>
            <th>First Name</th>
            <th>Position</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {shuffledTeam2Players.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeamGenerator;
