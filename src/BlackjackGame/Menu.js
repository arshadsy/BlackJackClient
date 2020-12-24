import React, { Component } from 'react';
import { Deck } from "./CardData";
import { GameBoard } from "./GameBoard";
const GameMenu = () => {
    const playGame = (e)=>{
        console.log(e.target)
        e.preventDefault();
    }
    const logout = (e)=>{
        console.log(e.target.name)
        e.preventDefault();
    }
    return ( <>
    <GameBoard  />
    <button name='play' className="btn btn-success" onClick={(e)=>playGame(e)}>Play Game</button>
    <button name='logout' className="btn btn-danger" onClick={(e)=>logout(e)}>Logout</button>
    </> );
}
 
export default GameMenu;