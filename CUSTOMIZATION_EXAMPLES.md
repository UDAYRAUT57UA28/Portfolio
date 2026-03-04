# Customization Examples

This guide shows you exactly how to make common changes to your portfolio.

## Example 1: Adding a New Skill

**Before:**
```javascript
skills: [
    { name: "HTML", icon: "fab fa-html5", level: 80 },
    { name: "CSS", icon: "fab fa-css3-alt", level: 75 }
]
```

**After (adding React):**
```javascript
skills: [
    { name: "HTML", icon: "fab fa-html5", level: 80 },
    { name: "CSS", icon: "fab fa-css3-alt", level: 75 },
    { name: "React", icon: "fab fa-react", level: 65 }  // ✅ Added new skill
]
```

## Example 2: Removing a Skill

**Before:**
```javascript
skills: [
    { name: "HTML", icon: "fab fa-html5", level: 80 },
    { name: "CSS", icon: "fab fa-css3-alt", level: 75 },
    { name: "JavaScript", icon: "fab fa-js", level: 70 }
]
```

**After (removing CSS):**
```javascript
skills: [
    { name: "HTML", icon: "fab fa-html5", level: 80 },
    { name: "JavaScript", icon: "fab fa-js", level: 70 }  // ✅ CSS removed
]
```

## Example 3: Adding a New Project

**Add this to the projects array:**
```javascript
{
    title: "E-commerce Website",
    description: "A fully functional online store with cart and checkout features",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://mystore.com",
    image: "assets/images/ecommerce.jpg"
}
```

## Example 4: Project Without Live Link

**If you don't have a live demo:**
```javascript
{
    title: "Desktop Application",
    description: "A productivity app built with Electron",
    technologies: ["Electron", "JavaScript", "SQLite"],
    github: "https://github.com/yourusername/desktop-app",
    live: "",  // ✅ Leave empty or remove this line
    image: "assets/images/desktop-app.jpg"
}
```

## Example 5: Adding Internship Experience

**Add to experience array:**
```javascript
{
    title: "Software Development Intern",
    company: "Tech Company XYZ",
    period: "June 2025 - August 2025",
    description: "Developed web applications using React and Node.js. Collaborated with senior developers on client projects and learned agile methodologies."
}
```

## Example 6: Updating Your About Section

**Replace the entire about description:**
```javascript
about: {
    description: `I'm Uday Raut, a passionate IT student at Parul University.
    
    I love building web applications and solving complex problems through code. My journey in tech started with HTML and CSS, and now I'm exploring full-stack development.
    
    I'm always eager to learn new technologies and contribute to meaningful projects. Let's connect and build something amazing together!`
}
```

## Example 7: Changing Social Media Links

**Update your actual profiles:**
```javascript
social: {
    github: "https://github.com/udayraut",  // ✅ Your actual GitHub
    linkedin: "https://linkedin.com/in/uday-raut",  // ✅ Your actual LinkedIn
    twitter: "https://twitter.com/udayraut",  // ✅ Your Twitter
    instagram: "https://instagram.com/uday.raut"  // ✅ Your Instagram
}
```

## Example 8: Removing a Social Link

**If you don't use Twitter:**
```javascript
social: {
    github: "https://github.com/udayraut",
    linkedin: "https://linkedin.com/in/uday-raut",
    twitter: "",  // ✅ Leave empty or remove this line
    instagram: "https://instagram.com/uday.raut"
}
```

## Example 9: Adding More Technologies to a Project

**Before:**
```javascript
technologies: ["HTML", "CSS"]
```

**After:**
```javascript
technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"]
```

## Example 10: Updating Contact Information

**Change your details:**
```javascript
personal: {
    name: "Uday Raut",
    title: "IT Student & Web Developer",  // ✅ Updated title
    subtitle: "Second Year @ Parul University",
    description: "Building the future, one line of code at a time.",  // ✅ New tagline
    email: "uday.raut@gmail.com",  // ✅ Your real email
    phone: "+91 98765 43210",  // ✅ Your real phone
    location: "Vadodara, Gujarat, India"  // ✅ Your location
}
```

## Common Icon Classes (Font Awesome)

Use these for skills:
- HTML: `fab fa-html5`
- CSS: `fab fa-css3-alt`
- JavaScript: `fab fa-js`
- Python: `fab fa-python`
- Java: `fab fa-java`
- React: `fab fa-react`
- Node.js: `fab fa-node`
- Git: `fab fa-git-alt`
- GitHub: `fab fa-github`
- Docker: `fab fa-docker`
- AWS: `fab fa-aws`
- Database: `fas fa-database`
- Code: `fas fa-code`
- Server: `fas fa-server`

Find more at: https://fontawesome.com/icons

## Tips for Writing Good Descriptions

### Projects:
- Start with what it does
- Mention key features
- Keep it under 2 sentences

**Good:** "A task management app with drag-and-drop functionality and real-time collaboration features."

**Bad:** "This is a project I made for managing tasks and stuff."

### Experience:
- Use action verbs (Developed, Created, Implemented, Collaborated)
- Mention specific technologies
- Highlight achievements

**Good:** "Developed responsive web applications using React and Node.js. Improved page load time by 40% through optimization."

**Bad:** "Worked on websites and did some coding."

## Syntax Checklist ✅

Before saving, check:
- [ ] All strings are in quotes: `"text"`
- [ ] Commas between array items: `item1, item2, item3`
- [ ] No comma after the last item in an array
- [ ] Matching brackets: `{ }` and `[ ]`
- [ ] Backticks for multi-line text: `` `text` ``

## Testing Your Changes

1. Save `data.js`
2. Refresh your browser (Ctrl+R or Cmd+R)
3. Check browser console (F12) for errors
4. Test on mobile view (browser dev tools)

---

**Remember:** Start small, test often, and build gradually! 🚀
