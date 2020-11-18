import React, { PureComponent } from 'react';
import axios from 'axios';
import TodoForm from './components/todoForm';
import TodoItems from './components/todoItems';
import TodoFooter from './components/todoFooter';
import withData from '../../HOC/withSubscription';

// useState
// useRef
// useEffect

// const timer = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Mouting life cycle methods

// constructor  //
// static getDerivedstatefromProps //
// render
// componantdidmount //

export class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todoItems: [],
      status: 'all',
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    console.log(this.h1label);
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({ loading: true });
      const status = await localStorage.getItem('status');
      let url = 'http://localhost:3000/todoList';
      if (status !== 'all') {
        url = `${url}?isDone=${status === 'completed' ? 'true' : 'false'}`;
      }
      const todoItems = await axios.get(url);
      this.setState({ todoItems: todoItems.data, status });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  onChangeText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  addTodo = async (event) => {
    try {
      event.preventDefault();
      this.setState({ loading: true });
      const { todoItems, todoText } = this.state;
      const todo = await axios.post('http://localhost:3000/todoList', {
        text: todoText,
        isDone: false,
      });

      await localStorage.setItem('status', 'all');
      this.setState({
        todoItems: [todo.data, ...todoItems],
        todoText: '',
        status: 'all',
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  completeTodo = async (id) => {
    try {
      this.setState({ loading: true });
      const { todoItems } = this.state;

      const index = todoItems.findIndex((x) => x.id === id);

      const todo = await axios.put(`http://localhost:3000/todoList/${id}`, {
        ...todoItems[index],
        isDone: !todoItems[index].isDone,
      });

      this.setState({
        todoItems: [...todoItems.slice(0, index), todo.data, ...todoItems.slice(index + 1)],
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteTodo = async (id) => {
    try {
      this.setState({ loading: true });
      const { todoItems } = this.state;
      await axios.delete(`http://localhost:3000/todoList/${id}`);

      const index = todoItems.findIndex((x) => x.id === id);

      this.setState({
        // todoItems: todoItems.filter(x => x.id !== id);
        todoItems: [...todoItems.slice(0, index), ...todoItems.slice(index + 1)],
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  filter = async (status) => {
    await localStorage.setItem('status', status);
    this.loadData();
  };

  render() {
    const { todoItems, todoText, status, loading, error } = this.state;
    console.log('this.props', this.props);

    if (loading) {
      return <h1 data-testid="h1Test"> Loading...</h1>;
    }

    if (error) {
      return <h1 data-testid="h1Test">{error.message}</h1>;
    }

    return (
      <div>
        <h1
          data-testid="h1Label"
          ref={(ref) => {
            this.h1label = ref;
          }}
        >
          Todo Application
        </h1>
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

export default withData(Todo);
