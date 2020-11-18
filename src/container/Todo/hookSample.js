import React, { useState, useEffect, memo, useCallback } from 'react';
import Axios from 'axios';
import TodoForm from './components/todoForm';
import TodoItems from './components/todoItems';
import TodoFooter from './components/todoFooter';

const hookSample = () => {
  const [todoText, setTodoText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // if empty array then it will componentdidmount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const localStatus = await localStorage.getItem('status');
        let url = 'http://localhost:3000/todoList';
        if (localStatus !== 'all') {
          url = `${url}?isDone=${localStatus === 'completed' ? 'true' : 'false'}`;
        }
        const res = await Axios.get(url);
        setTodoItems(res.data);
        setStatus(localStatus);
        // this.setState({ todoItems: todoItems.data, status });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();

    document.addEventListener('copy', () => {});

    const timer = setTimeout(() => {
      console.log('hello');
    }, 100);

    return () => {
      document.removeEventListener('copy');
      clearTimeout(timer);
    };
  }, []);

  const addTodo = useCallback(async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const todo = await Axios.post('http://localhost:3000/todoList', {
        text: todoText,
        isDone: false,
      });

      await localStorage.setItem('status', 'all');
      setTodoItems([todo.data, ...todoItems]);
      setTodoText('');
      setStatus('all');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const onChangeText = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  const completeTodo = useCallback(() => {}, []);

  const deleteTodo = useCallback(() => {}, []);

  const filter = useCallback(() => {}, []);

  if (loading) {
    return <h1 data-testid="h1Test"> Loading...</h1>;
  }

  if (error) {
    return <h1 data-testid="h1Test">{error.message}</h1>;
  }

  return (
    <div>
      <h1 data-testid="h1Label">Todo Application</h1>
      <TodoForm addTodo={addTodo} onChangeText={onChangeText} todoText={todoText} />
      <TodoItems
        items={todoItems}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        status={status}
      />
      <TodoFooter status={status} filter={filter} />
    </div>
  );
};

export default memo(hookSample);
