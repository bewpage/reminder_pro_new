import React, { useState } from 'react';
import { firebaseApp } from '../../firebase';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = (event, nameInState) => {
    setData({
      ...data,
      [nameInState]: event.target.value,
    });
  };

  const signUp = event => {
    event.preventDefault();
    if (data?.email || data?.password) {
      const { email, password } = data;
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          console.log('error', error);
          setError({
            message: error.message,
          });
        });
    } else {
      setError({
        message: 'Please enter an email and password.',
      });
    }
  };

  return (
    <div className="form-inline">
      <h2>New User - Sign Up</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="email"
          onChange={event => handleAnyInputChange(event, 'email')}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={event => handleAnyInputChange(event, 'password')}
        />
        <button className="btn btn-primary" type="button" onClick={signUp}>
          Sign Up
        </button>
      </div>
      <div>{error?.message}</div>
      <div>
        <Link to={'/signin'}>Already a user? Sign in instead.</Link>
      </div>
    </div>
  );
};

export default SignUp;
