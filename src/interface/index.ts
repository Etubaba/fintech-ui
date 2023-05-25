export interface FormInitialState {
  cardNumber: Boolean;
  CVV: boolean;
  expiry1: boolean;
  expiry2: boolean;
  password: boolean;
}
export type ActionType =
  | { type: "card" }
  | { type: "cvv" }
  | { type: "expiry1" }
  | { type: "expiry2" }
  | { type: "password" };
