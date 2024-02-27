import ReactDOM from 'react-dom';
import styles from './OrderModal.module.css';
import ModalList from './ModalList';

const OrderModal = (): JSX.Element => {

  const ModalBackdrop = (): JSX.Element => {
    return <div className={`${styles['modal-overlay']}`} />
  }

  return (
    <>
      {
        ReactDOM.createPortal(<ModalBackdrop />, document.getElementById('backdrop-root')!)
      }
      {
        ReactDOM.createPortal(<ModalList />, document.getElementById('overlay-root')!)
      }
    </>
  )
}

export default OrderModal