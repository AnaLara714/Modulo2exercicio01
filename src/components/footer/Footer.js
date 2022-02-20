import React, { useState } from 'react';
import './Footer.css';

const Footer = (props) => {

    return(
        <footer className='footer'>
            <span>{props?.description}</span>
        </footer>
    );
}

export default Footer;