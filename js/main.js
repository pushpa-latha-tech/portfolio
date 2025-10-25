/**
 * Portfolio Website JavaScript
 * Author: Kilaparthi Pushpa Latha
 * Description: Handles navigation, modals, form validation, scroll animations, and canvas charts
 */

// ===================================
// Utility Functions
// ===================================

/**
 * Throttle function to limit execution rate
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// Navigation
// ===================================

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Sticky navbar on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// Back to Top Button
// ===================================

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, 100));

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Modal Functionality
// ===================================

/**
 * Initialize project modals
 */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal') + 'Modal';
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Focus trap
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusableElements.length > 0) {
                    focusableElements[0].focus();
                }
            }
        });
    });

    // Close modal
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal on backdrop click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

// ===================================
// Form Validation
// ===================================

/**
 * Initialize contact form validation
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Validate single field
     */
    function validateField(field, errorElementId, validationFn, errorMessage) {
        const errorElement = document.getElementById(errorElementId);
        const value = field.value.trim();
        
        if (!validationFn(value)) {
            field.parentElement.classList.add('error');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            field.parentElement.classList.remove('error');
            errorElement.textContent = '';
            return true;
        }
    }

    /**
     * Validate all fields
     */
    function validateForm() {
        const isNameValid = validateField(
            nameInput,
            'nameError',
            (value) => value.length >= 2,
            'Name must be at least 2 characters long'
        );

        const isEmailValid = validateField(
            emailInput,
            'emailError',
            (value) => emailRegex.test(value),
            'Please enter a valid email address'
        );

        const isSubjectValid = validateField(
            subjectInput,
            'subjectError',
            (value) => value.length >= 3,
            'Subject must be at least 3 characters long'
        );

        const isMessageValid = validateField(
            messageInput,
            'messageError',
            (value) => value.length >= 10,
            'Message must be at least 10 characters long'
        );

        return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    }

    // Real-time validation on blur
    nameInput.addEventListener('blur', () => {
        validateField(
            nameInput,
            'nameError',
            (value) => value.length >= 2,
            'Name must be at least 2 characters long'
        );
    });

    emailInput.addEventListener('blur', () => {
        validateField(
            emailInput,
            'emailError',
            (value) => emailRegex.test(value),
            'Please enter a valid email address'
        );
    });

    subjectInput.addEventListener('blur', () => {
        validateField(
            subjectInput,
            'subjectError',
            (value) => value.length >= 3,
            'Subject must be at least 3 characters long'
        );
    });

    messageInput.addEventListener('blur', () => {
        validateField(
            messageInput,
            'messageError',
            (value) => value.length >= 10,
            'Message must be at least 10 characters long'
        );
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Create mailto link
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            const mailtoLink = `mailto:kilaparthipushpalatha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            alert('Thank you for your message! Your email client will open to send the message.');

            // Reset form
            form.reset();
        }
    });
}

// ===================================
// Skills Chart (Vanilla Canvas)
// ===================================

/**
 * Draw radar/spider chart for skills
 */
function drawSkillsChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 60;

    // Skills data
    const skills = [
        { name: 'Python', value: 90 },
        { name: 'TensorFlow', value: 85 },
        { name: 'Pandas/NumPy', value: 80 },
        { name: 'SQL', value: 75 },
        { name: 'NLP', value: 70 },
        { name: 'OpenCV', value: 80 }
    ];

    const numSkills = skills.length;
    const angleStep = (Math.PI * 2) / numSkills;

    // Colors
    const primaryColor = '#0EA5A4';
    const secondaryColor = '#4F46E5';
    const gridColor = '#e0e0e0';
    const textColor = '#666666';

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid circles
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        const r = (radius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Draw grid lines and labels
    ctx.strokeStyle = gridColor;
    ctx.fillStyle = textColor;
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Draw grid line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Draw label
        const labelDistance = radius + 30;
        const labelX = centerX + Math.cos(angle) * labelDistance;
        const labelY = centerY + Math.sin(angle) * labelDistance;
        ctx.fillText(skills[i].name, labelX, labelY);
    }

    // Draw skill values
    ctx.beginPath();
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + Math.cos(angle) * radius * value;
        const y = centerY + Math.sin(angle) * radius * value;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();

    // Fill
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, primaryColor + '80');
    gradient.addColorStop(1, secondaryColor + '40');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw points
    ctx.fillStyle = primaryColor;
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + Math.cos(angle) * radius * value;
        const y = centerY + Math.sin(angle) * radius * value;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw percentage labels
    ctx.fillStyle = textColor;
    ctx.font = 'bold 10px Inter, sans-serif';
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = skills[i].value / 100;
        const x = centerX + Math.cos(angle) * radius * value;
        const y = centerY + Math.sin(angle) * radius * value;

        ctx.fillText(skills[i].value + '%', x, y - 15);
    }
}

/**
 * Redraw chart on window resize
 */
function initChartResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            drawSkillsChart();
        }, 250);
    });
}

// ===================================
// Scroll Animations
// ===================================

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.cert-card, .education-card, .timeline-item, .training-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// Initialize App
// ===================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    initNavigation();
    initBackToTop();
    initModals();
    initContactForm();
    drawSkillsChart();
    initChartResize();
    initScrollAnimations();

    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// Export for testing (optional)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        throttle,
        isInViewport,
        drawSkillsChart
    };
}