import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.uid)) {
      setCart(
        cart.map((product) => {
          return product.uid === item.uid
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * 1500, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (uid) =>
    cart.find((item) => item.uid === uid) ? true : false;

  const uniqueItems = () => cart.length;

  const removeItem = (uid) =>
    setCart(cart.filter((product) => product.uid != uid));

  const updateAddQuantity = (uid, itemQuantity) =>
    setCart(
      cart.map((product) => {
        return product.uid === uid
          ? { ...product, quantity: itemQuantity }
          : product;
      })
    );

  const updateSubQuantity = (uid, itemQuantity) =>
    setCart(
      cart.map((product) => {
        return product.uid === uid
          ? { ...product, quantity: itemQuantity }
          : product;
      })
    );

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        uniqueItems,
        removeItem,
        addProduct,
        totalPrice,
        totalProducts,
        updateAddQuantity,
        updateSubQuantity,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
