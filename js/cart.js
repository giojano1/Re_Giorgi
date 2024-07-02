const cartBtn = document.querySelector(".cart_btn");
const cartPopup = document.querySelector(".cart_popup");
const overlay = document.querySelector(".overlay");
const cartContent = document.querySelector(".cart_content");
const goToCheckout = document.getElementById("checkout");
// show hide cart
cartBtn.addEventListener("click", () => {
  cartPopup.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  cartPopup.style.display = "none";
  overlay.style.display = "none";
});
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
    removeButton.classList.add("removeItem");
    productNav.appendChild(quantity);
    productNav.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartPopup();
      cartPopup.style.display = "none";
      overlay.style.display = "none";
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
updateCartPopup();
goToCheckout.addEventListener("click", () => {
  window.location.href = "../pages/checkout.html";
});
