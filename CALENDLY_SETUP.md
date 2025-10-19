# How to Add Your Calendly Calendar

The Contact page currently shows a placeholder for your Calendly calendar embed.

## Steps to Replace the Placeholder:

### 1. Get Your Calendly Link
- Go to https://calendly.com
- Sign in to your account
- Click on your event type (e.g., "20 Minute Meeting")
- Copy your scheduling link (e.g., `https://calendly.com/yourname/20min`)

### 2. Update the Contact Page

Open `src/pages/Contact.jsx` and find this section (around line 207-212):

```jsx
<Card hover={false} className="bg-soft-gray">
  <div className="aspect-video flex items-center justify-center text-forest/40">
    [Calendly Embed]
    <br />
    <span className="text-sm">iframe src="https://calendly.com/your-link"</span>
  </div>
</Card>
```

### 3. Replace with One of These Options:

**Option A: Inline Embed (Recommended)**
```jsx
<Card hover={false} className="bg-soft-gray overflow-hidden">
  <iframe
    src="https://calendly.com/YOUR-USERNAME/20min"
    width="100%"
    height="600"
    frameBorder="0"
    title="Schedule a call"
  />
</Card>
```

**Option B: Popup Button**
```jsx
<div className="text-center">
  <Button
    variant="primary"
    href="https://calendly.com/YOUR-USERNAME/20min"
    className="w-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    Schedule Your 20-Min Call
  </Button>
</div>
```

### 4. Don't Have Calendly?

**Alternative: Use Cal.com (Free)**
- Sign up at https://cal.com
- Create a 20-minute event type
- Use the same embed code format

**Alternative: Link to Email**
```jsx
<div className="text-center p-12 bg-soft-gray rounded-xl">
  <Button
    variant="primary"
    href="mailto:your-email@data2.business?subject=20-Min Intro Call Request"
    className="w-full"
  >
    Email to Schedule
  </Button>
</div>
```

Replace `YOUR-USERNAME` and `your-email@data2.business` with your actual information!
