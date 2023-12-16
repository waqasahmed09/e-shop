// slider 

let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

function nextSlide() {
  currentSlide = (currentSlide + 1) % dots.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + dots.length) % dots.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds



anime.timeline({ loop: true })
  .add({
    targets: '.ml15 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
  });












let div = document.querySelector("#div");
let cart = [];
let products; // Declare products globally

function addToCart(i) {
  cart.push(products[i]);
  console.log(cart);
  Swal.fire({
    title: "Added",
    text: "Product added successfully!",
    icon: "success"
  });
}

axios
  .get("https://fakestoreapi.com/products?limit=20")
  .then((res) => {
    products = res.data; // Assign products globally

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productContainer = document.createElement("div");
      productContainer.classList.add("product");

      productContainer.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="max-width: 100px; max-height: 100px;">
        <p>
           ${product.title},
          Price: $${product.price.toFixed(2)}
        </p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      `;

      div.appendChild(productContainer);
    }

    let checkoutbtn = document.querySelector("#checkout");

    checkoutbtn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(cart);

      localStorage.setItem("items", JSON.stringify(cart));

      window.location = "checkout.html";
    });
  })
  .catch((err) => {
    console.log(err);
  });
