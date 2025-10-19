import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });

  try {
    console.log('Taking screenshots...\n');

    await page.goto('http://localhost:5175', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/home-full.png', fullPage: true });
    console.log('✓ Home page');

    await page.goto('http://localhost:5175/services/web-apps-sites', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/services-web-apps.png', fullPage: true });
    console.log('✓ Web Apps & Sites');

    await page.goto('http://localhost:5175/services/automation-ai', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/services-automation.png', fullPage: true });
    console.log('✓ Automation & AI');

    await page.goto('http://localhost:5175/work', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/work.png', fullPage: true });
    console.log('✓ Work');

    await page.goto('http://localhost:5175/reviews', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/reviews.png', fullPage: true });
    console.log('✓ Reviews');

    await page.goto('http://localhost:5175/contact', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshots/contact.png', fullPage: true });
    console.log('✓ Contact');

    console.log('\n✓ All screenshots saved!');
  } catch (error) {
    console.error('Error:', error.message);
  }

  await browser.close();
})();
