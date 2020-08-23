import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Components/Layout/Layout';

test('Abhijeet Mukherjee text exists', () => {
  const { getByText } = render(<Layout />);
  const linkElement = getByText(/Filters/i);
  expect(linkElement).toBeInTheDocument();
});
