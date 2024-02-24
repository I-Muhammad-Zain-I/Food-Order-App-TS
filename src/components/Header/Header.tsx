import React, { ReactElement, useContext, useEffect, useState } from 'react'
import cartSvg from '../../assets/images/cart.svg';
import classes from './Header.module.css';

const Header = (): ReactElement => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  const [count, setCount] = useState(0);
  console.log("Header Re-rendered");

  const modalAppearHandler = () => {
    // modalAppearCtx.setAppear(true);
  }

  
  useEffect(() => {
    if(count === 0) {
      // Stop Bump from animation on start
      return;
    }
    // Switch State to Apply class
    setIsButtonAnimated(true);
    
    // Set Timer to remove class
    const timer = setTimeout(() => {
        setIsButtonAnimated(false);
    }, 300)
    return () => { clearTimeout(timer) }

}, [count])

  const btnClasses = `${classes['cart-button']} ${isButtonAnimated && classes['bump']}`
  
  return (
    <header className={`${classes['header']}`} id='abc'>
      <div className={`${classes['logo']}`}>
        ReactMeals
      </div>
      <button className={btnClasses} id='cart-button'
        onClick={modalAppearHandler}
      >
        <img className={`${classes['cart-icon']}`} src={cartSvg} />
        <p className={`${classes['cart-label']}`}>Your Cart</p>
        <div className={`${classes['cart-item-counts']}`}>{count}</div>
      </button>
     
    </header>
  )
}

export default Header