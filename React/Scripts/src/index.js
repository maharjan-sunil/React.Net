import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { HashRouter } from "react-router-dom";

import App from './App.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './css/site.css'

ReactDOM.render(
    <Provider>
        <HashRouter>
            <App />
        </HashRouter>
        <ToastContainer />
    </Provider>,
    document.getElementById('react-app'));