'use strict';

import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        collapsed:true,
      };
    }
    toggleCollapse(){
        var collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    navto(){
        if (!this.state.collapsed)
          this.setState({
            collapsed:true,
          });
    }
     render(){
         return(
           <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link class="navbar-brand" to={{pathname:"/",state:{referrer:"brand"}}}  style={{transform: "translateY(7px)"}}>Chu-Ya Chia<br/>
            <span style={{fontSize:"50%",textShadow:"0 0 2px #fff",color:"#919aa1"}}>Available for hire</span></Link>
              <button class="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class={`navbar-collapse ${this.state.collapsed ? "collapse" : ""}`}  id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                  <li class={`nav-item ${this.props.navon=='/'?'active':''}`}>
                    <Link class="nav-link" to={{pathname:"/",state:{referrer:"menu"}}} 
                    onClick={this.navto.bind(this)}>About</Link >
                  </li>
                  <li class={`nav-item ${this.props.navon=='/myworks'?'active':''}`}>
                    <Link  class="nav-link" to={{pathname:"/myworks",state:{referrer:"menu"}}} 
                    onClick={this.navto.bind(this)}>My Works</Link >
                  </li>
                  <li class={`nav-item ${this.props.navon=='/contact'?'active':''}`}>
                    <Link class="nav-link" to={{pathname:"/contact",state:{referrer:"menu"}}}
                    onClick={this.navto.bind(this)}>Contact</Link >
                  </li>
                </ul>
                  <a href="https://github.com/chuyachia/portfolio" target="_blank"><i class="fas fa-code fa-lg" style={{color:"#919aa1"}}></i></a>
              </div>
            </nav>  
         )
     }
}

export default Navbar;