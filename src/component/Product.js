import React, { useState } from "react";
import "./Product.css";

function Product(props) {
  const [zoomedItemId, setZoomedItemId] = useState(1);

  const handleItemClick = (id) => {
    setZoomedItemId(id);
    props.onItemClick(id);
    //test
  };

  const showProduct = () => {
    return props.products.map((item) => (
      <div 
        key={item.id} 
        className={`navTab ${zoomedItemId === item.id ? "zoomed" : ""}`} 
        onClick={() => handleItemClick(item.id)}
      >
        <div className="navImg">
          <img src={item.imgUrl} alt={item.name} />
        </div>
        <div className="navText">
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
        </div>
      </div>
    ));
  };

  return <div className="product">{showProduct()}</div>;
}

export default Product;