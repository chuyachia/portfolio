import App from "../shared/App";
import {BrowserRouter,Route} from "react-router-dom";
import Footer from "../shared/components/Footer";
import Navbar from "../shared/components/Navbar";
import configureStore from "../shared/configureStore";
import { Provider } from "react-redux";
import React from "react";
import {render} from "react-dom";

const store = configureStore(window.__initialData__);
delete window.__initialData__;

render(<Provider store={store}>
        <BrowserRouter>
            <Route render={({ location }) =>(
                <div class="wrapper">
                    <Navbar navon= {location.pathname}/>
                    <App/>
                    <Footer/>
                </div>
            )}/>
        </BrowserRouter>
        </Provider>,
    document.getElementById('app')
    );
