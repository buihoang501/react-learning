import React from 'react';
import useInput from './useInput';
import './FormHook.css';

const isNotEmpty = (value) => value.trim() !== '';

const isEmail = (value) => value.includes('@');

const FormHook = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    resetNameInput();
    resetEmailInput();
  };
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Name</label>
          <input
            className={nameInputClasses}
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div>
          <label>Email</label>

          <input
            className={emailInputClasses}
            type='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormHook;
