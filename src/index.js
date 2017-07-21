import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnFPPnQXLUGCLygiCj5Lu8MK7GviPRl7E",
    authDomain: "chatroom-3780c.firebaseapp.com",
    databaseURL: "https://chatroom-3780c.firebaseio.com",
    projectId: "chatroom-3780c",
    storageBucket: "",
    messagingSenderId: "1084922405235"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
