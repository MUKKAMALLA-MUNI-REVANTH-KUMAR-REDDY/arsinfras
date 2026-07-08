#!/usr/bin/env node

/**
 * PDF Brochure Generator for SUMADHURA PANORAMA
 * This script generates a professional PDF brochure
 */

import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const generateBrochure = () => {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
  });

  const outputPath = path.join(__dirname, '..', 'src', 'assets', 'sumadhura-brochure.pdf');
  const stream = fs.createWriteStream(outputPath);
  
  doc.pipe(stream);

  // Colors
  const primaryColor = '#1a5f3d';
  const accentColor = '#22a54a';
  const warningColor = '#ff6b35';

  // Helper function for section titles
  const addSectionTitle = (title) => {
    doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text(title);
    doc.moveTo(40, doc.y + 5).lineTo(570, doc.y + 5).stroke(accentColor);
    doc.y += 15;
  };

  const addSubtitle = (text) => {
    doc.fontSize(14).font('Helvetica-Bold').fillColor(accentColor).text(text);
    doc.fontSize(11).font('Helvetica').fillColor('#333');
    doc.y += 8;
  };

  const addText = (text, size = 11, color = '#333') => {
    doc.fontSize(size).font('Helvetica').fillColor(color).text(text, { align: 'left' });
    doc.y += 5;
  };

  const addBulletPoint = (text) => {
    doc.fontSize(10).font('Helvetica').fillColor('#555').text('• ' + text, { align: 'left' });
  };

  // PAGE 1: COVER
  doc.fontSize(48).font('Helvetica-Bold').fillColor(primaryColor).text('SUMADHURA', { align: 'center' });
  doc.fontSize(48).fillColor(accentColor).text('PANORAMA', { align: 'center' });
  doc.fontSize(20).font('Helvetica').fillColor('#666').text('PHASE 2 - Premium Themed Plotted Development', { align: 'center' });
  
  doc.y += 30;
  doc.fontSize(14).fillColor('#333').text('📍 Devanahalli Main Road, North Bengaluru', { align: 'center' });
  doc.fontSize(12).fillColor('#666').text('10 Minutes from Kempegowda International Airport', { align: 'center' });
  
  doc.y += 40;
  doc.rect(150, doc.y, 300, 50).fill(warningColor);
  doc.fontSize(16).font('Helvetica-Bold').fillColor('white').text('🚀 EOI STAGE LIVE', { align: 'center' });
  doc.fontSize(12).text('Priority Access Available', { align: 'center' });
  
  doc.y += 30;
  doc.fontSize(11).fillColor('#666').text('EOI Window Extended Till: 10th May 2026', { align: 'center' });
  doc.fontSize(10).fillColor('#999').text('Contact: +91 9885953399 | arsinfra84@gmail.com', { align: 'center' });

  doc.addPage();

  // PAGE 2: OVERVIEW
  addSectionTitle('PROJECT OVERVIEW');
  addText('SUMADHURA PANORAMA Phase 2 is a landmark 120+ acre themed plotted development inspired by the rich cultural heritage of South India. Located in one of North Bengaluru\'s fastest-growing investment hubs, this development offers an exceptional opportunity for both end-users and investors.');

  doc.y += 15;
  addSubtitle('✨ Why Choose Panorama Phase 2?');

  addSubtitle('🏛 Distinct South India Theme');
  addText('Phase 1: Karnataka & Kerala Architecture');
  addText('Phase 2: Tamil Nadu, Andhra Pradesh & Telangana Theme');

  doc.y += 10;
  addSubtitle('📍 Prime Location Advantage');
  addBulletPoint('Located in North Bengaluru\'s high-growth corridor');
  addBulletPoint('Just minutes from Kempegowda International Airport');
  addBulletPoint('Close to upcoming tech parks & infrastructure');
  addBulletPoint('Strong appreciation potential');

  doc.y += 10;
  addSubtitle('💰 High Investment Value');
  addBulletPoint('Increasing demand for plotted developments');
  addBulletPoint('Suitable for both end-users and investors');
  addBulletPoint('Excellent long-term growth prospects');
  addBulletPoint('Bank loans available up to 80%');

  doc.addPage();

  // PAGE 3: FEATURES & AMENITIES
  addSectionTitle('🏡 BUILD YOUR DREAM HOME');
  addText('Design your villa your way with complete flexibility and premium customization options.');
  
  addBulletPoint('Private Gym');
  addBulletPoint('Home Theatre');
  addBulletPoint('Rooftop Lounge');
  addBulletPoint('Custom Layouts');

  doc.y += 15;
  addSectionTitle('🌿 THOUGHTFUL GREEN LIVING');
  addBulletPoint('9 Acres of landscaped open spaces');
  addBulletPoint('Low-density layout for peaceful lifestyle');
  addBulletPoint('Tree-lined pathways and gardens');

  doc.y += 15;
  addSectionTitle('🎯 70+ LIFESTYLE AMENITIES');

  addSubtitle('🏋️‍♂️ Sports & Fitness');
  addBulletPoint('Tennis Court');
  addBulletPoint('Cricket Net');
  addBulletPoint('Mini Soccer Field');
  addBulletPoint('Outdoor Gym');
  addBulletPoint('Jogging & Cycling Tracks');

  doc.y += 10;
  addSubtitle('🏊 Leisure & Community');
  addBulletPoint('Grand Swimming Pool + Kids Pool');
  addBulletPoint('Multipurpose Courts');
  addBulletPoint('Social Spaces & Play Areas');

  doc.addPage();

  // PAGE 4: CLUBHOUSE & PRICING
  addSectionTitle('🏢 GRAND CLUBHOUSE – 45,000 SQ. FT.');
  addText('World-class facilities under one roof:');
  
  addBulletPoint('Fully Equipped Gym');
  addBulletPoint('Spa & Wellness Center');
  addBulletPoint('Sauna & Steam');
  addBulletPoint('Yoga Studio');
  addBulletPoint('Indoor Games Zone');
  addBulletPoint('Banquet Hall');
  addBulletPoint('Multi-Cuisine Restaurant');
  addBulletPoint('Supermarket');
  addBulletPoint('Co-working Spaces');
  addBulletPoint('Guest Rooms');

  doc.y += 15;
  addSectionTitle('📏 PLOT SIZES');

  const startY = doc.y;
  doc.rect(40, startY, 530, 25).fill(primaryColor);
  doc.fontSize(11).font('Helvetica-Bold').fillColor('white');
  doc.text('Plot Size', 50, startY + 7);

  const prices = [
    ['1200 sq.ft'],
    ['1500 sq.ft'],
    ['1800 sq.ft'],
    ['2400 sq.ft'],
    ['3000+ sq.ft'],
  ];

  let y = startY + 30;
  doc.fontSize(10).font('Helvetica').fillColor('#333');
  
  prices.forEach((row, index) => {
    if (index % 2 === 0) {
      doc.rect(40, y - 2, 530, 20).fill('#f9f9f9');
    }
    doc.text(row[0], 50, y);
    y += 20;
  });

  doc.addPage();

  // PAGE 5: INFRASTRUCTURE & CONTACT
  addSectionTitle('🏗️ INFRASTRUCTURE');
  addBulletPoint('Blacktop Roads with Street Lighting');
  addBulletPoint('Underground Drainage System');
  addBulletPoint('Water Supply Connection');
  addBulletPoint('Gated Community Security');
  addBulletPoint('Paved Pathways');

  doc.y += 15;
  addSectionTitle('💳 FINANCING OPTIONS');
  addText('Bank loans available up to 80%');
  addBulletPoint('HDFC Bank');
  addBulletPoint('State Bank of India');
  addBulletPoint('Union Bank of India');
  addBulletPoint('LIC Housing Finance');

  doc.y += 15;
  addSectionTitle('🎯 PERFECT FOR');
  addBulletPoint('End Users: Build Your Dream Villa');
  addBulletPoint('Investors: High Appreciation Potential');
  addBulletPoint('NRI Buyers: Excellent Airport Connectivity');
  addBulletPoint('Corporate Groups: Bulk Options');

  doc.y += 15;
  addSectionTitle('📞 CONTACT US');
  
  doc.rect(40, doc.y, 530, 80).fill('#f0f7f4');
  doc.y += 10;
  
  doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('ARS INFRA DEVELOPERS PVT LTD', 50, doc.y - 5);
  doc.fontSize(10).font('Helvetica').fillColor('#333');
  doc.text('#953, 2nd Floor, D-Block, 13th Cross, 16th Main', 50, doc.y + 10);
  doc.text('Sahakar Nagar, Bengaluru – 560092', 50, doc.y + 25);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(accentColor).text('Phone: +91 9885953399 | +91 80083 34428', 50, doc.y + 40);
  doc.fontSize(10).font('Helvetica').fillColor('#333').text('Email: arsinfra84@gmail.com', 50, doc.y + 55);
  doc.text('Website: www.arsinfras.com', 50, doc.y + 70);

  doc.y += 90;
  doc.fontSize(10).fillColor(warningColor).font('Helvetica-Bold').text('⚡ Limited Inventory | Strong Demand | Secure Your Plot Today!', { align: 'center' });

  // Finalize PDF
  doc.end();

  stream.on('finish', () => {
    console.log('✅ PDF Brochure generated successfully!');
    console.log('📄 Location: src/assets/sumadhura-brochure.pdf');
  });

  stream.on('error', (err) => {
    console.error('Error writing PDF:', err);
  });
};

// Generate the brochure
generateBrochure();
