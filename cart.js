function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartUI() {
  const cart = getCart();
  const el = document.getElementById("cart-count");
  if (el) el.innerText = "🛒 " + cart.length;
}

function addToCart() {
  const cart = getCart();
  cart.push({ item: "device" });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

updateCartUI();