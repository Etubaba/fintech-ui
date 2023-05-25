import { render } from "@testing-library/react";
import CreditCard from "../CreditCard";

describe("Credit Card", () => {
  test("Credit Card Component renders properly", () => {
    const { getByTestId } = render(<CreditCard />);

    const creditCardElement = getByTestId("card");
    expect(creditCardElement).toBeInTheDocument();
  });
});
