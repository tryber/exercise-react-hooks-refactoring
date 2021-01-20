import React, { useState } from 'react';
import TicTatToeContext from './TicTacToeContext';

function TicTacToeProvider({ children }) {

  const [activePlayer, updatePlayer] = useState(1);
  const [gameBoard = [], updateGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const victoryArchivedInLine = (gameBoard) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const  victoryArchivedInColumn = (gameBoard) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3]
        && gameBoard[i + 3] === gameBoard[i + 6]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const victoryArchivedInDiagonals = (gameBoard) => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  const resetGame = () => {
      updatePlayer(1);
      updateGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  const toggleActivePlayer = () => {
    if (activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    const newState = [...gameBoard];
    let newActivePlayer = activePlayer;

    if (gameBoard[cellClicked] === 0) {
      newState[cellClicked] = activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else newState[cellClicked] = gameBoard[cellClicked];
    
    updatePlayer(() => (newActivePlayer));
    updateGameBoard(() => (newState));
  }

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const contextValue = {
    activePlayer,
    gameBoard,
    updateState,
    renderButton,
    victoryArchieved,
  }
    
  return (
    <TicTatToeContext.Provider value={ contextValue }>
      { children }
    </TicTatToeContext.Provider>
  );
}

export default TicTacToeProvider;
