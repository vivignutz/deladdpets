import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faTwitter);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
