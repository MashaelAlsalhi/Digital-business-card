import React from 'react';
import './footer.css';
import { MdOutlineWork } from "react-icons/md";

import { GoMarkGithub } from "react-icons/go";
export default function footer() {
    return(
<div className='footer-container'>


<a
                        id="footer-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://github.com/MashaelAlsalhi'>
                        <GoMarkGithub style={{ color: '#161619', fontSize: '20px', marginBottom: '-3px'}} />
                   

                    </a>

                    
                  

                    <a
                        id="footer-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://mashaelalsalhi.myportfolio.com/work'>
                        <MdOutlineWork style={{ color: '#161619', fontSize: '20px', marginBottom: '-3px' }} />
                   

                    </a>


  



</div>

    );

}