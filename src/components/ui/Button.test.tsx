import { render, screen, waitFor } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders", () => {
    const { asFragment } = render(<Button>test</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders ghost button", () => {
    const { asFragment} = render(<Button variant="ghost">test1</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('render small button', () => {
    render(<Button size="sm" variant="destructive">Button text</Button>);
    const button = screen.findByRole('button');

    waitFor(() => {
      console.log(button)
    })
  })
});
