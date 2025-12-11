// Load Order info
const OrderID = localStorage.getItem("OrderID") || "000000";
const ItemCount = localStorage.getItem("ItemCount") || "0";
const TotalPrice = localStorage.getItem("TotalPrice") || "0.00";

//fill in order summary
document.getElementById("order-ID").textContent = `${OrderID}`;
document.getElementById("item-count").textContent = `${ItemCount} Products`;
document.getElementById("total-price").textContent = `£${TotalPrice}`;
document.getElementById("delivery-estimate").textContent = `2-4 Business Days`;

//clear after displaying
// localStorage.removeItem("cart");
localStorage.removeItem("OrderID");
localStorage.removeItem("ItemCount");
localStorage.removeItem("TotalPrice");

// continue shopping button
document.querySelector(".continue-shopping-btn").addEventListener("click", function() {
    window.location.href = "marketplace.html";
});