import React from 'react';
import PropTypes from 'prop-types';

import styles from './FieldLayout.module.css';

export default function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.field}>
      {field.map((cell, i) => (
        <button
          type="button"
          key={i}
          className={styles.cell}
          onClick={() => onCellClick(i)}
          disabled={cell !== ''}
          aria-label={`Cell ${i + 1}`}
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