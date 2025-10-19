import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console messages
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

  // Listen for page errors
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  try {
    console.log('Navigating to http://localhost:5174...\n');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(3000);

    // Get page content
    const content = await page.content();
    console.log('\nPage loaded. Checking for content...');
    console.log('Has <main>:', content.includes('<main'));
    console.log('Has Home content:', content.includes('Build what matters'));

    // Take screenshot
    await page.screenshot({ path: 'screenshots/debug.png', fullPage: true });
    console.log('\nScreenshot saved to screenshots/debug.png');

    console.log('\nLeaving browser open for 30 seconds for manual inspection...');
    await page.waitForTimeout(30000);

  } catch (error) {
    console.error('Error:', error.message);
  }

  await browser.close();
})();
