import React, { ChangeEvent, useState } from "react";


type UseFormInput = {
  enteredValue: string;
  hasError: boolean;
  IsValid: boolean;
  inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: () => void;
}



const useFormInput = (validityFunction: (value: string) => boolean): UseFormInput => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let IsValid = validityFunction(enteredValue);
    
    const hasError = !IsValid && isTouched;
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(e.target.value);
    }
    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    return {
        enteredValue,
        hasError,
        IsValid,
        inputChangeHandler,
        inputBlurHandler
    }
}

export default useFormInput;