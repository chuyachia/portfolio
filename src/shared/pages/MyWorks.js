'use strict';

import {connect} from "react-redux";
import MyWorkChoice from '../components/MyWorkChoice.js';
import React from 'react';
import WorksDisplay from '../components/WorksDisplay.js';
import {visitPage,sendData} from "../actions";


class Myworks extends React.Component {
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
        this.state={
            view:'index'
        };
    }
    sendData(event){
        event.preventDefault();
        sendData(this.props.store);
    }
    componentDidMount(){
        const referrer = this.props.location.state?this.props.location.state.referrer:null;
        this.props.dispatch(visitPage('myworks',referrer,Date.now()));
        window.addEventListener("unload", this.sendData,false);
    }
    componentWillUnmount(){
        window.removeEventListener("unload", this.sendData);
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

var propsMap = (store)=>{
    return{
        store:store
    }
}

export default connect(propsMap)(Myworks); 