'use strict';

import { Link  } from "react-router-dom";
import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fulltext:"Hi, there! My name is Chu-Ya. I'm a self-taught web developer with a love for data analysis.",
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
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-5">Web development + Data analysis</h1>
                    <p className="lead">{this.state.displaytext}</p>
                    <p className="lead">
                         <Link className="btn btn-lg btn-danger" 
                            to={{pathname:"/myworks",state:{ referrer: "button" }}}>
                            See my works <i className="fas fa-long-arrow-alt-right fa-align-center fa-lg"></i>
                        </Link>
                    </p>
                </div>
                <div className="row lead">
                    <div className="col-md-4 dot-decorate">
                        I've been learning web programming with&nbsp; 
                        <a href="https://www.freecodecamp.org/portfolio/chuyachia" target="_blank">freeCodeCamp</a>
                        &nbsp;and other online resources
                    </div>
                    <div className="col-md-4 dot-decorate">
                        I have a strong interest in&nbsp;
                        <a href="https://github.com/chuyachia/ml" target="_blank">machine learning</a>,&nbsp;
                        <a href="https://github.com/chuyachia/CS224n" target="_blank">deep learning</a> and&nbsp;
                        <a href="https://github.com/chuyachia/glm" target="_blank">statistics</a>
                    </div>
                    <div className="col-md-4 dot-decorate">
                        I am a quick learner and am always seeking to improve my&nbsp;
                        <a href="https://www.hackerrank.com/chuyachia" target="_blank">programming skills</a>
                    </div>
                    <div className="col-md-12">
                        <h5>My main tools</h5>
                        <div className="package-icons">
                            <i className="fab fa-js fa-5x"></i>
                            <i className="fab fa-react fa-5x"></i>
                            <i className="fab fa-node fa-5x"></i>
                            <i className="fab fa-html5 fa-5x"></i>
                            <i className="fab fa-css3-alt fa-5x"></i>
                            <i className="fab fa-less fa-5x"></i>
                            <i className="fab fa-r-project fa-5x"></i>
                            <i className="fab fa-python fa-5x"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 