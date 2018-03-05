'use strict';

import React from 'react';
import Message from './components/Message.js';

class Contact extends React.Component {
    render(){
        return(
            <div class="wrapper">
                <div class="container inner">
                    <div class="row" style={{width:"100%"}}>
                        <div class="col-sm-6">
                            <h3>Drop a message</h3>
                            <Message/>
                        </div>
                        <div class="col-sm-6">
                            <h3>Or contact me at</h3>
                            <h5>chuyachia@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Contact; 