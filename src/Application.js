import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import InstagramLoginPage from './NewLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstagramFooter from './footer';
import InstagramSignup from './signup';
import ForgotPassword from './Forgot';


const Application = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<InstagramLoginPage />} />
        <Route path="/signup" element={<InstagramSignup />} />
        <Route path="/" element={<InstagramLoginPage />} />
        <Route path="/Forgot" element={<ForgotPassword/>} />
        <Route path="/NewLogin" element={<InstagramLoginPage />} />
        
      </Routes>
      <InstagramFooter/>
    </>
  )
}

export default Application;
