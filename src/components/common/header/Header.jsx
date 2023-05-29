import React, { useState}from 'react';
import "./header.css";
import {Link} from 'react-router-dom'
import { nav } from '../../data/Data';

const Header = () => {
  const[navlist, setnavlist]= useState(false)
  return <>
  <header>
    <div className="container flex">
        <div className="logo">
          <img src="./images/icon.png" alt=''/>
        </div>
        {/* <div className="nav">
          <ul className='flex'>
            {nav.map((list, index)=>(
              <li key={index}>
                <link to={list.path}>{list.text}</link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="nav">
      <ul className={navlist ? "small":"flex"}>
        {nav.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="button flex">
      <h4>
        <span>2</span> my list
      </h4>
      <button className='btn1'>
        <i className='fa fa-sign-out'></i> sign In
      </button>
    </div>
    <div className="toggle">
      <button onClick={()=>setnavlist(!navlist)}>
        {navlist ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}menu
      </button>
    </div>


    </div>
  </header>
  
  </>
}

export default Header