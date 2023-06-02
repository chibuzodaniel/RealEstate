import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/services';
// import services from '../services/services';


const Pages = () => {
  return <>
 
  <Router>
  <Header/>
    <Routes>
      
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/services' Component={Services}/>
        
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default Pages