import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { MainLOg } from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Main} from "./Login"
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
