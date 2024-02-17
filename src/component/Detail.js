import React from 'react';
import './Detail.css';


function Detail(props) {

    const item = props.products[props.onItemClick - 1];

    const showProduct = () => {
        return (
            <div>
                <img src={item.imgUrl} alt="" />
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
            </div>
            )


    }
    
    return (
        <div className='detail'>
            {showProduct()}
        </div>
    );
}

export default Detail;