import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("Header component renders properly", () => {
    const { getByTestId } = render(<Header />);
    const myTextElement = getByTestId("header");
    expect(myTextElement).toBeInTheDocument();
  });
});
