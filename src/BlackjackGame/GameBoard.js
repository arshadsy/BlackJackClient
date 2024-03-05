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
  const [playerScore, setPlayerScore] = useState(0)
  const [dealerScore, setDealerScore] = useState(0)
  const [playerStands, setPlayerStands] = useState(false)
  const [winBanner, setWinBanner] = useState('')
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
    setPlayerScore((st) => calculateScore(playerCards))
    const winCheck = checkPlayerWin(playerScore, dealerScore, playerStands)
    if (winCheck !== undefined) {
      setWinBanner(s => winCheck)
    }
  }
  const DealerTurn = () => {
    setDealerDeck((st) => [...st, deck[-1]])
    setDeck((st) => st.slice(0, -1))
    setDealerScore((st) => calculateScore(dealerDeck))
    checkPlayerWin(playerScore, dealerScore)
  }
  const startDealerTurn = async () => {
    if (scoreCheck(dealerDeck) < 21) {
      DealerTurn()
      startDealerTurn()
    }
  }
  const calculateScore = (cards = []) => {
    let score = 0
    let aceFound = false;
    if (cards.length > 0) {
      score = cards.reduce((a, b) => {
        if (['K', 'Q', 'J', '10'].includes(b.split('-')[1])) a += 10;
        else if (b.split('-')[1] === 'A') {
          if (aceFound || ((a + 10) > 21)) ++a; else a += 10;
          aceFound = true;
        }
        else { a = a + Number(b.split('-')[1]) }
        console.log(a, b.split('-')[1])
        return a
      }, 0)
    }
    return score
  }
  const checkPlayerWin = (score, opScore, playerStandFlag = true) => {
    let winScore = 21;
    if (score < winScore && playerStandFlag === false) return
    if (score > winScore) return 'Lose'
    if (opScore > winScore) return 'Win'
    let playerGap = winScore - score;
    let dealerrGap = winScore - opScore;
    if ((score === winScore && opScore === winScore) || playerGap === dealerrGap) return 'Draw'
    if (playerGap < dealerrGap) return 'Win'
    if (playerGap > dealerrGap) return 'Lose'
  }
  const scoreCheck = (deck = []) => {
    return 2
  }
  const PlayerStandAction = () => {
    setEnableHit(st => false);
    setPlayerStands(st => true);
    startDealerTurn()
  }
  useEffect(() => {
    setPlayerScore((st) => calculateScore(playerCards))
    setDealerScore((st) => calculateScore(dealerDeck))

  }, [playerCards, dealerDeck])
  return (
    <div >
      <div className='game-deck' id='DealerDeck'>
        <div ><p>Dealer</p>
          <DealerSide dealerCards={dealerDeck} />
          <div>Score:{dealerScore}</div>
        </div>
      </div>
      <div className='game-deck' id='PlayerDeck'>
        <div>Player
          <CardUI cards={playerCards} />
        </div>
        <div>Score:{playerScore}</div>
      </div>
      {winBanner}
      <PlayButtons playerStands={PlayerStandAction}
        playerHits={PlayerHits}
        playerDoubles={playerDoubles}
        enableHit={enableHit}
        enableStand={enableStand}
        enableDouble={enableDouble}
      />

    </div>
  )
}

