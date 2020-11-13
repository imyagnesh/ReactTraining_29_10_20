import React, { memo } from 'react';
import PropTypes from 'prop-types';

const todoItems = ({ items, completeTodo, deleteTodo, status }) => {
  console.log('todoItems');
  const filteredItems = items.filter((x) => {
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
      <h2>Todo Items</h2>
      {filteredItems.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.isDone} onChange={() => completeTodo(todo.id)} />
          <span
            style={{
              textDecoration: todo.isDone ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

todoItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isDone: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(todoItems);
