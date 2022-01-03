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
        <div>
            <div onClick={(e) => hit(e)} color="info" >
                Hit
            </div>
            <div onClick={(e) => stand(e)} color="success" >
                Stand
            </div>
            <div onClick={(e) => doubleBet(e)} color="warning" >
                Double Stand
            </div>
        </div>
    )
}

export default PlayButtons
