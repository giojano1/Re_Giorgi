const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

const productMainImg = document.querySelector(".productMainImg");
const productTitle = document.querySelector(".product_title");
const productType = document.querySelector(".product_type");
const productDesc = document.querySelector(".product_description");
const productPrice = document.querySelector(".product_price");
const productFeature = document.querySelector("#productDesc");
const productImg1 = document.querySelector(".gall1");
const productImg2 = document.querySelector(".gall2");
const productImg3 = document.querySelector(".gall3");
const qty = document.getElementById("qty");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
let productQty = parseInt(qty.textContent);
fetch("../products.json")
  .then((res) => res.json())
  .then((product) => {
    const productData = product[productId - 1];
    if (product) {
      productMainImg.src = productData.img;
      productTitle.textContent = productData.name;
      productType.textContent = productData.type;
      productDesc.textContent = productData.description;
      productPrice.textContent = `$ ${productData.price}`;
      productFeature.textContent = productData.features;
      productImg1.src = productData.additionalImages[0];
      productImg2.src = productData.additionalImages[1];
      productImg3.src = productData.additionalImages[2];
    } else {
      alert("404 not found");
    }
  });
minusBtn.addEventListener("click", () => {
  if (productQty > 1) {
    productQty--;
    qty.textContent = productQty;
  }
});
plusBtn.addEventListener("click", () => {
  productQty++;
  qty.textContent = productQty;
});
