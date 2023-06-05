import React, { useState } from 'react';
import { reminderRef } from '../../firebase';
import { connect } from 'react-redux';

const AddReminder = () => {
  const [data, setData] = useState({ text: '', dueDate: '' });

  const handleAnyInputChange = (event, nameInState) => {
    setData({
      ...data,
      [nameInState]: event.target.value,
    });
  };

  const submitReminder = event => {
    event.preventDefault();
    const { text, dueDate } = data;
    reminderRef.push({ text, dueDate });
  };

  return (
    <div className="col-sm-12">
      <h4 className="app_subtitle">Add Reminder</h4>
      <div className="form-inline app_center">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="I have to ..."
            onChange={event => handleAnyInputChange(event, 'text')}
          />
          <input
            type="datetime-local"
            className="form-control"
            onChange={event => handleAnyInputChange(event, 'dueDate')}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={submitReminder}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(AddReminder);
