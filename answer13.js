import React, { useState } from 'react';

function PlayerTable({ data }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player)
  }

  return (
    <div>
      <h2>Player Data</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Percentile</th>
            <th>Player Type</th>
            <th>Assign New Player Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr key={data.pid}>
              <td onClick={() => handlePlayerClick(data)}>
                <a href="#">{data.pName}</a>
              </td>
              <td>{data.percentile}</td>
              <td>{data.pType.map(type => getTypeName(type)).join(', ')}</td>
              <td>
                <button>Assign</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPlayer && (
        <div>
          <h3>Player Details</h3>
          <p>Player Name: {selectedPlayer.pName} (Percentile: {selectedPlayer.percentile})</p>
          <p>About Player: {selectedPlayer.about}</p>
          <p>Player Type: {selectedPlayer.pType.map(type => getTypeName(type)).join(', ')}</p>
          <button onClick={() => setSelectedPlayer(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

const getTypeName = (typeId) => {
    if (typeId === 1) {
      return 'A'
    } else if (typeId === 2) {
      return 'B'
    } else if (typeId === 3) {
      return 'C'
    } else {
      return ''
    }
  };
  

export default PlayerTable;
