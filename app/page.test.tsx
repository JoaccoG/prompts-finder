import { render } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  test('should render', () => {
    render(<Page />);
    expect(true).toBe(true);
  });
});
