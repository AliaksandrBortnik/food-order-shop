import CartContext from './CartContext';
import {useReducer} from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const totalAmount = state.totalAmount + action.item.price * action.item.amount;

      if (state.items.some(item => item.id === action.item.id)) {
        return {
          items: state.items.map(item => item.id !== action.item.id ?
            item :
            {
              ...item,
              amount: item.amount + action.item.amount
            }),
          totalAmount
        };
      }

      return {
        items: [...state.items, action.item],
        totalAmount
      };
    case 'REMOVE_ITEM':
      const itemIndex = state.items.findIndex(item => item.id === action.id);
      const item = state.items[itemIndex];

      if (state.items[itemIndex].amount === 1) {
        return {
          items: [...state.items.filter(item => item.id !== action.id)],
          totalAmount: state.totalAmount - item.price
        }
      }

      const updatedItems = [...state.items];
      updatedItems[itemIndex] = {...item, amount: item.amount - 1};

      return {
        items: updatedItems,
        totalAmount: state.totalAmount - item.price
      }
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