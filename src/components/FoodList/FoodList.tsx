import { useEffect, useState } from 'react'
import { foodItems } from '../../constants'
import { FoodItem } from '../../constants';
import FoodListItem from './FoodListItem';
import { getMeals, getMealsReturnType } from '../../api/api';
import styles from './FoodList.module.css'


const FoodList = () => {
  const [foodItemsArray, setFoodItemsArray] = useState<FoodItem[]>(foodItems);      
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMealsHandler = async () => {
      const response: getMealsReturnType = await getMeals(setError, setIsLoading);
      setFoodItemsArray(response ?? foodItems);
    }
    getMealsHandler();
  }, [])



  const contents = (foodItemsArray?.map((foodItem: FoodItem): JSX.Element => (
    <FoodListItem
      key={foodItem.id}
      foodItem={foodItem}
      isLoading={isLoading}
    />
  )))

  return (
    <article className={`${styles['food-list-container']}`}>
      {error  && <p style={{color: "red"}}>Error Occured While Processing Service, Please Try again later.</p>}
      <ul className={`${styles['food-list']}`}>
       {contents}
      </ul>
    </article>
  )
}

export default FoodList


/**
 * Fetches Meals From Firebase in case of any error uses constant Array declared in constant/index.ts
 */