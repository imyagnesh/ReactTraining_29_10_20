import React, { PureComponent } from 'react';
import TodoForm from './components/todoForm';
import TodoItems from './components/todoItems';
import TodoFooter from './components/todoFooter';

export class Todo extends PureComponent {
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

    return (
      <div>
        <h1 data-testid="h1Test">Todo Application</h1>
        <TodoForm addTodo={this.addTodo} onChangeText={this.onChangeText} todoText={todoText} />
        <TodoItems
          items={todoItems}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          status={status}
        />
        <TodoFooter status={status} filter={this.filter} />
      </div>
    );
  }
}

export default Todo;
