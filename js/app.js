const cart = document.querySelector(".cart");

const cart_container = document.querySelector(".cart-container")

const cart_close_button = document.querySelector(".ri-close-line");

const cart_open_button = document.querySelector(".cart-section")


cart_open_button.addEventListener('click',()=>{
  cart.style.display = "flex";
  setTimeout(()=>{
    cart_container.style.transform = 'translateX(0%)'
  },100)

  
  
})


cart_close_button.addEventListener('click',()=>{
  cart_container.style.transform = 'translateX(100%)'
  setTimeout(()=>{
    cart.style.display = "none";
  },500)
})

 












// <div class="item-1 item">
//    <div class="product-image">
//     <img src="./media/hero section image.png" alt="product-image">
//    </div>
//      <h5 class="product-name">Nike shoes</h5>
//     <h6 class="product-price">$100</h5>
//  </div>

const top_Product_Shelf = document.querySelector(".item-section-top");
const bottom_Product_Shelf = document.querySelector(".item-section-bottom");
const loader = document.createElement("div");
    loader.setAttribute("class","loader");



    // GET product 

async function getProducts(parentElement) {
    parentElement.appendChild(loader);
  const response = await fetch(
    "https://fakestoreapi.com/products?limit=5"
  );
  const data = await response.json();
  return data;
}

// Adding Items 

async function addingItems(parentElement) {
    
    const items = await getProducts(parentElement);
    setTimeout(()=>{
        
        for (let item of items) {
            const title = item.title;
            const price = item.price;
            const image = item.image;
            
            const DomElement = document.createElement("div");
            DomElement.setAttribute("class","item-1 item")
            
            DomElement.innerHTML = `
            <div class="product-image">
            <img src="${image}" alt="product-image" loading = "lazy">
            </div>
            <h5 class="product-name">${title}</h5>
            <h6 class="product-price">$${price}</h5>
            `
            loader.style.display = "none";
            parentElement.appendChild(DomElement);
        }  
},1200)

  }


  addingItems(bottom_Product_Shelf);
  addingItems(top_Product_Shelf);

