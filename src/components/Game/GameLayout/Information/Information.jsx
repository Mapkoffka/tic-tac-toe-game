import React from 'react';
import PropTypes from 'prop-types';

import InformationLayout from './InformationLayout';

export default function Information({ currentPlayer, isGameEnded, isDraw }) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
}

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};