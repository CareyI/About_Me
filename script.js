// Function to handle smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 20,
      behavior: 'smooth'
    });
  }
}

// Function to handle active tab state
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Set active class on the current tab
    const navLinks = document.querySelectorAll('.nav-tabs a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Add video background to the header on index page
    if (currentPage === 'index.html' || currentPage === '') {
        const header = document.querySelector('header');
        if (header) {
            // Create video element that autoplays and loops
            const videoBackground = document.createElement('div');
            videoBackground.className = 'video-background';
            videoBackground.innerHTML = `
                <video autoplay muted loop playsinline id="bgVideo">
                    <source src="video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;

            // Insert video before the first child of header
            header.insertBefore(videoBackground, header.firstChild);

            // Add a "View My Work" button after the social links
            const socialLinks = document.querySelector('.social-links');
            if (socialLinks) {
                const workButton = document.createElement('div');
                workButton.className = 'work-button';
                workButton.innerHTML = `
                    <a href="content.html" class="btn-work">View My Portfolio</a>
                `;
                socialLinks.parentNode.insertBefore(workButton, socialLinks.nextSibling);
            }
        }
    }

    // Add animation effects to project cards (improvement 1)
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.transitionDelay = `${index * 0.1}s`;

            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Add color theme switcher (improvement 2)
    const footer = document.querySelector('footer .container');
    if (footer) {
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = `
            <button id="lightTheme" class="theme-btn active">Light</button>
            <button id="darkTheme" class="theme-btn">Dark</button>
        `;
        footer.appendChild(themeToggle);

        // Add theme toggle functionality
        document.getElementById('lightTheme').addEventListener('click', function() {
            document.body.classList.remove('dark-theme');
            document.getElementById('darkTheme').classList.remove('active');
            this.classList.add('active');
        });

        document.getElementById('darkTheme').addEventListener('click', function() {
            document.body.classList.add('dark-theme');
            document.getElementById('lightTheme').classList.remove('active');
            this.classList.add('active');
        });
    }

    // Handle contact form submission if it exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            this.reset();
        });
    }
});

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;