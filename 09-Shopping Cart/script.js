const shop = document.getElementById("shop");
const cartContainer = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartBtn = document.getElementById("cart-btn");
const cartCloseBtn = document.getElementById("cart-close");
let cartAmount = document.getElementById("cartAmount");
let cart = [];

let shopItemsData = [
  {

    id: "myword1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-1.jpg",
    qty: 1,
  },
  {
    id: "myword2",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-2.jpg",
    qty: 1,
  },
  {
    id: "myword3",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-3.jpg",
    qty: 1,
  },
  {
    id: "myword4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-4.jpg",
    qty: 1,
  },
];




const addItemToCart = (id) => {
  if (cart.length > 0) {
    let existingItem = cart.find((item) => item.id == id);
    if (existingItem) {
      existingItem.qty = existingItem.qty + 1;
    } else {
      let cartItem = shopItemsData.find((item) => item.id == id);
      if (cartItem) {
        cart.push(cartItem);
        cartAmount.innerText = cart.length;
      }
    }
  } else {
    let cartItem = shopItemsData.find((item) => item.id == id);
    if (cartItem) {
      cart.push(cartItem);
      cartAmount.innerText = cart.length;
    }
  }
};


const RemoveItemFromCart = (id) => {
  cart = cart.filter((item) => item.id != id);
  cartItemsContainer.replaceChildren();
  generateCart();
  cartAmount.innerText = cart.length;
};

const createShopItem = (itemData) => {
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("item");
  let img = document.createElement("img");
  let title = document.createElement("h1");
  let price = document.createElement("h2");
  let desc = document.createElement("p");
  let button = document.createElement("button");
  button.classList.add("buttons");
  button.setAttribute("id", "shop" + itemData.id);

  button.addEventListener("click", () => {
    addItemToCart(itemData.id);
    console.log(cart);
  });

  img.src = itemData.img;
  title.textContent = itemData.name;
  price.textContent = "R " + itemData.price;
  desc.textContent = itemData.desc;
  button.innerText = "Add to cart";

  itemContainer.appendChild(img);
  itemContainer.appendChild(title);
  itemContainer.appendChild(price);
  itemContainer.appendChild(desc);
  itemContainer.appendChild(button);

  return itemContainer;
};

const createCartItem = (itemData) => {
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("item");
  let img = document.createElement("img");
  let title = document.createElement("h1");
  let price = document.createElement("h2");
  let desc = document.createElement("p");
  let removeButton = document.createElement("button");
  removeButton.classList.add("buttons");
  removeButton.setAttribute("id", "cart" + itemData.id);

  removeButton.addEventListener("click", () => {
    RemoveItemFromCart(itemData.id);
    //console.log(itemData.id);
    console.log(cart);
  });

  img.src = itemData.img;
  title.textContent = itemData.name;
  price.textContent = "R " + itemData.price;
  desc.textContent = itemData.desc;
  removeButton.innerText = "Remove";

  itemContainer.appendChild(img);
  itemContainer.appendChild(title);
  itemContainer.appendChild(price);
  //itemContainer.appendChild(desc);
  itemContainer.appendChild(removeButton);

  return itemContainer;
};

let generateShop = () => {
  shopItemsData.map((item) => {
    let shopItem = createShopItem(item);
    shop.appendChild(shopItem);
  });
};

let generateCart = () => {
  cart.map((item) => {
    let cartItem = createCartItem(item);
    cartItemsContainer.appendChild(cartItem);
  });
};

cartBtn.addEventListener("click", () => {
  cartContainer.classList.add("cart-wrapper-visible");
  generateCart();
});

cartCloseBtn.addEventListener("click", () => {
  cartItemsContainer.replaceChildren();
  cartContainer.classList.remove("cart-wrapper-visible");
});

generateShop();
