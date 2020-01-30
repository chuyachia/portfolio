'use strict';

import MyWorkChoice from '../components/MyWorkChoice.js';
import React from 'react';
import WorksDisplay from '../components/WorksDisplay.js';


class Myworks extends React.Component {
    constructor(props){
        super(props);
        this.state={
            view:'index'
        };
    }
    showWeb(){
        this.setState({
            view:'web'
        });
    }
    showData(){
        this.setState({
            view:'data'
        });
    }
    showIndex(){
        this.setState({
            view:'index'
        });
        
    }
    render(){
        switch(this.state.view){
            case 'web':
                return(<WorksDisplay type="web" back = {this.showIndex.bind(this)}/>);
            case 'data':
                return(<WorksDisplay type="data" back = {this.showIndex.bind(this)}/>);
            default:
                return(<MyWorkChoice showData = {this.showData.bind(this)} showWeb={this.showWeb.bind(this)}/>);
        }
    }
}

export default Myworks; 