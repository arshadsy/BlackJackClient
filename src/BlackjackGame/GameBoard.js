import React from 'react';
import Box from '@material-ui/core/Box';
import { Deck } from './CardData';


export const GameBoard = () => {
    
    return (<Box component="div" p={1} m={1} bgcolor="#3F51B5">
        <Box component="div" p={1} m={1} bgcolor="#1E88E5" className="Player">Dealer</Box>
        <Box component="div" p={1} m={1} bgcolor="#1E88E5" className="Deck">Deck</Box>
        <Box component="div" p={1} m={1} bgcolor="#1E88E5" className="Player">Player</Box>
      
      </Box>
    )
}

