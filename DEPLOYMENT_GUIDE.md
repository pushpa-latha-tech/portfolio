# Deployment Guide

Step-by-step instructions to deploy your portfolio website to the internet.

---

## 🎯 Choose Your Deployment Method

| Platform | Difficulty | Cost | Best For |
|----------|-----------|------|----------|
| **GitHub Pages** | ⭐ Easy | Free | Beginners, version control |
| **Netlify** | ⭐ Easy | Free | Quick deploy, drag-drop |
| **Vercel** | ⭐⭐ Moderate | Free | Developers, CLI comfort |
| **Traditional Host** | ⭐⭐⭐ Advanced | Paid | Custom domains, full control |

---

## Method 1: GitHub Pages (Recommended)

### Prerequisites
- GitHub account
- Git installed on your computer

### Step-by-Step

#### 1. Create GitHub Repository
```bash
# Open terminal in your project folder
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

#### 2. Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name)
3. Make it public
4. Don't initialize with README (you already have one)
5. Click "Create repository"

#### 3. Push Your Code
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**

#### 5. Access Your Website
- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`
- Wait 1-2 minutes for deployment
- Visit the URL to see your portfolio!

### Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

---

## Method 2: Netlify (Drag & Drop)

### Prerequisites
- Netlify account (free signup)
- Your project files in a folder

### Step-by-Step

#### 1. Create Netlify Account
1. Go to https://netlify.com
2. Click **Sign Up** (free)
3. Use email or GitHub

#### 2. Deploy Site
1. Click **Add new site** → **Deploy manually**
2. **Drag and drop** your entire project folder
3. Wait 30-60 seconds
4. Done! Your site is live

#### 3. Your Site URL
- Netlify gives you: `random-name-12345.netlify.app`
- Click "Site settings" to customize URL
- Or add custom domain

### Features
- ✅ Automatic HTTPS
- ✅ Continuous deployment (with Git)
- ✅ Form handling
- ✅ CDN included
- ✅ Deploy previews

### Custom Domain
1. Click **Domain settings**
2. Click **Add custom domain**
3. Follow DNS instructions
4. Automatic SSL certificate

---

## Method 3: Vercel

### Prerequisites
- Vercel account (free)
- Git repository (optional but recommended)

### Step-by-Step

#### Option A: Via Website (Easiest)
1. Go to https://vercel.com
2. Click **Sign Up** (free)
3. Click **Add New Project**
4. Import from GitHub (or drag folder)
5. Click **Deploy**
6. Done! Live in seconds

#### Option B: Via CLI (Developer-friendly)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project folder
cd portfolio-website

# Deploy
vercel

# Follow prompts:
# - Login to Vercel
# - Confirm project settings
# - Deploy!
```

### Features
- ✅ Instant deployments
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Preview deployments
- ✅ Analytics available

---

## Method 4: Traditional Web Hosting

### Prerequisites
- Web hosting account (e.g., Bluehost, HostGator, SiteGround)
- FTP client (e.g., FileZilla)

### Step-by-Step

#### 1. Prepare Files
- Ensure `index.html` is in root
- All folders (css, js, assets) are included
- Check file paths are relative

#### 2. Connect via FTP
1. Open FileZilla (or your FTP client)
2. Enter host: `ftp.yourdomain.com`
3. Enter username and password (from hosting provider)
4. Click **Connect**

#### 3. Upload Files
1. Navigate to `public_html` or `www` folder
2. Select all your project files
3. Drag to upload
4. Wait for upload to complete

#### 4. Test Your Site
- Visit: `http://yourdomain.com`
- Check all pages and links work
- Test on mobile devices

### SSL Certificate
- Most hosts offer free SSL (Let's Encrypt)
- Enable in hosting control panel
- Forces HTTPS for security

---

## 🔍 Pre-Deployment Checklist

### Required
- [ ] Resume PDF is added and not placeholder
- [ ] All personal information updated
- [ ] Email addresses correct
- [ ] GitHub/LinkedIn links work
- [ ] All project links verified
- [ ] Form validation tested

### Recommended
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile device
- [ ] Check loading speed
- [ ] Run Lighthouse audit
- [ ] Verify all images load (if added)
- [ ] Check console for errors (F12)

### SEO & Analytics
- [ ] Update meta descriptions
- [ ] Add favicon
- [ ] Create sitemap.xml (optional)
- [ ] Set up Google Analytics (optional)
- [ ] Add Google Search Console (optional)

---

## 🧪 Testing After Deployment

### Functionality Tests
```
✅ Navigation links scroll to sections
✅ Mobile menu opens/closes
✅ Project modals open with details
✅ Contact form validates correctly
✅ Resume downloads successfully
✅ Back-to-top button appears on scroll
✅ All external links open in new tab
✅ Skills chart displays properly
```

### Cross-Browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Check mobile browsers (iOS Safari, Chrome Mobile)
- Verify layout doesn't break
- Check animations work smoothly

### Performance Testing
1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Click **Generate report**
4. Aim for 90+ scores in all categories

---

## 🐛 Common Issues & Solutions

### Issue: Resume doesn't download
**Solution**: 
- Ensure file is named `resume.pdf`
- Check file is in `assets/` folder
- Verify relative path: `assets/resume.pdf`

### Issue: Links not working on deployed site
**Solution**:
- Use relative paths, not absolute
- Check for typos in href attributes
- Ensure all files uploaded

### Issue: CSS/JS not loading
**Solution**:
- Verify folder structure maintained
- Check file paths in HTML
- Clear browser cache (Ctrl+Shift+R)

### Issue: Mobile menu not working
**Solution**:
- Check JavaScript file is loaded
- Look for errors in console (F12)
- Verify button has correct ID

### Issue: Images broken (if added)
**Solution**:
- Verify images uploaded to correct folder
- Check file extensions match HTML
- Use relative paths

---

## 🔄 Updating Your Site

### GitHub Pages
```bash
# Make changes to files
git add .
git commit -m "Update portfolio content"
git push

# Site updates automatically in 1-2 minutes
```

### Netlify
- With Git: Push to repository (auto-deploys)
- Manual: Drag and drop updated folder

### Vercel
- With Git: Push to repository (auto-deploys)
- CLI: Run `vercel` again

### Traditional Hosting
- Upload updated files via FTP
- Overwrite old files

---

## 📊 Post-Deployment

### Share Your Portfolio
- Add URL to LinkedIn profile
- Include in resume/CV
- Share on Twitter/social media
- Add to email signature
- Include in GitHub profile README

### Monitor Performance
- Check Google Analytics (if set up)
- Monitor loading times
- Get feedback from peers
- Update content regularly

### Regular Maintenance
- Update resume quarterly
- Add new projects as completed
- Keep certifications current
- Refresh content annually

---

## 🎯 Domain Name Tips

### Choosing a Domain
- Use your name: `yourname.com`
- Keep it short and memorable
- Avoid hyphens and numbers
- Choose `.com` if available

### Domain Registrars
- **Namecheap** - Good prices, easy to use
- **Google Domains** - Simple, integrated
- **GoDaddy** - Popular, lots of features
- **Hover** - Clean interface

### Typical Cost
- Domain: $10-15/year
- Hosting: Free (GitHub Pages, Netlify, Vercel)
- SSL: Free (included with all above)

---

## 🚀 Going Live Checklist

Final checks before announcing:

- [ ] Site loads without errors
- [ ] All sections display correctly
- [ ] Contact form works
- [ ] Mobile experience is smooth
- [ ] Loading time is fast (< 3 seconds)
- [ ] Lighthouse score above 90
- [ ] Tested on 3+ browsers
- [ ] Tested on mobile device
- [ ] Shared with friend for feedback
- [ ] Resume is current
- [ ] All links verified

---

## 🎉 You're Live!

Congratulations! Your portfolio is now online and accessible to the world.

### Next Steps
1. Share your URL with your network
2. Add to your resume and LinkedIn
3. Monitor for any issues
4. Gather feedback
5. Keep content fresh

### Remember
- First impressions matter
- Keep it updated
- Showcase your best work
- Make it easy to contact you

---

## 📞 Need Help?

### Resources
- **GitHub Pages Docs**: https://pages.github.com/
- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs

### Troubleshooting
1. Check browser console for errors (F12)
2. Verify file paths and structure
3. Clear cache and hard reload
4. Test in incognito/private mode
5. Ask for help in developer communities

---

**Deployment Time**: 5-15 minutes  
**Cost**: Free (recommended options)  
**Maintenance**: Minimal  

Good luck with your deployment! 🚀