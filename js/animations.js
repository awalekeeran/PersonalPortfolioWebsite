/**
 * Animation and Scroll Effects
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================
    // Intersection Observer for Scroll Animations
    // ============================================================
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        
        // Animation options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Optional: Stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Elements to animate
        const animatedElements = document.querySelectorAll(`
            .section-header,
            .service-card,
            .skill-category,
            .portfolio-item,
            .contact-item,
            .about-image,
            .about-text
        `);
        
        // Observe all elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    
    // ============================================================
    // Typing Animation for Home Section
    // ============================================================
    const titleElement = document.querySelector('.title');
    
    if (titleElement) {
        const titleText = titleElement.textContent;
        const typingSpeed = 100; // milliseconds per character
        const erasingSpeed = 50;
        const pauseDuration = 2000;
        
        // Uncomment below to enable typing animation
        /*
        titleElement.textContent = '';
        let charIndex = 0;
        let isTyping = true;
        
        function type() {
            if (isTyping) {
                if (charIndex < titleText.length) {
                    titleElement.textContent += titleText.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(() => {
                        isTyping = false;
                        type();
                    }, pauseDuration);
                }
            } else {
                if (charIndex > 0) {
                    titleElement.textContent = titleText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, erasingSpeed);
                } else {
                    setTimeout(() => {
                        isTyping = true;
                        type();
                    }, 500);
                }
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(type, 1000);
        */
    }
    
    
    // ============================================================
    // Counter Animation for Metrics
    // ============================================================
    const metricValues = document.querySelectorAll('.metric-value');
    
    function animateCounter(element) {
        const target = element.textContent.replace(/\D/g, ''); // Get numbers only
        const suffix = element.textContent.replace(/[0-9]/g, ''); // Get suffix (+ etc.)
        const duration = 2000; // Animation duration in ms
        const increment = Math.ceil(target / (duration / 16)); // 60fps
        
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = current + suffix;
        }, 16);
    }
    
    // Observe metrics for animation
    if ('IntersectionObserver' in window) {
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                    metricsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        metricValues.forEach(metric => {
            metricsObserver.observe(metric);
        });
    }
    
    
    // ============================================================
    // Parallax Effect for Home Section Background
    // ============================================================
    const homeSection = document.querySelector('.home-section');
    
    if (homeSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < homeSection.offsetHeight) {
                homeSection.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
            }
        });
    }
    
    
    // ============================================================
    // Skill Items Hover Animation
    // ============================================================
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        // Stagger animation on page load
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
        
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.3s ease';
    });
    
    
    // ============================================================
    // Mouse Move Effect for Cards (Optional)
    // ============================================================
    const cards = document.querySelectorAll('.service-card, .portfolio-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Uncomment to enable 3D tilt effect
            // card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            // card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    
    // ============================================================
    // Smooth Reveal Animation for Sections
    // ============================================================
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
    });
    
    // Reveal sections on scroll
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }
    
});
