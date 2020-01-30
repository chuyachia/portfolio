'use strict';

import React from 'react';
import Message from '../components/Message.js';

class Contact extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Drop a message</h3>
                        <Message/>
                    </div>
                    <div className="col-md-6">
                        <h3>Or contact me at</h3>
                        <h5>chuyachia@gmail.com</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact; 