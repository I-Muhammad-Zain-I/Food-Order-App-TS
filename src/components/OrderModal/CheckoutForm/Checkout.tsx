import { FormEventHandler, useRef } from 'react';
import classes from './Checkout.module.css';
import CheckoutFormInput from './CheckoutFormInput';


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

const isNotEmpty = (value: string) => value.trim() !== '';
const isFiveChars = (value: string) => (value.trim().length === 5 && isNotEmpty(value));

const Checkout = (props: PropType) => {

  const nameRef = useRef<RefType>(null);
  const streetRef = useRef<RefType>(null);
  const postalRef = useRef<RefType>(null);
  const cityRef = useRef<RefType>(null);

  let formIsValid: boolean = false;

  const confirmHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if ([nameRef, streetRef, cityRef, postalRef].every((val) => val.current !== null)) {
      // if each ref is "not null" only then check form validity
        formIsValid = ( nameRef.current?.IsValid &&
                        streetRef.current?.IsValid &&
                        postalRef.current?.IsValid &&
                        cityRef.current?.IsValid ) as boolean;
    }

    if (!formIsValid) {
      console.log("Form is Invalid")
      return;
    }

    // string assertion as refs can be null
    let userData: UserData = {
      name: nameRef.current?.value as string,
      street: streetRef.current?.value as string,
      postalCode: postalRef.current?.value as string,
      city: cityRef.current?.value as string,
    }

    console.log(userData)
    props.onConfirm(userData)

  };
  const cancelFormHandler = () => {
    props.onCancel();
  }


  let confirmIsDisabled = !props.appear && !formIsValid;
  const confirmBtnClasses = (confirmIsDisabled) ? `${classes.disabled}` : `${classes.submit}`;

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
        <button type='submit' className={confirmBtnClasses} 
          disabled={confirmIsDisabled}
        >
          Confirm
        </button>
      </div>

    </form>
  );
};

export default Checkout;

/**
 * Checkout Component encloses refs to input components to check:
 * 1. Form validity
 * 2. Extract Input State values
 */