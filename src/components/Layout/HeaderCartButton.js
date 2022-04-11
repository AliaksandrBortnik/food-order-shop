import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import {useContext} from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const totalCountOfItems = cartContext.items
    .reduce((accum, item) => accum + item.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCountOfItems}</span>
    </button>
  )
};

export default HeaderCartButton;