// Signup

const tabButtons = document.querySelectorAll(".tab-button");
const forms = document.querySelectorAll("form");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from tabs
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Display correct form
    const target = btn.getAttribute("data-target");
    forms.forEach((form) => {
      form.classList.toggle("active", form.id === target);
    });
  });
});
