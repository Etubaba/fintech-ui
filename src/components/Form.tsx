import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import Header from "./Header";

const Form = () => {
  return (
    <div className="form">
      <Header />
      <section className="form-body">
        <form action="">
          <div className="input-group">
            <div className="header">
              <div className="description">
                <h2 className="title">card number</h2>
                <p className="desc">
                  Enter the 15-digit card number on the card
                </p>
              </div>
              <button className="edit">
                <MdModeEditOutline className="text-xl text-blue-700" />
                <span className="btn-desc text-blue-700">Edit</span>
              </button>
            </div>
            <div className="main">
              <img src="assets/mc_symbol.svg" alt="" className="leading-icon" />
              <input
                type="text"
                placeholder="2412   -   7512   -   3412   -   3456"
              />
              <img
                src="assets/verified-badge.svg"
                alt=""
                className="trailing-icon"
              />
            </div>
          </div>
          <div className="input-group __col">
            <div className="header">
              <div className="description">
                <h2 className="title">CVV number</h2>
                <p className="desc">
                  Enter the 3 or 4 digit number on the card
                </p>
              </div>
            </div>
            <div className="main">
              <input type="text" placeholder="327" />
              <img src="assets/dots.svg" alt="" className="trailing-icon" />
            </div>
          </div>
          <div className="input-group __col">
            <div className="header">
              <div className="description">
                <h2 className="title">expiry date</h2>
                <p className="desc">Enter the expiration date of the card</p>
              </div>
            </div>
            <div className="grp">
              <div className="main __date">
                <input type="text" placeholder="09" />
              </div>
              <span className="divider">/</span>
              <div className="main __date">
                <input type="text" placeholder="22" />
              </div>
            </div>
          </div>
          <div className="input-group __col">
            <div className="header">
              <div className="description">
                <h2 className="title">password</h2>
                <p className="desc">Enter your Dynamic password</p>
              </div>
            </div>
            <div className="main">
              <input type="password" placeholder="******" />
              <img src="assets/dots.svg" alt="" className="trailing-icon" />
            </div>
          </div>
          <button type="submit" className="btn-submit">
            pay now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
