import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './pages/Contact.tsx'; // Substitua pelo caminho correto do seu componente
import { Provider } from 'react-redux';
import store from "../src/redux/store.ts"
 


test('renderização da tela home', async () => {
  render(
    <Provider store={store} children={ <Contact />}>
    </Provider>
  );
  const linkElement = await screen.findByTestId('contact'); // Aguarda até que o elemento apareça
  expect(linkElement).toBeInTheDocument();
});