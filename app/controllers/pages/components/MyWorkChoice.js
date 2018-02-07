'use strict';

import React from 'react';

class MyWorkChoice extends React.Component {
    render(){
        const blackStyle = {
            height: "calc(100% - 90px)",
            backgroundColor:"#1a1a1a",
        }
        const whiteStyle = {
            height: "calc(100% - 90px)",
            backgroundColor:"white",
        }
        const textMiddle ={
            position:"relative",
            top :"50%",
            textAlign:"center",
            fontSize:"18px",
            cursor: "pointer"
        }
        return(
          <div class="row" style ={{margin:"0px"}}>
            <div class="col-sm-6" style ={blackStyle}>
                <div style={textMiddle}  onClick={this.props.showWeb}>Web development</div>
            </div>
            <div class="col-sm-6" style = {whiteStyle}>
                <div style={textMiddle}  onClick={this.props.showData}>Data analysis</div>
            </div>
          </div>
        )
    }
}

module.exports = MyWorkChoice;