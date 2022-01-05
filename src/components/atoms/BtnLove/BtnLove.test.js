import { render, screen } from '@testing-library/react';
import BtnLove from './BtnLove';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
