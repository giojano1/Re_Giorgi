const productList = document.querySelector(".product_list");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentPage = 1;
const limit = 2;
let products = [];
fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    genProductBox();
  });

function genProductBox() {
  productList.textContent = "";

  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const productsToDisplay = products.slice(start, end);
  productsToDisplay.forEach((product) => {
    // parent name
    const productDiv = document.createElement("div");
    productDiv.classList.add("product_box");
    productList.appendChild(productDiv);
    // img div
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("product_img");
    productDiv.appendChild(imgDiv);

    const productImg = document.createElement("img");
    productImg.src = product.img;
    imgDiv.appendChild(productImg);

    // text div
    const textDiv = document.createElement("div");
    textDiv.classList.add("product_text");
    productDiv.appendChild(textDiv);

    // product name
    const productName = document.createElement("h2");
    productName.classList.add("product_title");
    productName.textContent = product.name;
    textDiv.appendChild(productName);

    // product price
    const productDesc = document.createElement("p");
    productDesc.classList.add("product_description");
    productDesc.textContent = product.description;
    textDiv.appendChild(productDesc);
    // product button
    const productButton = document.createElement("button");
    productButton.classList.add("view_more");
    productButton.textContent = "SEE PRODUCT";
    productButton.addEventListener("click", () => {
      redirect(product.id);
    });
    textDiv.appendChild(productButton);
  });
}

if (currentPage === 1) {
  prevButton.disabled = true;
}
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    nextButton.disabled = false;
    genProductBox();
    window.scrollTo({
      top: 0,
    });
  } else {
    prevButton.disabled = true;
  }
  if (currentPage === 1) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(products.length / limit)) {
    prevButton.disabled = false;
    currentPage++;
    genProductBox();
    window.scrollTo({
      top: 0,
    });
  } else {
  }
  if (currentPage === Math.ceil(products.length / limit)) {
    nextButton.disabled = true;
  }
});
function redirect(productID) {
  window.location.href = `../pages/product.html?id=${productID}`;
}
