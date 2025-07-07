import React, { useState } from 'react';
import GameLayout from './GameLayout/GameLayout';

const WIN_PATTERNS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const checkWinner = board => {
    return WIN_PATTERNS.some(([a,b,c]) => 
      board[a] && board[a] === board[b] && board[b] === board[c]
    );
  };

  const checkDraw = board => board.every(cell => cell !== '');

  const handleCellClick = index => {
    if (field[index] !== '' || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWinner(newField)) {
      setIsGameEnded(true);
    } else if (checkDraw(newField)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    }
  };

  const handleRestart = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      onCellClick={handleCellClick}
      onRestart={handleRestart}
    />
  );
}