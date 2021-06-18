// scroll to top functionality
const scroll = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
  scroll.classList.toggle("active", window.scrollY > 500);
});
scroll.addEventListener("click", scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// sticky nav functionality
const nav = document.getElementById("navEl");
const section1 = document.getElementById("first-section");

window.addEventListener("scroll", function (e) {
  const initialCoords = section1.getBoundingClientRect();
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
});
