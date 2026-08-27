const fs = require('fs');


let company = fs.readFileSync('./src/data/company.js', 'utf8');

// Update company
company = company.replace(/email: "lossdaysejahtera@gmail\.com"/, 'email: "ptlossdaysejahteragroup@gmail.com"');
company = company.replace(/whatsapp: "https:\/\/wa\.me\/6289526907282"/, 'whatsapp: "https://wa.me/6285819777047"');
company = company.replace(/whatsappNumber: "6289526907282"/, 'whatsappNumber: "6285819777047",\n  whatsappOpenTrip: "6285819777047",\n  whatsappPrivate: "6285774620577",\n  whatsappPengaduan: "6289526907282"');

fs.writeFileSync('./src/data/company.js', company);

// We will update prices and add new items manually in mountains.js and islands.js next
