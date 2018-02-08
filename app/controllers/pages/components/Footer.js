'use strict';

import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div style={{position:"fixed",bottom:"0",left:"0",right:"0",margin:"0 auto",textAlign: "right",padding:"10px"}}>
            <a href="https://github.com/chuyachia/" target="_blank"><i class="fab fa-github fa-2x" style={{color:"#919aa1",margin:"5px"}}></i></a> 
            <a href="mailto:chuyachia@gmail.com"><i class="fas fa-at fa-2x" style={{color:"#919aa1",margin:"5px"}}></i></a>
            </div>
        );
    }
}

module.exports = Footer;