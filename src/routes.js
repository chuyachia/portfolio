import {lazy} from 'react';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MyWorks = lazy(()=>import('./pages/MyWorks'));

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