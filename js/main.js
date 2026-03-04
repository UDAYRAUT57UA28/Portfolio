// ============================================
// PORTFOLIO MAIN JAVASCRIPT
// ============================================
// This file handles all the dynamic content loading
// You don't need to edit this file - edit data.js instead!

document.addEventListener('DOMContentLoaded', function() {
    // Load all content
    loadHeroSection();
    loadAboutSection();
    loadSkillsSection();
    loadExperienceSection();
    loadProjectsSection();
    loadContactSection();
    initializeNavigation();
    initializeSmoothScroll();
    initializeThemeToggle();
    initializeParticles();
    initializeScrollDown();
    initializeSocialSidebar();
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Load Hero Section
function loadHeroSection() {
    const { personal, social } = portfolioData;
    
    document.querySelector('.hero-title').textContent = `Hi, I'm ${personal.name}`;
    document.querySelector('.hero-subtitle').textContent = personal.title;
    document.querySelector('.hero-description').textContent = personal.description;
    
    // Load profile image
    const profileImg = document.getElementById('profileImg');
    const avatarImg = document.getElementById('avatarImg');
    
    if (personal.profileImage) {
        profileImg.src = personal.profileImage;
        profileImg.onerror = function() {
            // If image fails to load, use a placeholder
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect fill="%236366f1" width="500" height="500"/%3E%3Ctext fill="white" font-size="200" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + personal.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
        };
    }
    
    // Load avatar image
    if (personal.avatarImage) {
        avatarImg.src = personal.avatarImage;
        avatarImg.onerror = function() {
            // If avatar fails to load, create a tech-themed SVG avatar
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23667eea;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23764ba2;stop-opacity:1" /%3E%3C/linearGradient%3E%3ClinearGradient id="grad2" x1="0%25" y1="0%25" x2="100%25" y2="0%25"%3E%3Cstop offset="0%25" style="stop-color:%236366f1;stop-opacity:0.3" /%3E%3Cstop offset="100%25" style="stop-color:%238b5cf6;stop-opacity:0.3" /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx="250" cy="250" r="250" fill="url(%23grad1)"/%3E%3Ccircle cx="250" cy="250" r="200" fill="url(%23grad2)"/%3E%3Ccircle cx="250" cy="200" r="70" fill="%23ffffff" opacity="0.95"/%3E%3Cellipse cx="250" cy="350" rx="90" ry="120" fill="%23ffffff" opacity="0.95"/%3E%3Ccircle cx="230" cy="190" r="8" fill="%236366f1"/%3E%3Ccircle cx="270" cy="190" r="8" fill="%236366f1"/%3E%3Cpath d="M 230 215 Q 250 225 270 215" stroke="%236366f1" stroke-width="4" fill="none" stroke-linecap="round"/%3E%3Crect x="200" y="320" width="100" height="6" rx="3" fill="%236366f1" opacity="0.8"/%3E%3Crect x="210" y="335" width="80" height="6" rx="3" fill="%238b5cf6" opacity="0.8"/%3E%3Crect x="205" y="350" width="90" height="6" rx="3" fill="%236366f1" opacity="0.8"/%3E%3Crect x="215" y="365" width="70" height="6" rx="3" fill="%238b5cf6" opacity="0.8"/%3E%3Ccircle cx="180" cy="180" r="3" fill="%23ffffff" opacity="0.6"/%3E%3Ccircle cx="320" cy="200" r="4" fill="%23ffffff" opacity="0.6"/%3E%3Ccircle cx="160" cy="250" r="3" fill="%23ffffff" opacity="0.6"/%3E%3Ccircle cx="340" cy="270" r="3" fill="%23ffffff" opacity="0.6"/%3E%3Cpath d="M 190 140 L 200 130 M 195 135 L 205 125" stroke="%23ffffff" stroke-width="2" opacity="0.5"/%3E%3Cpath d="M 310 140 L 300 130 M 305 135 L 295 125" stroke="%23ffffff" stroke-width="2" opacity="0.5"/%3E%3C/svg%3E';
        };
    }
    
    // Load social links
    const socialLinksContainer = document.querySelector('.social-links');
    const socialIcons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        instagram: 'fab fa-instagram'
    };
    
    for (const [platform, url] of Object.entries(social)) {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.innerHTML = `<i class="${socialIcons[platform]}"></i>`;
            socialLinksContainer.appendChild(link);
        }
    }
}

// Load About Section
function loadAboutSection() {
    const { about } = portfolioData;
    const aboutText = document.querySelector('.about-text');
    
    const paragraphs = about.description.split('\n\n');
    paragraphs.forEach(para => {
        if (para.trim()) {
            const p = document.createElement('p');
            p.textContent = para.trim();
            aboutText.appendChild(p);
        }
    });
}

// Load Skills Section
function loadSkillsSection() {
    const { skills } = portfolioData;
    const skillsGrid = document.querySelector('.skills-grid');
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Load Experience Section
function loadExperienceSection() {
    const { experience } = portfolioData;
    const timeline = document.querySelector('.timeline');
    
    experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <span class="timeline-date">${exp.period}</span>
                <p>${exp.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Load Projects Section
function loadProjectsSection() {
    const { projects } = portfolioData;
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            ${project.image ? `<div class="project-image" style="background-image: url('${project.image}')"></div>` : ''}
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">${techTags}</div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>` : ''}
                    ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load Contact Section
function loadContactSection() {
    const { personal } = portfolioData;
    const contactInfo = document.querySelector('.contact-info');
    
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
                <h3>Email</h3>
                <p>${personal.email}</p>
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
                <h3>Phone</h3>
                <p>${personal.phone}</p>
            </div>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h3>Location</h3>
                <p>${personal.location}</p>
            </div>
        </div>
    `;
    
    // Handle form submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form. Please integrate with a backend service or email service.');
        form.reset();
    });
}

// Initialize Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Add scrolled navbar styles
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        box-shadow: var(--shadow-lg);
    }
`;
document.head.appendChild(style);

// Initialize Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}


// Initialize Particle Animation
function initializeParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const followingParticleCount = 20; // Particles that follow cursor
    const floatingParticleCount = 60; // Increased floating particles that move independently
    const mouse = { x: null, y: null };
    
    // Get particle colors based on theme
    function getParticleColors() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            return [
                'rgba(139, 92, 246, 0.6)',  // Purple
                'rgba(99, 102, 241, 0.6)',  // Indigo
                'rgba(168, 85, 247, 0.6)',  // Violet
                'rgba(124, 58, 237, 0.6)',  // Deep purple
                'rgba(236, 72, 153, 0.6)',  // Pink
                'rgba(59, 130, 246, 0.6)'   // Blue
            ];
        } else {
            return [
                'rgba(99, 102, 241, 0.5)',  // Light blue
                'rgba(139, 92, 246, 0.5)',  // Light purple
                'rgba(236, 72, 153, 0.5)',  // Pink
                'rgba(59, 130, 246, 0.5)',  // Blue
                'rgba(168, 85, 247, 0.5)',  // Violet
                'rgba(251, 146, 60, 0.5)'   // Orange
            ];
        }
    }
    
    // Following Particle Class (follows cursor)
    class FollowingParticle {
        constructor() {
            this.x = mouse.x || Math.random() * canvas.width;
            this.y = mouse.y || Math.random() * canvas.height;
            this.size = Math.random() * 3 + 2;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.targetX = this.x;
            this.targetY = this.y;
            this.colors = getParticleColors();
            this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.angle = Math.random() * Math.PI * 2;
            this.angleSpeed = Math.random() * 0.02 - 0.01;
            this.type = 'following';
        }
        
        update() {
            // Follow mouse with delay
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                // Tighter concentration around cursor
                const distance = Math.sqrt(dx * dx + dy * dy);
                const orbitRadius = 30 + (Math.random() * 40); // Closer orbit
                this.targetX = mouse.x + Math.cos(this.angle) * orbitRadius;
                this.targetY = mouse.y + Math.sin(this.angle) * orbitRadius;
                
                // Faster following speed for tighter concentration
                this.x += (this.targetX - this.x) * 0.08;
                this.y += (this.targetY - this.y) * 0.08;
            } else {
                this.x += this.speedX;
                this.y += this.speedY;
            }
            
            this.angle += this.angleSpeed;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            // Update colors when theme changes
            const newColors = getParticleColors();
            if (JSON.stringify(newColors) !== JSON.stringify(this.colors)) {
                this.colors = newColors;
                this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
            }
        }
        
        draw() {
            // Draw crystal shape
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            
            // Crystal body
            ctx.beginPath();
            ctx.moveTo(0, -this.size * 2);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size * 2);
            ctx.lineTo(-this.size, 0);
            ctx.closePath();
            
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Crystal shine
            ctx.strokeStyle = this.color.replace('0.5', '0.8').replace('0.6', '0.9');
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Inner glow
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
            
            ctx.restore();
        }
    }
    
    // Floating Particle Class (independent movement with color change)
    class FloatingParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 2; // Slightly larger crystals
            this.speedX = (Math.random() - 0.5) * 1.2; // Faster movement
            this.speedY = (Math.random() - 0.5) * 1.2;
            this.colors = getParticleColors();
            this.colorIndex = 0;
            this.colorTransition = 0;
            this.colorChangeSpeed = 0.008; // Slower color transitions
            this.angle = Math.random() * Math.PI * 2;
            this.angleSpeed = (Math.random() - 0.5) * 0.04; // Faster rotation
            this.type = 'floating';
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.03; // Faster pulse
        }
        
        update() {
            // Move independently
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) {
                this.speedX *= -1;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.speedY *= -1;
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }
            
            // Rotate
            this.angle += this.angleSpeed;
            
            // Pulse effect
            this.pulsePhase += this.pulseSpeed;
            
            // Continuous color change
            this.colorTransition += this.colorChangeSpeed;
            if (this.colorTransition >= 1) {
                this.colorTransition = 0;
                this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            }
            
            // Update colors when theme changes
            const newColors = getParticleColors();
            if (JSON.stringify(newColors) !== JSON.stringify(this.colors)) {
                this.colors = newColors;
            }
        }
        
        getCurrentColor() {
            const currentColor = this.colors[this.colorIndex];
            const nextColor = this.colors[(this.colorIndex + 1) % this.colors.length];
            
            // Parse RGBA values
            const parseRGBA = (color) => {
                const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/);
                return match ? {
                    r: parseInt(match[1]),
                    g: parseInt(match[2]),
                    b: parseInt(match[3]),
                    a: parseFloat(match[4] || 1)
                } : { r: 0, g: 0, b: 0, a: 1 };
            };
            
            const current = parseRGBA(currentColor);
            const next = parseRGBA(nextColor);
            
            // Interpolate between colors
            const r = Math.round(current.r + (next.r - current.r) * this.colorTransition);
            const g = Math.round(current.g + (next.g - current.g) * this.colorTransition);
            const b = Math.round(current.b + (next.b - current.b) * this.colorTransition);
            const a = current.a + (next.a - current.a) * this.colorTransition;
            
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
        
        draw() {
            const currentSize = this.size * (1 + Math.sin(this.pulsePhase) * 0.3);
            const currentColor = this.getCurrentColor();
            
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            
            // Draw outer glow first
            ctx.shadowBlur = 15;
            ctx.shadowColor = currentColor;
            
            // Draw crystal ball (hexagon shape)
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x = Math.cos(angle) * currentSize;
                const y = Math.sin(angle) * currentSize;
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            
            // Gradient fill
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, currentSize);
            gradient.addColorStop(0, currentColor.replace(/[\d.]+\)$/, '0.9)'));
            gradient.addColorStop(0.7, currentColor);
            gradient.addColorStop(1, currentColor.replace(/[\d.]+\)$/, '0.6)'));
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Outer glow stroke
            ctx.strokeStyle = currentColor.replace(/[\d.]+\)$/, '1)');
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            // Inner sparkle
            ctx.beginPath();
            ctx.arc(-currentSize * 0.3, -currentSize * 0.3, currentSize * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fill();
            
            // Additional sparkle points
            ctx.beginPath();
            ctx.arc(currentSize * 0.2, currentSize * 0.2, currentSize * 0.2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
            
            ctx.restore();
        }
    }
    
    // Initialize following particles
    for (let i = 0; i < followingParticleCount; i++) {
        particles.push(new FollowingParticle());
    }
    
    // Initialize floating particles
    for (let i = 0; i < floatingParticleCount; i++) {
        particles.push(new FloatingParticle());
    }
    
    // Mouse move event
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    // Mouse leave event
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Resize canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    const opacity = 0.15 * (1 - distance / 120);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}


// Initialize Scroll Down Indicator
function initializeScrollDown() {
    const scrollDown = document.querySelector('.scroll-down');
    
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Hide scroll indicator when user scrolls down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollDown.style.opacity = '0';
                scrollDown.style.pointerEvents = 'none';
            } else {
                scrollDown.style.opacity = '1';
                scrollDown.style.pointerEvents = 'auto';
            }
        });
    }
}


// Initialize Social Sidebar
function initializeSocialSidebar() {
    const { social } = portfolioData;
    const sidebar = document.querySelector('.social-sidebar');
    
    if (!sidebar) return;
    
    // Update social links
    const socialLinks = {
        github: sidebar.querySelector('.github'),
        linkedin: sidebar.querySelector('.linkedin'),
        twitter: sidebar.querySelector('.twitter'),
        instagram: sidebar.querySelector('.instagram')
    };
    
    // Set href for each social link
    for (const [platform, link] of Object.entries(socialLinks)) {
        if (social[platform] && link) {
            link.href = social[platform];
        } else if (link) {
            link.style.display = 'none';
        }
    }
    
    // Show sidebar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            sidebar.classList.add('visible');
        } else {
            sidebar.classList.remove('visible');
        }
    });
}
