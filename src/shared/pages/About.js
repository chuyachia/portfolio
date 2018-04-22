'use strict';

import { connect } from "react-redux";
import { Link  } from "react-router-dom";
import React from 'react';
import {visitPage,viewLink,sendData} from "../actions";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
        this.state = {
            fulltext:"Hi, there! My name is Chu-Ya. I'm a self-taught web developer with a love for data analysis.",
            displaytext:"",
            i :0
        };
        this.timeout = [];
    }
    viewLink(name){
        this.props.dispatch(viewLink(name,Date.now()));
    }
    sendData(event){
        event.preventDefault();
        sendData(this.props.store);
    }
    typeWriter(){
        if (this.state.i <this.state.fulltext.length){
            this.setState({
                displaytext:this.state.displaytext + this.state.fulltext.charAt(this.state.i),
                i: this.state.i+1
            });
            this.timeout.push(setTimeout(this.typeWriter.bind(this), 50));
        }
    }
    componentDidMount(){
        this.typeWriter();
        const referrer = this.props.location.state?this.props.location.state.referrer:null;
        this.props.dispatch(visitPage('about',referrer,Date.now()));
        window.addEventListener("unload", this.sendData,false);
    }
    componentWillUnmount(){
        window.removeEventListener("unload", this.sendData);
        for(var i in this.timeout){
            clearTimeout(this.timeout[i]);
        }
    }
    render(){
        return(
            <div class="wrapper">
                <div class="container inner">
                <div style={{boxShadow: "10px 10px 5px grey",width:"100%"}} class="jumbotron">
                    <h1 class="display-4">Web development + <br/>Data analysis</h1>
                    <p class="lead">{this.state.displaytext}</p>
                    <p class="lead">
                         <Link class="btn btn-lg btn-danger" 
                         to={{pathname:"/myworks",state:{ referrer: "button" }}} 
                         style={{fontSize:"16px"}}>
                            See my works <i class="fas fa-long-arrow-alt-right fa-align-center fa-lg"></i>
                        </Link>
                    </p>
                </div>
                <div class="row lead" style={{width:"100%"}}>
                    <div class="col-md-4" style={{padding:"10px 20px 10px 20px", borderLeft: "1px dashed",borderRight: "1px dashed"}}>
                        I've been learning web programming with 
                        <a href="https://www.freecodecamp.org/chuyachia" target="_blank" 
                        onClick={()=> this.viewLink('fcc')}>freeCodeCamp</a> and other online resources
                    </div>
                    <div class="col-md-4" style={{padding:"10px 20px 10px 20px"}}>
                        I have a strong interest in 
                        <a href="https://github.com/chuyachia/ml" target="_blank" onClick={()=> this.viewLink('ml')}>machine learning</a>,
                        <a href="https://github.com/chuyachia/CS224n" target="_blank" onClick={()=> this.viewLink('dl')}> deep learning</a> and
                        <a href="https://github.com/chuyachia/glm" target="_blank" onClick={()=> this.viewLink('stat')}> statistics</a>
                    </div>
                    <div class="col-md-4" style={{padding:"10px 20px 10px 20px", borderLeft: "1px dashed",borderRight: "1px dashed"}}>
                        I am a quick learner and am always seeking to improve my 
                        <a href="https://www.hackerrank.com/chuyachia" target="_blank" onClick={()=> this.viewLink('hr')}>programming skills</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

var propsMap = (store)=>{
    return{
        store:store
    }
}

export default connect(propsMap)(Home); 