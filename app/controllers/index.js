'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { HashRouter as Router, Route, Link, hashHistory} from 'react-router-dom';
import Navbar from './pages/components/Navbar.js';
import Footer from './pages/components/Footer.js';
import About from './pages/About.js';
import MyWorks from './pages/MyWorks.js';
import Contact from './pages/Contact.js';


const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName='FadeIn'
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

ReactDom.render(
  <Router history={hashHistory}>
    <div>
    <Navbar/>
      <Route exact path="/" component={PageShell(About)}/>
      <Route replace path="/myworks"  component={MyWorks}/>
      <Route replace path="/contact"  component={Contact}/>
    <Footer/>
    </div>
  </Router>
  ,
  document.getElementById('app'));