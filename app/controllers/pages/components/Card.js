import React from 'react';

class Card extends React.Component {
    render(){
        return(
        <div class="col-sm-4">
            <div class="card" style={{marginBottom:"15px"}}>
                <div style={{height:"30%",width:"100%",overflow:"hidden"}}>
                <img class="card-img-top" src={this.props.img} alt="Card image cap" style={{height:"auto",width:"100%"}}/>
                </div>
                  <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.desc}</p>
                    <p class="card-text"> Tech stack: {this.props.techs.map(function(t){return t+" "})}</p>
                    <a href={this.props.url_app} class="btn btn-primary" style={{float:"left"}}><i class="fas fa-link"></i></a>
                    <a href={this.props.url_code} class="btn btn-primary" style={{float:"right"}}><i class="fas fa-code"></i></a>
                  </div>
            </div>
        </div>
        )
    }
}

module.exports = Card;