import CartContext from './CartContext';
import {useReducer} from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // TODO: check if item already exists
      return {
        items: [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      };
    case 'REMOVE_ITEM':
      return;
    default:
      return state;
  }
};

const CartProvider = props => {
  const [state, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = item => {
    dispatchAction({
      type: 'ADD_ITEM',
      item
    });
  };
  
  const removeItemFromCart = id => {
    dispatchAction({
      type: 'REMOVE_ITEM',
      id
    });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;