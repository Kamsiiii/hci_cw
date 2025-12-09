// Select all "Add to Cart" buttons
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".product-card");

        const product = {
            name: card.querySelector("h3").innerText,
            vendor: card.querySelector(".vendor").innerText,
            price: card.querySelector(".price").innerText.replace("per kg", "").trim(),
            image: card.querySelector("img").src,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already exists
        const existing = cart.find(item => item.name === product.name);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.name} added to basket `);
    });
});
