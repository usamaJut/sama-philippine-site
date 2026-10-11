const puppeteer = require('puppeteer-core');
const path = require('path');

const DIR = __dirname;
const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

async function main(){
  const fileUrl = 'file:///' + path.join(DIR, 'social_post_final.html').replace(/\\/g, '/');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    defaultViewport: { width: 1080, height: 1350, deviceScaleFactor: 1 }
  });
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.evaluateHandle('document.fonts.ready');
  await page.screenshot({ path: path.join(DIR, 'sama_social_post.png') });
  await browser.close();
  console.log('DONE');
}

main().catch((err) => { console.error(err); process.exit(1); });
