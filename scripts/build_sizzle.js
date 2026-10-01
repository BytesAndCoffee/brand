// Renders sizzle/sizzle.html to sizzle/bytes-coffee-sizzle.pdf (one page) and a PNG preview.
// Usage: node scripts/build_sizzle.js   (needs the playwright package and Chromium)
const path = require('path');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const html = 'file://' + path.join(root, 'sizzle', 'sizzle.html');
const width = 1600;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => Math.ceil(document.querySelector('.sheet').getBoundingClientRect().height));
  await page.setViewportSize({ width, height });
  await page.pdf({
    path: path.join(root, 'sizzle', 'bytes-coffee-sizzle.pdf'),
    width: `${width}px`, height: `${height}px`, printBackground: true,
  });
  await page.screenshot({ path: path.join(root, 'sizzle', 'bytes-coffee-sizzle.png') });
  await browser.close();
  console.log(`sizzle: ${width}x${height}`);
})();
