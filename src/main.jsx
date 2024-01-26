import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScroollToTop from './components/ScrollToTop.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './distt/css/main.css'
import 'animate.css';

import { Provider } from "react-redux";
import store from "./app/store.js";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ScroollToTop />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);