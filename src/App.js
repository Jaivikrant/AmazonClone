import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import "./Header.css";
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
     <Router>
     
     <Routes>
      <Route path="/" element={<><Header/> <Home/></>}>
      </Route>
      <Route path='/Checkout' element={<><Header/><Checkout/> </>}></Route>
      <Route path="/login">Login</Route>

     </Routes>   
     </Router>
  );
}

export default App;
