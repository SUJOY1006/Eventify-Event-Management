
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
document.getElementById("year").textContent =
    new Date().getFullYear();
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const selectedEvent = document.getElementById("event").value;

    const message = document.getElementById("message");

    if (!name || !email || !phone || !selectedEvent) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Thank you, " + name +
        "! Your registration for " + selectedEvent +
        " has been received.";

    form.reset();
});