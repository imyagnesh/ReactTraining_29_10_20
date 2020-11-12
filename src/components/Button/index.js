import React from 'react';
import './button.css';

const index = ({ ...rest }) => {
  return (
    <button className="btn btn-blue" {...rest}>
      Button
    </button>
  );
};

export default index;
