// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content
// No need to touch HTML, CSS, or main.js files!

const portfolioData = {
    // Personal Information
    personal: {
        name: "Uday Raut",
        title: "IT Student",
        subtitle: "Second Year @ Parul University",
        description: "Passionate about technology and innovation. Building my skills in software development and exploring new technologies.",
        email: "udayraut87@example.com",
        phone: "+91 9328681071",
        location: "Parul University, Gujarat, India",
        profileImage: "assets/images/profile.jpg", // Add your profile photo here
        avatarImage: "assets/images/avatar.jpg" // Add your avatar/illustration here
    },

    // Social Media Links
    social: {
        github: "https://github.com/UDAYRAUT57UA28",
        linkedin: "https://www.linkedin.com/in/uday-raut-08b094312",
        instagram: "https://www.instagram.com/ruday501?igsh=MWVmenlmbjd1cW5idQ=="
    },

    // About Section
    about: {
        description: `I'm Uday Raut, a second-year IT student at Parul University with a passion for technology and problem-solving. 
        
        I'm constantly learning and exploring new technologies, frameworks, and tools to enhance my skills. My goal is to become a proficient software developer and contribute to innovative projects that make a difference.
        
        When I'm not coding, I enjoy participating in hackathons, contributing to open-source projects, and staying updated with the latest tech trends.`
    },

    // Skills - Add or remove as needed
    skills: [
        { name: "HTML", icon: "fab fa-html5", level: 80 },
        { name: "CSS", icon: "fab fa-css3-alt", level: 75 },
        { name: "JavaScript", icon: "fab fa-js", level: 70 },
        { name: "Python", icon: "fab fa-python", level: 65 },
        { name: "Java", icon: "fab fa-java", level: 60 },
        { name: "Git", icon: "fab fa-git-alt", level: 70 },
        { name: "SQL", icon: "fas fa-database", level: 70 }
    ],

    // Experience - Add or remove entries
    experience: [
        {
            title: "IT Student",
            company: "Parul University",
            period: "2024 - Present",
            description: "Currently pursuing Bachelor's degree in Information Technology. Learning core concepts of computer science, programming, and software development."
        }
    ],

    // Projects - Add or remove projects
    projects: [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with HTML, CSS, and JavaScript to showcase my projects and skills.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/UDAYRAUT57UA28/Portfolio",
            live: "https://udayraut57ua28.github.io/Portfolio/",
            image: "assets/images/portfolio.jpg" // Optional
        },
        {
            title: "AI-Powered Personal Finance Assistant",
            description: "A simple Finance Assistant application to organize daily/Monthly finance with features like add income, expense, and set goal and visualize it graphs.",
            technologies: ["Python"],
            github: "https://github.com/UDAYRAUT57UA28",
            live: "https://github.com/UDAYRAUT57UA28",
            image: "assets/images/finance.jpg" // Optional
        }
        // Add more projects here
    ]
};

// Export data for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
