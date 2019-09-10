import React from "react";
import CartItem from "./CartItem";
import { Items } from "../constants";

export default function Cart(props) {
  return (
    <div className="CartWrapper">
      <h1>Shopping Cart.</h1>
      {Items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}
