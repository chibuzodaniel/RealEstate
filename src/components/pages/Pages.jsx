import React from 'react';
import Header from '../common/header/Header';
// import{BrowserRouter as Router, Route} from "react-router-dom";
// import{Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';


const Pages = () => {
  return <>
 
  <Router>
  <Header/>
    <Routes>
      
        <Route exact path='/' Component={Home}/>
        
    </Routes>
  </Router>
  </>
}

export default Pages