const summaryProduct = document.querySelector(".summary_list");
const summaryTotalPrice = document.getElementById("summaryTotal");
const summaryGrandTotalPrice = document.getElementById("summaryGrandTotal");
const orderPopup = document.querySelector(".order_container");
const overlay2 = document.querySelector(".overlay2");
const finishCheckoutBtn = document.getElementById("finishCheckout");
const goHomeBtn = document.getElementById("goHome");
const removeAllBtn = document.getElementById("removeAllItems");
// burger menu
const btn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mobileMenu.classList.toggle("show");
});

function showSummary() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = calculateTotalPrice(cart);
  let items = calculateTotalQuantity(cart);
  summaryProduct.textContent = "";
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
    quantity.textContent = `x${product.quantity}`;

    productNav.appendChild(quantity);

    cartItem.appendChild(productDiv);
    cartItem.appendChild(productNav);
    summaryProduct.appendChild(cartItem);
  });

  summaryTotalPrice.textContent = `$ ${total}`;
  summaryGrandTotalPrice.textContent = `$ ${total + 50}`;
}
showSummary();
finishCheckoutBtn.addEventListener("click", () => {
  orderPopup.style.display = "block";
  overlay2.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});
goHomeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
removeAllBtn.addEventListener("click", () => {
  showSummary();
});

cartBtn.addEventListener("click", () => {
  removeItemFromSummary();
});

function removeItemFromSummary() {
  const removeItemBtn = document.querySelectorAll(".removeItem");
  removeItemBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(removeItemBtn);
      console.log("clicked");
      showSummary();
    });
  });
}
