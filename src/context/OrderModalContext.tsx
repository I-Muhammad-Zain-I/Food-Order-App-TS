import React, { ReactElement, useReducer } from 'react'
import { CartItem } from '../constants';



// OrderModalContext to manage cart Operations

type StateType = {
  orderedItems: CartItem[],
  totalAmount: number
}

const defaultOrderState: StateType = {
  orderedItems: [],
  totalAmount: 0
}
type OrderModalContextType = {
  state: StateType,
  AddOrderToCart: (cartItem: CartItem) => void,
  AddOrderAmount: (cartItem: CartItem) => void,
  SubtractOrderAmount: (cartItem: CartItem) => void,
}
const OrderModalContext = React.createContext<OrderModalContextType>({
  state: defaultOrderState,
  AddOrderToCart: () => { },
  AddOrderAmount: () => { },
  SubtractOrderAmount: () => { },
});

const isPresent = (newItem: CartItem , orderedItems: CartItem[]): boolean => {
 
  let filteredArray = orderedItems.filter((item) => item.id === newItem.id);

  if (filteredArray.length !== 0) return true
  else return false
}

const enum REDUCER_ACTION_TYPE  {
  ADD_ORDER_ITEM,
  ADD_AMOUNT,
  SUB_AMOUNT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  cartItem: CartItem,
}

const orderModalReducer = (state: StateType, action: ReducerAction): typeof defaultOrderState => {

  let newOrderItemList: CartItem[] = [];
  let newtotalAmount = 0;

  switch (action.type) {
    case (REDUCER_ACTION_TYPE.ADD_ORDER_ITEM):
      if (isPresent(action.cartItem, state.orderedItems)) {
        newOrderItemList = state.orderedItems.map((item) => (
          ((item.id === action.cartItem.id) ? ({ ...item, amount: item.amount + action.cartItem.amount }) : (item))))
      }
      else newOrderItemList = [...state.orderedItems, action.cartItem];

      break;

    case (REDUCER_ACTION_TYPE.ADD_AMOUNT):
      newOrderItemList = (state.orderedItems.map((item) => (
        (item.id === action.cartItem.id) ? ({ ...item, amount: item.amount + 1 }) : (item))
      ));
      break;

    case (REDUCER_ACTION_TYPE.SUB_AMOUNT):
      newOrderItemList = (state.orderedItems.map((item) => (
        (item.id === action.cartItem.id) ? 
        ((item.amount - 1 > 0 ? { ...item, amount: item.amount - 1 } : null)) 
        : item
      ))
      ).filter((item) => item !== null) as CartItem[]
      break;
  }
  newtotalAmount = newOrderItemList.reduce((acc, item) => (acc + item.amount * item.price), 0)
  return { ...state, orderedItems: newOrderItemList, totalAmount: Number(newtotalAmount?.toFixed(2)) };
}

type ChildrenType = {
  children?: ReactElement | undefined
}



export const OrderModalContextProvider = (props: ChildrenType) => {
  const [orderState, orderDispatch] = useReducer(orderModalReducer, defaultOrderState);


  const AddOrderToCart = (cartItem: CartItem) => {
    console.log("AddOrderToCart")
    orderDispatch({ type: REDUCER_ACTION_TYPE.ADD_ORDER_ITEM, cartItem: cartItem })
  }
  const AddOrderAmount = (cartItem: CartItem) => {
    console.log("AddOrderAmount")
    orderDispatch({ type: REDUCER_ACTION_TYPE.ADD_AMOUNT, cartItem: cartItem })
  }
  const SubtractOrderAmount = (cartItem: CartItem) => {
    console.log("SubtractOrderAmount")
    orderDispatch({ type: REDUCER_ACTION_TYPE.SUB_AMOUNT, cartItem: cartItem })
  }

  return (
    <OrderModalContext.Provider
      value={{
        state: orderState,
        AddOrderToCart, AddOrderAmount, SubtractOrderAmount
      }}
    >
      {props.children}
    </OrderModalContext.Provider>
  );
}

export default OrderModalContext;