import { render } from "@testing-library/react";
import Container from "./index";

describe("Container", () => {
  it("renders", () => {
    const { asFragment } = render(<Container>Hello World!</Container>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render children", () => {
    const { getByText } = render(<Container>Hello World!</Container>);

    expect(getByText("Hello World!")).toBeInTheDocument();
  });
});
