import React, { Component } from "react";
import ReactDOM from "react-dom";

import { sayHi } from './test'
console.log("sayHi", sayHi)

// class component

export default class App extends Component {

  render() {
      const {fName, lName, children} = this.props;
    return (
      <>
        <h1>{fName}</h1>
        <h1>{lName}</h1>
        <h1>{children}</h1>
      </>
    );
  }
}

// function component
// Rules of React component
// 1. Component name start with capital letter
// 2. you can return single element
// 3. children will be the default prop

// const App = ({ fName , lName, children}) => {
//     return <>
//         <h1>{fName}</h1>
//         <h1>{lName}</h1>
//         <h1>{children}</h1>
//     </>
// }

ReactDOM.render(
  <App fName="Yagnesh" lName="Modh">
    Children
  </App>,
  document.getElementById("root")
);
