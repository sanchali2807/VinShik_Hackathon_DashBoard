document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".menu li.active")?.classList.remove("active");
    item.classList.add("active");
  });
});
