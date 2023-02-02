let menuOpen = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.toggle("bx-x");
  menuWrapper.classList.toggle("active");
});

menuWrapper.addEventListener("click", function () {
  menuWrapper.classList.remove("active");
  menuOpen.classList.remove("bx-x");
});

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset;
  if (scrollTop >= 1) {
    $(".navbar").addClass("solid-nav");
  } else {
    $(".navbar").removeClass("solid-nav");
  }
});

const menu = document.querySelector(".menu");
const items = menu.querySelectorAll("a");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});
