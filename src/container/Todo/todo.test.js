import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Todo } from './index';

afterAll(cleanup);

describe('test todo component', () => {
  test('should take snapshot', () => {
    const { container } = render(<Todo />);
    expect(container).toMatchSnapshot();
  });

  test('should h1 render', () => {
    const { getByTestId } = render(<Todo />);
    const data = getByTestId('h1Test').innerHTML;
    expect(data).toStrictEqual('Todo Application');
  });
});
