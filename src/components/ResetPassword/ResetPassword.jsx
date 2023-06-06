import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

const ResetPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = event => {
    setEmail(event.target.value);
  };

  const submitResetHandler = event => {
    event.preventDefault();
    if (email !== '') {
      firebaseApp
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          console.log('email with password reset was send to: ', email);
          navigate('/resetsend');
        })
        .catch(error => {
          console.log('error', error);
          setError({
            message: error,
          });
        });
    } else {
      setError({ message: 'Please enter an email address' });
    }
  };

  return (
    <div>
      <h4>Reset Password</h4>
      <div className="form-inline">
        <div className="form-group">
          <input
            type="email"
            placeholder="email"
            className="form-control"
            onChange={handleAnyInputChange}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={submitResetHandler}>
            Submit
          </button>
        </div>
        <div>
          <Link to={'/signin'}>Already a user? Sign in instead.</Link>
        </div>
      </div>
      <div>{error?.message}</div>
    </div>
  );
};

export default ResetPassword;
