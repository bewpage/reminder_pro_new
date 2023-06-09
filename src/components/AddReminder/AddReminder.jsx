import React, { useState } from 'react';
import { reminderRef } from '../../firebase';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AddReminder = () => {
  const [data, setData] = useState({ text: '', dueDate: '' });
  const [error, setError] = useState({ message: '' });

  const handleAnyInputChange = e => {
    setError({ message: '' });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitReminder = e => {
    e.preventDefault();
    const { text, dueDate } = data;
    if (text !== '' && dueDate !== '') {
      reminderRef.push({ text, dueDate }).catch(error => {
        setError({
          message: error.message,
        });
      });
    } else {
      setError({ message: 'Please enter a task and due date' });
    }
  };

  return (
    <Col sm={12} lg={8}>
      <div className="p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h4 className="app_subtitle">Add Reminder</h4>
          </div>
        </div>
        <form onSubmit={submitReminder}>
          <div className="row mb-3">
            <label htmlFor="text-input" className="col-sm-3 col-form-label">
              Add task
            </label>
            <Col lg={9}>
              <input
                id="text-input"
                type="text"
                className="form-control"
                placeholder="I have to ..."
                name="text"
                onChange={handleAnyInputChange}
              />
            </Col>
          </div>
          <div className="row mb-3">
            <label htmlFor="dueDate-input" className="col-sm-3 col-form-label">
              Add due date
            </label>
            <Col lg={9}>
              <input
                id="dueDate-input"
                type="datetime-local"
                className="form-control"
                name="dueDate"
                onChange={handleAnyInputChange}
              />
            </Col>
          </div>
          <Col lg={2}>
            <Button className="btn btn-success" type="submit">
              submit
            </Button>
          </Col>
        </form>
        <div className="mt-2">
          {error?.message && (
            <div className="alert alert-warning" role="alert">
              {error?.message}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(AddReminder);
