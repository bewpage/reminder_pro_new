import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { completeReminderRef, reminderRef } from "../firebase";

class ReminderItem extends Component{


    completeReminder(){
        const { email } = this.props.user;
        const { text, serverKey } = this.props.reminder;
        reminderRef.child(serverKey).remove();
        completeReminderRef.push({email, text}); //add time stamp for completed task
    }



    render(){
        const { dueDate, text } = this.props.reminder;
        const { email } = this.props.user;
        return(
            <li className='list-group-item'
            >
                <div className='delete-button'
                     onClick={()=> this.completeReminder()}
                >&#x2715;</div>
                <div className='list-group'>
                    <div className='title-reminder'><strong>{text}</strong></div>
                    <div>{moment(dueDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                    <div><em>{moment(dueDate).fromNow()}</em></div>
                    <div><span>submitted by  <em>{email}</em></span></div>
                </div>
                </li>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(ReminderItem);