import React from 'react';
import Box from '@material-ui/core/Box';
import { shadows,boxShadow } from '@material-ui/system';
export const GameBoard=()=>{

    return (<Box component="div" p={1} m={1} bgcolor="#3F51B5">
        <Box component="div" p={1} m={1} bgcolor="#1E88E5">Dealer</Box>
        <Box component="div" p={1} m={1} bgcolor="#1E88E5">Deck</Box>
        <Box component="div" p={1} m={1} bgcolor="#1E88E5">Player</Box>
        
      </Box>
    )
}

