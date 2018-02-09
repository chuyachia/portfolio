'use strict';

import React from 'react';
import { NavLink, Link  } from "react-router-dom";

class Navbar extends React.Component {
    constructor(){
      super();
      this.state = {
        collapsed:true,
      }
    }
    toggleCollapse(){
        var collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    collapse(){
        if (!this.state.collapsed)
          this.setState({collapsed:true});
    }
     render(){

       const navClass = this.state.collapsed ? "collapse" : "";
         return(
           <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link class="navbar-brand" to="/" style={{transform: "translateY(7px)"}}>Chu-Ya Chia<br/><span style={{fontSize:"50%",textShadow:"0 0 2px #fff",color:"#919aa1"}}>Available for hire</span></Link>
              <button class="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class={"navbar-collapse "+navClass}  id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <NavLink  exact class="nav-link" to="/" onClick={this.collapse.bind(this)}>About</NavLink >
                  </li>
                  <li class="nav-item">
                    <NavLink  exact  class="nav-link" to="/myworks" onClick={this.collapse.bind(this)}>My Works</NavLink >
                  </li>
                  <li class="nav-item">
                    <NavLink exact  class="nav-link" to="/contact" onClick={this.collapse.bind(this)}>Contact</NavLink >
                  </li>
                </ul>
                  <a href="https://github.com/chuyachia/portfolio" target="_blank"><i class="fas fa-code fa-lg" style={{color:"#919aa1"}}></i></a>
              </div>
            </nav>  
         )
     }
}

module.exports = Navbar;
module.exports = Navbar;