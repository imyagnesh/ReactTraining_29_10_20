import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoItems: [],
    };
  }

  onChangeText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  addTodo = () => {
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
    });
  };

  completeTodo = (id) => {
    this.setState({
      todoItems: this.state.todoItems.map((x) => {
        if (x.id === id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      }),
    });
  };

  render() {
    const { todoItems, todoText } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <input type="text" value={todoText} onChange={this.onChangeText} />
          <input type="button" value="Add Todo" onClick={this.addTodo} />
        </div>
        <div>
          <h2>Todo Items</h2>
          {todoItems.map((todo) => (
            <div>
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
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
