'use strict';

import React from 'react';
import { Link  } from "react-router-dom";

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            fulltext:"Hi, there! My name is Chu-Ya. I'm an aspiring web developer with a love for data analysis",
            displaytext:"",
            i :0
        };
        this.timeout = [];
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
    }
    componentWillUnmount(){
      for(var i in this.timeout){
        clearTimeout(this.timeout[i]);
      }
    }
    render(){
        var aboutStyle={
            minHeight: "100vh",
            minHeight: "-webkit-calc(100vh- 100px)",
            minHeight: "-moz-calc(100vh - 100px)",
            minHeight: "calc(100vh - 100px)",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
        };
        var cardStyle={
            padding:"20px"
        };
        return(
            <div style={aboutStyle}>
                <div class="container">
                <div style={{boxShadow: "10px 10px 5px grey"}} class="jumbotron">
                    <h1 class="display-4">Web development + <br/>Data analysis</h1>
                    <p class="lead">{this.state.displaytext}</p>
                    <p class="lead">
                         <Link class="btn btn-primary btn-lg" to="/myworks" style={{fontSize:"16px"}}>
                            See my works <i class="fas fa-long-arrow-alt-right fa-align-center fa-lg"></i>
                        </Link>
                    </p>
                </div>
                <div class="row lead">
                    <div class="col-sm-4" style={cardStyle}>
                        I've been learning web programming through <a href="https://www.freecodecamp.org/chuyachia" target="_blank">freeCodeCamp</a> program and other online resources
                    </div>
                    <div class="col-sm-4" style={cardStyle}>
                        I have a strong interest in <a href="https://github.com/chuyachia/ml" target="_blank">machine learning</a>,
                        <a href="https://github.com/chuyachia/CS224n" target="_blank"> deep learning</a> and
                        <a href="https://github.com/chuyachia/glm" target="_blank"> statistics</a>
                    </div>
                    <div class="col-sm-4" style={cardStyle}>
                        I am a self-learner and I am always seeking to improve my <a href="https://www.hackerrank.com/chuyachia" target="_blank">programming skill</a>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

module.exports = Home; 