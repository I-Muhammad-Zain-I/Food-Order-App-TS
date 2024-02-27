import React, { useEffect, useState } from 'react'
import styles from './OrderModal.module.css';

type PropType = {
  message: string,
  flag: boolean
  setAppear: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderSubmitMessage = (props: PropType) => {
  
  const messageClass = props.flag ? `${styles.success}` : `${styles.failure}`
    const [timer, setTimer] = useState(3);

  useEffect(() => {

    let interval = 0
    if (timer > 0) {

        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    
      } else {
        props.setAppear(false);
        clearInterval(interval);
      }
    
    return () => clearInterval(interval);
  }, [timer])
 return (
    <div className={messageClass}>
        <p>{props.message}</p>
        <p>Exiting in {timer}s</p>
    </div>
  )
}

export default OrderSubmitMessage

/**
 * Component that becomes visible when user POST the order 
 * shows success or error message depending on response
 */