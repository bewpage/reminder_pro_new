import { useState } from 'react';
import { authApp } from '../../firebase';

export const useSingUp = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = e => {
    setError({ message: '' });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = event => {
    event.preventDefault();
    if (data?.email || data?.password) {
      const { email, password } = data;
      authApp
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          if (user) {
            setError({ message: '' });
          }
        })
        .catch(error => {
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

  return {
    data,
    error,
    handleAnyInputChange,
    signUp,
  };
};
