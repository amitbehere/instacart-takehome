import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from '../components/DessertsGallery/HeroImage';

test('render Hero image with right values', async () => {
  render(
    <HeroImage
      name="Tiramisu"
      price="1"
      imageUrl="http://testsite.com/img.jpg"
      description="test description"
    />,
  );
  expect(screen.getByText('Tiramisu')).toBeInTheDocument();
  expect(screen.getByText('$1.00')).toBeInTheDocument();
  expect(screen.getByText('test description')).toBeInTheDocument();
});
