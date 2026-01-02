// ===============================
// Cart State
// ===============================
let cart = [];
let cartCount = document.getElementById("cartCount");
let cartItems = document.getElementById("cartItems");
let cartTotal = document.getElementById("cartTotal");

// ===============================
// Product Price Map (manual but clean)
// ===============================
const prices = {
  "Classic Denim Jacket": 2999,
  "Premium Cotton Shirt": 1499,
  "Slim Fit Denim Jeans": 1999,
  "Urban Casual Sneakers": 2499,

  "Elegant Floral Dress": 2799,
  "Chic Casual Top": 1299,
  "High-Rise Denim Jeans": 1899,
  "Classic Block Heels": 2299
};

// ===============================
// Add to Cart Logic
// ===============================
document.querySelectorAll(".product .btn").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let card = e.target.closest(".card");
    let title = card.querySelector(".card-title").innerText;
    let price = prices[title] || 0;

    cart.push({ title, price });
    updateCart();
  });
});

document.querySelectorAll(".product-2 .btn").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let card = e.target.closest(".card");
    let title = card.querySelector(".card-title").innerText;
    let price = prices[title] || 0;

    cart.push({ title, price });
    updateCart();
  });
});

// ===============================
// Update Cart UI
// ===============================
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${item.title}</span>
      <div>
        <span class="me-3">₹${item.price}</span>
        <button class="btn btn-sm btn-danger">Remove</button>
      </div>
    `;

    // Remove Item
    li.querySelector("button").addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });

    cartItems.appendChild(li);
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

function added() {
  alert("You Just added an Item to the Cart!🔥");
}