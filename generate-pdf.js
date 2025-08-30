const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // mở file index.html
  await page.goto(`file://${__dirname}/index.html`, { waitUntil: "networkidle0" });

  // xuất PDF giữ nguyên màu nền + chữ
  await page.pdf({
    path: "cv.pdf",
    format: "A4",
    printBackground: true, // quan trọng
  });

  await browser.close();
})();
