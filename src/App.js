import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = _ => setCartIsVisible(true);
  const hideCartHandler = _ => setCartIsVisible(false);

  return (
    <>
      {cartIsVisible && <Cart onHide={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
