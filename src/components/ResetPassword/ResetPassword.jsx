import React from 'react';
import UserFormTemp from '../LoginFormTemp/UserFormTemp';
import { useReset } from './useReset';

const resetLinks = [
  {
    id: 1,
    text: 'Sign In',
    url: 'signin',
  },
];

const ResetPassword = () => {
  const { data, error, handleAnyInputChange, submitResetHandler } = useReset();

  const config = {
    title: 'Reset Password',
    links: resetLinks,
    handleAnyInputChange,
    submit: submitResetHandler,
    data,
    error,
  };

  return <UserFormTemp {...config} />;
};

export default ResetPassword;
