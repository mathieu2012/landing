document.addEventListener("DOMContentLoaded", () => {
    const cartOverlay = document.getElementById("cart-overlay");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
  
    let cart = [];
  
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        const product = button.closest(".product-card");
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.dataset.price);
  
        cart.push({ name: productName, price: productPrice });
        updateCart();
      });
    });
  
    document.getElementById("cart-icon").addEventListener("click", () => {
      cartOverlay.style.display = "flex";
      renderCartItems();
    });
  
    document.getElementById("close-cart").addEventListener("click", () => {
      cartOverlay.style.display = "none";
    });
  
    function renderCartItems() {
      cartItems.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
          <p>${item.name} - ${item.price}€</p>
          <button onclick="removeFromCart(${index})">Retirer</button>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price;
      });
      cartTotal.textContent = `${total}€`;
      cartCount.textContent = cart.length;
    }
  
    window.removeFromCart = (index) => {
      cart.splice(index, 1);
      updateCart();
    };
  
    function updateCart() {
      renderCartItems();
    }
  });
  