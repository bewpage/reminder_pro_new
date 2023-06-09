import React from 'react';
import UserFormTemp from '../LoginFormTemp/UserFormTemp';
import { useSingUp } from './useSingUp';

const signUnLinks = [
  {
    id: 1,
    text: 'Already a user - Sign in instead',
    url: 'signin',
  },
];

const SignUp = () => {
  const { handleAnyInputChange, signUp, data, error } = useSingUp();
  const config = {
    title: 'Sign Up',
    links: signUnLinks,
    handleAnyInputChange,
    submit: signUp,
    data,
    error,
  };
  return <UserFormTemp {...config} />;
};

export default SignUp;
