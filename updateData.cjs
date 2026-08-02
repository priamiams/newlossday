const fs = require('fs');

const toTitleCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).replace('.jpg', '').replace('.png', '').replace('-', ' ');
}

// Mountains
let mountainsStr = 'export const mountainsData = [\n';
const mountains = fs.readdirSync('public/img/gunung').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
mountains.forEach((f, i) => {
  let title = toTitleCase(f).replace('1', '').replace('2', '');
  if (title.toLowerCase() === 'kawahratu') title = 'Kawah Ratu';
  if (title.toLowerCase() === 'kembangbismo') title = 'Kembang Bismo';
  mountainsStr += `  { id: ${i+1}, title: 'Gunung ${title}', location: 'Indonesia', duration: '3H2M', price: 'Mulai Rp 1.500.000', image: '/img/gunung/${f}', difficulty: 'Medium', description: 'Pendakian seru dan menantang.' },\n`;
});
mountainsStr += '];\n';
fs.writeFileSync('src/data/mountains.js', mountainsStr);

// Islands
let islandsStr = 'export const islandsData = [\n';
const islands = fs.readdirSync('public/img/pulau').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
islands.forEach((f, i) => {
  let title = toTitleCase(f);
  if (f === 'pulau1000.jpg') title = 'Kepulauan Seribu';
  if (f === 'pulauharapan.jpg') title = 'Pulau Harapan';
  if (f === 'pulaupahawang.jpg') title = 'Pulau Pahawang';
  if (f === 'pulaupari.jpg') title = 'Pulau Pari';
  islandsStr += `  { id: ${i+1}, title: '${title}', location: 'Indonesia', duration: '2H1M', price: 'Mulai Rp 800.000', image: '/img/pulau/${f}', features: ['Snorkeling', 'Island Hopping'], description: 'Eksplorasi keindahan taman laut.' },\n`;
});
islandsStr += '];\n';
fs.writeFileSync('src/data/islands.js', islandsStr);

// Gallery
let galleryStr = 'export const galleryData = [\n';
const docs = fs.readdirSync('public/img/dokumentasi').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
const categories = ['Gunung', 'Pulau', 'Gathering'];
docs.forEach((f, i) => {
  const cat = categories[i % categories.length];
  galleryStr += `  { id: ${i+1}, image: '/img/dokumentasi/${f}', category: '${cat}', title: 'Dokumentasi ${i+1}' },\n`;
});
galleryStr += '];\n';
fs.writeFileSync('src/data/gallery.js', galleryStr);

// Transport
let transportStr = 'export const transportData = [\n';
const transports = fs.readdirSync('public/img/transport').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
transports.forEach((f, i) => {
  let title = toTitleCase(f);
  transportStr += `  { id: ${i+1}, title: '${title}', image: '/img/transport/${f}', capacity: '10-50 Seat', price: 'Hubungi Kami', description: 'Armada transportasi prima' },\n`;
});
transportStr += '];\n';
fs.writeFileSync('src/data/transport.js', transportStr);

console.log('Data generated successfully.');
