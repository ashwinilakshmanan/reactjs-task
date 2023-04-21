import React from 'react'
import './styles/Header.css'
import {FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import Navbar1 from './Navbar1';
import Banner from './Banner';

function Header() {
  return (
    <div>
      <div>
        <header className='header'>
          <section className='section'>
            <ul className='hiring'>
                <li className='hiring-inline'>
                    <a href='#'>
                        <b>Now Hiring &nbsp;: &nbsp;</b>
                        <p>Looking for a job in Full Stack Development</p>
                    </a>
                </li>
                <li className='hiring-inline'>
                    <a href='#'>
                       <FaPhone color='white'/>
                       <strong>&nbsp;&nbsp; +91 487 2080 212</strong>
                    </a>
                    <span className='loc'>
                        <FaMapMarkerAlt color='white' />
                        <p>&nbsp;&nbsp;Leshore Business Park, Thrissur</p>
                    </span>
                </li>
            </ul>
          </section>  
          <section className='header-sec2'>
            <img src="https://woxro.com/public/assets/png/woxrologo.png" width="205.875" height="56" alt="woxro"/>
          </section>
          <Navbar1/>
          <Banner/>
        </header>
      </div>
    </div>
  )
}

export default Header
