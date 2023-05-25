import { render } from "@testing-library/react";
import CheckOutDetails from "../CheckOutDetails";

describe("CheckOutDetails", () => {
  test("Checkout component renders properly", () => {
    const { getByTestId } = render(<CheckOutDetails />);
    const checkOutElement = getByTestId("checkout");
    expect(checkOutElement).toBeInTheDocument();
  });
});
