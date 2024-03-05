import React, { useEffect, useState } from 'react';
import { CardUI } from './CardUI';
import { DealerSide } from './DealerSide';
import PlayButtons from './PlayButtons';


export const GameBoard = ({ deckShuffeled }) => {
  const [dealerDeck, setDealerDeck] = useState(deckShuffeled.slice(-2))
  const [playerCards, setPlayerCards] = useState(deckShuffeled.slice(-4, -2))
  const [deck, setDeck] = useState(deckShuffeled.slice(0, -4))
  const [enableHit, setEnableHit] = useState(true)
  const [enableStand, setEnableStand] = useState(true)
  const [enableDouble, setEnableDouble] = useState(true)
  const [playerDoubles, setPlayerDoubles] = useState(false);
  useEffect(() => {
    setDealerDeck(deckShuffeled.slice(-2))
    setPlayerCards(deckShuffeled.slice(-4, -2))
    setDeck(deckShuffeled.slice(0, -4))
  }, [deckShuffeled])
  const PlayerHits = () => {
    setPlayerCards((st) => {
      return [...st, deck[deck.length - 1]]
    })
    setDeck((st) => st.slice(0, -1))
  }
  const DealerTurn = () => {
    setDealerDeck((st) => [...st, deck[-1]])
    setDeck((st) => st.slice(0, -1))
  }
  const startDealerTurn = async () => {
    if (scoreCheck(dealerDeck) < 21) {
      DealerTurn()
      startDealerTurn()
    }
  }
  const scoreCheck = (deck = []) => {
    return 2
  }
  const PlayerStands = () => {
    enableHit = false;
    startDealerTurn()
  }
  return (
    <div >
      <div className='game-deck' id='DealerDeck'>
        <div ><p>Dealer</p>
          <DealerSide dealerCards={dealerDeck} />
        </div>
      </div>
      <div className='game-deck' id='PlayerDeck'>
        <div>Player
          <CardUI cards={playerCards} />
        </div>
      </div>
      <PlayButtons playerStands={PlayerStands}
        playerHits={PlayerHits}
        playerDoubles={playerDoubles}
      />

    </div>
  )
}

