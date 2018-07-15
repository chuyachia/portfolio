import About from './pages/About';
import Contact from './pages/Contact';
import MyWorks from './pages/MyWorks';
import React from "react";

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