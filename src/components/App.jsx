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
            <div className='app'>
                <h3 className='app-title'><strong>Reminder Pro New</strong></h3>
                <hr/>
                <AddReminder />
                <hr/>
                <div className='row space'>
                    <ReminderList/>
                    <CompleteReminderList/>
                </div>
                <hr/>
                <button className='btn btn-danger'
                        onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null)(App);