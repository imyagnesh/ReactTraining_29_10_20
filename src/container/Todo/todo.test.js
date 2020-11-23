import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Todo } from './index';

afterAll(cleanup);

describe('test todo component', () => {
  test('should take snapshot', () => {
    const { container } = render(<Todo />);
    expect(container).toMatchSnapshot();
  });

  test('should h1 render', async () => {
    const { getByTestId } = render(<Todo />);
    act(() => {
      render(<Todo />);
    });
    await waitFor(() => getByTestId('h1Test'));
    const data = getByTestId('h1Test').innerHTML;
    expect(data).toStrictEqual('Todo Application');
  });
});
