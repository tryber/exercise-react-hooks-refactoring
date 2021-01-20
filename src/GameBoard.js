import React, { useContext } from 'react';
import GameCell from './GameCell';
import './GameBoard.css';
import TicTatToeContext from './context/TicTacToeContext';

function GameBoard() {
    const { gameBoard, updateState } = useContext(TicTatToeContext);
    return (
      <div className="game-board">
        {gameBoard.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={() => updateState(i)}
            content={playerId}
          />
        ))}
      </div>
    );
}

export default GameBoard;
