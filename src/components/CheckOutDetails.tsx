import React from "react";

const CheckOutDetails = () => {
  return (
    <div data-testid="checkout" className="checkout-details">
      <div className="purchase-data">
        <div className="data">
          <span className="title">company</span>
          <span className="value">
            <img src="assets/apple-13.svg" alt="" />
            <span className="inner-text">apple</span>
          </span>
        </div>
        <div className="data">
          <span className="title">order number</span>
          <span className="value">
            <span className="inner-text">1266201</span>
          </span>
        </div>
        <div className="data">
          <span className="title">product</span>
          <span className="value">
            <span className="inner-text">macbook air</span>
          </span>
        </div>
        <div className="data">
          <span className="title">VAT (20%)</span>
          <span className="value">
            <span className="inner-text">$100.00</span>
          </span>
        </div>
      </div>
      <div className="divider">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="purchase-total">
        <div className="total">
          <span className="desc">You have to Pay</span>
          <div className="t-amount">
            <h1 className="amount">
              549<sub>.99</sub>
            </h1>
            <span className="symbol">USD</span>
          </div>
        </div>
        <img src="assets/docket.png" alt="" />
      </div>
    </div>
  );
};

export default CheckOutDetails;
