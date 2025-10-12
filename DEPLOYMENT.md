# SkyGlider Website - Deployment Guide

## 🚀 Deploy to Vercel

### Method 1: Via Vercel Website (Recommended - Easiest!)

#### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial SkyGlider website - ready for deployment"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/skyglider-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If you don't have a GitHub repository yet:**
1. Go to https://github.com/new
2. Repository name: `skyglider-website`
3. Keep it Public or Private (your choice)
4. **DO NOT** check "Initialize with README" (you already have one)
5. Click "Create repository"
6. Follow the commands shown to push your code

#### Step 2: Deploy on Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"** (use your GitHub account for easy integration)
3. After signing in, click **"Add New Project"** or **"Import Project"**
4. Click **"Import Git Repository"**
5. Authorize Vercel to access your GitHub repositories
6. Find and select `skyglider-website` from the list
7. Click **"Import"**

#### Step 3: Configure (Auto-detected!)
Vercel will automatically detect:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

No changes needed unless you want to add environment variables!

#### Step 4: Deploy!
1. Click the big **"Deploy"** button
2. Wait 2-3 minutes while Vercel:
   - Installs dependencies
   - Builds your project
   - Deploys to their CDN
3. 🎉 You'll get a live URL like: `skyglider-website.vercel.app`

---

### Method 2: Via Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (this will ask you a few questions the first time)
vercel

# Or deploy directly to production
vercel --prod
```

---

## 🌐 Connect Custom Domain (theskyglider.com)

### Step 1: In Vercel Dashboard

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Click **"Add"** button
4. Enter: `theskyglider.com`
5. Click **"Add"**
6. Repeat for: `www.theskyglider.com` (recommended)

Vercel will show you DNS records to add!

### Step 2: In Your Domain Registrar

**Where you bought theskyglider.com** (GoDaddy, Namecheap, Google Domains, etc.):

1. Log in to your domain registrar
2. Find **DNS Settings** or **DNS Management**
3. Add these records:

#### For Root Domain (theskyglider.com):
- **Type**: `A`
- **Name**: `@` (or leave empty)
- **Value**: `76.76.21.21` (Vercel's IP)
- **TTL**: `3600` or `Auto`

#### For WWW Subdomain:
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: `3600` or `Auto`

4. **Save changes**

### Step 3: Wait for DNS Propagation

- **Usually takes**: 10 minutes to 1 hour
- **Maximum**: 48 hours (rare)
- **Check status**: https://www.whatsmydns.net/ (enter theskyglider.com)

### Step 4: SSL Certificate (Automatic!)

Vercel automatically issues a free SSL certificate from Let's Encrypt once DNS is verified. Your site will be secure with HTTPS! 🔒

---

## 📧 Optional: Set Up Contact Form Email

The contact form currently logs to console. To send real emails:

### Using Resend (Recommended)

1. Sign up at **https://resend.com** (free tier: 3,000 emails/month)
2. Get your API key
3. Install: `npm install resend`
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
5. Update `app/api/contact/route.ts` (instructions are in comments)
6. In Vercel Dashboard → Settings → Environment Variables
7. Add `RESEND_API_KEY` with your key
8. Redeploy!

---

## 📊 Add Analytics (Optional)

### Vercel Web Analytics (Easiest - Built-in)

1. Go to your project in Vercel
2. Click **Analytics** tab
3. Click **"Enable"**
4. Done! Tracks page views and Core Web Vitals automatically

### Google Analytics

1. Get tracking ID from https://analytics.google.com
2. Add to `app/layout.tsx` in the `<head>`:
   ```tsx
   <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
   <Script id="google-analytics">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

---

## 🔄 Continuous Deployment

Once set up, Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update homepage spacing"
git push

# Vercel automatically builds and deploys! 🚀
```

You'll get a deployment notification and preview URL for every commit!

---

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Test locally: `npm run build`
- Common fixes:
  - Clear `.next` folder: `rm -rf .next`
  - Reinstall: `rm -rf node_modules && npm install`

### Domain Not Working
- Wait longer (DNS can take time)
- Check DNS settings match Vercel's instructions exactly
- Verify on https://www.whatsmydns.net/
- Remove any conflicting DNS records (old A or CNAME records)

### Images Not Loading
- Make sure images are in `/public/images/`
- Check file names match exactly (case-sensitive!)
- Reference as `/images/filename.jpg` not `./images/`

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Your Code**: See README.md

---

## ✅ Deployment Checklist

Before deploying:
- [ ] All images are in `/public/images/`
- [ ] Update TikTok shop URLs
- [ ] Test build locally: `npm run build`
- [ ] Commit all changes to Git
- [ ] Push to GitHub

After deploying:
- [ ] Test all pages work
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Set up custom domain
- [ ] Enable analytics
- [ ] Set up email service (optional)

---

Good luck with your launch! 🎉


