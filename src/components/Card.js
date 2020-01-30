'use strict';

import React from 'react';


class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card">
                <div className="image" >
                    <a href={this.props.url_app} target="_blank">
                        <img src={this.props.img} style={{backgroundColor:'#888888'}} className="card-img-top"/>
                    </a>
                </div>
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text" >{this.props.desc}</p>
                <p className="card-text"> Tech stack: {this.props.techs}</p>
                <div className="btn-wrap" style={{}}>
                    <a href={this.props.url_app} target="_blank" className="btn btn-primary" 
                        style={{flex:"1 auto"}} >
                        <i className="fas fa-link"></i>&nbsp;Project
                    </a>
                    <a href={this.props.url_code} target="_blank" className="btn btn-primary"
                        style={{flex:"1 auto"}}>
                        <i className="fas fa-code"></i>&nbsp;Codes
                    </a>
                </div>
            </div>
        )
    }
}

export default Card;