import React, { ChangeEvent, useContext, useState } from 'react'
import styles from './FoodList.module.css'
import { FoodItem, CartItem } from '../../constants'
import OrderModalContext from '../../context/OrderModalContext'
type Props = {
  isLoading: boolean
  foodItem: FoodItem
  onAddFood: (cartItem: FoodItem) => void
  updateFoodItems: (FoodItem: FoodItem) => void
}

const FoodListItem = (props: Props) => {
  const [amount, setAmount] = useState(0);
  const OrderModalCtx = useContext(OrderModalContext)
  
  const foodAmountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value)
    // props.updateFoodItems({...props.foodItem, amount})
  }



  const addFoodHandler = () => {
    if(amount == 0) return;
    const cartItem: CartItem = {
      id: props.foodItem['id'],
      name: props.foodItem['name'],
      price: props.foodItem['price'],
      amount: amount,
    };
    setAmount(0);
    console.table(cartItem)
    OrderModalCtx.AddOrderToCart(cartItem)
  }

  return (
    <li className={`${styles['food-list-item']}`} id={props.foodItem['id']}>
      <div className={`${styles['food-list-info']}`}>
        <h3 className={`${styles['food-item__name']}`}>{props.foodItem['name']}</h3>
        <p className={`${styles['food-item__info']}`}><em>{props.foodItem['info']}</em></p>
        <h3 className={`${styles['food-item__price']}`}>${props.foodItem['price']}</h3>
      </div>

      <div className={`${styles['food-list-amount']}`}>
        <div className={`${styles['amount__container']}`}>
          <label htmlFor={props.foodItem['id']}>Amount</label>
          <input 
            id={props.foodItem['id']}
            className={`${styles['amount__input']}`}
            type='number' 
            value={amount}
            onChange={(e) => foodAmountChangeHandler(e)}
          />
        </div>
        <button className={`${styles['amount__addbtn']}`}
          onClick={addFoodHandler}>
          +Add
        </button>
      </div>
    </li>
  )
}

export default FoodListItem