'use strict';

import React from 'react';
import axios from 'axios';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state={
            state:'unsent',
            name:'',
            email:'',
            text:''
        };
    }
    handleInput(e) {
        var target = e.target;
        this.setState({
          [target.name]: target.value
        });
     } 
     
    submitHandler(event){
        event.preventDefault();
        var compo = this;
        axios.post('/message', {
            inputName: this.state.name,
            inputEmail: this.state.email,
            inputText: this.state.text,
          })
          .then(function (response) {
            compo.setState({state:response.data});
          })
          .catch(function (error) {
            compo.setState({state:"error"});
          });
    }
    render(){
        if (this.state.state=='unsent') {
            return(
            <form onSubmit={this.submitHandler.bind(this)}>
            <fieldset>
                <div class="form-group">
                <label for="inputName">Name</label>
                <input class="form-control" name="name" value = {this.state.name} placeholder = "Enter name" onChange={this.handleInput.bind(this)} required/>
                </div>
                <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} placeholder="Enter email" onChange={this.handleInput.bind(this)} required/>
                </div>
                <div class="form-group">
                  <label for="inputText">Message</label>
                  <textarea class="form-control" name="text" rows="3" onChange={this.handleInput.bind(this)}></textarea>
                </div>
                </fieldset>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            )
        } else if (this.state.state=='sent'){
            return(<h5>Thank you for the message. I'll get back to you as soon as possible.</h5>);
        } else {
            return(<h5>Sorry, something went wrong. Your message can't be sent.</h5>);
        }
    }
}

module.exports = Message;