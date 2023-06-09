import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const ResetSend = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={5} md={10}>
          <div className="p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="app-title">
                  Check your inbox for a password reset email
                </h3>
              </div>
            </div>
            <div className="d-flex">
              <div className="w-100">
                <hr />
              </div>
            </div>
            <div>
              <Link to={'/signin'}>
                <Button variant="link" className="link-underline-light mb-3">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetSend;
