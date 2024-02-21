import React, { useState } from "react";
import Nav from "./Nav";
import Detail from "./Detail";
import LikeBucket from "./LikeBucket";
import "./Body.css";

function Body(props) {
  const [selectedItemId, setSelectedItemId] = useState(1);
//   const [zoomedItemId, setZoomedItemId] = useState(1);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

//   const handleZoomItemClick = (id) => {
//     setZoomedItemId(id);
//     props.onItemClick(id);
//   };

  return (
    <div className="body">
      <Nav products={props.products} onItemClick={handleItemClick} />
      {selectedItemId && (
        <Detail
          products={props.products}
          onItemClick={selectedItemId}
          onHeartClick={props.onHeartClick}
          // onBuy={props.onBuy}
        />
      )}
      <LikeBucket products={props.products} onItemClick={handleItemClick} />
    </div>
  );
}

export default Body;
