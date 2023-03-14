import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apptwo from './App-two';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);


const div2 = ReactDOM.createRoot(document.getElementById("root2"));

div2.render(
  <Apptwo />
)


