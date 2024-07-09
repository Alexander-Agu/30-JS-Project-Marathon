let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "myword1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-1.jpg"
}, 
{
    id: "myword2",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-2.jpg"
}, 
{
    id: "myword3",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-3.jpg"
},
{
    id: "myword4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/img-4.jpg"
}];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map())
};

generateShop();