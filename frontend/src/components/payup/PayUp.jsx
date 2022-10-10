import React from "react";
import "./payup.scss";
import { useState } from "react";
import { handleApiPayup } from "./apiHandePayup";
import { useSelector } from "react-redux";
const PayUp = () => {
  const [username, setUsername] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const cart = useSelector((state) => state.cartSlice.cart.cart);
  const login = useSelector((state) => state.commerceSlice.login);
  const handleOrder = (event) => {
    event.preventDefault();
    const newcart = cart.map((value) => {
      return {
        productname: value.name,
        qty: value.qty,
      };
    });
    console.log(newcart);
    if (login) {
      handleApiPayup({
        username: username,
        adress: adress,
        phoneNumber: phoneNumber,
        order: cart ? newcart : [],
        message: message,
      });
    }
  };
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>please fill all your informaton</span> us
      </h1>
      <div className="row">
        <form onSubmit={handleOrder}>
          <input
            type="text"
            placeholder="name"
            className="box"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="adress"
            placeholder="your adress"
            className="box"
            onChange={(e) => setAdress(e.target.value)}
          />
          <input
            type="number"
            placeholder="your phone number"
            className="box"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <textarea
            name
            className="box"
            placeholder="your message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" className="btn" value="Pay up" />
        </form>
      </div>
    </section>
  );
};

export default PayUp;
