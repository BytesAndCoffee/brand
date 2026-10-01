// Renders sizzle/sizzle.html to one-page PDFs (and PNG previews) in both themes:
//   sizzle/bytes-coffee-sizzle.pdf        Espresso (dark)
//   sizzle/bytes-coffee-sizzle-latte.pdf  Latte (light)
// Usage: node scripts/build_sizzle.js   (needs the playwright package and Chromium)
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const html = pathToFileURL(path.join(root, 'sizzle', 'sizzle.html')).href;
const width = 1600;
const editions = [
  { theme: 'dark', name: 'bytes-coffee-sizzle' },
  { theme: 'light', name: 'bytes-coffee-sizzle-latte' },
];

(async () => {
  const browser = await chromium.launch();
  for (const { theme, name } of editions) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, colorScheme: theme });
    await page.goto(`${html}?theme=${theme}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const height = await page.evaluate(() => Math.ceil(document.querySelector('.sheet').getBoundingClientRect().height));
    await page.setViewportSize({ width, height });
    await page.pdf({ path: path.join(root, 'sizzle', `${name}.pdf`), width: `${width}px`, height: `${height}px`, printBackground: true });
    await page.screenshot({ path: path.join(root, 'sizzle', `${name}.png`) });
    await page.close();
    console.log(`${name}: ${width}x${height}`);
  }
  await browser.close();
})();
