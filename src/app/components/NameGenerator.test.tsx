// __tests__/NameGenerator.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NameGenerator from './NameGenerator'

test('generates a name on button click', () => {
  render(<NameGenerator />);

  const button = screen.getByText('Generate Name');
  fireEvent.click(button);

  const generatedName = screen.getByText(/Generated Name:/i);
  expect(generatedName).toBeInTheDocument();
});