import React from 'react'

function PlayButtons() {
    const hit = (e) => {
    
        e.preventDefault();
console.log(e.target)
    }
    const stand=(e)=>{
        e.preventDefault();
console.log(e.target)
    }
    const doubleBet=(e)=>{
        e.preventDefault();
console.log(e.target)
    }
    return (
        <div className='actions text-start ms-2'>
            <button onClick={(e) => hit(e)} className="btn btn-info m-1" >
                Hit
            </button>
            <button onClick={(e) => stand(e)} className="btn btn-primary m-1" >
                Stand
            </button>
            <button onClick={(e) => doubleBet(e)} className="btn btn-warning m-1" >
                Double Stand
            </button>
        </div>
    )
}

export default PlayButtons
