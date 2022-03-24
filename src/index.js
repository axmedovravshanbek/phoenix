import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter} from "react-router-dom";

import App from './App';
import ScrollToTop from "./components/scrollToTop";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
axios.post('https://locus-back.herokuapp.com/me', {
    deviceWidth: document.body.offsetWidth,
    website: 'Phoenix',
    empty: ''
}).then(() => null);
