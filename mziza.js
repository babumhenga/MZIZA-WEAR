// Get the cart button and cart overlay
const cartBtn = document.querySelector(".cart-btn");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");

// Get the products from diffrent html
class Products {
  async getProducts() {
    try {
      let result = await fetch("products");
      return await result.json();
    } catch (error) {
      console.log(error);
    }
  }
}


  // Remove the item from the cart
  removeItem(item) {
    const removeItem = item.querySelector(".remove-item");
    removeItem.addEventListener("click", e => {
      const id = e.target.dataset.id;
      cart = cart.filter(item => item.id!== parseInt(id));
      Storage.saveCart(cart);
      this.setCartValues(cart);
      item.remove();
      this.removeItemFromCartOverlay(id);
    });
  }
.classList.remove("close-cart");

}

function mainFunction(){
  
}