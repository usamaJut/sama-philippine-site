const puppeteer = require('C:/Users/hello/AppData/Local/Temp/claude/scratch_reel/node_modules/puppeteer-core');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 1000, height: 564, deviceScaleFactor: 1 }
  });
  const page = await browser.newPage();
  await page.goto('file:///' + path.join(__dirname, 'compose.html').replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.evaluate('document.fonts.ready');
  await page.screenshot({ path: path.join(__dirname, 'hero-polo.png') });
  await browser.close();
  console.log('DONE');
})();
