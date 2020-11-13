import React from 'react';
// import './button.css';

const index = ({ ...rest }) => (
  <button type="button" className="btn btn-blue" {...rest}>
    Button
  </button>
);

export default index;
