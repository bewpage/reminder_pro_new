import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import ResetPassword from './ResetPassword/ResetPassword';
import ProtectedRoute from './AuthValidation/ProtectedRoute';
import AuthHandler from './AuthValidation/AuthHandler';
import ResetSend from './ResetPassword/ResetSend';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AuthHandler>
            <Routes>
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/signin'} element={<SignIn />} />
              <Route path={'/resetpassword'} element={<ResetPassword />} />
              <Route path={'/resetpasswordsend'} element={<ResetSend />} />
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
        </Col>
      </Row>
    </Container>
  );
};
export default App;
