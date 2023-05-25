import React, { useReducer } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import Header from "./Header";
import { ActionType, FormInitialState } from "../interface";

const Form = (): JSX.Element => {
  const formInitialState: FormInitialState = {
    cardNumber: false,
    CVV: false,
    expiry1: false,
    expiry2: false,
    password: false,
  };
  const reducer = (state: FormInitialState, action: ActionType) => {
    const { type } = action;
    switch (type) {
      case "card":
        return { ...state, cardNumber: !state.cardNumber };
      case "cvv":
        return { ...state, CVV: !state.CVV };
      case "expiry1":
        return { ...state, expiry1: !state.expiry1 };
      case "expiry2":
        return { ...state, expiry2: !state.expiry2 };
      case "password":
        return { ...state, password: !state.password };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(reducer, formInitialState);

  return (
    <div data-testid="form" className="form">
      <Header />
      <section>
        <form>
          <div className="">
            <div className="flex justify-between md:items-center">
              <div className="description">
                <h1 className="text-title font-bold mb-[0.4em] text-lg">
                  Card Number
                </h1>
                <p className="text-[#8e96a3] text-sm font-[500]">
                  Enter the 15-digit card number on the card
                </p>
              </div>
              <button className="flex space-x-2">
                <MdModeEditOutline className="text-xl text-blue-700" />
                <span className="btn-desc text-blue-700">Edit</span>
              </button>
            </div>
            <div
              data-testid="card-input-wrapper"
              className={`${
                inputState.cardNumber ? "border-[#0077B6]" : ""
              }  flex  rounded-lg w-full px-4 justify-between py-3 space-x-4 mt-6 items-center border `}
            >
              <div className="flex space-x-4 w-full">
                <img src="assets/mc_symbol.svg" alt="" className="h-[1.5em]" />
                <input
                  data-testid="card-input"
                  onFocus={() => dispatch({ type: "card" })}
                  onBlur={() => dispatch({ type: "card" })}
                  type="text"
                  placeholder="2412   -   7512   -   3412   -  3456"
                  className="outline-none w-full"
                />
              </div>

              <img src="assets/verified-badge.svg" alt="" className="h-[1em]" />
            </div>
          </div>

          <div className="flex w-full mt-6 flex-col md:flex-row justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-title font-bold mb-[0.4em] text-lg">
                CVV number
              </h2>
              <p className="text-[#8e96a3] text-sm font-[500]">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>

            <div
              data-testid="cvv-input-wrapper"
              className={` ${
                inputState.CVV ? "border-[#0077B6]" : ""
              }    items-center min-w-full justify-between md:min-w-[230px] py-3 px-[1em] flex border rounded-md`}
            >
              <input
                data-testid="cvv-input"
                onFocus={() => dispatch({ type: "cvv" })}
                onBlur={() => dispatch({ type: "cvv" })}
                className="outline-none  text-center"
                type="text"
                placeholder="327"
              />
              <TbGridDots className="text-2xl text-[#979CA5]" />
            </div>
          </div>

          <div className="flex w-full mt-6 flex-col md:flex-row justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-title font-bold mb-[0.4em] text-lg">
                Expiry Date
              </h2>
              <p className="text-[#8e96a3] text-sm font-[500]">
                Enter the expiration date of the card
              </p>
            </div>

            <div className="flex space-x-2 max-w-full md:max-w-[230px]">
              <div
                data-testid="expiry1-input-wrapper"
                className={` ${
                  inputState.expiry1 ? "border-[#0077B6]" : ""
                }  border py-3 flex justify-center items-center  px-[1em] rounded-lg`}
              >
                <input
                  data-testid="expiry1-input"
                  onFocus={() => dispatch({ type: "expiry1" })}
                  onBlur={() => dispatch({ type: "expiry1" })}
                  className="text-center outline-none w-1/2"
                  type="text"
                  placeholder="09"
                />
              </div>
              <span className="text-2xl font-bold mt-3 ">/</span>
              <div
                data-testid="expiry2-input-wrapper"
                className={`${
                  inputState.expiry2 ? "border-[#0077B6]" : ""
                }  border flex justify-center items-center rounded-lg py-3 px-[1em] `}
              >
                <input
                  data-testid="expiry2-input"
                  onFocus={() => dispatch({ type: "expiry2" })}
                  onBlur={() => dispatch({ type: "expiry2" })}
                  className="text-center outline-none w-1/2"
                  type="text"
                  placeholder="22"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full mt-6 flex-col md:flex-row justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-title font-bold mb-[0.4em] text-lg">
                Password
              </h2>
              <p className="text-[#8e96a3] text-sm font-[500]">
                Enter your dynamic password
              </p>
            </div>

            <div
              data-testid="password-input-wrapper"
              className={`${
                inputState.password ? "border-[#0077B6]" : ""
              }  items-center min-w-full justify-between md:min-w-[230px] py-3 px-[1em] flex border rounded-md`}
            >
              <input
                data-testid="password-input"
                onFocus={() => dispatch({ type: "password" })}
                onBlur={() => dispatch({ type: "password" })}
                className="outline-none placeholder:text-6xl text-start"
                type="text"
                placeholder="......."
              />
              <TbGridDots className="text-2xl text-[#979CA5]" />
            </div>
          </div>

          <button className="rounded-md text-white w-full text-center py-4 mt-24 bg-[#085BF1]">
            Pay Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
