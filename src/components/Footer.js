'use strict';

import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div style={{position:"fixed",bottom:"0",right:"0",textAlign: "right",padding:"15px"}}>
            <span style={{position:"relative",display:"block"}}><a href="https://github.com/chuyachia/" target="_blank"><i className="fab fa-github fa-2x" style={{color:"#919aa1",marginTop:"5px"}}></i></a></span> 
            <span style={{position:"relative",display:"block"}}><a href="mailto:chuyachia@gmail.com"><i className="fas fa-at fa-2x" style={{color:"#919aa1",marginTop:"5px"}}></i></a></span>
            </div>
        );
    }
}

export default Footer;