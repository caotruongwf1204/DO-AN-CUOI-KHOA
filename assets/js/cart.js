const dataStorage = localStorage.getItem('products');
const dataParse = JSON.parse(dataStorage)
console.log('getDataLocalstorage', dataParse)
let listCartItems = []
const getData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  // let currentValueInput = 1;

  console.log('4444444', dataParse[0])
  for (let i = 0; i < dataParse.length; i++) {
    console.log("dataStorage: ", dataParse[i].id)
    const API_DETAIL_CART = `http://localhost:3000/lenin/${dataParse[i].id}`;
    const response = await axios.get(API_DETAIL_CART);
    console.log("response", response.data)
    response.data.numberItems = dataParse[i].numberProduct
    response.data.size = dataParse[i].size
    listCartItems.push(response.data)
  }

  console.log('555555555', listCartItems)
  products(listCartItems);

}

getData()

console.log('66666666', listCartItems)




const products = (data) => {
  const cartListing = document.querySelector("#cart-show-js");
  let HTML = ``;

  data.forEach((item) => {
    console.log("item.price", item.price)
    console.log("item.numberItems", item.numberItems)
    const number = item.price * item.numberItems;
    const formattedNumber = number.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });

    HTML += `
                <tr class="table-mobile">
                  <td class="table-mobile-products">
                    <div class="cart-pro-show">
                      <div class="cart-pro-img">
                        <img src="${item.img}" alt="">
                        <span class="remove-card">X</span>
                      </div>
                      <div class="cart-pro-title">
                        <span>${item.title}</span>
                        <div class="cart-pro-size">
                          <span>[${item.size}]</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <div>
                    <td>
                      <div class="detail-quantity">
                        Số lượng :
                        <div class="nav-detail">
                        <button class="nav-detail-minus">-</button>
                          <input class="detail-input" type="number" readonly value=${item.numberItems}>
                        <button class="nav-detail-plus">+</button>
                        </div>
                      </div>
                    </td>
                    <td><div class="cart-price">${formattedNumber}</div></td>
                    <td class="remove">
                      <div class="cart-close">
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                    </td>
                  </div>
                </tr>
     `;
    cartListing.innerHTML = HTML;
  });
};











// const addNumbers = () => {
//   const minus = document.querySelectorAll('.nav-detail-minus');
//   const plus = document.querySelectorAll('.nav-detail-plus');
//   const numbersInput = document.querySelectorAll('.detail-input');
//   console.log(plus);
//   plus.addEventListener('click', () => {
//       // Tăng giá trị số trong input
//       const currentValue = parseInt(numbersInput.value);
//       numbersInput.value = currentValue + 1;
//       console.log("?????", typeof numbersInput.value)
//       currentValueInput = numbersInput.value
//       console.log('inputValue', currentValueInput)

//   });
//   minus.addEventListener('click', () => {
//       // Giảm giá trị số trong input
//       const currentValue = parseInt(numbersInput.value);
//       if (currentValue > 1) numbersInput.value = currentValue - 1;
//       currentValueInput = numbersInput.value

//       console.log('minus', currentValueInput)
//   });

// };
// addNumbers();