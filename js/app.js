const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  // Animate hamburger to X
  hamburger.children[0].classList.toggle("rotate-45");
  hamburger.children[1].classList.toggle("opacity-0");
  hamburger.children[2].classList.toggle("-rotate-45");
});

function showCategory(categoryId) {
  const categories = document.querySelectorAll(".category-items");
  const tabs = document.querySelectorAll(".tab-btn");

  categories.forEach((cat) => cat.classList.add("hidden"));
  tabs.forEach((tab) => tab.classList.remove("actives"));

  document.getElementById(categoryId).classList.remove("hidden");
  event.target.classList.add("actives");
}

//
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function goToSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto Slide
setInterval(() => {
  changeSlide(1);
}, 5000); // every 5 seconds

//
let slider = document.getElementById("testimonialSlider");

function moveSlide(step) {
  slider.scrollBy({
    left: step * 320,
    behavior: "smooth",
  });
}

// Optional: Auto-scroll
setInterval(() => moveSlide(1), 7000);

//
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Collapse any open FAQ before opening new one
    document.querySelectorAll(".faq-answer").forEach((a) => {
      if (a !== answer) a.style.display = "none";
    });

    // Toggle current
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
//

function showNotification(message) {
  const notif = document.createElement("div");
  notif.className = "cart-notification";
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.name === product.name);
  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showNotification(`✅ ${product.name} added to cart`);
}

function buyNow(product) {
  localStorage.setItem("cart", JSON.stringify([product]));
  window.location.href = "buy-now.html";
}

document.querySelector(".add-cart").addEventListener("click", () => {
  const qty = parseInt(document.querySelector(".quantity input").value) || 1;
  const product = {
    name: "Sweet Sleep Memory Foam Mattress",
    price: getCurrentPrice(),
    quantity: qty,
  };
  addToCart(product);
});

document.querySelector(".buy-now").addEventListener("click", () => {
  const qty = parseInt(document.querySelector(".quantity input").value) || 1;
  const product = {
    name: "Sweet Sleep Memory Foam Mattress",
    price: getCurrentPrice(),
    quantity: qty,
  };
  buyNow(product);
});

function getCurrentPrice() {
  const priceText = document.querySelector(".price").textContent;
  return parseInt(priceText.replace(/[₹,]/g, ""));
}


