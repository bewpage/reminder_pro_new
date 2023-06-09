import { useState } from 'react';
import { authApp } from '../../firebase';

export const useSignIn = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = e => {
    setError({ message: '' });
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = event => {
    event.preventDefault();
    const { email, password } = data;
    if (email === '' || password === '') {
      setError({ message: 'Please enter an email and password' });
    } else {
      authApp
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          setError({ message: '' });
        })
        .catch(error => {
          setError({
            message: error.message,
          });
        });
    }
  };

  return {
    data,
    error,
    handleAnyInputChange,
    signIn,
  };
};
