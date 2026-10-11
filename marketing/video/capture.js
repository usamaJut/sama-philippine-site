const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const DIR = __dirname;
const FRAMES_DIR = path.join(DIR, 'frames');
const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const FPS = 30;
const TOTAL_MS = 22000;

async function main(){
  if (fs.existsSync(FRAMES_DIR)) fs.rmSync(FRAMES_DIR, { recursive: true, force: true });
  fs.mkdirSync(FRAMES_DIR, { recursive: true });

  const fileUrl = 'file:///' + path.join(DIR, 'reel_final.html').replace(/\\/g, '/') + '?capture=1';

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    defaultViewport: { width: 420, height: 700, deviceScaleFactor: 3 }
  });

  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.waitForSelector('#stage');
  await page.waitForFunction('typeof window.__captureRenderAt === "function"');

  const stage = await page.$('#stage');
  const frameCount = Math.round((TOTAL_MS / 1000) * FPS);
  const dt = 1000 / FPS;

  console.log('Rendering ' + frameCount + ' frames...');
  for (let i = 0; i < frameCount; i++) {
    const t = i * dt;
    await page.evaluate((ms) => { window.__captureRenderAt(ms); }, t);
    const fname = path.join(FRAMES_DIR, 'frame_' + String(i).padStart(5, '0') + '.png');
    await stage.screenshot({ path: fname });
    if (i % 60 === 0) console.log('frame ' + i + '/' + frameCount);
  }

  await browser.close();
  console.log('DONE ' + frameCount + ' frames written to ' + FRAMES_DIR);
}

main().catch((err) => { console.error(err); process.exit(1); });
