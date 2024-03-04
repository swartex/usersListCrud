import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders", () => {
    const { asFragment } = render(<Button>test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders ghost button", () => {
    const { asFragment } = render(<Button variant="ghost">test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
