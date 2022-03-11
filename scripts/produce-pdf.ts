// import puppeteer from 'puppeteer'
// TO DOWNLOAD AS PDF RUN in git bash : 
// node scripts/produce-pdf.ts
// OUTPUT WILL BE PDF in OUTPUT FOLDER
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto("http://localhost:3000?resumeonly=true", {
		waitUntil: "networkidle2"
	});


	await page.pdf({
		path: "output/resume.pdf",
		format: "letter",
		printBackground: true
	});

	await browser.close();
})();