let checkedPoducts = document.querySelector("#checkedPoducts");

let phones = localStorage.getItem('items');

let strObj = phones ? JSON.parse(phones) : [];

console.log(strObj);

function renderProducts() {
  checkedPoducts.innerHTML = ""; // Clear the existing content

  for (let i = 0; i < strObj.length; i++) {
    const product = strObj[i];

    let quantity1 = product.quantity;
    checkedPoducts.innerHTML += `
      <div class="checkoutedCart">

        <img class="renderedImage" src="${product.image}" alt="${product.title}" style="max-width: 100px; max-height: 100px;">
        <p class="text">
          Model: ${product.title},<br>
          Quantity: ${product.quantity},<br>
          Price: $${product.price.toFixed(2)}
          <button onclick="incrementQuantity(${i})">+</button>
          <button onclick="decrementQuantity(${i})">-</button>
          <button onclick="deleteCart(${i})">Delete</button>
        </p>
      </div>
    `;
  }
}

function incrementQuantity(i) {
  strObj[i].quantity++;
  strObj[i].price = strObj[i].price + strObj[i].price; // Double the price

  localStorage.setItem('items', JSON.stringify(strObj));

  renderProducts();
}

// Function to decrement the quantity and update the price
function decrementQuantity(i) {
  if (strObj[i].quantity > 1) {
    strObj[i].quantity--;
    strObj[i].price = strObj[i].price - strObj[i].price; // Halve the price

    localStorage.setItem('items', JSON.stringify(strObj));

    renderProducts();
  }
}

function deleteCart(i) {
  strObj.splice(i, 1);

  localStorage.setItem('items', JSON.stringify(strObj));

  renderProducts();
}

renderProducts();