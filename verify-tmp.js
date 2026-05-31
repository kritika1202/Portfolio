const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // allow framer-motion to settle

  // Screenshot the hero
  await page.screenshot({ path: '/tmp/hero.png', fullPage: false });
  console.log('Hero screenshot taken');

  // Check all sections exist
  const sections = ['hero', 'about', 'experience', 'projects', 'connect'];
  for (const id of sections) {
    const el = await page.$('#' + id);
    console.log(`Section #${id}: ${el ? 'FOUND' : 'MISSING'}`);
  }

  // Check key text
  const h1 = await page.textContent('h1');
  console.log('H1 text:', h1?.trim());

  // Scroll to About
  await page.evaluate(() => document.querySelector('#about')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/about.png', fullPage: false });
  console.log('About screenshot taken');

  // Scroll to Projects
  await page.evaluate(() => document.querySelector('#projects')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/projects.png', fullPage: false });
  console.log('Projects screenshot taken');

  // Scroll to Connect
  await page.evaluate(() => document.querySelector('#connect')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/connect.png', fullPage: false });
  console.log('Connect screenshot taken');

  // Check form fields
  const inputs = await page.$$('input, textarea');
  console.log('Form inputs count:', inputs.length);

  // Full page screenshot
  await page.screenshot({ path: '/tmp/full.png', fullPage: true });
  console.log('Full page screenshot taken');

  // Check for console errors
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log('Console errors:', errors.length ? errors : 'none');

  await browser.close();
})();
