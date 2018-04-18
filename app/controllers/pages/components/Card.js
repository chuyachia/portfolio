'use strict';

import React from 'react';

class Card extends React.Component {
    render(){
        return(
            <div class="card" style={{height: "550px", width: "350px", display:"inline-block" ,margin:"10px", verticalAlign:"bottom"}}>
                <div style={{height:"50%",width:"100%",overflow:"hidden"}}>
                     <a href={this.props.url_app} target="_blank"><img src={this.props.img}  class="card-img-top"/></a>
                </div>
                  <div class="card-body" style={{textAlign:"left"}}>
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.desc}</p>
                    <p class="card-text"> Tech stack: {this.props.techs.map(function(t){return t+" "})}</p>
                    <a href={this.props.url_app} target="_blank" class="btn btn-primary" 
                    style={{position:"absolute",left:"20px",bottom:"10px"}}>
                        <i class="fas fa-link"></i>&nbsp;Project
                    </a>
                    <a href={this.props.url_code} target="_blank" class="btn btn-primary" 
                    style={{position:"absolute",right:"20px",bottom:"10px"}}>
                        <i class="fas fa-code"></i>&nbsp;Codes
                    </a>
                  </div>
            </div>
        )
    }
}

module.exports = Card;