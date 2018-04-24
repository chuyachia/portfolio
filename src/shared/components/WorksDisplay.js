'use strict';
require('es6-promise').polyfill();

import axios from 'axios';
import Card from './Card.js';
import {DotLoader} from 'react-spinners';
import orderBy from "lodash.orderby";
import React from 'react';

class WorksDisplay extends React.Component {
    constructor(){
        super();
        this.state = {
            loading:true,
            data:[],
            error:null
        };
    }
    componentWillMount(){
        axios.get('/data/'+this.props.type)
          .then((response) => {
              this.setState({
                  data:response.data.result,
                  loading:false
              });
          })
          .catch((error) =>{
            this.setState({
                error:"Oups! Something went wrong. I can't get the projects.",
                loading:false
            });
        });

    }
    createCards(){
        var projects = orderBy(this.state.data,'order');
        return projects.map(function(d){
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
        var displayStyle={
            minHeight: "100vh",
            minHeight: "-webkit-calc(100vh- 100px)",
            minHeight: "-moz-calc(100vh - 100px)",
            minHeight: "calc(100vh - 100px)",
            backgroundColor:this.props.type=='web'?"#1a1a1a":"#fff",
            paddingTop:"15px"
        };
        
        var backBtnStyle = {
            top:"15",
            position: "sticky",
            marginLeft:"15px",
            zIndex:"10",
            color:this.props.type=='web'?"#919aa1":"#fff",
            backgroundColor:this.props.type=='web'?"#fff":"#1a1a1a",
        };
        return(
            <div style={displayStyle}>
                <div onClick={this.props.back} class="circleIcon" style={backBtnStyle}>
                    <i class="fas fa-angle-left"/>
                </div>
                <div class="container">
                    <div class="row" style={{textAlign:"center",display:"inline-block"}}>
                              <div className='sweet-loading' 
                              style={{margin: "0 auto", position:"absolute",top: "50%",left: "50%"}}>
                                <DotLoader
                                  color={'#919aa1'} 
                                  loading={this.state.loading} 
                                />
                              </div>
                        {this.state.error&&<p>{this.state.error}</p>}
                        {this.createCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorksDisplay;