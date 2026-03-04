# Uday Raut - Portfolio Website

A modern, responsive portfolio website that's easy to customize and maintain.

#Link : https://udayraut57ua28.github.io/Portfolio/

## 🚀 Features

- **Fully Responsive** - Works perfectly on all devices
- **Easy to Edit** - All your data in one file (`js/data.js`)
- **Modern Design** - Clean and professional look
- **Smooth Animations** - Engaging user experience
- **Social Media Integration** - Connect all your profiles
- **Project Showcase** - Display your work beautifully
- **Contact Form** - Let people reach out to you

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file (don't edit)
├── css/
│   └── style.css      # Styling (don't edit unless changing design)
├── js/
│   ├── data.js        # ⭐ EDIT THIS FILE - Your portfolio data
│   └── main.js        # Portfolio logic (don't edit)
├── assets/
│   └── images/        # Put your project images here
└── README.md          # This file
```

## ✏️ How to Customize Your Portfolio

### Step 1: Edit Your Personal Information

Open `js/data.js` and update the `personal` section:

```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description",
    email: "your.email@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "Your Location"
}
```

### Step 2: Add Your Social Media Links

Update the `social` section with your actual profile URLs:

```javascript
social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
}
```

### Step 3: Update About Section

Edit the `about.description` with your story.

### Step 4: Add/Remove Skills

In the `skills` array, add or remove skills:

```javascript
skills: [
    { name: "HTML", icon: "fab fa-html5", level: 80 },
    { name: "Python", icon: "fab fa-python", level: 75 },
    // Add more skills here
]
```

**Available Icons:** Use [Font Awesome](https://fontawesome.com/icons) icons (fab, fas classes)

### Step 5: Add Your Experience

Add or remove entries in the `experience` array:

```javascript
experience: [
    {
        title: "Your Position",
        company: "Company Name",
        period: "2024 - Present",
        description: "What you did here..."
    },
    // Add more experience entries
]
```

### Step 6: Showcase Your Projects

Add your projects in the `projects` array:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Project description",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/yourusername/project",
        live: "https://yourproject.com",
        image: "assets/images/project1.jpg" // Optional
    },
    // Add more projects
]
```

## 🖼️ Adding Project Images

1. Create the `assets/images/` folder if it doesn't exist
2. Add your project images (recommended size: 800x600px)
3. Reference them in `data.js`: `image: "assets/images/your-image.jpg"`

## 🎨 Customizing Colors

To change the color scheme, edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main color */
    --secondary-color: #8b5cf6;  /* Accent color */
    --text-color: #1f2937;       /* Text color */
}
```

## 🌐 Deploying Your Portfolio

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Your site is live!

### Option 3: Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 📝 Quick Editing Guide

### To Add a New Project:
1. Open `js/data.js`
2. Find the `projects` array
3. Copy an existing project object
4. Paste it and update the details
5. Save the file

### To Remove a Project:
1. Open `js/data.js`
2. Find the project you want to remove
3. Delete the entire project object (including the comma)
4. Save the file

### To Update Skills:
1. Open `js/data.js`
2. Find the `skills` array
3. Add/remove/edit skill objects
4. Adjust the `level` (0-100) for the progress bar
5. Save the file

## 🔧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. Use a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
2. Update the form handling in `js/main.js` (search for "loadContactSection")
3. Follow the service's integration guide

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images for projects
- Update your portfolio regularly with new projects
- Test on different devices before deploying
- Keep your contact information up to date

## 🆘 Need Help?

- Check that all file paths are correct
- Make sure `data.js` syntax is valid (commas, brackets, quotes)
- Open browser console (F12) to see any errors
- Ensure Font Awesome CDN is loading (check internet connection)

## 📄 License

Feel free to use this template for your personal portfolio!

---

**Made for Uday Raut** - Good luck with your portfolio! 🚀
