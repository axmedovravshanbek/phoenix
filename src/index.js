import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import axios from 'axios'
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
axios.post('https://murmuring-sierra-15630.herokuapp.com/mne', {
    deviceWidth: document.body.offsetWidth,
    website: 'Phoenix',
    empty: ''
}).then(() => null);

