// TeamGenerator.js
import React from "react";
import Table from "react-bootstrap/Table";

const TeamGenerator = ({ team1Players, team2Players }) => {
  return (
    <div>
      <h2>Team 1</h2>
      <ul>
        {team1Players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.rating}
          </li>
        ))}
      </ul>
      <h2>Team 2</h2>
      <ul>
        {team2Players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - {player.rating}
          </li>
        ))}
      </ul>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team 2</th>
            <th>First Name</th>
            <th>Position</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {team2Players.map((player, index) => (
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
