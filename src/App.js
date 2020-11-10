import React, { Component } from 'react';
import PropTypes from 'prop-types';

// state(Full) component
export class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
      stateText: 'This is from State',
    };
  }

  render() {
    console.log('App');
    // const { fName, lName, children, age } = this.props;
    const { stateText } = this.state;
    return (
      <>
        <h1 id="stateText">{stateText}</h1>
        <button
          onClick={() => {
            this.setState({
              stateText: 'This Value has changed',
            });
          }}
        >
          Click Me
        </button>
        {/* <h1>{fName}</h1>
        <h1>{lName}</h1>
        <h1>{age}</h1> */}
        {/* <div>{children}</div> */}
      </>
    );
  }
}

App.propTypes = {
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  age: PropTypes.number,
};

App.defaultProps = {
  age: 18,
};

export default App;
