import React from 'react';
import PropTypes from 'prop-types';

import styles from './Field.module.css';

export default function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.field}>
      {field.map((cell, i) => (
        <button
          key={i}
          type="button"
          className={styles.cell}
          onClick={() => onCellClick(i)}
          disabled={cell !== ''}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};