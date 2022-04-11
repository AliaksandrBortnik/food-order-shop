import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
  const cartItemsList = [{
    id: 'c1',
    name: 'Pizza',
    amount: 5,
    price: 24.00
  }].map(item => <li key={item.id}>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes.cartItems}>
        {cartItemsList}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>17.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;