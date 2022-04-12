import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import {useContext} from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = props => {
  const cartContext = useContext(CartContext);

  const cartIsEmpty = cartContext.items.length === 0;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = item => {};
  const cartItemRemoveHandler = id => {};

  const cartItemsList = cartContext.items
    .map(item => (
      <CartItem
        key={item.id}
        price={item.price}
        name={item.name}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ));

  return (
    <Modal onClick={props.onHide}>
      <ul className={classes['cart-items']}>
        {cartItemsList}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes.buttonAlt}
          onClick={props.onHide}
        >Close
        </button>
        {!cartIsEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;