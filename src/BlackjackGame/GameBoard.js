import React from 'react';
import { CardUI } from './CardUI';


export const GameBoard = (dealerCount,playercards) => {
    
    return (
    <div >
        <div className='game-deck' id='DealerDeck'>
        <div ><p>Dealer</p>
          [...Array()]
        </div>
        </div>
          <div className='game-deck' id='PlayerDeck'>
        <div>Player
            <CardUI cards={playercards} />
          </div>
        </div>
      
      </div>
    )
}

