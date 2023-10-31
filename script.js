const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      console.log("removed all active classes");
      link.classList.remove("active");
    });
    console.log("added an active");
    link.classList.add("active");
  });
});
