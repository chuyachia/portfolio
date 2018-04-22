'use strict';

import React from 'react';

class MyWorkChoice extends React.Component {
    render(){
        const blackStyle = {
            height: "100vh",
            height: "-webkit-calc(100vh - 100px)",
            height: "-moz-calc(100vh - 100px)",
            height: "calc(100vh - 100px)",
            backgroundColor:"#1a1a1a",
            cursor: "pointer"
        };
        const whiteStyle = {
            height: "100vh",
            height: "-webkit-calc(100vh - 100px)",
            height: "-moz-calc(100vh - 100px)",
            height: "calc(100vh - 100px)",
            backgroundColor:"white",
            cursor: "pointer"
        };
        const textMiddle ={
            position:"relative",
            top :"50%",
            textAlign:"center",
            fontSize:"18px",
            
        };
        return(
          <div class="row" style ={{margin:"0px"}}>
            <div class="col-sm-6" style ={blackStyle} onClick={this.props.showWeb}>
                <div style={textMiddle}>Web development</div>
            </div>
            <div class="col-sm-6" style = {whiteStyle} onClick={this.props.showData}>
                <div style={textMiddle}>Data analysis</div>
            </div>
          </div>
        )
    }
}

export default MyWorkChoice;