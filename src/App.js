import './App.css';
import GameMenu from "./BlackjackGame/Menu";

import React, { useState, useEffect } from 'react';
import PlayButtons from './BlackjackGame/PlayButtons';
import { GameBoard } from './BlackjackGame/GameBoard';
import { Deck } from './BlackjackGame/CardData';
import { useContext, Provider } from 'react';

function App() {

  const [PlayButtonShow, setPlayButtonShow] = useState(true);
  const [QuitButtonShow, setQuitButtonShow] = useState(false);
  const [DeckShuffleld, setDeckShuffeled] = useState([]);
  useEffect(() => {
    console.log("shuffleStart");
    shuffleDeck(setDeckShuffeled);
    console.log("shuffleEnd");
  }, []);

  return (

    <div className="App m-1">
      <GameMenu PlayButtonShow={PlayButtonShow} QuitButtonShow={QuitButtonShow} setPlayButtonShow={setPlayButtonShow} setQuitButtonShow={setQuitButtonShow} />
      <GameBoard deckShuffeled={DeckShuffleld} />
    </div>
  );
}
const shuffleDeck = (fn) => {
  let tempDeck = Deck.map(a => a);
  for (let i = 0; i < 100; i++) {
    let rand1 = Math.floor(Math.random() * 100 % 52);
    let rand2 = Math.floor(Math.random() * 100 % 52);
    let tempCard = tempDeck[rand1];
    tempDeck[rand1] = tempDeck[rand2];
    tempDeck[rand2] = tempCard;
  }
  fn(tempDeck);
}

export default App;
