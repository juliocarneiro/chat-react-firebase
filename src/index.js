import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "suas informações do firebase",
    authDomain: "suas informações do firebase",
    databaseURL: "suas informações do firebase",
    projectId: "suas informações do firebase",
    storageBucket: "",
    messagingSenderId: "suas informações do firebase"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
