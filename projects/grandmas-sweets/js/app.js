document.getElementById("cart-info").addEventListener("click", function () {
	const cart = document.getElementById("cart");
	cart.classList.toggle("show-cart");
});
// mobile cart button functionality
const mobCartBtn = document.getElementById("mob-cart-btn");
mobCartBtn.addEventListener("click", function () {
	cart.classList.toggle("show-cart");
});
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
