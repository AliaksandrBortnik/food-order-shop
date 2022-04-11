import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = _ => setCartIsVisible(true);
  const hideCartHandler = _ => setCartIsVisible(false);

  return (
    <CartProvider>
      {cartIsVisible && <Cart onHide={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
