import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Página Home', () => {
  test('deve renderizar o título corretamente', async () => {
    render(<Home />);

    const titulo = await screen.findByText('Quem somos nós.');
    expect(titulo).toBeInTheDocument();
  });
});
