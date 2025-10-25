# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 📋 Immediate Steps

### 1. Replace Your Resume
```
📂 assets/
  └── resume.pdf  ← Replace this placeholder with your actual resume
```

### 2. Update Personal Information

Open `index.html` and update:

#### Email & Contact (Line ~70-85)
```html
<a href="mailto:YOUR_EMAIL@gmail.com">YOUR_EMAIL@gmail.com</a>
<!-- Update location -->
<span>Your City, Your State, Your Country</span>
<!-- Update links -->
<a href="https://github.com/YOUR_GITHUB">GitHub</a>
<a href="https://linkedin.com/in/YOUR_LINKEDIN">LinkedIn</a>
```

#### Hero Section (Line ~45-60)
```html
<h1>Your Full Name</h1>
<p class="hero-tagline">Your Title | Your Role | Your Specialty</p>
<p class="hero-description">
  Your introduction paragraph...
</p>
```

### 3. Update Projects

Find the Projects section (~Line 140-200) and modify:
- Project titles
- Descriptions
- Tech tags
- GitHub links in modals

### 4. Customize Skills Chart

Open `js/main.js` and find (~Line 280):

```javascript
const skills = [
    { name: 'Your Skill 1', value: 90 },
    { name: 'Your Skill 2', value: 85 },
    // Add your skills with values 0-100
];
```

### 5. Update Certifications

In `index.html` (~Line 240-280):
- Add your certifications
- Update credential IDs
- Add verification links

### 6. Add Your Experience

In `index.html` (~Line 290-340):
- Update timeline with your experience
- Modify dates and descriptions

### 7. Update Education

In `index.html` (~Line 350-380):
- Add your academic background
- Update institutions and GPAs

## 🎨 Change Colors (Optional)

Open `css/styles.css` and modify:

```css
:root {
    --primary-color: #0EA5A4;      /* Your primary color */
    --secondary-color: #4F46E5;    /* Your secondary color */
}
```

## 🚀 View Your Website

**Option 1: Simple (Double-click)**
- Double-click `index.html`

**Option 2: Local Server (Recommended)**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

## ✅ Pre-Launch Checklist

Before deploying, verify:

- [ ] Resume PDF replaced and working
- [ ] All email addresses updated
- [ ] GitHub and LinkedIn links correct
- [ ] Project information accurate
- [ ] Skills chart reflects your abilities
- [ ] Certifications current and linked
- [ ] Experience timeline complete
- [ ] Education section updated
- [ ] Contact form email correct
- [ ] All buttons and links tested

## 🌐 Deploy (Choose One)

### GitHub Pages (Free)
1. Push to GitHub repository
2. Settings → Pages → Select branch
3. Done! URL: `yourusername.github.io/repo-name`

### Netlify (Free)
1. Visit netlify.com
2. Drag & drop your folder
3. Done! Gets custom URL + HTTPS

### Vercel (Free)
1. Visit vercel.com
2. Import your project
3. Done! Automatic deployments

## 🆘 Need Help?

### Common Issues

**Q: Resume download doesn't work?**
- Ensure file is named exactly `resume.pdf` in `assets/` folder

**Q: Links not working?**
- Check that all `href` attributes are updated with your URLs

**Q: Skills chart not showing?**
- Open browser console (F12) for errors
- Ensure canvas element exists

**Q: Mobile menu not working?**
- Clear browser cache
- Check JavaScript is enabled

### Testing on Mobile
- Chrome DevTools: F12 → Toggle device toolbar
- Or use real device on same network

## 🎯 Next Steps

After basic setup:
1. Add project screenshots to enhance modals
2. Consider adding a profile photo
3. Create a blog section (optional)
4. Set up Google Analytics
5. Add testimonials if available

## 📚 Full Documentation

See `README.md` for:
- Complete feature list
- Detailed customization guide
- Browser support
- Deployment options
- Future enhancements

---

**Time to Complete**: 5-10 minutes  
**Difficulty**: Beginner-friendly  
**Result**: Professional portfolio website ready to deploy!

Good luck! 🚀