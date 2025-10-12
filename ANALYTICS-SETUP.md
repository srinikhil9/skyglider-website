# Analytics Setup Guide

## 📊 Option 1: Vercel Analytics (Recommended - Easiest!)

### Why Choose This?
- ✅ **Zero code changes** required
- ✅ **Privacy-friendly** (GDPR compliant)
- ✅ **Free** on Vercel Hobby plan
- ✅ Tracks Core Web Vitals automatically
- ✅ Real-time visitor data
- ✅ Page view analytics

### Setup Steps (2 minutes):

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your `skyglider-website` project

2. **Enable Analytics**
   - Click the "Analytics" tab in the top menu
   - Click "Enable Analytics" button
   - That's it! 🎉

3. **What You'll See**:
   - **Real-time visitors** on your site
   - **Top pages** by views
   - **Traffic sources** (where visitors come from)
   - **Core Web Vitals** (performance metrics)
   - **Conversion tracking** (form submissions, button clicks)

### View Your Analytics:
- Always accessible at: `https://vercel.com/[your-project]/analytics`

---

## 📊 Option 2: Google Analytics (More Features)

### Why Choose This?
- ✅ More detailed tracking
- ✅ Custom events and goals
- ✅ Integration with Google Ads
- ✅ Audience demographics (if enabled)
- ✅ E-commerce tracking potential

### Setup Steps:

#### Step 1: Get Your Tracking ID

1. Go to **https://analytics.google.com**
2. Sign in with your Google account
3. Click **"Start measuring"** or create a new property
4. Fill in:
   - **Property name**: `SkyGlider Website`
   - **Reporting time zone**: Your timezone
   - **Currency**: USD (or your preference)
5. Click **"Next"** → **"Create property"**
6. Choose **"Web"** as the platform
7. Enter:
   - **Website URL**: `https://theskyglider.com`
   - **Stream name**: `SkyGlider Main Site`
8. Click **"Create stream"**
9. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Step 2: Add to Your Website

**Option A: Using Next.js Script Component (Recommended)**

1. Open `skyglider-website/app/layout.tsx`

2. Find the imports at the top and add:
   ```tsx
   import Script from 'next/script';
   ```

3. In the `<html>` tag section, add this **before** `<body>`:
   ```tsx
   {/* Google Analytics */}
   <Script
     strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX', {
         page_path: window.location.pathname,
       });
     `}
   </Script>
   ```

4. **Replace** `G-XXXXXXXXXX` with your actual Measurement ID (2 places!)

5. Save the file

**Option B: Using Environment Variables (More Secure)**

1. Create/update `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. In `app/layout.tsx`, add:
   ```tsx
   import Script from 'next/script';
   
   const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
   
   // In the component:
   {GA_MEASUREMENT_ID && (
     <>
       <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
       />
       <Script id="google-analytics" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${GA_MEASUREMENT_ID}', {
             page_path: window.location.pathname,
           });
         `}
       </Script>
     </>
   )}
   ```

3. **In Vercel Dashboard**:
   - Go to Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Save

#### Step 3: Deploy & Test

```bash
# Test locally first
npm run dev
# Visit http://localhost:3000 and check browser console for errors

# Then deploy
git add .
git commit -m "Add Google Analytics tracking"
git push origin main
```

#### Step 4: Verify It's Working

1. Visit your live site: https://theskyglider.com
2. Open Google Analytics dashboard
3. Go to **Reports** → **Realtime**
4. You should see yourself as an active user!

---

## 📊 Option 3: Both (Best of Both Worlds!)

You can enable **both** Vercel Analytics and Google Analytics:

- **Vercel Analytics**: For quick performance metrics and Core Web Vitals
- **Google Analytics**: For detailed user behavior and demographics

They work independently and don't conflict!

---

## 🎯 Track Custom Events (Google Analytics)

Want to track button clicks like "Buy on TikTok"?

### Add Event Tracking:

In your component (e.g., `app/page.tsx`):

```tsx
const handleBuyClick = () => {
  // Track in Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'Button',
      event_label: 'Buy on TikTok - Homepage',
      value: 1
    });
  }
  
  // Then navigate/open link
  window.open('https://tiktok.com/@skyglider', '_blank');
};

// Use in Button:
<Button onClick={handleBuyClick}>Buy on TikTok</Button>
```

### Common Events to Track:

1. **"Buy" Button Clicks**
   ```js
   gtag('event', 'click', {
     event_category: 'Purchase Intent',
     event_label: 'TikTok Shop Link',
   });
   ```

2. **Contact Form Submissions**
   ```js
   gtag('event', 'form_submit', {
     event_category: 'Lead Generation',
     event_label: 'Contact Form',
   });
   ```

3. **Image Gallery Views**
   ```js
   gtag('event', 'view', {
     event_category: 'Product Interest',
     event_label: 'Image Gallery',
   });
   ```

---

## 📈 What Metrics to Watch

### Key Performance Indicators (KPIs):

1. **Page Views**: How many times your pages are visited
2. **Unique Visitors**: How many different people visit
3. **Bounce Rate**: % of people who leave without clicking anything
   - **Target**: < 60%
4. **Average Session Duration**: How long people stay
   - **Target**: > 1 minute
5. **Top Pages**: Which pages are most popular
6. **Traffic Sources**: Where visitors come from
   - Direct, Social, Search, Referral
7. **Device Breakdown**: Mobile vs Desktop
   - Expect 60-70% mobile for modern sites
8. **Conversion Rate**: % who click "Buy" button
   - Track this with custom events

---

## 🔒 Privacy Considerations

### GDPR/CCPA Compliance:

If you're collecting analytics, consider adding a privacy notice:

**Quick Option**: Add to your Footer:
```tsx
<p className="text-sm text-gray-400 mt-4">
  This site uses analytics to improve user experience. 
  By using this site, you consent to our use of cookies.
  {' '}
  <a href="/privacy" className="underline hover:text-white">
    Privacy Policy
  </a>
</p>
```

**Full Option**: Implement a cookie consent banner
- Libraries: `react-cookie-consent`
- Only load analytics after user accepts

---

## ✅ Quick Comparison

| Feature | Vercel Analytics | Google Analytics |
|---------|------------------|------------------|
| Setup Time | 1 minute | 5-10 minutes |
| Code Changes | None | Yes (minimal) |
| Privacy | Very private | Standard |
| Real-time Data | Yes | Yes |
| Custom Events | Limited | Full support |
| Demographics | No | Yes |
| E-commerce | No | Yes |
| Free Tier | Yes | Yes (unlimited) |
| Best For | Performance focus | Marketing focus |

---

## 🎯 Recommendation

**For SkyGlider:**

1. **Start with Vercel Analytics** (enable it now - takes 30 seconds)
2. **Add Google Analytics later** if you need more detailed tracking
3. **Track custom events** for "Buy" button clicks (high priority)
4. **Monitor these KPIs**:
   - Homepage views
   - Product page views
   - "Buy on TikTok" click rate
   - Mobile vs desktop split

---

## 🆘 Troubleshooting

### Google Analytics Not Showing Data?

- **Wait 24 hours**: GA can take time to populate
- **Check Realtime**: Should work immediately
- **Ad Blockers**: Disable to test (many users block GA)
- **Console Errors**: Check browser console for JavaScript errors

### Vercel Analytics Not Enabling?

- **Check Plan**: Must be on Hobby or Pro plan
- **Project Settings**: Ensure project is properly deployed
- **Refresh Page**: Sometimes it's already on, just refresh!

---

## 📞 Resources

- **Vercel Analytics**: https://vercel.com/docs/analytics
- **Google Analytics**: https://support.google.com/analytics
- **Next.js Analytics**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **Custom Events**: https://developers.google.com/analytics/devguides/collection/ga4/events

---

**Ready to track your success!** 📊✨

Start with Vercel Analytics today, takes 30 seconds to enable.

