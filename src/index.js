import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './css/app.css';
import './assets/scss/app.scss';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);