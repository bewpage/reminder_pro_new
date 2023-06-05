import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

const SignIn = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = (event, nameInState) => {
    setData({ ...data, [nameInState]: event.target.value });
  };

  const signIn = event => {
    event.preventDefault();
    const { email, password } = data;
    console.log('email', email);
    console.log('password', password);
    if (email === '' || password === '') {
      setError({ message: 'Please enter an email and password' });
    } else {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.log('error', error);
          setError({
            message: error,
          });
        });
    }
  };

  return (
    <div className="container">
      <div className="form-inline app_center">
        <h2 className="app-title">Sign In</h2>
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
            placeholder="paswword"
            onChange={event => handleAnyInputChange(event, 'password')}
          />
          <button className="btn btn-primary" type="button" onClick={signIn}>
            Sign In
          </button>
        </div>
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
        <div>
          <Link to={'/reset'}>Reset password</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
