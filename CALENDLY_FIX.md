# Calendly Embed Fix

The iframe is showing "Page not found" because Calendly requires specific embed setup.

## Quick Fix Option 1: Use Button Instead (Easiest)

Replace the iframe section (lines 207-213) in `src/pages/Contact.jsx` with:

```jsx
<div className="bg-gradient-to-br from-lime-50 to-forest-50 rounded-xl p-12 text-center border border-forest/10">
  <h4 className="text-h3 font-bold mb-4">Ready to talk?</h4>
  <p className="text-forest/70 mb-6">
    Click below to see available times and book your 20-minute intro call.
  </p>
  <Button
    variant="primary"
    href="https://calendly.com/cayoae89/20-minute-meeting"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-md mx-auto"
  >
    View Available Times →
  </Button>
</div>
```

## Option 2: Get Calendly Embed Code (Recommended)

1. Go to Calendly → Click "Share" on your "20 Minute Meeting" event
2. Click "Add to Website"  
3. Choose "Inline Embed"
4. Copy the FULL code including the `<script>` tag
5. Paste it to replace the iframe

## Option 3: Use Calendly Badge (Modern)

1. In Calendly, go to "Share" → "Add to Website" → "Text Link"
2. Copy the code  
3. Add it to your Contact page

Which option would you prefer? Option 1 (button) is fastest!
