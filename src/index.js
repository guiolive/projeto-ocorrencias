import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';




import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
 
const root = ReactDOM.createRoot(document.getElementById('root'));
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

 
// Next, wrap the <App /> with the <Router> and </Router> tags
 
root.render(
  <React.StrictMode>
    <Router>                            
      <App />
    </Router>                      
  </React.StrictMode>
);
 
// PERGUNTAR DO WEBVITALLS**************