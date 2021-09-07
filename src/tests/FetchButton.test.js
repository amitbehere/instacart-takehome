import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchButton from '../components/FetchButton';

test('button renders without crashing', async () => {
  render(<FetchButton fetchDesserts={() => {}} />);
  expect(screen.getByRole('button', {
    name: 'Get Desserts',
  })).toBeInTheDocument();
});
