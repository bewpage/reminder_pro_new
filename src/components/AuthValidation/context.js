import React from 'react';

export const AuthContext = React.createContext({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});
