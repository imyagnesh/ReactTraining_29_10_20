import React, { Component } from 'react';
import TodoForm from './components/todoForm';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoItems: [],
      status: 'all',
    };
  }

  onChangeText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  addTodo = (event) => {
    event.preventDefault();
    const { todoItems, todoText } = this.state;
    this.setState({
      todoItems: [
        ...todoItems,
        {
          text: todoText,
          isDone: false,
          id: new Date().valueOf(),
        },
      ],
      todoText: '',
      status: 'all',
    });
  };

  completeTodo = (id) => {
    const { todoItems } = this.state;

    const index = todoItems.findIndex((x) => x.id === id);

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        { ...todoItems[index], isDone: !todoItems[index].isDone },
        ...todoItems.slice(index + 1),
      ],
    });
  };

  deleteTodo = (id) => {
    const { todoItems } = this.state;

    const index = todoItems.findIndex((x) => x.id === id);

    this.setState({
      // todoItems: todoItems.filter(x => x.id !== id);
      todoItems: [...todoItems.slice(0, index), ...todoItems.slice(index + 1)],
    });
  };

  filter = (status) => {
    this.setState({ status });
  };

  render() {
    const { todoItems, todoText, status } = this.state;

    const filteredItems = todoItems.filter((x) => {
      if (status === 'pending') {
        return !x.isDone;
      }
      if (status === 'completed') {
        return x.isDone;
      }
      return x;
    });

    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} onChangeText={this.onChangeText} todoText={todoText} />
        <div>
          <h2>Todo Items</h2>
          {filteredItems.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => this.completeTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.isDone ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div>
          <button
            style={{
              borderColor: status === 'all' ? 'red' : 'transparent',
            }}
            onClick={() => this.filter('all')}
          >
            All
          </button>
          <button
            style={{
              borderColor: status === 'pending' ? 'red' : 'transparent',
            }}
            onClick={() => this.filter('pending')}
          >
            Pending
          </button>
          <button
            style={{
              borderColor: status === 'completed' ? 'red' : 'transparent',
            }}
            onClick={() => this.filter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
