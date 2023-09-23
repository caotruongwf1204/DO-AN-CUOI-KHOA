document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');


  const API_DETAI = `http://localhost:3000/lenin/${id}`;



  const getApi = async (URL_API) => {
    const response = await axios.get(URL_API);

    showDetailJs(response.data);

  }
  getApi(API_DETAI);

  const showDetailImg = document.querySelector('#detail-show-img');
  const showDetailInfo = document.querySelector('#detail-show-info');


  const showDetailJs = (item) => {
    const detailImg = item.img;
    const detailTitle = item.title;
    const detailPrice = item.price;
    const detailDes1 = item.description1;
    const detailDes2 = item.description2;
    const detailDes3 = item.description3;
    const detailDes4 = item.description4;

    showDetailImg.innerHTML = `
      <img class="detail-image" src="${detailImg}" alt="">
    `;

    showDetailInfo.innerHTML = `
      <h1>${detailTitle}</h1>
      <div class="price">${detailPrice}</div>
      <div class="content">
        <p>${detailDes1}</p>
        <p>${detailDes2}</p>
        <p>${detailDes3}</p>
        <p>${detailDes4}</p>
      </div>
    `;
  }
  




  const addNumbers = () => {
    const minus = document.querySelector('.nav-detail-minus');
    const plus = document.querySelector('.nav-detail-plus');
    const numbersInput = document.querySelector('.detail-input');

    plus.addEventListener('click', () => {
      // Tăng giá trị số trong input
      const currentValue = parseInt(numbersInput.value);
      numbersInput.value = currentValue + 1;
    });
    minus.addEventListener('click', () => {
      // Giảm giá trị số trong input
      const currentValue = parseInt(numbersInput.value);
      numbersInput.value = currentValue - 1;
    });
  };
  addNumbers();



});