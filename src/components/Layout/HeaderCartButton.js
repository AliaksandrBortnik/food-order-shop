import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);

  const totalCountOfItems = cartContext.items
    .reduce((accum, item) => accum + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return
    }

    setBtnIsAnimated(true);

    const timerId = setTimeout(
      () => setBtnIsAnimated(false),
      300
    );

    return () => clearTimeout(timerId);
  }, [cartContext.items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCountOfItems}</span>
    </button>
  )
};

export default HeaderCartButton;