'use strict';

import { connect } from "react-redux";
import React from 'react';
import Message from '../components/Message.js';
import Navbar from "../components/Navbar";
import {visitPage,sendData} from "../actions";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }
    sendData(event){
        event.preventDefault();
        sendData(this.props.store);
    }
    componentDidMount(){
        const referrer = this.props.location.state?this.props.location.state.referrer:null;
        this.props.dispatch(visitPage('contact',referrer,Date.now()));
        window.addEventListener("unload", this.sendData,false);
    }
    componentWillUnmount(){
        window.removeEventListener("unload", this.sendData);
    }
    render(){
        return(
            <div>
            <Navbar navon="contact"/>
            <div class="wrapper">
                <div class="container inner">
                    <div class="row" style={{width:"100%"}}>
                        <div class="col-sm-6">
                            <h3>Drop a message</h3>
                            <Message/>
                        </div>
                        <div class="col-sm-6">
                            <h3>Or contact me at</h3>
                            <h5>chuyachia@gmail.com</h5>
                        </div>
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

export default connect(propsMap)(Contact); 