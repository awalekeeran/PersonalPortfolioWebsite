/**
 * Portfolio Filter and Interaction Scripts
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================
    // Portfolio Filter Functionality
    // ============================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    
    // ============================================================
    // Initialize Portfolio Items Animation
    // ============================================================
    portfolioItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
    
    
    // ============================================================
    // Portfolio Item Hover Effects
    // ============================================================
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        
        if (overlay) {
            item.addEventListener('mouseenter', function() {
                // Add custom hover effects if needed
            });
            
            item.addEventListener('mouseleave', function() {
                // Remove custom hover effects if needed
            });
        }
    });
    
    
    // ============================================================
    // Lazy Loading for Portfolio Images (Optional Enhancement)
    // ============================================================
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        portfolioImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
});
