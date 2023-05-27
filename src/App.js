import React,{useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/menu/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [isshowCart, setIsShowCart] = useState(false);

  const showCartHandler = () =>{
    setIsShowCart(true);
  }

  const hideCartHandler = () =>{
    setIsShowCart(false);
    console.log(isshowCart)
  }


  return (
    <CartProvider>
      {isshowCart && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
