import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Given...', () => {
  describe('When...', () => {
    test('Then 1...', () => {
      expect(true).toBe(true);
    });
    test('Then 2...', () => {
      render(<Home />);
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
  });
});
