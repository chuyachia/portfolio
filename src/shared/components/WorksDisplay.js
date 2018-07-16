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
              if (response.data.success){
                  this.setState({
                      data:response.data.result,
                      loading:false
                  });
              } else {
                this.setState({
                    error:"Oops! Something went wrong. I can't get the projects.",
                    loading:false
                });  
              }
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
        return(
            <div class="inner" style={{backgroundColor:this.props.type=='web'?"#1a1a1a":"#fff"}}>
                <div onClick={this.props.back} class="circle-icon back" style={{
                    color:this.props.type=='web'?"#919aa1":"#fff",
                    backgroundColor:this.props.type=='web'?"#fff":"#1a1a1a",
                }}>
                    <i class="fas fa-angle-left"/>
                </div>
                <div class='loader'>
                    <DotLoader
                    color={'#919aa1'} 
                    loading={this.state.loading} 
                    />
                </div>
                <div class="container">
                    <div class="work-display">
                        {this.state.error&&<p>{this.state.error}</p>}
                        {this.createCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorksDisplay;