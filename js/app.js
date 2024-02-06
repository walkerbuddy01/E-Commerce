const cart = document.querySelector(".cart");
const cart_container = document.querySelector(".cart-container");
const cart_close_button = document.querySelector(".cart-close");
const menu_close_button = document.querySelector(".menu-close");
const cart_open_button = document.querySelector(".cart-section");
const menu_open_button = document.querySelector("nav .ri-menu-3-line")
const menu_section = document.querySelector(".menu-bar-1");
const menu_container = document.querySelector(".menu-wrapper")

cart_open_button.addEventListener("click", () => {
  cart.style.display = "flex";
  setTimeout(() => {
    cart_container.style.transform = "translateX(0%)";
  }, 100);
});

cart_close_button.addEventListener("click", () => {
  cart_container.style.transform = "translateX(100%)";
  setTimeout(() => {
    cart.style.display = "none";
  }, 500);
});



menu_open_button.addEventListener('click',()=>{
  menu_container.style.display = `flex`;
setTimeout(()=>{

  menu_section.style.transform = `translateX(0)`
},100)

  
})
menu_close_button.addEventListener('click',()=>{
  menu_section.style.transform = `translateX(-100%)`
  setTimeout(()=>{
    menu_container.style.display = `none`;
  },600)
})



{
  /* <div class="item-1 item">
                      <div class="product-image">
                          <i class="ri-shopping-bag-line"> Buy</i>
                       <img src="./media/hero section image.png" alt="product-image">
                      </div>
                        <h5 class="product-name">Nike shoes</h5>
                         <h6 class="product-price">$100</h5>
                      </div> */
}

const top_Product_Shelf = document.querySelector(".item-section-top");
const cart_product_section = document.querySelector(".products-collection");
const cartIcon = document.querySelector(".cart-section i");
const loader = document.createElement("div");
let product_counter = 0;
loader.setAttribute("class", "loader");
// Add to cart function
const add_in_cart = (item) => {
  const product = document.createElement("div");
  product.setAttribute("class", "product");
  product.innerHTML = `<div class="cart-product-image">
  <img src="${item.image}" alt="">
</div>
<div class="cart-product-content">
  <h5 class="product-name">${item.title}</h5>
  <h5 class="product-price">$${item.price}</h5>
  <div class="counter">
      
  </div>
</div>`;
  cart_product_section.appendChild(product);
  product_counter++;
  cartIcon.style.setProperty("--after-content", `${product_counter}`);
};

// GET product

async function getProducts(parentElement) {
  parentElement.appendChild(loader);
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  return data;
}

// Adding Items

async function addingItems(parentElement) {
  const items = await getProducts(parentElement);
  setTimeout(() => {
    for (let item of items) {
      const title = item.title;
      const price = item.price;
      const image = item.image;
      const desc = item.description;
      const Category = item.category;

      const DomElement = document.createElement("div");
      DomElement.setAttribute("class", "item-1 item");

      DomElement.innerHTML = `
            <div class="product-image">
                         <img src="${image}" alt="product-image">
                        </div>
                         <div class="product-content">
                            <h4>${title}</h4>
                            <p class="product-desc">
                            ${desc}
                           </p>
                            <h4>Category:${Category}</h4>
                            <h4>Price:$ ${price}</h4>
                            <button  class="add_to_cart">Add to cart</button>
                         </div>
            `;
      loader.style.display = "none";
      parentElement.appendChild(DomElement);
      DomElement.querySelector(".add_to_cart").addEventListener("click", () => {
        add_in_cart(item);
      });
    }
  }, 1200);
}

addingItems(top_Product_Shelf);

setTimeout(select, 1500);
