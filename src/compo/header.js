import React from 'react';
import './header.css';
import profileimg from "../imgs/personimg.jpg";
import { BiEnvelope } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
export default function header() {
    return (
        <div id="container">
            <header classname="header">
                <img className='avatar'
                    src={profileimg}
                    alt="Mashael alsalhi" />
            </header>

            <div className='bio'>
                <h1 className='name'>Mashael Alsalhi</h1>
                <p className='school'>Computer Science Graduted </p>
                <p className='website'>(website coming soon)</p>
                <div className='contacts'>
                    <a id="email-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:meshael.a.alsalhi@gmail.com">
                        <BiEnvelope style={{ color: 'black', fontSize: '16px', marginRight: '5px', marginBottom: '-3px' }} />
                        Email
                    </a>

                    <a
                        id="linkedin-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=' https://www.linkedin.com/in/mashael-alsalhi-183242185/'>
                        <FaLinkedin style={{ color: 'white', fontSize: '15px', marginRight: '5px', marginBottom: '-3px' }} />
                        Linkedin

                    </a>



                </div>

            </div>









        </div>

    );
}