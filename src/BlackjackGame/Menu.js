import React from 'react';
const GameMenu = ({PlayButtonShow, QuitButtonShow, setPlayButtonShow, setQuitButtonShow}) => {
    const playGame = (e)=>{
        setPlayButtonShow(false);
        setQuitButtonShow(true);
        e.preventDefault();
    }
    const quitGame = (e)=>{
        setPlayButtonShow(true);
        setQuitButtonShow(false);
        e.preventDefault();
    }
    if(PlayButtonShow){
    return ( <>
    <button name='play' className="btn btn-success" onClick={(e)=>playGame(e)}>Play Game</button>
    </> );
    }
    else if (QuitButtonShow)
    {
    return ( <>
    <button name='play' className="btn btn-danger" onClick={(e)=>quitGame(e)}>Quit Game</button>
        </>);
    }
}
 
export default GameMenu;