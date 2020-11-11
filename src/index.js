import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// App.propTypes = {
//   fName: PropTypes.string.isRequired,
// }

// console.log(App.propTypes);

// function component
// Rules of React component
// 1. Component name start with capital letter
// 2. you can return single element
// 3. children will be the default prop

// const App = ({ fName , lName, children}) => {
//     return <>
//         <h1>{fName}</h1>
//         <h1>{lName}</h1>
//         <div>{children}</div>
//     </>
// }

// App.propTypes = {
//   fName: PropTypes.string.isRequired,
// }
