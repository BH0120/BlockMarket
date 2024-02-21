import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import { useState } from 'react';

function App() {

  const [products,setProducts] = useState([
    {id: 1, name:"태블릿", price: "250,000원", like: false, imgUrl: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5060225621/B.jpg?361000000size", description: "갤럭시탭 a6 판매합니다\n2018년도 상반기쯤 구매했습니다\n공부하려고 인강용으로 구매했다가 안써서 판매합니다\n강화필름 붙어있고 케이스 사용해서 하자 없습니다\n배터리 상태도 완전 양호합니다\n지금 구매하시면 sd카드 64GB 추가로 드립니다\n",sellerContact: "tablet_seller"},
    {id: 2, name:"마우스", price: "10,000원", like: false, imgUrl: "https://img.danawa.com/prod_img/500000/401/143/img/6143401_1.jpg" , description: "2022년 5월 제조된 매직마우스입니다\n잘 사용하지 않았기 때문에 잘 안보이는 미세한 생활기스가 있을 수 있으나 전체적으로 깨끗합니다\n직거래만 가능하며 실물 보고 구입하실 분이 가져가시면 좋겠습니다\n네고는 불가능합니다\n",sellerContact: "mouse_seller"},
    {id: 3, name:"폴대", price: "200,000원", like: false, imgUrl: "https://www.koiss.co.kr/wp-content/uploads/2021/06/GPS-%EC%A0%84%EC%9A%A9-%ED%8F%B4%EB%8C%80-%EC%84%AC%EB%84%A4%EC%9D%BC.jpg" , description: "예전에 사놓고 사용 안한 미사용 폴대입니다\n280 메인 폴 블랙 2개\n210 사이드 폴 블랙 4개\n폴 전용수납가방 1개\n",sellerContact: "pole_seller"},
    {id: 4, name:"아이폰 12 미니", price: "400,000원", like: false, imgUrl: "https://image.lguplus.com/common/images/hphn/product/A2399-128/imge_cut/ushop_A2399-128_67_A.jpg" , description: "아이폰12미니 256기가 자급제폰입니다.\n와이프 집에서만 사용해 사용감 거의 없이 상태최상입니다.\n보호필름 앞, 카메라부 띈적없이 넘 좋아여.\n하단부 작은찍힘 하나있습니다.\n밧데리효율 79프로입니다.\n관심있는분 연락주세여.\n빠른판매를 위해 가격내려 다시올렸습니다.\n",sellerContact: "mini_seller"},
    {id: 5, name:"갤럭시 S23U", price: "800,000원", like: false, imgUrl: "https://www.lguplus.com/static/pc-contents/images/prdv/20230213-041448-488-VWgYBaUb.jpg" , description: "갤럭시 S23울트라 크림 256GB SK 입니다\n2024.01.26일 액정,배터리,테두리,뒷판 전면카메라까지 모두 갈고\n24 기변 후 판매합니다. 모든부품 갈아서\n25년 1월까지 무상AS 1년 시작입니다\n소모품인 S펜에만 찍힘 있습니다\n정품케이스+ 추가줄2개,나머지 케이스3개 드려요\n우체국 택배 or 강남역 직거래",sellerContact: "galaxy_seller"},
    {id: 6, name:"에어팟 맥스", price: "650,000원", like: false, imgUrl: "https://i.namu.wiki/i/eloJ8CCiWI6GYQIkyj-DwINmwBk_FyOdeLqIskN6nJhNUbmDxxAvMjHGuUDQ_oGq90-yiPrwtVJPcU5UjD3jgw.webp" , description: "에어팟 맥스 실버 색상이고 착용 잘 안해서 내놓습니다 \n박스 있고 이어캡그리고 헤드밴드도 있고 긁힘 찍힘 하나도 없습니다 \n귀 부분은 오염좀있는데 이거는 세척하면 다 지워지는거라 상관없을거같습니다\n직거래 희망합니다 편하게 연락주세요~~\n",sellerContact: "max_seller"},
    {id: 7, name:"갤럭시 버즈2", price: "80,000원", like: false, imgUrl: "https://img.danawa.com/prod_img/500000/085/986/img/14986085_4.jpg?_v=20240116152339" , description: "사진보시다시피 깨끗합니다 \n하자같은거 없습니다\n그래도중고이다보니 민감하신분 새거사시는걸추천드립니다 \n",sellerContact: "buz_seller"},
    {id: 8, name:"나이키 덩크", price: "90,000원", like: false, imgUrl: "https://blog.kakaocdn.net/dn/SUHoV/btqU0yQkGtH/OZ7oEtr4F6HLiGT81100EK/img.jpg", description: "크림이 팔려다 4번사진에 보일지 모르겠으나 \n살짝 뭔가 묻은 자국이 있어서 판매불가 처리로 싸게 팔아요 \n크림 즉구21만 즉판 18만 입니다 \n출시가 139천원 \n사이즈 270mm \n스우시 벗겨지면 다른 그림 나타나요 \n",sellerContact: "dunk_seller"},
    {id: 9, name:"삼성 정품 충전기", price: "10,000원", like: false, imgUrl: "https://bluejteam.cafe24.com/web/product/big/202302/228dbdc7c396607d4a2fcc4f4c16bebb.png" , description: "선이 넘~~~~ 많아서 팝니다!~~~ \n",sellerContact: "charger_seller"},
    {id: 10, name:"IAB 검정 후드티", price: "400,000원", like: false, imgUrl: "https://media.bunjang.co.kr/product/230932269_1_1690561717_w360.jpg" , description: "거의 새상품입니다 (3회착용) , 보폴 없음 \n먼지는 제거 후 보내드릴게요. \n현재 크림가 43만원입니다~ \n",sellerContact: "hoodi_seller"},
  ]);
  
  const onRemove = (id) => {
    let newProd = products.filter(product => product.id !== id)
    let idx = 1;
    for (let i = 0; i < newProd.length; i++) {
      newProd[i].id = idx;
      idx++;
    }
    setProducts(newProd);
  }

  const handleLikes = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, like: !product.like } : product
      );
    });
  };

  return (
    <div className="App">
      <Header/>
      <Body products={products} onHeartClick={handleLikes} onRemove={onRemove} />
    </div>
  );
}

export default App;


