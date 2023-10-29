const form = document.querySelector(".handleNext");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "register.html";
});
