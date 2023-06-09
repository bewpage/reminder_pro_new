import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authApp } from '../../firebase';

export const useReset = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({ email: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = e => {
    setError({ message: '' });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitResetHandler = event => {
    event.preventDefault();
    if (data.email !== '') {
      authApp
        .sendPasswordResetEmail(data.email)
        .then(() => {
          navigate('/resetpasswordsend');
          setError({ message: '' });
        })
        .catch(error => {
          setError({
            message: error.message,
          });
        });
    } else {
      setError({ message: 'Please enter an email address!' });
    }
  };

  return {
    data,
    error,
    handleAnyInputChange,
    submitResetHandler,
  };
};
