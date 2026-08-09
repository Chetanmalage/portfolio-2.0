document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const header = document.querySelector(".header");
    const contactForm = document.getElementById("contactForm");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const themeToggle = document.getElementById("themeToggle");
    const sections = document.querySelectorAll("section");
    const projectImages = document.querySelectorAll(".project-img-wrapper img");

    // --- Hide Loader ---
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 800);
    }

    // --- Typing Animation ---
    const greetingEl = document.querySelector('.greeting');
    if (greetingEl) {
        const phrases = ['👋 Hi, I\'m Chetan', '💻 Java Full Stack Developer', '🎯 Problem Solver', '🚀 Always Learning'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;

        function typeWriter() {
            if (isWaiting) {
                setTimeout(() => {
                    isWaiting = false;
                    typeWriter();
                }, 500);
                return;
            }

            const currentPhrase = phrases[phraseIndex];
            
            if (!isDeleting) {
                // Typing
                greetingEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentPhrase.length) {
                    isWaiting = true;
                    setTimeout(() => {
                        isDeleting = true;
                        isWaiting = false;
                        setTimeout(typeWriter, 100);
                    }, 2000);
                    return;
                }
            } else {
                // Deleting
                greetingEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    isWaiting = true;
                    setTimeout(() => {
                        isWaiting = false;
                        typeWriter();
                    }, 300);
                    return;
                }
            }
            
            const speed = isDeleting ? 30 : 60;
            setTimeout(typeWriter, speed);
        }
        
        setTimeout(typeWriter, 1000);
    }

    // --- Mobile Menu Toggle ---
    hamburger.addEventListener("click", () => {
        const isActive = navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isActive);
        
        // Toggle icon between bars and X
        const icon = hamburger.querySelector("i");
        if (isActive) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Close Mobile Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    // --- Header Scroll Effect ---
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        
        // Header shadow
        if (scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Scroll to Top button visibility
        if (scrollY > 500) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }

        // Active navigation link highlighting
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }
        });
    });

    // --- Scroll to Top ---
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --- Theme Toggle ---
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector("i");
        if (theme === "dark") {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    // --- Contact Form Handler with Validation ---
    if (contactForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const submitBtn = contactForm.querySelector(".submit-btn");

        // Real-time validation
        nameInput.addEventListener("blur", () => validateField(nameInput, nameError, "Please enter your name"));
        emailInput.addEventListener("blur", () => validateEmail(emailInput, emailError));
        messageInput.addEventListener("blur", () => validateField(messageInput, messageError, "Please enter a message"));

        // Input listeners for real-time validation clearing
        nameInput.addEventListener("input", () => {
            if (nameInput.value.trim() !== "") {
                nameInput.classList.remove("error");
                nameError.classList.remove("visible");
            }
        });
        
        emailInput.addEventListener("input", () => {
            if (emailInput.value.trim() !== "") {
                emailInput.classList.remove("error");
                emailError.classList.remove("visible");
            }
        });
        
        messageInput.addEventListener("input", () => {
            if (messageInput.value.trim() !== "") {
                messageInput.classList.remove("error");
                messageError.classList.remove("visible");
            }
        });

        function validateField(input, errorElement, errorMessage) {
            if (input.value.trim() === "") {
                input.classList.add("error");
                errorElement.textContent = errorMessage;
                errorElement.classList.add("visible");
                return false;
            } else {
                input.classList.remove("error");
                errorElement.classList.remove("visible");
                return true;
            }
        }

        function validateEmail(input, errorElement) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value.trim() === "") {
                input.classList.add("error");
                errorElement.textContent = "Please enter your email";
                errorElement.classList.add("visible");
                return false;
            } else if (!emailRegex.test(input.value.trim())) {
                input.classList.add("error");
                errorElement.textContent = "Please enter a valid email address";
                errorElement.classList.add("visible");
                return false;
            } else {
                input.classList.remove("error");
                errorElement.classList.remove("visible");
                return true;
            }
        }

        // Form submission
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateField(nameInput, nameError, "Please enter your name");
            const isEmailValid = validateEmail(emailInput, emailError);
            const isMessageValid = validateField(messageInput, messageError, "Please enter a message");

            if (isNameValid && isEmailValid && isMessageValid) {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

                // Simulate sending (replace with actual API call)
                setTimeout(() => {
                    alert(`Thank you ${nameInput.value.trim()}! Your message has been sent successfully.`);
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
                    
                    // Remove error states
                    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
                    document.querySelectorAll(".error-message").forEach(el => el.classList.remove("visible"));
                }, 1500);
            }
        });
    }

    // --- Image Loading Animation ---
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.remove("loading");
                    img.loading = "eager";
                    imageObserver.unobserve(img);
                }
            });
        });

        projectImages.forEach(img => {
            img.classList.add("loading");
            imageObserver.observe(img);
        });
    }

    // --- Keyboard Navigation for Mobile Menu ---
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
            hamburger.focus();
        }
    });

    // --- Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Scroll Fade Animation ---
    const fadeElements = document.querySelectorAll('.about-card, .skills-card, .project-card');
    if ("IntersectionObserver" in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            fadeObserver.observe(el);
        });
    }

    // --- Dynamic Year ---
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.textContent = `© ${year} Chetan Malage. All Rights Reserved.`;
    }
});