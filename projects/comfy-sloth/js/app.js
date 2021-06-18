// sticky nav functionality
const nav = document.getElementById("navEl");
const section1 = document.getElementById("section1");

window.addEventListener("scroll", function (e) {
  const initialCoords = section1.getBoundingClientRect();
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
