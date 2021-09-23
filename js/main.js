let header = document.querySelector("header");
let bars = document.querySelector(".bars i");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.onscroll = () => fadeGround();
window.onload = () => fadeGround();

function fadeGround() {
  if (window.scrollY > 0) {
    header.style.cssText = `background: #6c5ce7; box-shadow: 0 0.2rem 0.5rem rgb(0 0 0 / 30%);`;
  } else {
    header.style.cssText = `background: none; box-shadow: none;`;
  }
}

// Create Accordion by jQuery
$(document).ready(function () {
  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp();
    $(this).next(".accordion-body").slideDown();
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});
