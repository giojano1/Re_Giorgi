const cartBtn = document.querySelector(".cart_btn");
const cartPopup = document.querySelector(".cart_popup");
const overlay = document.querySelector(".overlay");
const decBtn = document.getElementById("minus");
const incBtn = document.getElementById("plus");
const addToCartBtn = document.getElementById("addToCart");
const qty = document.getElementById("qty");
qty.id = `quantity-${productId}`;
// show hide cart
cartBtn.addEventListener("click", () => {
  cartPopup.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  cartPopup.style.display = "none";
  overlay.style.display = "none";
});

// increment button
incBtn.addEventListener("click", () => {
  incrementQuantity();
});
// decrement button
decBtn.addEventListener("click", () => {
  decrementQuantity();
});

// addToCartBtn.addEventListener("click", () => {
//   const quantity = parseInt(
//     document.querySelector(`#quantity-${product.id}`).value
//   );
//   addToCart({ ...product, quantity });
// });
function incrementQuantity() {
  qty.value++;
}
function decrementQuantity(myId) {
  if (qty.value > 1) {
    qty.value--;
  }
}
