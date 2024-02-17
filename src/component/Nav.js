import React, { useState } from 'react';
import Product from './Product';
import "./Nav.css";

function Nav(props) {

    return (
        <div className='container'>
            <Product products={props.products} onItemClick={props.onItemClick}/>
        </div>
    );
}

export default Nav;