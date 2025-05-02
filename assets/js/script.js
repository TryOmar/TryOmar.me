document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            // Remove active class from all nav links
            navItems.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 5%';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 5%';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
        
        // Set active nav link based on scroll position
        setActiveNavOnScroll();
    });
    
    // Function to set active navigation based on scroll position
    function setActiveNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // For demonstration purposes, we'll just log the data
            console.log({
                name,
                email,
                subject,
                message
            });
            
            // In a real implementation, you would send this data to a server
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, subject, message }) })
            
            // Show success message (you can replace this with your own implementation)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Skill bars animation - Fixed version
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
            // Start with 0 width for animation
            bar.style.width = '0';
            
            // Get the target width from CSS (already set with !important)
            setTimeout(() => {
                // Force a reflow before setting the transition
                bar.offsetHeight;
                
                // Add transition
                bar.style.transition = 'width 1.5s ease-out';
                
                // Remove the inline style to let the CSS !important rule take effect
                bar.style.removeProperty('width');
            }, 300);
        });
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    
    // Animate skill bars when skills section is in viewport
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        let animated = false;
        
        function checkAndAnimateSkills() {
            if (!animated && isInViewport(skillsSection)) {
                animateSkillBars();
                animated = true;
                
                // Remove event listeners once animated
                window.removeEventListener('scroll', checkAndAnimateSkills);
                window.removeEventListener('resize', checkAndAnimateSkills);
            }
        }
        
        window.addEventListener('scroll', checkAndAnimateSkills);
        window.addEventListener('resize', checkAndAnimateSkills);
        
        // Check on page load as well
        window.addEventListener('load', checkAndAnimateSkills);
        
        // Retry after a short delay in case other scripts delay rendering
        setTimeout(checkAndAnimateSkills, 500);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize active nav on page load
    setActiveNavOnScroll();
    
    // Add subtle animation to project cards and achievement cards
    function animateOnScroll() {
        const animElements = document.querySelectorAll('.project-card, .achievement-card');
        
        animElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animations
    document.querySelectorAll('.project-card, .achievement-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Listen for scroll to trigger animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Check on page load
    animateOnScroll();
}); 