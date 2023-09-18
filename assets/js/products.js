const data = [
  {
    id: 1,
    title: "LENINN CREAM BUCKET HAT",
    price: "290,000 đ",
    img: "./assets/images/lennin-hat01.jpg"
  },
  {
    id: 2,
    title: "COW FARM LENINN TEE",
    price: "550,000 đ",
    img: "./assets/images/COW FARM LENINN TEE.jpg"
  },
  {
    id: 3,
    title: "RAGLAN BLAZER",
    price: "950,000 đ",
    img: "./assets/images/RAGLAN BLAZER.jpg"
  },
  {
    id: 4,
    title: "BLUE OVERSIZED WASHED DENIM SHIRT",
    price: "650,000 đ",
    img: "./assets/images/BLUE OVERSIZED WASHED DENIM SHIRT.jpg"
  },
  {
    id: 5,
    title: "HOLE PUNCHER BLACK DENIM SHORT",
    price: "650,000 đ",
    img: "./assets/images/4-HOLE PUNCHER BLACK DENIM SHORT.jpg"
  },
  {
    id: 6,
    title: "LENINN STONE WASHED CAP",
    price: "320,000 đ",
    img: "./assets/images/lennin-02hat.jpg"
  },
  {
    id: 7,
    title: "M&M BLACK DENIM JACKET",
    price: "1,250,000 đ",
    img: "./assets/images/M&M BLACK DENIM JACKET.jpg"
  },
  {
    id: 8,
    title: "HOLE PUNCHER BLUE JEANS",
    price: "950,000 đ",
    img: "./assets/images/4-HOLE PUNCHER BLUE JEANS.jpg"
  },
  {
    id: 9,
    title: "AMBER THIS IS SKATEBOARDING HOODIE",
    price: "650,000 đ",
    img: "./assets/images/AMBER THIS IS SKATEBOARDING HOODIE.jpg"
  },
  {
    id: 10,
    title: "BLACK CORDUROY STRETCH PANTS",
    price: "490,000 đ",
    img: "./assets/images/BLACK CORDUROY STRETCH PANTS.png"
  },
  {
    id: 11,
    title: "HOLE PUNCHER BLUE DENIM SHIRT",
    price: "950,000 đ",
    img: "./assets/images/HOLE PUNCHER BLUE DENIM SHIRT.jpg"
  },
  {
    id: 12,
    title: "TIGER STRIPPED LENINN TEE",
    price: "550,000 đ",
    img: "./assets/images/TIGER STRIPPED LENINN TEE.jpg"
  },
  {
    id: 13,
    title: "BLACK OVERSIZED WASHED DENIM SHORT",
    price: "520,000 đ",
    img: "./assets/images/BLACK OVERSIZED WASHED DENIM SHORT.jpg"
  },
  {
    id: 14,
    title: "DUO BEIGE WORKWEAR JACKET",
    price: "1,050,000 đ",
    img: "./assets/images/DUO BEIGE WORKWEAR JACKET.jpg"
  },
  {
    id: 15,
    title: "CLASSIC STRIPED OVERSIZED BLAZER",
    price: "4,500,000 đ",
    img: "./assets/images/CLASSIC STRIPED OVERSIZED BLAZER.jpg"
  },
  {
    id: 16,
    title: "HOLE PUNCHER BLACK JEANS",
    price: "950,000 đ",
    img: "./assets/images/HOLE PUNCHER BLACK JEANS.jpg"
  },
  {
    id: 17,
    title: "CLASSIC STRIPED BLACK TAILORED PANTS",
    price: "1,250,000 đ",
    img: "./assets/images/HOLE PUNCHER BLACK TAILORED PANTS.jpg"
  },
  {
    id: 18,
    title: "CREAM GRADIENT EMBROIDRED HOODIE",
    price: "680,000 đ",
    img: "./assets/images/CREAM GRADIENT EMBROIDRED HOODIE.jpg"
  },
  {
    id: 19,
    title: "DUO NAVY SHORT SLEEVE SHIRT",
    price: "650,000 đ",
    img: "./assets/images/DUO NAVY SHORT SLEEVE SHIRT.jpg"
  },
  {
    id: 20,
    title: "STAR DECK",
    price: "780,000 đ",
    img: "./assets/images/STAR DECK.jpg"
  },
  {
    id: 21,
    title: "PARADOL DECK",
    price: "780,000 đ",
    img: "./assets/images/PARADOL DECK.jpg"
  },
  {
    id: 22,
    title: "LENINN SKATEBAG",
    price: "150,000 đ",
    img: "./assets/images/LENINN SKATEBAG.png"
  },
  {
    id: 23,
    title: "BLACK DUCK DUCK CUP",
    price: "250,000 đ",
    img: "./assets/images/BLACK DUCK DUCK CUP.jpg"
  },
  {
    id: 24,
    title: "RED MINDS CUP",
    price: "250,000 đ",
    img: "./assets/images/RED MINDS CUP.jpg"
  },
];







// products
const products = () => {
  const productsListing = document.querySelector("#listing-product-js");
  let HTML = ``;
  data.forEach((item) => {
    HTML = HTML + `
    <div class="col-6 col-sm-6 col-md-3">
    <a href="./detail.html">
      <div class="card">
        <img class="card-img" src="${item.img}" alt="">
        <div class="card-body">
          <div class="content">
            <div class="card-title">${item.title}</div>
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
