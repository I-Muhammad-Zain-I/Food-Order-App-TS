import  { AxiosResponse } from 'axios'
import axiosInstance from '../services/axiosConfig';
import { CartItem, FoodItem } from '../constants';
import { UserData } from '../components/OrderModal/CheckoutForm/Checkout';


const getMeals = async (setError: React.Dispatch<React.SetStateAction<string>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<FoodItem[] | undefined> => {
  setIsLoading(true);
  try {
    const response = await axiosInstance.get("/meals.json");
    return response.data
  }
  catch (error: any) {
    console.log(error);
    setIsLoading(false);
    setError(error.message);
  }
  finally {
    console.log("getMeals Finished Executing..!");
  }
}
export type getMealsReturnType = Awaited<ReturnType<typeof getMeals>>


const postUserOrders = async (userData: UserData, orderedItems: CartItem[]) => {

  try {
    const response: AxiosResponse = await axiosInstance.post("/orders.json", { user: userData, orderedItems: orderedItems })
    return response?.status;
  }
  catch (error) {
    console.log(error);
  }
  finally {
      console.log("postUserOrders Finished Executing..!");
  }
}
export {postUserOrders, getMeals}