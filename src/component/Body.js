import React, { useState } from 'react';
import Nav from './Nav';
import Detail from './Detail';
import './Body.css';
import LikeBucket from './LikeBucket';

function Body(props) {
    const [selectedItemId, setSelectedItemId] = useState(1);

    const handleItemClick = (itemId) => {
        setSelectedItemId(itemId)
    };

    return (
        <div className='body'>
            <Nav products={props.products} onItemClick={handleItemClick}/>
            {selectedItemId && <Detail products={props.products} onItemClick={selectedItemId} onHeartClick={props.onHeartClick}/>}
            <LikeBucket products={props.products}/>
        </div>
    );
}

export default Body;