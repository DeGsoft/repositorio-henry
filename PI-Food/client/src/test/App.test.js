import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Henry Food', () => {
  render(<App />);
  const linkElement = screen.getByText(/henry food/i);
  expect(linkElement).toBeInTheDocument();
});
