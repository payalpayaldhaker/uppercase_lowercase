import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import TextForm from './TextForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App  title="Navbar" about="About us"/> */}
    <TextForm title="lowwerCase to upperCase"/>
  </React.StrictMode>
);

