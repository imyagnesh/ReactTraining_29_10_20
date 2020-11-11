// // import React from 'react';
// // import PropTypes from 'prop-types';

// // // stateless component
// // const App1 = ({ fName, lName, children, age }) => {
// //   return (
// //     <>
// //       <h1>{fName}</h1>
// //       <h1>{lName}</h1>
// //       <input typ="text" adfds="adfadf" />
// //     </>
// //   );
// // };

// // App1.propTypes = {
// //   fName: PropTypes.string.isRequired,
// //   lName: PropTypes.string.isRequired,
// //   children: PropTypes.element.isRequired,
// //   age: PropTypes.number,
// // };

// // App1.defaultProps = {
// //   age: 18,
// // };

// // export default App1;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// let text = 'Hello from global variable';

// // prop change
// // state change

// // 1. mounting
// //    -> constructor
// //    -> getDerivedStateFromProps
// //    -> render
// //    -> componentDidMount
// // 2. updatating
// //   -> getDerivedStateFromProps
// //    -> shouldComponentUpdate
// //    -> render
// //    -> getSnapshotBeforeUpdate
// //    -> componentDidUpdate
// // 3. unmounting
// //    -> componentWillUnmount
// // 4. error handling
// //    => getDerivedStateFromError
// //    =>  componentDidCatch

// // state(Full) component
// export class App extends Component {
//   constructor(props) {
//     // call only once during lifecycle
//     console.log('constructor');
//     super(props);
//     this.state = {
//       stateText: 'my name is {fName} {lName}',
//     };
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return {
//       stateText: state.stateText.replace('{fName}', props.fName).replace('{lName}', props.lName),
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.state !== nextState || this.props !== nextProps) {
//       return true;
//     }
//     return false;
//   }

//   getSnapshotBeforeUpdate() {
//     return 1;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('App -> componentDidUpdate -> snapshot', snapshot);
//   }

//   componentDidMount() {
//     // call only once during lifecycle
//     document.addEventListener('mousemove', () => {
//       console.log('copied');
//     });
//     this.timer = setTimeout(() => {}, 100);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('mousemove');
//     clearTimeout(this.timer);
//   }

//   static getDerivedStateFromError(error) {}

//   componentDidCatch(error, info) {}

//   render() {
//     console.log('render');
//     // const { fName, lName, children, age } = this.props;
//     const { stateText } = this.state;
//     return (
//       <>
//         <h1 id="stateText">{stateText}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               stateText: 'This Value has changed',
//             });
//           }}
//         >
//           Click Me
//         </button>
//         {/* <h1>{fName}</h1>
//         <h1>{lName}</h1>
//         <h1>{age}</h1> */}
//         {/* <div>{children}</div> */}
//       </>
//     );
//   }
// }

// App.propTypes = {
//   fName: PropTypes.string.isRequired,
//   lName: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
//   age: PropTypes.number,
// };

// App.defaultProps = {
//   age: 18,
// };

// export default App;
