import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

export const images = [img1, img2, img3];


export type CartItem = {
  id: string,
  name: string,
  price: number,
  amount: number,
}

export type FoodItem = {
  id: string,
  name: string,
  info: string,
  price: number,
  // amount?: number
}

export const foodItems: FoodItem[] = [
  {
    id: 'f1',
    name: 'Sushi',
    info: 'Finest Fish and Veggies',
    price: 22.99,
  },
  {
    id: 'f2',
    name: 'Shinetzel',
    info: 'A German Speacialty!',
    price: 16.50,
  },
  {
    id: 'f3',
    name: 'Barbecue Burger',
    info: 'American, Raw, Meaty',
    price: 12.99,
  },
  {
    id: 'f4',
    name: 'Green.. Bowl',
    info: 'Healthy and Green',
    price: 18.99,
  }
]