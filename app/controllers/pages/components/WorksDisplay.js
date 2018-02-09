'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from './Card.js';
import axios from 'axios';

class WorksDisplay extends React.Component {
    constructor(){
        super();
        this.state = {data:[]};
    }
    componentDidMount(){
        var compo = this;
        axios.get('/data/'+this.props.type)
          .then(function (response) {
            compo.setState({data:response.data});
          })
          .catch(function (error) {
            console.log(error);
        });

    }
    createCards(){
        return this.state.data.map(function(d){
            return <Card url_app= {d.url_app} 
            url_code= {d.url_code} 
            img = {d.url_img} 
            title={d.title} 
            desc={d.desc} 
            key = {d._id} 
            techs = {d.techs} />;
        });
    }
    
    render(){
        var backBtnStyle = {
            top:"15",
            position: "sticky",
            zIndex:"10",
            height:"40px",
            width:"40px",
            textAlign:"center", 
            marginLeft:"15px",
            borderRadius:"50%",
            cursor: "pointer",
            color:this.props.type=='web'?"#919aa1":"#fff",
            backgroundColor:this.props.type=='web'?"#fff":"#1a1a1a",
            
        }
        return(
            <div style={{backgroundColor:this.props.type=='web'?"#1a1a1a":"#fff",paddingTop:"15px",minHeight:"calc(100% - 90px)"}}>
                <div onClick={this.props.back} style={backBtnStyle}>
                    <i class="fas fa-angle-left" style={{margin:"auto",fontSize:"36px"}}></i>
                </div>
                <div class="container">
                    <div class="row">
                        {this.createCards()}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = WorksDisplay;