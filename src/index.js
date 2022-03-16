import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
axios.post('https://murmuring-sierra-15630.herokuapp.com/mne', {
    deviceWidth: document.body.offsetWidth,
    website: 'Phoenix',
    empty: ''
}).then(() => null);

