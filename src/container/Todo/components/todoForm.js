import React, { memo } from 'react';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

const todoForm = ({ addTodo, onChangeText, todoText }) => {
  console.log('todoForm');
  return (
    <form onSubmit={addTodo}>
      <InputText value={todoText} onChange={onChangeText} />
      <Button type="submit" value="Add Todo" />
    </form>
  );
};

export default memo(todoForm);
