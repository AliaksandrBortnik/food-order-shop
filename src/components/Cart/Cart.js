import classes from './Cart.module.css';

const Cart = props => {
  const cartItemsList = [{
    id: 'c1',
    name: 'Pizza',
    amount: 5,
    price: 24.00
  }].map(item => <li>{item.name}</li>);

  return (
    <div>
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
    </div>
  );
};

export default Cart;