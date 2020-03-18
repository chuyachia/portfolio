import App from "./App";
import {Route, HashRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GA from './GA';
import React from "react";
import ReactGA from 'react-ga';
import {render} from "react-dom";

const GAisEnabled = process.env.NODE_ENV === 'production';
if (GAisEnabled) {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
}

render(
    <HashRouter>
        <Route render={({ location }) => (
            <div className="wrapper">
                {GAisEnabled && <GA pathname={location.pathname} search={location.search} hash={location.hash} />}
                <Navbar navon={location.pathname} />
                <App />
                <Footer />
            </div>
        )} />
    </HashRouter>,
    document.getElementById('app'));
