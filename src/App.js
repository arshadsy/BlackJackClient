import './App.css';
import GameMenu from "./BlackjackGame/Menu";

import React, { useState, useEffect } from 'react';
import PlayButtons from './BlackjackGame/PlayButtons';
import { GameBoard } from './BlackjackGame/GameBoard';
import { Deck} from './BlackjackGame/CardData';
function App() {
const [PlayButtonShow,setPlayButtonShow] = useState(true);
  const [QuitButtonShow, setQuitButtonShow] = useState(false);
  const [DeckShuffleld, setDeckShuffeled] = useState([]);
  const [DealerDeck, setDealerDeck] = useState([]);
  const [PlayerDeck, serPlayerDeck] = useState([]);
  useEffect(() => {
    console.log("shuffleStart");
    shuffleDeck(setDeckShuffeled);
console.log("shuffleEnd");
  }, () => { });

  return (
    <div className="App">
        <GameMenu PlayButtonShow={PlayButtonShow} QuitButtonShow={QuitButtonShow} setPlayButtonShow={setPlayButtonShow} setQuitButtonShow={setQuitButtonShow }/>
          <GameBoard  />
      <PlayButtons />
    
    </div>
  );
}
const shuffleDeck = (fn) => {
  let tempDeck = Deck.map(a => a);
  for (let i = 0; i < 100; i++){
    let rand1= Math.floor (Math.random() * 100 % 56);
    let rand2 = Math.floor(Math.random() * 100 % 56);
    let tempCard = tempDeck[rand1];
    tempDeck[rand1] = tempDeck[rand2];
    tempDeck[rand2] = tempCard;
  }
  fn(tempDeck);
}

export default App;
