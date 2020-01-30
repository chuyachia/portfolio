'use strict';

import React from 'react';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state={
            status:'PRISTINE',
            name:'',
            email:'',
            message:'',
            errorMessage:'',
        };
    }
    handleInput(e) {
        var target = e.target;
        this.setState({
          [target.name]: target.value
        });
     } 
    reset() {
        this.setState({
            name: '',
            email: '',
            message: '',
            errorMessage: '',
        })
    }
    submitHandler(event){
        event.preventDefault();
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("email", this.state.email);
        data.append("message", this.state.message);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.EMAIL_POST_ENDPOINT);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            this.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            let response = JSON.parse(xhr.response);  
            this.setState({ status: "ERROR", errorMessage: response.error });
          }
        };
        xhr.send(data);
    }
    render(){
        if (this.state.status=='PRISTINE') {
            return(
                <form onSubmit={this.submitHandler.bind(this)}
                    action="https://formspree.io/xjvwvkdd"
                    method="POST">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input className="form-control" name="name" value={this.state.name} placeholder="Enter name" onChange={this.handleInput.bind(this)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} placeholder="Enter email" onChange={this.handleInput.bind(this)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputText">Message</label>
                            <textarea className="form-control" name="message" rows="3" value={this.state.message} onChange={this.handleInput.bind(this)}></textarea>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )
        } else if (this.state.status=='SUCCESS'){
            return(<h5>Thank you for the message. I'll get back to you as soon as possible.</h5>);
        } else {
        return(<h5>Your message can't be sent. {this.state.errorMessage || 'Something went wrong.'}</h5>);
        }
    }
}

export default Message;