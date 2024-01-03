import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Userprovider } from './Usercontext';
import "./styles/Userviewpage.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <Userprovider>
  <App/>
  </Userprovider>
  
  </React.StrictMode>
);