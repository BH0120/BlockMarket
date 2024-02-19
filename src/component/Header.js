import React, { useState } from 'react';
import './Header.css';


function Header(props) {
    const [userType, setUserType] = useState('구매자');

    const Userchange = () =>{
        if(userType === '판매자'){
            alert('페이지 점검중');
        }else{
            setUserType('판매자');
        }
        setUserType(userType === '구매자' ? '판매자' : '구매자');
    };

    return (
        <div className='header'>
            <span className='title'>블록마켓</span>
            <div className='userType' onClick={Userchange}>{userType === '구매자' ? '판매자' : '구매자'}</div>
        </div>
    );
}

export default Header;