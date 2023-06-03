import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';

const Pages = () => {
  return <>
 
  <Router>
  <Header/>
    <Routes>
      
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/services' Component={Services}/>
         <Route exact path='/blog' Component={Blog}/>
         <Route exact path='/pricing' Component={Pricing}/>
         <Route exact path='/contact' Component={Contact}/>
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default Pages