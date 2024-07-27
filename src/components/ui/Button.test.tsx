import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './button';

describe('Button component', () => {
  it('renderes default button', () => {
    const { asFragment } = render(<Button>Default button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a small destructive button', () => {
    render(<Button size="sm" variant="destructive">Destructive</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Destructive');
    expect(button).toHaveClass('h-9 rounded-md px-3');
    expect(button).toHaveClass('bg-destructive text-destructive-foreground');
  });

  it('renders button with type icon', () => {
    render(<Button data-testid="icon-button"  size="icon">Icon</Button>);
    const button = screen.getByTestId('icon-button');

    expect(button).toHaveClass('w-10 h-10');
  });
});
