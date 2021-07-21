import React, { useState } from 'react';
import './SignUp.scss'

export default function SignUp(props) {

  // Data for input fields, thier validation and error messaging
  const signUpForm = [
    {
      name: 'login',
      label: 'ENTER LOGIN',
      type: 'login',
      emptyMessage: 'Please enter login',
      wrongMessage: 'Login should be 3-32 characters long',
      checkCorrect: function(str) {
        return str.length > 2 && str.length <= 32
      },
    },
    {
      name: 'password',
      label: 'ENTER PASSWORD',
      type: 'password',
      emptyMessage: 'Please enter password',
      wrongMessage: 'Password should be at least 8 characteres long',
      checkCorrect: function(str) {
        return str.length >= 8 && str.length <= 256
      },
    }, 
    {
      name: 'password-repeat',
      label: 'REPEAT PASSWORD',
      type: 'password',
      emptyMessage: 'Please repeat password',
      wrongMessage: 'Passwords do not match',
      checkCorrect: function(str) {
        return str === document.getElementById('signup-password').value
      },
    }, 
  ];

  /** Check that each input field contains 
   *  text and this text fits requirements */
  const validateInput = function () {
    for (const field of signUpForm) {

      const { name, emptyMessage, wrongMessage, checkCorrect } = field;

      const input = document.getElementById(`signup-${name}`);
      const exclaim = document.getElementById(`exclaim-${name}`);
      const popup = document.getElementById(`popup-${name}`);
      
      if (!input.value || !checkCorrect(input.value)) {
        input.classList.add('input-error');
        exclaim.classList.add('show');
        popup.innerText = (!input.value) ? emptyMessage : wrongMessage;
      }
    }
  }

  // Clear error style, exclamation sign and message 
  // (for input field onFocus attribute)
  const clearError = function(id) {
    document.getElementById(id).classList.remove('input-error');
    document.getElementById(`exclaim-${id.replace(/signup-/, '')}`).classList.remove('show');
  }

  // Actions on sign-up form submit
  const clickSubmit = function (e) {
    e.preventDefault();

    // Perform input fields validation
    validateInput();
  };


  return (
    <section className="signup">
      <form className="signup__form" onSubmit={(e) => clickSubmit(e)} >
        <h2 className="signup__form__header">SIGN UP</h2>

        {signUpForm.map(field => 
          <div className="signup__form__wrapper" key={field.name}>
            <label className="signup__form__label" htmlFor={`signup-${field.name}`}>{field.label}</label>
            <i id={`exclaim-${field.name}`} className="fa fa-exclamation-circle signup__form__exclaim">
              <span id={`popup-${field.name}`} className="signup__form__popup"></span>

            </i>
            <input
              className="signup__form__input"
              id={`signup-${field.name}`}
              name={`${field.name}`}
              autoComplete='off'
              type={field.type}
              onFocus={(e) => clearError(e.target.id)}></input>
          </div>
        )}
        <button className="signup__form__button">SUBMIT</button>
      </form>
    </section>

  );
};