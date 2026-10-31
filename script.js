
document.addEventListener("DOMContentLoaded", function () {

    // 1. Contact Button
    const contactBtn = document.getElementById("contactBtn");
    const message = document.getElementById("message");

    if (contactBtn && message) {
        contactBtn.addEventListener("click", function () {
            message.textContent = "Thanks for visiting my portfolio!";
        });
    }

    // 2. Typing Effect
    const typingText = document.getElementById("typing-text");
    const text = "Software Engineer";
    let index = 0;

    function typeText() {
        if (typingText && index < text.length) {
            typingText.textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }

    if (typingText) {
        typingText.textContent = "";
        typeText();
    }

    // 3. Scroll Animation
    const sections = document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    } else {
        sections.forEach(function (section) {
            section.classList.add("show");
        });
    }

    // 4. Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const userMessage = document.getElementById("userMessage");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && nameInput && emailInput &&
        userMessage && formMessage) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (
                nameInput.value.trim() === "" ||
                emailInput.value.trim() === "" ||
                userMessage.value.trim() === ""
            ) {
                formMessage.textContent = "Please fill in all fields.";
                return;
            }

            if (!emailInput.validity.valid) {
                formMessage.textContent = "Please enter a valid email.";
                return;
            }

            formMessage.textContent = "Form submitted successfully!";
            contactForm.reset();
        });
    }
});
