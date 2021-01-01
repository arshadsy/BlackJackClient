import './App.css';
import GameMenu from "./BlackjackGame/Menu";
import { MDBContainer } from "mdbreact";
import React, { useState, useEffect } from 'react';
import PlayButtons from './BlackjackGame/PlayButtons';
import { GameBoard } from './BlackjackGame/GameBoard';
function App() {
const [showMenu,setShowMenu] = useState(true);
  return (
    <div className="App">
      <MDBContainer>
          <GameMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
          <GameBoard  />
          <PlayButtons/>
      </MDBContainer>
    </div>
  );
}

export default App;
