import React from 'react';
import PropTypes from 'prop-types';

import Information from '../Information/Information';
import Field from '../Field/Field';

import styles from './Game.module.css';

export default function GameLayout({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  onCellClick,
  onRestart,
}) {
  return (
    <div className={styles.game}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />

      <Field field={field} onCellClick={onCellClick} />

      <button type="button" onClick={onRestart} className={styles.restartButton}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};