'use strict';

import React from 'react';
import Transition from 'react-transition-group/Transition';


const toCircle={
  exiting: {
    borderRadius: "0%", 
    transform: "scale(1)"
  },
  exited: {
    borderRadius: "100%",
    transform: "scale(0.05)"
  }
};
const backgroundStyles={
  web:{backgroundColor:'#1a1a1a'},
  data:{backgroundColor:'white'}
};
class MyWorkChoice extends React.Component {
    constructor() {
        super();
        this.state = {
            choice:null,
            chosen:false
        };
    }
    render(){
        return(
          <Transition in={!this.state.chosen} timeout={0}>
              {(state)=>{
                return(
                <div className="work-choice" style={backgroundStyles[this.state.choice]}>
                    <div style={{backgroundColor:"#1a1a1a",...toCircle[state]}} 
                    onClick={()=>{
                        this.setState({chosen:true,choice:'web'});
                        setTimeout(()=>this.props.showWeb(),400);
                    }}>
                        <h5 style={{color:"white"}}>Web development</h5>
                    </div>
                    <div style = {{backgroundColor:"white",...toCircle[state]}} 
                    onClick={()=>{
                      this.setState({chosen:true,choice:'data'});
                      setTimeout(()=>this.props.showData(),400);
                    }}>
                        <h5>Data analysis</h5>
                    </div>
                </div>)
              }}
          </Transition>
        )
    }
}

export default MyWorkChoice;