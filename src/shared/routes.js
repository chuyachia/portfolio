import About from './pages/About';
import Contact from './pages/Contact';
import MyWorks from './pages/MyWorks';
import React from "react";
/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
*/

const routes = [
    {
        path:"/",
        exact:true,
        component:About
    },
    {
         path:"/myworks",
         component:MyWorks
         
    },
    {
        path:"/contact",
        component:Contact
    }
]

export default routes;