import {Fragment} from 'react';
import mealsImage from '../../assets/meals.png';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food order shop</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='Food'/>
      </div>
    </Fragment>
  );
};

export default Header;