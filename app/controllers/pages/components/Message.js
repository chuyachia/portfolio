import React from 'react';

class Message extends React.Component {
    render(){
        return(
        <form>
        <fieldset>
            <div class="form-group">
            <label for="inputName">Name</label>
            <input class="form-control" id="inputName" placeholder="Enter name"/>
            </div>
            <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="inputText">Message</label>
              <textarea class="form-control" id="inputText" rows="3"></textarea>
            </div>
            </fieldset>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
    }
}

module.exports = Message;