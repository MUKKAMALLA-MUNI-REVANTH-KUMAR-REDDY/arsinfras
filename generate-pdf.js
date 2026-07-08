#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if html2pdf is installed, if not, provide instructions
try {
  require.resolve('html2pdf');
} catch (e) {
  console.log('Installing html2pdf...');
  try {
    execSync('npm install html2pdf', { stdio: 'inherit' });
  } catch (installError) {
    console.error('Failed to install html2pdf. Please run: npm install html2pdf');
    process.exit(1);
  }
}

// Now generate the PDF using puppeteer or html2pdf
const generatePDF = async () => {
  try {
    // Try with puppeteer first (more reliable)
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlFile = path.join(__dirname, 'src', 'assets', 'sumadhura-brochure.html');
    const fileUrl = `file://${htmlFile}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle2' });
    
    const pdfPath = path.join(__dirname, 'src', 'assets', 'sumadhura-brochure.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
    });
    
    await browser.close();
    
    console.log('✅ PDF generated successfully:', pdfPath);
  } catch (puppeteerError) {
    console.log('Puppeteer not available, trying alternative method...');
    try {
      const html2pdf = require('html2pdf');
      const htmlFile = path.join(__dirname, 'src', 'assets', 'sumadhura-brochure.html');
      const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
      
      const options = {
        margin: 0,
        filename: 'sumadhura-brochure.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      };
      
      html2pdf().set(options).from(htmlContent).save();
      console.log('✅ PDF generated successfully!');
    } catch (fallbackError) {
      console.error('Could not generate PDF. Please install: npm install puppeteer html2pdf');
      process.exit(1);
    }
  }
};

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
