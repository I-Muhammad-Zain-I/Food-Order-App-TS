import React, { useImperativeHandle } from 'react'
import useFormInput, { UseFormInput } from '../../../hooks/use-formInput'
import classes from './Checkout.module.css';
type Props = {
  label: string,
  validityFunction: (value: string) => boolean
}

const CheckoutFormInput = React.forwardRef((props: Props, ref) => {

  const {
    enteredValue,
    hasError,
    IsValid,
    inputChangeHandler,
    inputBlurHandler

  }: UseFormInput = useFormInput(props.validityFunction)

  useImperativeHandle(ref, () => {
    return {
      IsValid: IsValid,
      value: enteredValue
    }
  })

  const controlClasses = hasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`

  return (
    <div className={controlClasses}>
      <label htmlFor='name'>Your {props.label}</label>
      <input type={props.label} id={props.label}
        value={enteredValue} onChange={(e) => inputChangeHandler(e)}
        onBlur={inputBlurHandler}
      />
      {hasError && <p>Please Enter a Valid {props.label}!</p>}
    </div>
  )
})

export default CheckoutFormInput