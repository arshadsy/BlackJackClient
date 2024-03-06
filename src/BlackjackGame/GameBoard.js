import React, { useEffect, useState } from 'react';
import { CardUI } from './CardUI';
import { DealerSide } from './DealerSide';
import PlayButtons from './PlayButtons';


export const GameBoard = ({ deckShuffeled }) => {
  const [dealerDeck, setDealerDeck] = useState([])
  const [playerCards, setPlayerCards] = useState([])
  const [deck, setDeck] = useState([])
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
    setDeck((st) => deckShuffeled.slice(0, -4))
    setEnableHit(true)
    setEnableStand(true)
    setEnableDouble(true)
    setWinBanner('')
    setPlayerStands(false)
  }, [deckShuffeled])

  const PlayerHits = () => {
    setPlayerCards((st) => {
      return [...st, deck[deck.length - 1]]
    })
    setDeck((st) => st.slice(0, -1))
    setPlayerScore((st) => calculateScore(playerCards))
  }

  const DealerTurn = () => {
    console.log(`player stands ${playerStands}`)
    setDealerDeck((st) => [...st, deck[(deck.length) - 1]])
    setDeck((st) => st.slice(0, -1))
  }

  useEffect(() => {
    const scoreUpdate = setInterval(() => {
      console.log(`dealer score ${dealerScore}`)
      if (dealerScore < 21 && playerStands)
        DealerTurn()
    }, 1000
    )
    return () => clearInterval(scoreUpdate)
  }, [dealerScore, playerStands])

  useEffect(() => {
    setDealerScore((st) => calculateScore(dealerDeck))
  }, [dealerDeck])

  const calculateScore = (inputcards = []) => {
    let score = 0
    let aceFound = false;
    const cards = inputcards.filter(s => { if (s !== undefined) return s })
    console.log('cards')
    console.log(cards)
    if (cards && cards.length > 0) {
      score = cards.reduce((a, b) => {
        // if (b === undefined) return 0
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

  const checkPlayerWin = (score, opScore, playerStandFlag = playerStands) => {
    let winScore = 21;
    if (score < winScore && playerStandFlag === false) return
    if (score > winScore) return 'Lose'
    let playerGap = winScore - score;
    let dealerrGap = winScore - opScore;
    if (dealerrGap < 0) return 'Win'
    if (playerGap < 0) return 'Lose'
    if ((score === winScore && opScore === winScore) || playerGap === dealerrGap) return 'Draw'
    if (playerGap < dealerrGap) return 'Win'
    if (playerGap > dealerrGap) return 'Lose'
    if (opScore > winScore) return 'Win'
  }

  const scoreCheck = (deck = []) => {
    return 2
  }

  const PlayerStandAction = () => {
    setPlayerStands(st => true);
    setEnableHit(st => false);
    setEnableStand(st => false);
    setEnableDouble(st => false);
    // DealerTurn();
    // setPlayerScore((st) => calculateScore(playerCards))
    setDealerScore((st) => calculateScore(dealerDeck))
  }

  useEffect(() => {
    setPlayerScore((st) => calculateScore(playerCards))
    setDealerScore((st) => calculateScore(dealerDeck))

  }, [playerCards, dealerDeck])

  useEffect(() => {
    const winCheck = checkPlayerWin(playerScore, dealerScore, playerStands)
    if (winCheck !== undefined) {
      setWinBanner(s => winCheck)
      setEnableHit(false)
      setEnableStand(false)
      setEnableDouble(false)
    }
  }, [playerScore, dealerScore])

  return (
    <div >
      <div className='game-deck' id='DealerDeck'>
        <div ><p>Dealer</p>
          {playerStands == false ? <DealerSide dealerCards={dealerDeck} /> : <CardUI cards={dealerDeck} />}
          {dealerScore && playerStands === false ? <div></div> : <div>Score:{dealerScore}</div>}
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

