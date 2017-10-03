import React, { Component } from 'react';
import moment from 'moment';

class ReminderItem extends Component{


    render(){
        const { dueDate, text } = this.props.reminder;
        return(
            <li className='list-group-item'>
                <div className='delete-button'
                     // onClick={()=>this.deleteReminder(reminder.id)}
                >&#x2715;</div>
                <div className='list-group'>
                    <div className='title-reminder'><strong>{text}</strong></div>
                    <div>{moment(dueDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                    <div><em>{moment(dueDate).fromNow()}</em></div>
                </div>
                </li>
        )
    }
}

export default ReminderItem;