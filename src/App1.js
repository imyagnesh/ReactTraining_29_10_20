import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const App1 = ({ fName, lName, children, age }) => {
  return (
    <>
      <h1>{fName}</h1>
      <h1>{lName}</h1>
      <input typ="text" adfds="adfadf" />
    </>
  );
};

App1.propTypes = {
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  age: PropTypes.number,
};

App1.defaultProps = {
  age: 18,
};

export default App1;
