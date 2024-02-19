import React from 'react';
import './Detail.css';
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";


function Detail(props) {

    const item = props.products[props.onItemClick - 1];

    const showProduct = () => {
        return (
            <div>
                <img src={item.imgUrl} style={{width: "200px"}} alt="" />
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <h2 onClick={() => props.onHeartClick(item.id)}>{item.like ? <GoHeartFill style={{color: 'red'}}/> : <GoHeart/>}</h2>
                <div>test</div>
                
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