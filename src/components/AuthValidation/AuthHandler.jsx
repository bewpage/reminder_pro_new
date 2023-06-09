import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './context';
import { authApp } from '../../firebase';
import { connect } from 'react-redux';
import { logUser } from '../../actions';

export const AuthHandler = ({ children, dispatch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [pathname, setPathname] = useState('');

  function onAuthStateChange() {
    return authApp.onAuthStateChanged(user => {
      if (user) {
        const { email } = user;
        setIsUserLoggedIn(true);
        navigate('/home');
        dispatch(logUser(email));
      } else {
        navigate('/signin', { replace: true });
      }
    });
  }

  useEffect(() => {
    /*
     * When application is staring, we need to save
     * path of that page, that user wanted to open
     * at the first place
     */
    if (!pathname) {
      setPathname(location.pathname);
    }
    const unsubscribe = onAuthStateChange();
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default connect(null, null)(AuthHandler);
