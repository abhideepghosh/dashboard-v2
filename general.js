const form = document.querySelector(".handleNext");

form.addEventListener("submit", (e) => {
  alert("WAIT");
  e.preventDefault();
  window.location.href = "register.html";
});
