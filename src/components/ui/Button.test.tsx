import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button, ButtonProps } from './button';

describe('Button component', () => {
  const setup = ({ ...props }: ButtonProps = {}) => {
    return render(
      <Button data-testid='button' {...props}>
        Button
      </Button>
    );
  };

  it('should render default button', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render destructive button', () => {
    const { getByTestId } = setup({
      variant: 'destructive',
    });

    const button = getByTestId('button');

    expect(button).toHaveClass(
      'bg-destructive text-destructive-foreground hover:bg-destructive/90'
    );
  });

  it('should render button asChild', () => {
    const { getByTestId } = render(
      <Button asChild data-testid="custom-button">
        <a href='/test'>Custom Link</a>
      </Button>
    );

    const button = getByTestId('custom-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/test');
  });
});
