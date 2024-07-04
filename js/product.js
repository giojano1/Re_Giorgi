const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const productMainImg = document.querySelector(".productMainImg");
const productTitle = document.querySelector(".product_name");
const productType = document.querySelector(".product_type");
const productDesc = document.querySelector(".product_description");
const productPrice = document.querySelector(".product_price");
const productFeature = document.querySelector("#productDesc");
const productImgs = document.querySelectorAll(".gall");
const decBtn = document.getElementById("minus");
const incBtn = document.getElementById("plus");
const addToCartBtn = document.getElementById("addToCart");
const qty = document.getElementById("qty");
qty.id = `quantity-${productId}`;
// burger menu
const btn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mobileMenu.classList.toggle("show");
});

fetch("../products.json")
  .then((res) => res.json())
  .then((product) => {
    const productData = product.find((item) => item.id === productId);

    if (productData) {
      // load product
      productMainImg.src = productData.img;
      productTitle.textContent = productData.name;
      productType.textContent = productData.type;
      productDesc.textContent = productData.description;
      productPrice.textContent = `$ ${productData.price}`;
      productFeature.textContent = productData.features;
      productImgs.forEach((img, i) => {
        img.src = productData.additionalImages[i];
      });
      // add to cart
      addToCartBtn.addEventListener("click", () => {
        const quantity = parseInt(qty.value);

        addToCart({ ...productData, quantity });
      });
    } else {
      alert("404 not found");
    }
  });
// increment button
incBtn.addEventListener("click", () => {
  incrementQuantity();
});
// decrement button
decBtn.addEventListener("click", () => {
  decrementQuantity();
});
function incrementQuantity() {
  qty.value++;
}
function decrementQuantity(myId) {
  if (qty.value > 1) {
    qty.value--;
  }
}
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let exitingProductIndex = cart.findIndex((p) => p.id === product.id);
  if (exitingProductIndex >= 0) {
    cart[exitingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPopup();
}
