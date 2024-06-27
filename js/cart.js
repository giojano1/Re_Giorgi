const cartBtn = document.querySelector(".cart_btn");
const cartPopup = document.querySelector(".cart_popup");
const overlay = document.querySelector(".overlay");
const decBtn = document.getElementById("minus");
const incBtn = document.getElementById("plus");
const addToCartBtn = document.getElementById("addToCart");
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
  incrementQuantity(product.id);
});
// decrement button
decBtn.addEventListener("click", () => {
  decrementQuantity(product.id);
});
addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(
    document.querySelector(`#quantity-${product.id}`).value
  );
  addToCart({ ...product, quantity });
});
function incrementQuantity(myId) {
  const quantityInput = document.querySelector(`#quantity-${myId}`);
  quantityInput.value = parseInt(quantityInput.value) + 1;
}
function decrementQuantity(myId) {
  const quantityInput = document.querySelector(`#quantity-${myId}`);
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}
