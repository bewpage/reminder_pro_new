import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import ResetPassword from './ResetPassword/ResetPassword';
import ProtectedRoute from './AuthValidation/ProtectedRoute';
import AuthHandler from './AuthValidation/AuthHandler';

const App = () => {
  return (
    <>
      <AuthHandler>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/resetpassword'} element={<ResetPassword />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthHandler>
    </>
  );
};
export default App;
