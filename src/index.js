import React from 'react';
import ReactDOM from 'react-dom';
import './css/custom.css';
import firebase from 'firebase'
// import registerServiceWorker from './registerServiceWorker';

import { Left, Top, Footer } from './js/navigation';
import history from './js/history';
import { Router } from 'react-router';
import PageContent, { Menu } from './js/routes';

import AppFactory from './js/App';
const App = AppFactory(React, Router, history, Left, Top, Footer, PageContent, Menu);

firebase.initializeApp({
    apiKey: "AIzaSyCKytwNLFH9aJNGNAYgY2H4rGlw0dPMDPU",
    authDomain: "registros-2ba06.firebaseapp.com",
    databaseURL: "https://registros-2ba06.firebaseio.com",
    projectId: "registros-2ba06",
    storageBucket: "registros-2ba06.appspot.com",
    messagingSenderId: "799782771674",
    appId: "1:799782771674:web:500b4bdf05099421e2fee3",
    measurementId: "G-NK7XZHQQ5Z"
    }
)

ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
