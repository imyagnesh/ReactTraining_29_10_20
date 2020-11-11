import React, { Component } from 'react';
import Todo from './container/Todo';

export class App extends Component {
  componentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
  }

  static getDerivedStateFromError(error) {
    console.log('Todo -> getDerivedStateFromError -> error', error);
  }

  render() {
    return <Todo />;
  }
}

export default App;
