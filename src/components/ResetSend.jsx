import React, { Component } from 'react';
import { Link } from 'react-router';


class ResetSend extends Component {
    render(){
        return(
            <div className='container app_header'>
                <h3 className='app-title'>Check your inbox for a password reset email</h3>
                <hr/>
                <div><Link to={'/signin'}> and Sign in now</Link></div>
            </div>
        )
    }
}

export default ResetSend;