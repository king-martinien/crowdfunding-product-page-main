(() => {
  let hamburgerButton = document.querySelector(".hamburger-btn");

  //   Toggle du hamburger button
  hamburgerButton.addEventListener("click", (e) => {
    hamburgerButton.classList.toggle("btn-active");
  });
})();
