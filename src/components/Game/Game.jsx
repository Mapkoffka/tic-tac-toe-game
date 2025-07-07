import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GameLayout from './GameLayout';

/**
 * Победные паттерны
 */
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],      // горизонты
  [0, 3, 6], [1, 4, 7], [2, 5, 8],      // вертикали
  [0, 4, 8], [2, 4, 6]                  // диагонали
];

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  // Проверка победы
  const checkWinner = (board) => {
    return WIN_PATTERNS.some(pattern => {
      const [a, b, c] = pattern;
      return board[a] && board[a] === board[b] && board[b] === board[c];
    });
  };

  // Проверка ничьи (нет пустых клеток)
  const checkDraw = (board) => {
    return board.every(cell => cell !== '');
  };

  // Обработка клика по ячейке
  const handleCellClick = (index) => {
    if (field[index] !== '' || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWinner(newField)) {
      setIsGameEnded(true);
      // Победа текущего игрока
    } else if (checkDraw(newField)) {
      setIsDraw(true);
    } else {
      // Смена игрока
      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    }
  };

  // Сброс игры
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