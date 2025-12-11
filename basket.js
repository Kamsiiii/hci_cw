const basketContainer = document.querySelector(".basket-items");

function loadBasket() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    basketContainer.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        const priceNum = parseFloat(item.price.replace("£", ""));
        const itemTotal = priceNum * item.quantity;
        subtotal += itemTotal;

        basketContainer.innerHTML += `
            <div class="basket-card" data-price="${priceNum}">
                <img src="${item.image}" class="card-img">

                <div class="card-info">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-desc">${item.vendor}</p>
                </div>

                <div class="card-controls">

                    <div class="quantity-box">
                        <button class="qty-btn minus" data-index="${index}">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1">
                        <button class="qty-btn plus" data-index="${index}">+</button>
                    </div>

                    <button class="delete-btn" data-index="${index}">
                        <img src="bin1.jpg" class="bin-icon">
                    </button>

                    <p class="item-price">£${itemTotal.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    document.querySelector(".summary-line").innerHTML = `<strong>Subtotal:</strong> £${subtotal.toFixed(2)}`;

    attachEvents();
}

function attachEvents() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".plus").forEach(btn => {
        btn.addEventListener("click", function () {
            const i = this.dataset.index;
            cart[i].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            loadBasket();
        });
    });

    document.querySelectorAll(".minus").forEach(btn => {
        btn.addEventListener("click", function () {
            const i = this.dataset.index;
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
                localStorage.setItem("cart", JSON.stringify(cart));
                loadBasket();
            }
        });
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const i = this.dataset.index;
            cart.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadBasket();
        });
    });
}

loadBasket();

document.querySelector(".checkout-btn").addEventListener("click", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your basket is empty!");
        return;
    }

    //Generate random order ID
    const OrderID = 'ORD' + Math.floor(100000 + Math.random() * 900000);

    // count Items and total price
    let itemCount = 0;
    let totalPrice = 0;
    cart.forEach(item => {
        itemCount += item.quantity;
        totalPrice += parseFloat(item.price.replace("£", "")) * item.quantity;
    });

    // save order details for the post-order page
    localStorage.setItem("OrderID", OrderID);
    localStorage.setItem("ItemCount", itemCount);
    localStorage.setItem("TotalPrice", totalPrice.toFixed(2));

    // Clear the cart
    localStorage.removeItem("cart");

    // Redirect to PostOrder page
    window.location.href = "PostOrder.html";
});






