import React from "react";
import {Switch,Route,withRouter} from "react-router-dom";
import routes from "./routes";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './index.css';

const App = ({location})=>{
    return(
        <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} classNames="move" timeout={300}>
                <section className="route-section">
                    <React.Suspense fallback={<i>Loading...</i>}>
                        <Switch>
                            {routes.map((route, i) => <Route key={i} {...route} />)}
                        </Switch>
                    </React.Suspense>
                </section>
            </CSSTransition>
        </TransitionGroup>
        );
};

export default withRouter(App);