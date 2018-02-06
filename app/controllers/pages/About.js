import React from 'react';
import { Link  } from "react-router-dom";

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            fulltext:"Hi, there! My name is Chu-Ya. I'm an aspiring web developper with a love for data analysis",
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
        var cardStyle={
            padding:"20px"
        };
        return(
            <div style={{ minHeight: "calc(100% - 90px)",display: "flex",alignItems: "center",flexWrap: "wrap"}}>
                <div class="container">
                <div style={{boxShadow: "10px 10px 5px grey"}} class="jumbotron">
                    <h1 class="display-4">Web developement + <br/>Data analysis</h1>
                    <p class="lead">{this.state.displaytext}</p>
                    <p class="lead">
                         <Link class="btn btn-primary btn-lg" to="/myworks" style={{fontSize:"16px"}}>
                            See my works <i class="fas fa-long-arrow-alt-right fa-align-center fa-lg"></i>
                        </Link>
                    </p>
                </div>
                <div class="row lead">
                    <div class="col-sm-4" style={cardStyle}>
                        I've been learning web programming through <a href="#">freeCodeCamp</a> program and other online resources
                    </div>
                    <div class="col-sm-4" style={cardStyle}>
                        I have a great interest in <a href="#">statistics</a>, <a href="#">machine learning</a> and <a href="#">blockchain technology</a>
                    </div>
                    <div class="col-sm-4" style={cardStyle}>
                        I am a self-learner and I am always seeking to improve my <a href="#">programming skill</a>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

module.exports = Home; 