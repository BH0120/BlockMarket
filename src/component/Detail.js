import React from "react";
import "./Detail.css";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import


function Detail(props) {
  const item = props.products[props.onItemClick - 1];

  const handlePurchaseClick = () => {
    Swal.fire({
      title: '구매를 진행하시겠습니까?',
      text: "구매를 진행하려면 '구매하기'를 클릭하세요.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '구매하기',
      cancelButtonText: '구매 취소',
    }).then((result) => {
      if (result.isConfirmed) {
        // 구매하기를 눌렀을 때 판매자 연락처 정보 표시
        Swal.fire(
          '연락처 정보',
          `판매자 전화번호: ${item.sellerPhone}\n카톡 ID: ${item.sellerKakao}`,
          'success'
        )
      }
    });
  };
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

              {/* 구매하기 버튼에 onClick 이벤트 핸들러 추가 */}
              <button className="btn" onClick={handlePurchaseClick}>구매하기</button>

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
