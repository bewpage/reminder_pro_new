import React from 'react';
import { connect } from 'react-redux';
import { authApp } from '../firebase';
import Container from 'react-bootstrap/Container';

import AddReminder from './AddReminder/AddReminder';
import ReminderList from './ReminderList/ReminderList';
import CompleteReminderList from './CompleteReminderList/CompleteReminderList';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

const Home = () => {
  const signOut = () => {
    authApp.signOut().catch(error => {
      console.log('error', error);
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="p-4 p-md-5">
            <div>
              <div>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h3>
                      <strong>Reminder Pro</strong>
                    </h3>
                  </div>
                  <div>
                    <button className="btn btn-danger" onClick={signOut}>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="w-100">
                  <hr />
                </div>
              </div>
            </div>
            <section>
              <Container>
                <Row>
                  <AddReminder />
                </Row>
                <hr />
              </Container>
            </section>
            <section>
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-between">
                    <div className="w-50 pe-3">
                      <ReminderList />
                    </div>
                    <div className="w-50 ps-3">
                      <CompleteReminderList />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(Home);
