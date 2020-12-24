import './App.css';
import GameMenu from "./BlackjackGame/Menu";
import { MDBBtn,MDBContainer } from "mdbreact";
import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
function App() {

  return (
    <div className="App">
      <MDBContainer>
          <GameMenu/>
      </MDBContainer>
    </div>
  );
}

export default App;
