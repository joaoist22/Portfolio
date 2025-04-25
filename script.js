document.addEventListener('DOMContentLoaded', function() {
    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';
    
    const intro = document.querySelector('.star-wars-intro');
    const mainContent = document.querySelector('main');
    const name3dContainer = document.querySelector('.name-3d-container');
    
    // Hide main content initially
    if (mainContent) {
        mainContent.style.opacity = '0';
    }
    
    

    // After intro animation
    setTimeout(() => {
        // Fade out intro
        if (intro) {
            intro.style.opacity = '0';
            intro.style.transition = 'opacity 2s ease';
        }
        
        // Show main content and name
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 2s ease';
        }
        
        if (name3dContainer) {
            name3dContainer.style.opacity = '1';
            name3dContainer.style.transition = 'opacity 1s ease';
        }
        
        // Enable scrolling
        document.body.style.overflow = '';
        
        // Remove intro after fade
        setTimeout(() => {
            if (intro) {
                intro.remove();
            }
        }, 2000);
    }, 13000); // Changed from 45s to 15s
    var typing = new Typed(".text", {
        strings: ["", "creators.", "editors."],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
      });
      
      // GSAP
      gsap.registerPlugin(ScrollTrigger);
      const introsplitTypes = document.querySelectorAll(".left-part h1");
      introsplitTypes.forEach((char, i) => {
        const i_text = new SplitType(char);
        gsap.to(i_text.chars, {
          y: 0,
          stagger: 0.08, // text splitting transition
          duration: 0.3 // full text duration
        });
      });
      
    // Initialize Circuit Effect Animations
    const circuitHeader = document.querySelector('.circuit-effect .header');
    if (circuitHeader) {
        circuitHeader.style.animation = 'fadeIn 2s ease-in-out';
    }
      
});
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    // Abrir/fechar o menu ao clicar no botão de toggle
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Fechar o menu ao clicar no botão de fechar
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Fechar o menu ao clicar em qualquer link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const educationBox = document.querySelector(".education-box");
    const educationLogo = document.querySelector(".education-logo");
    const sectionTitle = document.querySelector(".section-title");
    const educationDetails = document.querySelector(".education-details");

    // Usar IntersectionObserver para detectar quando a seção de educação está visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Quando a seção de educação estiver visível, iniciar o temporizador
                educationBox.classList.add("visible"); // Mostrar a caixa de educação

                setTimeout(() => {
                    educationBox.classList.add("logo-moved"); // Mover o logo para a esquerda
                    sectionTitle.classList.remove("hidden"); // Mostrar o título
                    educationDetails.classList.remove("hidden"); // Mostrar os detalhes
                }, 5000); // 5 segundos para o logo vibrar

                observer.unobserve(entry.target); // Parar de observar após a primeira interação
            }
        });
    }, { threshold: 0.5 }); // A seção precisa estar 50% visível para ativar

    const educationSection = document.querySelector("#education");
    if (educationSection) {
        observer.observe(educationSection);
    }
});

// Add click event to each box-text
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Check if the clicked box is a box-text
    if (!box.classList.contains('box-text')) return;

    // Pause the animation for all boxes
    boxes.forEach((b) => b.classList.add('paused'));

    // Show the modal
    modal.classList.add('visible');

    // Set the title and description in the modal
    const hobbyName = box.querySelector('span').textContent.toLowerCase();
    hobbyTitle.textContent = hobbyName.charAt(0).toUpperCase() + hobbyName.slice(1);
    hobbyDescription.textContent = hobbies[hobbyName] || "Descrição não disponível.";
  });
});
document.querySelectorAll('.branch').forEach((branch) => {
    branch.addEventListener('mouseenter', () => {
        branch.style.boxShadow = '0 0 15px #00ffff';
    });
    branch.addEventListener('mouseleave', () => {
        branch.style.boxShadow = 'none';
    });
});

function toggleDetails() {
    const details = document.querySelector('.extra-details');
    details.classList.toggle('hidden');
}
// Close the modal and resume animations
closeModal.addEventListener('click', () => {
  // Resume the animation for all boxes
  boxes.forEach((b) => b.classList.remove('paused'));

  // Hide the modal
  modal.classList.remove('visible');
});

// Fechar o modal
closeModal.addEventListener('click', () => {
  // Remover a classe paused de todas as caixas
  boxes.forEach(box => box.classList.remove('paused'));

  // Esconder o modal
  modal.classList.remove('visible');
});
// Alternative method that works in some browsers that might ignore the onload method
window.addEventListener('beforeunload', function() {
    window.setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    // Immediately scroll to top when DOM content is loaded
    window.scrollTo(0, 0);
    
    // Enhanced mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileLangEN = document.getElementById('mobile-lang-en');
    const mobileLangPT = document.getElementById('mobile-lang-pt');
    
    if (mobileMenuToggle && mobileMenu) {
        // Toggle menu open
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Prevent body scrolling when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu with dedicated button
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        }
        
        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        });
        
        // Mobile language buttons
        if (mobileLangEN && mobileLangPT) {
            mobileLangEN.addEventListener('click', () => {
                switchLanguage('en');
                updateMobileLanguageButtons('en');
            });
            
            mobileLangPT.addEventListener('click', () => {
                switchLanguage('pt');
                updateMobileLanguageButtons('pt');
            });
        }
    }
    
    // Function to update mobile language buttons
    function updateMobileLanguageButtons(lang) {
        if (mobileLangEN && mobileLangPT) {
            if (lang === 'en') {
                mobileLangEN.classList.add('active');
                mobileLangPT.classList.remove('active');
            } else {
                mobileLangPT.classList.add('active');
                mobileLangEN.classList.remove('active');
            }
        }
    }
    
    // Language switching functionality
    const langEN = document.getElementById('lang-en');
    const langPT = document.getElementById('lang-pt');
    
    // Set default language to English
    let currentLang = 'en';
    
    // Function to switch language
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update active state on buttons
        if (lang === 'en') {
            langEN.classList.add('active');
            langPT.classList.remove('active');
        } else {
            langPT.classList.add('active');
            langEN.classList.remove('active');
        }
        
        // Also update mobile buttons
        updateMobileLanguageButtons(lang);
        
        // Update all elements with data-en and data-pt attributes - use innerHTML instead of textContent
        document.querySelectorAll('[data-en]').forEach(element => {
            if (lang === 'en') {
                element.innerHTML = element.getAttribute('data-en');
            } else {
                element.innerHTML = element.getAttribute('data-pt');
            }
        });
        
        // Update form placeholders
        document.querySelectorAll('[data-en-placeholder]').forEach(element => {
            if (lang === 'en') {
                element.setAttribute('placeholder', element.getAttribute('data-en-placeholder'));
            } else {
                element.setAttribute('placeholder', element.getAttribute('data-pt-placeholder'));
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Event listeners for language buttons
    langEN.addEventListener('click', () => switchLanguage('en'));
    langPT.addEventListener('click', () => switchLanguage('pt'));
    
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        switchLanguage(storedLang);
    }
    
    // Show header after orbital animation completes
    setTimeout(() => {
        document.querySelector('header').classList.add('visible');
    }, 4000); // Reduced from 6000 to match faster animation

    // Animate sections when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.content-wrap').forEach(section => {
        if (section.parentElement.id !== 'hero') {
            section.classList.add('fade-down');
            observer.observe(section);
        }
    });

    // Smooth scrolling for navigation links and buttons
    const scrollToSection = (targetId) => {
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    };

    document.querySelectorAll('.nav-link, .nav-button').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the data to a server
            // For now, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, message });
            
            // Show alert based on current language
            if (currentLang === 'en') {
                alert('Message sent! Thank you for reaching out.');
            } else {
                alert('Mensagem enviada! Obrigado pelo contato.');
            }
            
            contactForm.reset();
        });
    }

    // Remove the old letter-by-letter animation since we now have a more complex CSS animation
    // const titleElement = document.querySelector('.animated-title');
    // if (titleElement) {
    //     const name = titleElement.textContent;
    //     titleElement.textContent = '';
    //     
    //     let delay = 0;
    //     for (let i = 0; i < name.length; i++) {
    //         const span = document.createElement('span');
    //         span.textContent = name[i];
    //         span.style.display = 'inline-block';
    //         span.style.opacity = '0';
    //         span.style.transform = 'translateY(50px)';
    //         span.style.animation = `revealTitle 0.5s ease ${delay}s forwards`;
    //         titleElement.appendChild(span);
    //         delay += 0.1;
    //     }
    // }

    // Improved parallax effect - background scrolls upward as user scrolls down
    window.addEventListener('scroll', function() {
        const background = document.getElementById('background');
        if (!background) return;
        
        const scrollPosition = window.pageYOffset;
        
        // Calculate the movement speed with the negative sign for upward movement
        const translateY = -scrollPosition / 2;
        
        // Apply transform to the background image
        background.style.transform = `translateY(${translateY}px)`;
        
        // Ensure the background container covers enough area
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        // Set background image height to ensure it's large enough
        const containerHeight = documentHeight + window.innerHeight;
        background.style.height = `${containerHeight}px`;
        background.parentElement.style.height = `${containerHeight}px`;
    });

    // Ensure 3D animations work well across devices
    function adjustNameSize() {
        const viewportWidth = window.innerWidth;
        const nameElements = document.querySelectorAll('.name-part, .assembled-name');
        
        if (viewportWidth < 768) {
            // Tablet and smaller screens
            nameElements.forEach(el => {
                el.style.fontSize = viewportWidth < 480 ? '2rem' : '2.8rem';
            });
        } else {
            // Desktop screens
            nameElements.forEach(el => {
                el.style.fontSize = '4rem';
            });
        }
    }
    
    // Adjust on load and resize
    adjustNameSize();
    window.addEventListener('resize', adjustNameSize);

    // Add this code to ensure consistent background appearance on page load
    const background = document.getElementById('background');
    if (background) {
        // Set the initial transform to match scroll position 0
        background.style.transform = 'translateY(0px)';
        
        // Set initial height
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        const containerHeight = documentHeight + window.innerHeight;
        background.style.height = `${containerHeight}px`;
        background.parentElement.style.height = `${containerHeight}px`;
    }

    // Setup the profile parallax effect
    setupProfileParallax();

    // Properly handle name container on mobile
    function adjustNameForMobile() {
        const nameContainer = document.querySelector('.assembled-name');
        if (!nameContainer) return;
        
        // Add line break for very small screens
        if (window.innerWidth < 380 && nameContainer.innerHTML.indexOf('<br>') === -1) {
            const nameParts = nameContainer.innerHTML.split(' ');
            if (nameParts.length >= 3) {
                const firstPart = nameParts.slice(0, 2).join(' ');
                const secondPart = nameParts.slice(2).join(' ');
                nameContainer.innerHTML = `${firstPart}<br>${secondPart}`;
            }
        } else if (window.innerWidth >= 380 && nameContainer.innerHTML.indexOf('<br>') !== -1) {
            // Remove line break for larger screens
            nameContainer.innerHTML = nameContainer.innerHTML.replace('<br>', ' ');
        }
    }
    
    // Run on load and resize
    adjustNameForMobile();
    window.addEventListener('resize', adjustNameForMobile);
});

// Enhanced profile parallax effect with more dramatic movement
function setupProfileParallax() {
    const floatingProfile = document.querySelector('.floating-profile');
    const aboutSection = document.getElementById('about');
    if (!floatingProfile || !aboutSection) return;
    
    // Flag to track if profile has been revealed
    let profileRevealed = false;
    
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.7) && // Reveal when 70% of the way down viewport
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', function() {
        // Check if about section is in view and reveal profile if needed
        if (!profileRevealed && isElementInViewport(aboutSection)) {
            floatingProfile.style.opacity = '1';
            profileRevealed = true;
        }
        
        // Only apply parallax if on desktop
        if (window.innerWidth <= 768) {
            // Ensure profile is visible on mobile regardless of scroll position
            floatingProfile.style.opacity = '1';
            return;
        }
        
        const aboutRect = aboutSection.getBoundingClientRect();
        
        // Enhanced parallax effect when about section is in view
        if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
            // Calculate a more dramatic scroll progress value
            const scrollProgress = (window.innerHeight - aboutRect.top) / (window.innerHeight + aboutRect.height);
            
            // Enhanced transformations for more noticeable effect:
            
            // 1. Larger vertical movement (up to 60px instead of 40px)
            const verticalMove = (scrollProgress - 0.5) * 60;
            
            // 2. Add horizontal movement component (up to 25px)
            const horizontalMove = Math.sin(scrollProgress * Math.PI) * 25;
            
            // 3. More pronounced rotation (up to 8 degrees instead of 3)
            const rotationChange = (scrollProgress - 0.5) * 8;
            
            // 4. More dramatic scaling (between 0.92 and 1.08 instead of 0.95 and 1.05)
            const scaleChange = 1 + (scrollProgress - 0.5) * 0.16;
            
            // 5. Add a perspective rotation for 3D effect
            const perspectiveRotateX = Math.sin(scrollProgress * Math.PI) * 5;
            
            // Apply the combined transformations
            const baseTransform = `
                translateY(calc(-50% + ${verticalMove}px)) 
                translateX(${horizontalMove}px)
                rotate(${-5 + rotationChange}deg) 
                scale(${scaleChange})
                rotateX(${perspectiveRotateX}deg)
            `;
            
            floatingProfile.style.transform = baseTransform;
            
            // 6. Dynamically adjust shadow intensity based on movement
            const shadowBlur = 10 + Math.abs(verticalMove) / 2;
            const glowOpacity = 0.5 + Math.abs(scrollProgress - 0.5) * 0.5;
            
            // Apply shadow and glow effects
            floatingProfile.querySelector('.profile-image').style.boxShadow = 
                `0 ${10 + Math.abs(verticalMove)/3}px ${shadowBlur}px rgba(0, 0, 0, 0.3), 
                 0 0 ${15 + Math.abs(verticalMove)/2}px rgba(255, 128, 171, ${glowOpacity})`;
        }
    });
    
    // Initial check in case the user starts with the about section in view
    if (isElementInViewport(aboutSection) || window.innerWidth <= 768) {
        setTimeout(() => {
            floatingProfile.style.opacity = '1';
            profileRevealed = true;
        }, 500);
    }
}



