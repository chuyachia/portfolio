import App from "./App";
import {Route, HashRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import {render} from "react-dom";

render(<HashRouter>
            <Route render={({ location }) =>(
                <div className="wrapper">
                    <Navbar navon= {location.pathname}/>
                    <App/>
                    <Footer/>
                </div>
            )}/>
        </HashRouter>,
    document.getElementById('app'));
