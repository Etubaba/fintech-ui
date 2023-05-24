import React from "react";

const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="credit-card__head">
        <img src="assets/chip.png" alt="" className="chip" />
        <img src="assets/wifi.png" alt="" className="wifi" />
      </div>
      <div className="credit-card__body">
        <span className="holder">jonathan micheal</span>
        <div className="card-digits">
          <div className="hidden-digits">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <span className="visible-digits">3456</span>
        </div>
      </div>
      <div className="credit-card__footer">
        <span className="expiry">09/22</span>
        <img src="assets/mastercard-2.svg" alt="" className="logo" />
      </div>
      <div className="card__design">
        <span className="inner"></span>
      </div>
    </div>
  );
};

export default CreditCard;
