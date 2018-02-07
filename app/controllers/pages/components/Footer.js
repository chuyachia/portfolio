'use strict';

import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div style={{position:"fixed",bottom:"0",left:"0",right:"0",margin:"0 auto",textAlign: "right",padding:"10px"}}>
            <i class="fab fa-github fa-2x"></i> <i class="fas fa-at fa-2x"></i>
            </div>
        );
    }
}

module.exports = Footer;