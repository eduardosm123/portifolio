import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home.tsx'; // Substitua pelo caminho correto do seu componente

test('renderização da tela home com elemento assíncrono', async () => {
  render(<Home />);
  const linkElement = await screen.findByTestId('home'); // Aguarda até que o elemento apareça
  expect(linkElement).toBeInTheDocument();
});

