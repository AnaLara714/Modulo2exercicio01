import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {

    return(
        <header className='header'>
            <span>{props?.title}</span>
        </header>
    );
}

export default Header;