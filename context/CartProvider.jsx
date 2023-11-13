import React, { useContext, useEffect, useReducer } from 'react';

const MyContext = React.createContext();

const CartProvider = ({ children }) => {
  let initialCart = [];


 

  const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
      const updatedCart = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    } else if (action.type === 'REMOVE_FROM_CART') {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

      
    }
    else if (action.type === 'LOAD_CART') {

      return action.payload;


    }
  };

  const [cart, dispatchCart] = useReducer(reducer, initialCart);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      dispatchCart({ type: 'LOAD_CART', payload: JSON.parse(cart) });
    }
  }, []);

  return (
    <MyContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;
