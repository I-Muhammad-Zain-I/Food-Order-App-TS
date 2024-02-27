import { FormEventHandler, useRef } from 'react';
import classes from './Checkout.module.css';


import CheckoutFormInput from './CheckoutFormInput';


const isNotEmpty = (value: string) => value.trim() !== '';
const isFiveChars = (value: string) => (value.trim().length === 5 && isNotEmpty(value));

export type UserData = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
}

type PropType = {
  appear: boolean,
  onCancel: () => void,
  onConfirm: (userData: UserData) => void,
}

type RefType = {
  IsValid: boolean,
  value: string
}

const Checkout = (props: PropType) => {
  const nameRef = useRef<RefType>(null);
  const streetRef = useRef<RefType>(null);
  const postalRef = useRef<RefType>(null);
  const cityRef = useRef<RefType>(null);

  // const [confirmDisabled, setConfirmDisabled] = useState(false);
  // const [afterReqMsg, setAfterReqMsg] = useState('');

  // const {
  //   enteredValue: enteredName,
  //   hasError: nameHasError,
  //   IsValid: nameIsValid,
  //   inputChangeHandler: nameChangeHandler,
  //   inputBlurHandler: nameBlurHandler

  // } = useFormInput(isNotEmpty)
  // const {
  //   enteredValue: enteredStreet,
  //   hasError: streetHasError,
  //   IsValid: streetIsValid,
  //   inputChangeHandler: streetChangeHandler,
  //   inputBlurHandler: streetBlurHandler

  // } = useFormInput(isNotEmpty)
  // const {
  //   enteredValue: enteredPostalCode,
  //   hasError: postalCodeHasError,
  //   IsValid: postalCodeIsValid,
  //   inputChangeHandler: postalCodeChangeHandler,
  //   inputBlurHandler: postalCodeBlurHandler

  // } = useFormInput(isFiveChars)
  // const {
  //   enteredValue: enteredCity,
  //   hasError: cityHasError,
  //   IsValid: cityIsValid,
  //   inputChangeHandler: cityChangeHandler,
  //   inputBlurHandler: cityBlurHandler

  // } = useFormInput(isNotEmpty)
  let formIsValid: boolean = false;
 
  

  const confirmHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if ([nameRef, streetRef, cityRef, postalRef].every((val) => val.current !== null)) {
      formIsValid = (nameRef.current?.IsValid &&
        streetRef.current?.IsValid &&
        postalRef.current?.IsValid &&
        cityRef.current?.IsValid) as boolean;
  
        console.log("Form Validity in Check Guard: ", formIsValid)
    }
  
    if (!formIsValid) {
      console.log("Form is Invalid")
      return;
    }

    // setConfirmDisabled(true);

    let userData: UserData = {
      name: nameRef.current?.value as string,
      street: streetRef.current?.value as string,
      postalCode: postalRef.current?.value as string,
      city: cityRef.current?.value as string,
    }

    console.log(userData)

    props.onConfirm(userData)


    // Submit Cart Data


  };
  const cancelFormHandler = () => {
    props.onCancel();
  }




  let confirmIsDisabled = !props.appear && !formIsValid;
  const confirmBtnClasses = (confirmIsDisabled) ? `${classes.disabled}` : `${classes.submit}`;


  // const streetControlClasses = streetHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
  // const postalControlClasses = postalCodeHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`
  // const cityControlClasses = cityHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`



  return (

    <form className={classes.form} onSubmit={confirmHandler}>

      <CheckoutFormInput
        label={"Name"}
        validityFunction={isNotEmpty}
        ref={nameRef}
      />
      <CheckoutFormInput
        label={"Street"}
        validityFunction={isNotEmpty}
        ref={streetRef}
      />
      <CheckoutFormInput
        label={"Postal Code"}
        validityFunction={isFiveChars}
        ref={postalRef}
      />
      <CheckoutFormInput
        label={"City"}
        validityFunction={isNotEmpty}
        ref={cityRef}
      />

      <div className={classes.actions}>
        <button type='button' onClick={cancelFormHandler}>
          Cancel
        </button>
        <button type='submit' className={confirmBtnClasses} disabled={confirmIsDisabled}>Confirm</button>
      </div>

    </form>
  );
};

export default Checkout;


// <div className={nameControlClasses}>
// <label htmlFor='name'>Your Name</label>
// <input type='text' id='name'
//   value={enteredName} onChange={(e) => nameChangeHandler(e)}
//   onBlur={nameBlurHandler}
// />
// {nameHasError && <p>Please Enter a Valid Name!</p>}
// </div>
// <div className={streetControlClasses}>
// <label htmlFor='street'>Street</label>
// <input type='text' id='street'
//   value={enteredStreet} onChange={(e) => streetChangeHandler(e)}
//   onBlur={streetBlurHandler}
// />
// {streetHasError && <p>Please Enter a Valid Street!</p>}
// </div>
// <div className={postalControlClasses}>
// <label htmlFor='postal'>Postal Code</label>
// <input type='text' id='postal'
//   value={enteredPostalCode} onChange={(e) => postalCodeChangeHandler(e)}
//   onBlur={postalCodeBlurHandler}
// />
// {postalCodeHasError && <p>Please Enter a Valid Postal Code!</p>}
// </div>
// <div className={cityControlClasses}>
// <label htmlFor='city'>City</label>
// <input type='text' id='city'
//   value={enteredCity} onChange={(e) => cityChangeHandler(e)}
//   onBlur={cityBlurHandler}
// />
// {cityHasError && <p>Please Enter a Valid City!</p>}
// </div>
// <div className={classes.actions}>
// <button type='button' onClick={cancelFormHandler}>
//   Cancel
// </button>
// <button type='submit' className={confirmBtnClasses} disabled={confirmIsDisabled} >Confirm</button>
// </div>
