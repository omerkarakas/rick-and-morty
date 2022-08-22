import matchMedia from './__mocks__/matchMedia';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

beforeEach(() => {
  console.log('Testing started');
});

test('webpage opens', () => {
  render(<App />);
  const titleElement = screen.getByText(/episodes/i);
  expect(titleElement).toBeInTheDocument();
});
