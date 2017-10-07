import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firebaseApp} from "../firebase";

import AddReminder from './AddReminder';
import ReminderList from './ReminderList';
import CompleteReminderList from "./CompleteReminderList";



class App extends Component{


    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div className='border_box'>
                <div className='container border_box app_header'>
                    <h3 className='app-title'><strong>Reminder Pro New</strong></h3>
                    <hr/>
                </div>
                <div className='container border_box'>
                    <div className='row space'>
                        <div className='col-sm-12'>
                            <button className='btn btn-danger'
                                    onClick={() => this.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container border_box'>
                    <div className='row space'>
                        <AddReminder />
                    </div>
                    <hr/>
                </div>
                <div className='container border_box'>
                    <div className='row'>
                        <ReminderList/>
                        <CompleteReminderList/>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null)(App);