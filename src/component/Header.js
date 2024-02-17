import React, { useState } from 'react';
import './Header.css';


function Header(props) {
    const [userType, setUserType] = useState('구매자');
    return (
        <div className='header'>
            <span className='title'>블록마켓</span>
            <div className='userType'>{userType}</div>
        </div>
    );
}

export default Header;