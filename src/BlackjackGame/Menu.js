import React from 'react';
const GameMenu = ({showMenu,setShowMenu}) => {
    const playGame = (e)=>{
        setShowMenu(false);
        e.preventDefault();
    }
    if(showMenu){
    return ( <>
    <button name='play' className="btn btn-success" onClick={(e)=>playGame(e)}>Play Game</button>
    </> );
    }
    else
    {
        return(<></>);
    }
}
 
export default GameMenu;