import React from 'react';

import Header from './components/Header';
import Login from "./components/Login"
import Register from './components/Register';
import Footer from './components/Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      
      <div><Header /></div>
      <div className="d-flex justify-content-center align-items-center" ><Login /></div>
      <div className="d-flex justify-content-center align-items-center" ><Register /></div>
      <div className="d-flex justify-content-center align-items-center" ><Footer /></div>
      
      
      
    </div>
  );
}

export default App;
