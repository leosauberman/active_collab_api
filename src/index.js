import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Project
        url='http://192.168.1.21:3100/api/'
        pollInterval={1200000} />,
    document.getElementById('root'));
registerServiceWorker();