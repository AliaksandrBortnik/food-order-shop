import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import {useRef, useState} from 'react';

const MealItemForm = props => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;

    if (amount.trim().length === 0 || amount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(Number(amount));
  };

  return (
    <form noValidate onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p style={{ color: 'red' }}>Amount must be more than 0</p>}
    </form>
  );
};

export default MealItemForm;