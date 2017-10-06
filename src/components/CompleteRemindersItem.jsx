import React, { Component } from 'react';
import { completeReminderRef } from '../firebase';
import { connect } from 'react-redux';


class CompleteRemindersItem extends Component{

    removeReminder(){
        const { serverKey } = this.props.completeTask;
        completeReminderRef.child(serverKey).remove();
    }

    render(){
        const { text, email } = this.props.completeTask;
        console.log('now time', this.props.finishedTime);
        return(
            <div>
                <li
                    className='list-group-item'
                >
                    <div className='delete-button'
                        onClick={()=> this.removeReminder()}
                    >&#x2715;
                    </div>
                    <div className='list-group'>
                        <div className='title-reminder'><strong>{text}</strong></div>
                        <div><span>done by  <em>{email}</em></span></div>
                    </div>
                </li>
            </div>
        )
    }
}


export default CompleteRemindersItem;