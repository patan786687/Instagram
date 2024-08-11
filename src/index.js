import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Application from './Application';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './profile/sidebar';

import Example from './profile/profileinfo';
import HomeProfile from './profile/HomeProfile';
import StickyNavbar from './ForgotNav';
import ForgotPassword from './Forgot';
import InstagramFooter from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
   <>
   <Router>
    <Application/>
    {/* <HomeProfile/> */}
    {/* <StickyNavbar/>
    <ForgotPassword/>
    <InstagramFooter/> */}
   
    </Router>
   </>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
