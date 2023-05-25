import { fireEvent, render } from "@testing-library/react";
import Form from "../Form";

describe("Form", () => {
  test("Form component renders properly", () => {
    const { getByTestId } = render(<Form />);
    const formElement = getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  test("changes border color on card input focus", () => {
    // Render the component
    const { getByTestId } = render(<Form />);

    // Simulate input focus event
    const inputElement = getByTestId("card-input");
    fireEvent.focus(inputElement);

    // Get the div element that wraps the input
    const wrapperDiv = getByTestId("card-input-wrapper");

    // Assert the border color
    expect(wrapperDiv).toHaveStyle(
      "border-color: rgb(0 119 182 / var(--tw-border-opacity))"
    );
  });
  test("changes border color on CVV input focus", () => {
    // Render the component
    const { getByTestId } = render(<Form />);

    // Simulate input focus event
    const inputElement = getByTestId("cvv-input");
    fireEvent.focus(inputElement);

    // Get the div element that wraps the input
    const wrapperDiv = getByTestId("cvv-input-wrapper");

    // Assert the border color
    expect(wrapperDiv).toHaveStyle(
      "border-color: rgb(0 119 182 / var(--tw-border-opacity))"
    );
  });
  test("changes border color on expiry2 input focus", () => {
    // Render the component
    const { getByTestId } = render(<Form />);

    // Simulate input focus event
    const inputElement = getByTestId("expiry1-input");
    fireEvent.focus(inputElement);

    // Get the div element that wraps the input
    const wrapperDiv = getByTestId("expiry1-input-wrapper");

    // Assert the border color
    expect(wrapperDiv).toHaveStyle(
      "border-color: rgb(0 119 182 / var(--tw-border-opacity))"
    );
  });
  test("changes border color on expiry2 input focus", () => {
    // Render the component
    const { getByTestId } = render(<Form />);

    // Simulate input focus event
    const inputElement = getByTestId("expiry2-input");
    fireEvent.focus(inputElement);

    // Get the div element that wraps the input
    const wrapperDiv = getByTestId("expiry2-input-wrapper");

    // Assert the border color
    expect(wrapperDiv).toHaveStyle(
      "border-color: rgb(0 119 182 / var(--tw-border-opacity))"
    );
  });
  test("changes border color on password input focus", () => {
    // Render the component
    const { getByTestId } = render(<Form />);

    // Simulate input focus event
    const inputElement = getByTestId("password-input");
    fireEvent.focus(inputElement);

    // Get the div element that wraps the input
    const wrapperDiv = getByTestId("password-input-wrapper");

    // Assert the border color
    expect(wrapperDiv).toHaveStyle(
      "border-color: rgb(0 119 182 / var(--tw-border-opacity))"
    );
  });
});
