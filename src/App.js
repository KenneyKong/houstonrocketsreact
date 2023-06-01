import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./data"
import Header from "./Header"
 
export default App = () => {
  const [currentSelected, setCurrentSelectedPosition] = useState('pg')
  const handleClick = (val) => () => {setCurrentSelectedPosition(val)}
  return(
      <div>
        <Header />
      <b>'POSITION'</b>
      <span id='position'>
        <a onClick={handleClick("pg")} id="pg" href="#posPG">PG</a>
        <a onClick={handleClick("sg")} id="sg" href="#posSG">SG</a>
        <a onClick={handleClick("sf")} id="sf" href="#posSF">SF</a>
        <a onClick={handleClick("pf")} id="pf" href="#posPF">PF</a>
        <a onClick={handleClick("ct")} id="ct" href="#posC">C</a>
      </span>
      {currentSelected === 'pg' && <div>
            <span>Point Guards are </span>
            <div>
              <p>Trevor Hudgins <b>PG</b></p>
              <p>Daishen Nix <b>PG</b></p>
              <p>Kevin Porter Jr <b>PG/SG</b></p>
              <p>TyTy Washington <b>PG</b></p>
          
            </div>       
      </div>}
      {currentSelected === 'sg' && <div>List Shooting Guards here</div>}
      {currentSelected === 'sf' && <div>List Small Fowards here</div>}
      {currentSelected === 'pf' && <div>List Power Forwards here</div>}
      {currentSelected === 'ct' && <div>List Centers here</div>}
  </div>
  );
}