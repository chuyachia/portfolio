'use strict';

import React from 'react';

class Card extends React.Component {
    render(){
        return(
        <div class="col-lg-4">
            <div class="card" style={{height:"450px",marginBottom:"15px"}}>
                <div style={{height:"40%",width:"100%",overflow:"hidden"}}>
                    <a href={this.props.url_app} target="_blank"><img class="card-img-top" src={this.props.img} alt="Card image cap" style={{height:"auto",width:"100%"}}/></a>
                </div>
                  <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.desc}</p>
                    <p class="card-text"> Tech stack: {this.props.techs.map(function(t){return t+" "})}</p>
                    <a href={this.props.url_app} target="_blank" class="btn btn-primary" 
                    style={{position:"absolute",left:"20px",bottom:"10px"}}>
                        <i class="fas fa-link"></i>&nbsp;App
                    </a>
                    <a href={this.props.url_code} target="_blank" class="btn btn-primary" 
                    style={{position:"absolute",right:"20px",bottom:"10px"}}>
                        <i class="fas fa-code"></i>&nbsp;Codes
                    </a>
                  </div>
            </div>
        </div>
        )
    }
}

module.exports = Card;