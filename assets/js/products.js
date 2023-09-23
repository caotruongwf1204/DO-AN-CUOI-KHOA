const URL_API = `http://localhost:3000/lenin`;



const getApi = async (URL_API) => {
  const response = await axios.get(URL_API);

  products(response.data);
}
getApi(URL_API);




// products
const products = (data) => {
  const productsListing = document.querySelector("#listing-product-js");
  let HTML = ``;
  data.forEach((item) => {
    HTML += `
    <div class="col-6 col-sm-6 col-md-3">
      <a href="./detail.html?id=${item.id}">
        <div class="card">
          <img class="card-img" src="${item.img}" alt="">
          <div class="card-body">
            <div class="content">
              <div div class="card-title">${item.title}</div>
              <div class="price">${item.price}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
   `;
   productsListing.innerHTML = HTML;
  });
};
products();


