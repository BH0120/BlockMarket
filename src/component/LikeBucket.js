import React from 'react';
import "./LikeBucket.css";

function LikeBucket(props) {
    const products = props.products;
    const showLike = () => {
        return products.map((item) => {
            if( item.like === true ){
                return(
                    <div key={item.id} className='likeBucket'>
                        <img className='likeImg' src={item.imgUrl} alt="" />
                    </div>
                )
            }
        })
    }
    return (
        <div id='likeParent'>
            <div id='bucketHead'>찜목록</div>
            {showLike()}
        </div>
    );
}

export default LikeBucket;