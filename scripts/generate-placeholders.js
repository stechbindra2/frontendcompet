/**
 * This script generates placeholder images for development.
 * Run it with: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Configuration
const sizes = [
  { name: 'logo', width: 80, height: 80 },
  { name: 'thumbnail', width: 300, height: 200 },
  { name: 'banner', width: 1200, height: 400 },
  { name: 'portrait', width: 400, height: 600 },
  { name: 'square', width: 600, height: 600 },
];

const categories = [
  'latest', 'upcoming', 'press', 'notifications', 'media', 'gallery'
];

const outputDir = path.join(__dirname, '../public/images');

// Create directories if they don't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

categories.forEach(category => {
  const categoryDir = path.join(outputDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
});

// Generate basic placeholder
function generateBasicPlaceholder(width, height, filename) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Background color
  context.fillStyle = '#f0f0f0';
  context.fillRect(0, 0, width, height);

  // Border
  context.strokeStyle = '#cccccc';
  context.lineWidth = 2;
  context.strokeRect(0, 0, width, height);

  // Text
  context.font = 'bold 20px Arial';
  context.fillStyle = '#666666';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(`${width}x${height}`, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filename, buffer);
  console.log(`Generated: ${filename}`);
}

// Generate placeholders
console.log('Generating placeholder images...');

// Generate basic placeholders
sizes.forEach(size => {
  generateBasicPlaceholder(
    size.width, 
    size.height, 
    path.join(outputDir, `${size.name}.jpg`)
  );
});

// Generate category placeholders
categories.forEach(category => {
  for (let i = 1; i <= 5; i++) {
    generateBasicPlaceholder(
      600, 
      400, 
      path.join(outputDir, category, `${category}-${i}.jpg`)
    );
  }
});

console.log('Placeholder generation complete!');
