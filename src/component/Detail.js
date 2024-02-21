import React from "react";
import "./Detail.css";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function Detail(props) {
  const item = props.products[props.onItemClick - 1];

  const showProduct = () => {
    return (
      <div className="detCenter">
        <div className="detParent">
          <div className="detblock">
            <div className="imgdetail">
              <img
                className="proimg"
                src={item.imgUrl}
                style={{ width: "400px" }}
                alt=""
              />
            </div>
            <div className="detailmain">
              <div className="det_title">
                <h1 className="product-name">{item.name}</h1>
                <h1 onClick={() => props.onHeartClick(item.id)}>
                {item.like ? (<GoHeartFill style={{ color: "red" }} /> ) : (<GoHeart />)}
                </h1>
              </div>
              <h2 className="Product-price">{item.price}</h2>

              <button className="btn">구매하기</button>

            </div>
          </div>
        </div>
        <div className="det-description">
          <p className="det-dsc">{item.description}</p>
        </div>
      </div>
    );
  };

  return <div className="detail">{showProduct()}</div>;
}

export default Detail;
