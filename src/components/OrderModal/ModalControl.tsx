import React from 'react';
import styles from './OrderModal.module.css';


type PropType = {
  totalAmount: number,
  appear: boolean,
  checkoutAppear: boolean,
  onOrder: React.Dispatch<React.SetStateAction<boolean>>,
  onClose: () => void
}

const ModalControl = (props: PropType): JSX.Element => {

  const modalCloseHandler = (): void => {
    props.onClose();
  }
  const orderHandler = (): void => {
    props.onOrder(true);
  }

  return (
    <div className={`${styles['modal__food-list__last-item']}`}>
      <div className={`${styles['total-amount']}`}>
        <p>Total Amount</p>
        <p>$ {props.totalAmount}</p>
      </div>
      {
        (props.checkoutAppear && Boolean(props.totalAmount))
        ||
        <div className={`${styles['modal-actions']}`}>
          <button onClick={modalCloseHandler}

            className={`${styles['modal-closeBtn']} ${styles['modal-btn']}`} >Close</button>
          {props.appear
            &&
            (
              <button
                className={`${styles['modal-orderBtn']} ${styles['modal-btn']}`}
                onClick={orderHandler}
              >
                Order
              </button>
            )
            
          }
        </div>
      }
    </div>
  )
}

export default ModalControl

/**
 * Modal Control Component opens Order Form upon order click
 */