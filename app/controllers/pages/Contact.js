'use strict';

import React from 'react';
import Message from './components/Message.js';

class Contact extends React.Component {
    render(){
        var contactStyle={
            display: "-ms-flexbox",
            display: "-webkit-flex",
            display: "flex",
            height:"calc(100vh - 100px)",
            alignItems: "center",
            flexWrap: "wrap"
        };
        return(
            <div style={contactStyle}>
                <div class="container">
                    <div class="row " style={{width:"100%"}}>
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