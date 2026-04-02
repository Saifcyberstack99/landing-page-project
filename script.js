// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const people = document.getElementById("people").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || people === "") {
    formMessage.textContent = "Please fill all required fields.";
    formMessage.style.color = "#f87171";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#f87171";
    return;
  }

  formMessage.textContent = "Table reserved successfully!";
  formMessage.style.color = "#22c55e";
  bookingForm.reset();
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// About Button
const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {
  alert("Spice Haven is dedicated to delivering premium food and dining experiences.");
});