const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


const API_DETAI = `http://localhost:3000/lenin/${id}`;



const getApi = async (URL_API) => {
  const response = await axios.get(URL_API);
  console.log(response.data);
  showDetailJs(response.data);
}
getApi(API_DETAI);

const showDetail = document.querySelector('#detail-show-js');



const showDetailJs = (item) => {
  const detailImg = item.img;
  const detailTitle = item.title;
  const detailPrice = item.price;

  console.log('nameImg.img');
  showDetail.innerHTML = `
  <div class="col-md-6 col-sm-12 col-12">
    <div class="img-detail">
      <img class="detail-image" src="${detailImg}" alt="">
    </div>
  </div>
  <div class="col-md-6 col-sm-12 col-12">
    <div class="detail-products">
      <div class="detail-content">
        <h1>${detailTitle}</h1>
        <div class="price">${detailPrice}</div>
        <div class="content">
          <p>Dệt từ len lông cừu siêu mỏng,thích hợp cho điều kiện thời tiết mùa hè, sợi len co giãn linh hoạt
            thoáng khí, với bo cổ và hình in được dệt liền khối. </p>
          <p>không sấy tránh co rút sợi, khi phơi nên gấp ngang áo ko móc kéo tránh áo bị biến dạng.</p>
          <p>100% cotton</p>
        </div>
      </div>

    <div class="wrap-detail">
      <div class="detail-quantity">
        Số lượng :
        <div class="nav-detail">
          <div class="nav-detail-minus">-</div>
          <input class="detail-input" type="text" readonly value="1">
          <div class="nav-detail-plus">+</div>
        </div>
      </div>

      <div class="detail-size">
        Chọn size :
        <div class="nav-detail">
          <select>
            <option>CHỌN</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>
    </div>

    <div class="detail-item">
      <div class="detail-share">
        <span>
         Chia sẻ :
        </span>
        <i class="fa-brands fa-square-facebook"></i>
      </div>
      <div class="detail-show-size">
        <i class="fa-solid fa-caret-right"></i>
        biểu đồ kích thức
      </div>
    </div>
    <div class="detail-btn">
      <a href="./cart.html">
        <button class="detail-add">THÊM VÀO GIỎ HÀNG</button>
      </a>
      <a href="./cart.html">
        <button class="detail-buy">MUA NGAY</button>
      </a>
    </div>
  </div>
  `;
}