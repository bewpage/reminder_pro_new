import React from 'react';
import UserFormTemp from '../LoginFormTemp/UserFormTemp';
import { useSignIn } from './useSignIn';

const signInLinks = [
  {
    id: 1,
    text: 'Sign Up',
    url: 'signup',
  },
  {
    id: 2,
    text: 'Reset Password',
    url: 'resetpassword',
  },
];

const SignIn = () => {
  const { handleAnyInputChange, signIn, data, error } = useSignIn();

  const config = {
    title: 'Sign In',
    links: signInLinks,
    handleAnyInputChange,
    submit: signIn,
    data,
    error,
  };

  return <UserFormTemp {...config} />;
};

export default SignIn;
