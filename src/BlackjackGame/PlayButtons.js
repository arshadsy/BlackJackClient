import React from 'react'

function PlayButtons({ dealerDeck, playerHits, deck, enableHit, enableStand, enableDouble }) {
    const hit = (e) => {
        playerHits()
        e.preventDefault();
        console.log(e.target.name)
    }
    const stand = (e) => {
        e.preventDefault();
        console.log(e.target.name)
    }
    const doubleBet = (e) => {
        e.preventDefault();
        console.log(e.target.name)
    }
    return (
        <div className='actions text-start ms-2'>
            <button onClick={(e) => hit(e)} name='hit' id='hit' disabled={!enableHit} className="btn btn-info m-1" >
                Hit
            </button>
            <button onClick={(e) => stand(e)} name='stand' id='stand' disabled={!enableStand} className="btn btn-primary m-1" >
                Stand
            </button>
            <button onClick={(e) => doubleBet(e)} name='stand2x' id='stand2x' disabled={!enableDouble} className="btn btn-warning m-1" >
                Double Stand
            </button>
        </div>
    )
}

export default PlayButtons
