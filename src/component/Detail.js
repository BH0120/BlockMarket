import React from 'react';
import './Detail.css';
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";


function Detail(props) {

    const item = props.products[props.onItemClick - 1];

    const showProduct = () => {
        return (
            <div className='detail'>
                <div className='detblock'>
                    <div>
                        <img src={item.imgUrl} style={{width: "400px"}} alt="" />
                    </div>
                    <div>
                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>
                        <h2 onClick={() => props.onHeartClick(item.id)}>{item.like ? <GoHeartFill style={{color: 'red'}}/> : <GoHeart/>}</h2>
                        <button className='button'>구매하기</button>
                    </div>
                </div>
                <div className='det-description'>
                    <p>{item.description}</p>
                </div>
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