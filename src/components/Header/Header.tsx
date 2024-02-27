import { ReactElement, useContext, useEffect, useState } from 'react'
import cartSvg from '../../assets/images/cart.svg';
import classes from './Header.module.css';
import OrderModalContext from '../../context/OrderModalContext';
import ModalAppearContext from '../../context/ModalAppearContext';


const Header = (): ReactElement => {

  const {state: {orderedItems}} = useContext(OrderModalContext)
  const {setAppear} = useContext(ModalAppearContext)

  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  
  console.log("Header Re-rendered");

  const modalAppearHandler = () => {
    console.log("Appear True set")
    setAppear(true);
  }

  useEffect(() => {
    if(orderedItems.length === 0) {
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

}, [orderedItems])

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
        <div className={`${classes['cart-item-counts']}`}>{orderedItems.length}</div>
      </button>
     
    </header>
  )
}

export default Header