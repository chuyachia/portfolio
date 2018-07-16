'use strict';

import {connect} from "react-redux";
import React from 'react';
import {viewProject} from  "../actions";


class Card extends React.Component {
    constructor(props){
        super(props);
    }
    viewProject(){
        this.props.dispatch(viewProject(this.props.title,Date.now()));
    }
    render(){
        return(
            <div class="card">
                <div class="image" >
                     <a href={this.props.url_app} target="_blank"
                     onClick={()=>this.viewProject()}
                     ><img src={this.props.img} style={{backgroundColor:'#888888'}} class="card-img-top"/></a>
                </div>
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text" >{this.props.desc}</p>
                <p class="card-text"> Tech stack: {this.props.techs.map(function(t){return t+" "})}</p>
                <div class="btn-wrap" style={{}}>
                    <a href={this.props.url_app} target="_blank" class="btn btn-primary" 
                        style={{flex:"1 auto"}}
                        onClick={()=>this.viewProject()}>
                        <i class="fas fa-link"></i>&nbsp;Project
                    </a>
                    <a href={this.props.url_code} target="_blank" class="btn btn-primary"
                        style={{flex:"1 auto"}}
                        onClick={()=>this.viewProject()}>
                        <i class="fas fa-code"></i>&nbsp;Codes
                    </a>
                </div>
            </div>
        )
    }
}

export default connect()(Card);