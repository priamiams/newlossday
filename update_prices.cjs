const fs = require('fs');



// 1. Update company.js
let companyStr = fs.readFileSync('./src/data/company.js', 'utf8');
companyStr = companyStr.replace(/email: "lossdaysejahtera@gmail\.com"/, 'email: "ptlossdaysejahteragroup@gmail.com"');
companyStr = companyStr.replace(/whatsapp: "https:\/\/wa\.me\/6289526907282"/, 'whatsapp: "https://wa.me/6285819777047"');
companyStr = companyStr.replace(/whatsappNumber: "6289526907282"/, 'whatsappNumber: "6285819777047",\n  whatsappOpenTrip: "6285819777047",\n  whatsappPrivate: "6285774620577",\n  whatsappPengaduan: "6289526907282"');
fs.writeFileSync('./src/data/company.js', companyStr);

// 2. Update mountains.js prices for existing items
let m = fs.readFileSync('./src/data/mountains.js', 'utf8');
// ODT
m = m.replace(/title: 'Gunung Salak 1'.*?price: 'Mulai Rp 450\.000 \/ orang'/s, match => match.replace('450.000', '400.000'));
m = m.replace(/title: 'Gunung Salak 2'.*?price: 'Mulai Rp 450\.000 \/ orang'/s, match => match.replace('450.000', '400.000'));
m = m.replace(/title: 'Kawah Ratu'.*?price: 'Mulai Rp 400\.000 \/ orang'/s, match => match.replace('400.000', '385.000'));

// Camp (Gede, Papandayan, Cikuray, Ciremai, Slamet, Prau, Sindoro, Sumbing, Merbabu, Lawu, Raung, Argopuro, Rinjani, Kerinci)
// For Camp prices, I will search for the specific ones:
m = m.replace(/title: 'Gunung Gede'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '650.000'));
m = m.replace(/title: 'Gunung Papandayan'.*?price: 'Mulai Rp 400\.000 \/ orang'/s, match => match.replace('400.000', '550.000'));
// Cikuray doesn't exist, we need to add it.
m = m.replace(/title: 'Gunung Ciremai'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '685.000'));
m = m.replace(/title: 'Gunung Slamet'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '685.000'));
m = m.replace(/title: 'Gunung Prau'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '685.000'));
m = m.replace(/title: 'Gunung Sindoro'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '685.000'));
m = m.replace(/title: 'Gunung Sumbing'.*?price: 'Mulai Rp 700\.000 \/ orang'/s, match => match.replace('700.000', '685.000'));
m = m.replace(/title: 'Gunung Merbabu'.*?price: 'Mulai Rp 850\.000 \/ orang'/s, match => match.replace('850.000', '800.000')); // Selo default
m = m.replace(/title: 'Gunung Lawu'.*?price: 'Mulai Rp 800\.000 \/ orang'/s, match => match.replace('800.000', '850.000'));
m = m.replace(/title: 'Gunung Raung'.*?price: 'Mulai Rp 2\.400\.000 \/ orang'/s, match => match.replace('2.400.000', '2.400.000')); // Same
m = m.replace(/title: 'Gunung Argopuro'.*?price: 'Mulai Rp 1\.900\.000 \/ orang'/s, match => match.replace('1.900.000', '1.900.000')); // Same
m = m.replace(/title: 'Ranu Kumbolo'.*?price: 'Mulai Rp 1\.400\.000 \/ orang'/s, match => match.replace('1.400.000', '1.900.000'));
m = m.replace(/title: 'Gunung Rinjani'.*?price: 'Mulai Rp 2\.300\.000 \/ orang'/s, match => match.replace('2.300.000', '2.800.000'));

fs.writeFileSync('./src/data/mountains.js', m);

// 3. Update islands.js prices
let isl = fs.readFileSync('./src/data/islands.js', 'utf8');
isl = isl.replace(/title: 'Kepulauan Seribu'.*?price: 'Mulai Rp 400\.000 \/ orang'/s, match => match.replace('400.000', '390.000')); // Change default to 390
isl = isl.replace(/title: 'Pulau Pari'.*?price: 'Mulai Rp 300\.000 \/ orang'/s, match => match.replace('300.000', '390.000')); 
isl = isl.replace(/title: 'Pulau Harapan'.*?price: 'Mulai Rp 450\.000 \/ orang'/s, match => match.replace('450.000', '400.000'));
isl = isl.replace(/title: 'Karimun Jawa'.*?price: 'Mulai Rp 2\.500\.000 \/ orang'/s, match => match.replace('2.500.000', '1.400.000')); // 1.4jt

fs.writeFileSync('./src/data/islands.js', isl);
console.log("Updated existing prices.");
