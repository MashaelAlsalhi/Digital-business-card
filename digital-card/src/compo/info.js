import React from 'react';
import './info.css';
import {FaHeart} from "react-icons/fa";
import { BiRadar } from 'react-icons/bi';
export default function info() {
    return(
    <div id="info-conatiner">
        <div className='About'>
      <h2 className="header1">About</h2>
      <p className="texts">
      A Fresh computer science graduate passionate about learning new technologies and their related,
       excited to explore new opportunities and skills. 
      Always eager to enter the professional world that that will allow me to reach my highest potential.
      </p>
      </div>
      <div className='Interest'>
      <h2 className="header1">Interest</h2>
      <p className="texts">
       Web development, Data Analysis, UX/UI,Books, Coffee lover <FaHeart style={{ color: 'red', fontSize: '12px', marginRight: '5px', marginBottom: '-3px' }}/>.
      </p>
      </div>
     

    </div>
    
  
    );}