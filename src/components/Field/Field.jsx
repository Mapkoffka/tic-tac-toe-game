import React from 'react';
import PropTypes from 'prop-types';

import FieldLayout from './FieldLayout';

export default function Field({ field, onCellClick }) {
  return <FieldLayout field={field} onCellClick={onCellClick} />;
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};