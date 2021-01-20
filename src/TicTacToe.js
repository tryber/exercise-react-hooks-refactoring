import React, { useContext } from 'react';
import TicTatToeContext from './context/TicTacToeContext';
import GameBoard from './GameBoard';

function TicTacToe() {
    const { gameBoard, victoryArchieved, renderButton } = useContext(TicTatToeContext);
    const win = victoryArchieved();
    if (!gameBoard.includes(0) && !win) {
      return (
        <>
          {renderButton()}
          <h1>Empate</h1>
        </>
      );
    }
    return (
      <>
        {renderButton()}
        {(!win)
          ? (
            <GameBoard />
          )
          : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </>
    );
}

export default TicTacToe;
