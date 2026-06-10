const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to localhost:5173...');
  page.on("console", msg => console.log(msg.text())); await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Wait for initial animations
  await new Promise(r => setTimeout(r, 10000));

  console.log('Taking top screenshot...');
  await page.screenshot({ path: '/Users/gauravm/Vittavardhana/screenshot_top.png' });

  console.log('Scrolling down to the bottom...');
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  
  // Wait for scroll animations
  await new Promise(r => setTimeout(r, 10000));

  console.log('Taking bottom screenshot...');
  await page.screenshot({ path: '/Users/gauravm/Vittavardhana/screenshot_bottom.png' });

  // Let's get the document height
  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log('Document height:', height);

  await browser.close();
})();
