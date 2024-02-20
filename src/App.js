import './App.css';
import Header from './component/Header';
import Body from './component/Body';

import { useState } from 'react';

function App() {

  const [products,setProducts] = useState([
    {id: 1, name:"태블릿", price: "250,000원", like: false, imgUrl: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5060225621/B.jpg?361000000size", description: "10년 쓴 테블릿."},
    {id: 2, name:"마우스", price: "10,000원", like: false, imgUrl: "https://img.danawa.com/prod_img/500000/401/143/img/6143401_1.jpg" , description: "생활기스 좀있고 사용에는 아무런 문제가 없습니다."},
    {id: 3, name:"폴대", price: "200,000원", like: false, imgUrl: "https://www.koiss.co.kr/wp-content/uploads/2021/06/GPS-%EC%A0%84%EC%9A%A9-%ED%8F%B4%EB%8C%80-%EC%84%AC%EB%84%A4%EC%9D%BC.jpg" , description: "길가다 주웠습니다"},
    {id: 4, name:"아이폰 12 미니", price: "400,000원", like: false, imgUrl: "https://www.backmarket.co.kr/_next/image?url=%2Fnode_upload%2Fresized_images%2Fsave_image%2F466x466_0304225930_62221b42a5d13.jpeg&w=1080&q=75" , description: "이것도 길가다 주웠어요"},
    {id: 5, name:"갤럭시 S23U", price: "800,000원", like: false, imgUrl: "https://www.lguplus.com/static/pc-contents/images/prdv/20230213-041448-488-VWgYBaUb.jpg" , description: "얘도"},
    {id: 6, name:"에어팟 맥스", price: "650,000원", like: false, imgUrl: "https://i.namu.wiki/i/eloJ8CCiWI6GYQIkyj-DwINmwBk_FyOdeLqIskN6nJhNUbmDxxAvMjHGuUDQ_oGq90-yiPrwtVJPcU5UjD3jgw.webp" , description: "이 마우스는 YYY입니다."},
    {id: 7, name:"갤럭시 버즈2", price: "80,000원", like: false, imgUrl: "https://img.danawa.com/prod_img/500000/085/986/img/14986085_4.jpg?_v=20240116152339" , description: "이 마우스는 YYY입니다."},
    {id: 8, name:"나이키 덩크", price: "90,000원", like: false, imgUrl: "https://blog.kakaocdn.net/dn/SUHoV/btqU0yQkGtH/OZ7oEtr4F6HLiGT81100EK/img.jpg", description: "한 번도 안 신었습니다 인증서 잇어요"},
    {id: 9, name:"삼성 정품 충전기", price: "10,000원", like: false, imgUrl: "https://bluejteam.cafe24.com/web/product/big/202302/228dbdc7c396607d4a2fcc4f4c16bebb.png" , description: "이 마우스는 YYY입니다."},
    {id: 10, name:"IAB 검정 후드티", price: "400,000원", like: false, imgUrl: "https://media.bunjang.co.kr/product/230932269_1_1690561717_w360.jpg" , description: "이 마우스는 YYY입니다."},
  ]);

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
      <Body products={products} onHeartClick={handleLikes} />
    </div>
  );
}

export default App;


