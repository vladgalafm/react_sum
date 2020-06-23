import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a = 0, b = 0 }) => (
  <p>
    Sum of&nbsp;
    {a}
    {' '}
    and&nbsp;
    {b}
    {' '}
    is&nbsp;
    {a + b}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export { Sum };
