import React from 'react'

export const CardUI = ({ cards, isFlippedFront = true }) => {
    
    const LayOut = <div className='row '>
        <div className="col"></div>
        {cards.map(c => <div className='col-1' >{c}</div>)}
        <div className="col"></div>
            
    </div>

    return (LayOut)
    // return (<>{cards[0]}</>)
    //   <div className={`card-${cardface}`} id={cardFace}>
    // </div>
  
  
}

