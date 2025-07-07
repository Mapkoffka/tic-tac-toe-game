import React from 'react';
import PropTypes from 'prop-types';

import styles from './Information.module.css';

export default function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
  let message = '';

  if (isDraw) {
    message = 'Ничья';
  } else if (isGameEnded) {
    message = `Победа: ${currentPlayer}`;
  } else {
    message = `Ходит: ${currentPlayer}`;
  }

  return <div className={styles.info}>{message}</div>;
}

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};