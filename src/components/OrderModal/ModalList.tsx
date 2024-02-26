import React, { useContext, useState } from 'react';
import ModalListItem from './ModalListItem';
import OrderModalContext from '../../context/OrderModalContext';
import ModalAppearContext from '../../context/ModalAppearContext';
import styles from './OrderModal.module.css';

// import Checkout from './checkout-form/Checkout';
// import { postUserOrders } from '../../api/api';
// import OrderSubmitMessage from './OrderSubmitMessage';
import ModalControl from './ModalControl';

const ModalList = (): JSX.Element => {

  const { state: { orderedItems, totalAmount } } = useContext(OrderModalContext);
  const { setAppear } = useContext(ModalAppearContext);

  const [checkoutAppear, setCheckoutAppear] = useState(false);
  const [afterReqMsg, setAfterReqMsg] = useState({ message: '', flag: true });

  const modalAppearHandler = () => {
    setAppear(false);
    setAfterReqMsg({ message: '', flag: true });
  }

  const orderSubmitHandler = (userData: any) => {

    // const postUserOrderHandler = async () => {
    //   const response = await postUserOrders(userData, OrderModalCtx.orderedItems);
    //   if (response == 200) {
    //     setAfterReqMsg({ message: "Order Completed Successfully", flag: true });
    //   } else {
    //     setAfterReqMsg({ message: "Something went wrong, please try again later", flag: false });
    //   }
    //   //    setTimeout(() => ModalAppearCtx.setAppear(false),3000)
    // }
    // postUserOrderHandler();

  }

  const orderedItemList: JSX.Element[] = orderedItems.map((orderItem) => (
    <ModalListItem
      key={orderItem.id}
      orderItem={orderItem}
      checkoutAppear={checkoutAppear}
    />
  ));

  let messageDisplay = afterReqMsg.message;

  return (

    <article className={`${styles['order-modal']}`} id='order-modal'>
      {
        !afterReqMsg.message &&
        <>
          {
            orderedItems.length
              ?

              (<ul className={`${styles['modal__food-list']}`}> {orderedItemList} </ul>)

              : (<p>No Items Available</p>)

          }

          <ModalControl
            totalAmount={totalAmount}
            appear={Boolean(orderedItems.length)}
            checkoutAppear={checkoutAppear}
            onOrder={setCheckoutAppear}
            onClose={modalAppearHandler}
          />
          {/* {checkoutAppear && <Checkout
            onCancel={modalAppearHandler}
            appear={totalAmount}
            setAppear={ModalAppearCtx.setAppear}
            onConfirm={orderSubmitHandler}
          />} */}
        </>
      }

      {
        // messageDisplay && <OrderSubmitMessage
        //   {...afterReqMsg}
        //   setAfterReqMsg={setAfterReqMsg}
        //   setAppear={ModalAppearCtx.setAppear}
        // />
      }
    </article>
  )
}

export default ModalList