import React, { useState } from 'react'
import { players } from './data'
import './styles.css'

function App() {
  const [selectedPositions, setSelectedPositions] = useState([]);

  function togglePosition(position) {
    if (selectedPositions.includes(position)) {
      setSelectedPositions(selectedPositions.filter((pos) => pos !== position));
    } else {
      setSelectedPositions([position]);
    }
  }
  

  return (
    <div>
      <title>Houston Rockets Roster</title>
      <header className="header">HOUSTON ROCKETS</header>
      <h1 className="heading">2023-2024 ROSTER</h1>

      <div>
        <p>
          <b>POSITION</b>&nbsp;
          <span id="position">
            {players.map((player, index) => (
              <a
                key={index}
                onClick={() => togglePosition(player.position)}
                id={player.position}
                href={`#pos${player.position}`}
              >
                {player.position}&nbsp;
              </a>
            ))}
          </span>
        </p>
      </div>

      {players.map((player, index) => {
        const isPositionSelected = selectedPositions.includes(player.position);

        return (
          <div
            key={index}
            id={`pos${player.position}`}
            className="rosterNames"
            style={{ display: isPositionSelected ? 'block' : 'none' }}
          >
            {player.names.map((name, idx) => (
              <p key={idx}>
                {name} <b>{player.position}</b>
                <br />
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
