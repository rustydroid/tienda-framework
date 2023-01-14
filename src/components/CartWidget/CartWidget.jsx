import React from "react";
import { Link } from "react-router-dom";
import MyCart from "../images/shopping-cart-2025.svg";
import { useCartContext } from "../../context/CartProvider";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  const badgeStatus = () => {
    if (totalProducts() !== 0) {
      return (
        <span className="position-absolute translate-middle badge rounded-pill bg-success">
          {totalProducts()}
        </span>
      );
    }
  }
  return (
    <>
      <div style={{ float: "right" }}>
        <div className="shopingicons mr-auto">
          <Link className="icons-btn d-inline-block bag" to="/cart">
            <span className="icon-shopping-bag">
              <img src={MyCart} alt="" className="m-1" width="40" height="40" />
              {badgeStatus()}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
