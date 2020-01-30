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
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to={{pathname:"/",state:{referrer:"brand"}}}  style={{transform: "translateY(7px)"}}>Chu-Ya Chia<br/>
            <span style={{fontSize:"50%",textShadow:"0 0 2px #fff",color:"#919aa1"}}>Available for hire</span></Link>
              <button className="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className={`navbar-collapse ${this.state.collapsed ? "collapse" : ""}`}  id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className={`nav-item ${this.props.navon=='/'?'active':''}`}>
                    <Link className="nav-link" to={{pathname:"/",state:{referrer:"menu"}}} 
                    onClick={this.navto.bind(this)}>About</Link >
                  </li>
                  <li className={`nav-item ${this.props.navon=='/myworks'?'active':''}`}>
                    <Link  className="nav-link" to={{pathname:"/myworks",state:{referrer:"menu"}}} 
                    onClick={this.navto.bind(this)}>My Works</Link >
                  </li>
                  <li className={`nav-item ${this.props.navon=='/contact'?'active':''}`}>
                    <Link className="nav-link" to={{pathname:"/contact",state:{referrer:"menu"}}}
                    onClick={this.navto.bind(this)}>Contact</Link >
                  </li>
                </ul>
                  <a href="https://github.com/chuyachia/portfolio" target="_blank"><i className="fas fa-code fa-lg" style={{color:"#919aa1"}}></i></a>
              </div>
            </nav>  
         )
     }
}

export default Navbar;