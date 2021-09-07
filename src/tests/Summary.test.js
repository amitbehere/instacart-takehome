import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Summary from '../components/DessertsGallery/Summary';

test('render Summary image with right values', async () => {
  render(
    <Summary
      summary="test description dklfj dsfklj Lowe..."
      description="test description dklfj dsfklj Loweam dlkfjlk adflkjdsl weroidfasf lfdlkjdfal djfldj"
    />,
  );
  expect(screen.getByText('test description dklfj dsfklj Lowe...')).toBeInTheDocument();
  expect(screen.getByText('test description dklfj dsfklj Loweam dlkfjlk adflkjdsl weroidfasf lfdlkjdfal djfldj')).toBeInTheDocument();
});
