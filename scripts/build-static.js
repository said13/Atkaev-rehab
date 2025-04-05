#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the build
console.log('Building the project...');
execSync('next build', { stdio: 'inherit' });

// Copy route.json files
console.log('Copying route files...');
const outDir = path.join(process.cwd(), 'out');

// Get the list of products
const productsModule = require('../src/data/products');
const products = productsModule.products;

// Create product directories and index.html files
products.forEach(product => {
  const productDir = path.join(outDir, 'product', product.id);

  if (!fs.existsSync(productDir)) {
    fs.mkdirSync(productDir, { recursive: true });
  }

  // Copy the first product page as a template for all products
  if (product.id !== '1') {
    const templateHtml = fs.readFileSync(path.join(outDir, 'product', '1', 'index.html'), 'utf8');
    fs.writeFileSync(path.join(productDir, 'index.html'), templateHtml);
  }
});

console.log('Static build completed successfully!');
