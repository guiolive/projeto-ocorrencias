import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
// Next, wrap the <App /> with the <Router> and </Router> tags
 
root.render(
  <React.StrictMode>
    <Router>                            
      <App />
    </Router>                      
  </React.StrictMode>
);
 
// PERGUNTAR DO WEBVITALLS**************