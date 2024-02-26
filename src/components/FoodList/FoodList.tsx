import React, { useState } from 'react'
import { foodItems } from '../../constants'
import { FoodItem } from '../../constants';
import FoodListItem from './FoodListItem';
import styles from './FoodList.module.css'
const FoodList = () => {
  const [foodItemsArray, setFoodItemsArray] = useState<FoodItem[]>(foodItems);
  // const [foodAmount, setFoodAmount] = useState({'m1': 1, 'm2': 1, 'm3': 1, 'm4': 1});        
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const onAddFood = (cartItem: FoodItem) => {

    // props.AddtoCartHandler(cartItem);
  }

  const updateFoodItems = (foodItem: FoodItem) => {
    // setFoodItemsArray()
  }

  const contents = (foodItemsArray?.map((foodItem: FoodItem): JSX.Element => (
    <FoodListItem
      key={foodItem.id}
      foodItem={foodItem}
      onAddFood={onAddFood}
      isLoading={isLoading}
      updateFoodItems = {updateFoodItems}
    // foodObj = {foodObj}
    //  foodAmount = {foodAmount}
    //  setFoodAmount = {setFoodAmount}
    />
  )))

  return (
    <article className={`${styles['food-list-container']}`}>
      <ul className={`${styles['food-list']}`}>
       {contents}
      </ul>
    </article>
  )
}

export default FoodList