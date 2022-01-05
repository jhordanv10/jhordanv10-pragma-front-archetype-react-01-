import { render, screen } from '@testing-library/react';
import CardHome from './CardHome';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
