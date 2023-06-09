import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/Container';

export const UserFormTemp = ({
  title,
  links,
  handleAnyInputChange,
  submit,
  error,
  data,
}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={5} md={10}>
          <div className="p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="d-flex">
              <div className="w-100">
                <hr />
              </div>
            </div>
            <form>
              {Object.keys(data).map(key => {
                return (
                  <div className="form-group mb-3" key={key}>
                    <label htmlFor={key} className="visually-hidden"></label>
                    <input
                      id={key}
                      type={key}
                      className="form-control"
                      placeholder={key}
                      name={key}
                      onChange={handleAnyInputChange}
                    />
                  </div>
                );
              })}
              <div className="form-group mb-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={submit}>
                  {title}
                </button>
              </div>
              <div className="d-md-flex justify-content-between">
                {links.map(link => {
                  return (
                    <Fragment key={link.id}>
                      <Link to={`/${link.url}`}>
                        <Button
                          variant="link"
                          className="link-underline-light mb-3">
                          {link.text}
                        </Button>
                      </Link>
                    </Fragment>
                  );
                })}
              </div>
              {error?.message && (
                <div className="alert alert-warning" role="alert">
                  {error?.message}
                </div>
              )}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserFormTemp;
