const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

const productMainImg = document.querySelector(".productMainImg");
const productTitle = document.querySelector(".product_name");
const productType = document.querySelector(".product_type");
const productDesc = document.querySelector(".product_description");
const productPrice = document.querySelector(".product_price");
const productFeature = document.querySelector("#productDesc");
const productImgs = document.querySelectorAll(".gall");

fetch("../products.json")
  .then((res) => res.json())
  .then((product) => {
    const productData = product.find((item) => item.id === productId);

    if (productData) {
      productMainImg.src = productData.img;
      productTitle.textContent = productData.name;
      productType.textContent = productData.type;
      productDesc.textContent = productData.description;
      productPrice.textContent = `$ ${productData.price}`;
      productFeature.textContent = productData.features;
      productImgs.forEach((img, i) => {
        img.src = productData.additionalImages[i];
      });
    } else {
      alert("404 not found");
    }
  });
