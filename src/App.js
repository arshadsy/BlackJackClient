import './App.css';
import GameMenu from "./BlackjackGame/Menu";
import { MDBContainer } from "mdbreact";
import React, { useState, useEffect } from 'react';
import PlayButtons from './BlackjackGame/PlayButtons';
import { GameBoard } from './BlackjackGame/GameBoard';
function App() {
const [PlayButtonShow,setPlayButtonShow] = useState(true);
const [QuitButtonShow,setQuitButtonShow] = useState(false);
  return (
    <div className="App">
      <MDBContainer>
        <GameMenu PlayButtonShow={PlayButtonShow} QuitButtonShow={QuitButtonShow} setPlayButtonShow={setPlayButtonShow} setQuitButtonShow={setQuitButtonShow }/>
          <GameBoard  />
          <PlayButtons/>
      </MDBContainer>
    </div>
  );
}

export default App;
