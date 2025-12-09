function updateSubtotal() {
    let subtotal = 0;

    document.querySelectorAll(".basket-card").forEach(card => {
        const price = parseFloat(card.dataset.price);
        const qty = parseInt(card.querySelector(".qty-input").value);
        const total = price * qty;

        card.querySelector(".item-price").textContent = "£" + total.toFixed(2);
        subtotal += total;
    });

    document.querySelector(".summary-line").innerHTML = `<strong>Subtotal:</strong> £${subtotal.toFixed(2)}`;
}

// Increase qty
document.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", function () {
        const input = this.parentElement.querySelector(".qty-input");
        input.value = parseInt(input.value) + 1;
        updateSubtotal();
    });
});

// Decrease qty
document.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", function () {
        const input = this.parentElement.querySelector(".qty-input");
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
            updateSubtotal();
        }
    });
});

// Delete item
document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.closest(".basket-card").remove();
        updateSubtotal();
    });
});

// Initialise subtotal at page load
updateSubtotal();
