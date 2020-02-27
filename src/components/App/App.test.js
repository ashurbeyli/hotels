import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders filters correctly', () => {
  const { getByText, getAllByText } = render(<App />);
  const sortElement1 = getAllByText(/sort by/i);
  const sortElement2 = getByText(/alphabetically/i);
  expect(sortElement1).toHaveLength(3);
  expect(sortElement2).toBeInTheDocument();
});
