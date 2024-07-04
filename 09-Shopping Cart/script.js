let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "myword",
    name: "Casual Shirt",
    price: 45,
    desc: ""
}, {}, {}];

let generateShop = () => {
    return shop.innerHTML = `
    <div class="item">
    <img src="img/img-1.jpg" alt="" width="220">

    <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

        <div class="price-quantity">
            <h2>R45</h2>
            
            <div class="buttons">
                <span class="material-symbols-outlined">
                    remove
                </span>

                <div class="quantity">0</div>

                <span class="material-symbols-outlined">
                    add
                </span>
            </div>
        </div>
    </div>
</div>
    `
};

generateShop();