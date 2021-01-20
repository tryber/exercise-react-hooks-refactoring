// src/App.js

import React from 'react';
import TicTacToe from './TicTacToe';
import './App.css';
import TicTacToeProvider from './context/TicTacToeProvider';

function App() {
  return (
    <TicTacToeProvider>
      <TicTacToe />
    </TicTacToeProvider>
  )
}

export default App;
