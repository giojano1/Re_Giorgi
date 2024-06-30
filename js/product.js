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
const cartContent = document.querySelector(".cart_content");
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
function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 0);
}
function calculateTotalQuantity(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function updateCartPopup() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = calculateTotalPrice(cart);
  let items = calculateTotalQuantity(cart);
  const popup = document.querySelector(".popup");
  cartContent.textContent = "";
  cart.forEach((product, index) => {
    // pratent div
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart_item");

    // product div
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // image div
    const productImg = document.createElement("div");
    productImg.classList.add("product_img");
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = "product";
    productImg.appendChild(img);

    //  product details div
    const productDetails = document.createElement("div");
    productDetails.classList.add("product_details");

    const productTitle = document.createElement("span");
    productTitle.classList.add("product_title");
    productTitle.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product_price");
    productPrice.textContent = product.price;
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);

    productDiv.appendChild(productImg);
    productDiv.appendChild(productDetails);

    //navigation div
    const productNav = document.createElement("div");
    productNav.classList.add("product_nav");
    const quantity = document.createElement("span");
    quantity.textContent = product.quantity;
    const removeButton = document.createElement("button");
    removeButton.textContent = "REMOVE";
    productNav.appendChild(quantity);
    productNav.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartPopup();
    });

    cartItem.appendChild(productDiv);
    cartItem.appendChild(productNav);
    cartContent.appendChild(cartItem);
  });
  const totalElement = document.getElementById("totalItems");
  totalElement.textContent = `(${items})`;

  const totalPrice = document.getElementById("totalAmount");
  totalPrice.textContent = `$ ${total}`;

  const removeAllBtn = document.getElementById("removeAllItems");
  removeAllBtn.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartPopup();
  });
}
