const fs = require('fs');

const mountainsAdd = `
  ,
  {
    id: 101, title: 'ODT Curug Cibingbin Sentul', location: 'Jawa Barat', image: '/img/gunung/cibingbin.jpg', description: 'One Day Trip ke Curug Cibingbin Sentul', features: ['Transportasi PP', 'Guide', 'Tiket Masuk', 'Dokumentasi'], jalur: 'Sentul', duration: '1 Hari', rundown: ['Basecamp - Curug - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 350.000 / orang', catatan: 'Trip Santai'
  },
  {
    id: 102, title: 'ODT Cisadon', location: 'Jawa Barat', image: '/img/gunung/cisadon.jpg', description: 'One Day Trip ke Cisadon', features: ['Transportasi PP', 'Guide', 'Tiket Masuk', 'Dokumentasi'], jalur: 'Cisadon', duration: '1 Hari', rundown: ['Basecamp - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 350.000 / orang', catatan: 'Trip Santai'
  },
  {
    id: 103, title: 'ODT Gunung Gede', location: 'Jawa Barat', image: '/img/gunung/gede.jpg', description: 'One Day Trip Gunung Gede', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Cibodas / Putri', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 450.000 / orang', catatan: 'Dibutuhkan fisik yang kuat'
  },
  {
    id: 104, title: 'ODT Gunung Pangrango', location: 'Jawa Barat', image: '/img/gunung/pangrango.jpg', description: 'One Day Trip Gunung Pangrango', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Cibodas', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 450.000 / orang', catatan: 'Dibutuhkan fisik yang kuat'
  },
  {
    id: 105, title: 'ODT Gunung Cikuray', location: 'Jawa Barat', image: '/img/gunung/cikuray.jpg', description: 'One Day Trip Gunung Cikuray', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Pemancar', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 400.000 / orang', catatan: 'Dibutuhkan fisik yang kuat'
  },
  {
    id: 106, title: 'ODT Gunung Papandayan', location: 'Jawa Barat', image: '/img/gunung/papandayan.jpg', description: 'One Day Trip Gunung Papandayan', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Camp David', duration: '1 Hari', rundown: ['Basecamp - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 385.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 107, title: 'ODT Gunung Malabar', location: 'Jawa Barat', image: '/img/gunung/malabar.jpg', description: 'One Day Trip Gunung Malabar', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Cinyiruan', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 385.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 108, title: 'ODT Gunung Sagara', location: 'Jawa Barat', image: '/img/gunung/sagara.jpg', description: 'One Day Trip Gunung Sagara', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Cigaru', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 385.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 109, title: 'ODT Gunung Artapela', location: 'Jawa Barat', image: '/img/gunung/artapela.jpg', description: 'One Day Trip Gunung Artapela', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Pangalengan', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 385.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 110, title: 'ODT Sunan Ibu + Citambur', location: 'Jawa Barat', image: '/img/gunung/sunanibu.jpg', description: 'One Day Trip Sunan Ibu & Curug Citambur', features: ['Transportasi PP', 'Guide', 'Tiket Wisata', 'Dokumentasi'], jalur: 'Ciwidey', duration: '1 Hari', rundown: ['Basecamp - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 400.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 111, title: 'ODT Gunung Tangkuban Perahu', location: 'Jawa Barat', image: '/img/gunung/tangkubanperahu.jpg', description: 'One Day Trip Gunung Tangkuban Perahu', features: ['Transportasi PP', 'Guide', 'Tiket Wisata', 'Dokumentasi'], jalur: 'Lembang', duration: '1 Hari', rundown: ['Basecamp - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 385.000 / orang', catatan: 'Trip santai'
  },
  {
    id: 112, title: 'ODT Gunung Ciremai', location: 'Jawa Barat', image: '/img/gunung/ciremai.jpg', description: 'One Day Trip Gunung Ciremai', features: ['Transportasi PP', 'Guide', 'Simaksi', 'Dokumentasi'], jalur: 'Apuy / Palutungan', duration: '1 Hari', rundown: ['Basecamp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 450.000 / orang', catatan: 'Dibutuhkan fisik yang sangat kuat'
  },
  {
    id: 113, title: 'Gunung Cikuray (Camp)', location: 'Jawa Barat', image: '/img/gunung/cikuray.jpg', description: 'Open trip Gunung Cikuray (Camp)', features: ['Transportasi PP', 'Guide', 'Tenda', 'Makan', 'Dokumentasi'], jalur: 'Pemancar / Tapak Geurot', duration: '2 Hari 1 Malam', rundown: ['Basecamp - Camp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 600.000 / orang', catatan: 'Trek terjal'
  },
  {
    id: 114, title: 'Gunung Merbabu via Suwanting', location: 'Jawa Tengah', image: '/img/gunung/merbabu.jpg', description: 'Open trip Gunung Merbabu via Suwanting', features: ['Transportasi PP', 'Guide', 'Tenda', 'Makan', 'Dokumentasi'], jalur: 'Suwanting', duration: '2 Hari 1 Malam', rundown: ['Basecamp - Camp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 850.000 / orang', catatan: 'Jalur panjang'
  },
  {
    id: 115, title: 'Gunung Merbabu via Thekelan', location: 'Jawa Tengah', image: '/img/gunung/merbabu.jpg', description: 'Open trip Gunung Merbabu via Thekelan', features: ['Transportasi PP', 'Guide', 'Tenda', 'Makan', 'Dokumentasi'], jalur: 'Thekelan', duration: '2 Hari 1 Malam', rundown: ['Basecamp - Camp - Puncak - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 865.000 / orang', catatan: 'Jalur klasik'
  }
`;

const islandsAdd = `
  ,
  {
    id: 101, title: 'Pulau Pramuka via Angke', location: 'DKI Jakarta', image: '/img/pulau/pramuka.jpg', description: 'Pulau Pramuka 2H1M via Angke', features: ['Kapal PP', 'Homestay', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Muara Angke - Pramuka', duration: '2 Hari 1 Malam', rundown: ['Penyeberangan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 400.000 / orang', catatan: 'Trip seru'
  },
  {
    id: 102, title: 'Pulau Pari via Baywalk', location: 'DKI Jakarta', image: '/img/pulau/pulaupari.jpg', description: 'Pulau Pari 2H1M via Baywalk', features: ['Speedboat PP', 'Homestay VIP', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Baywalk - Pari', duration: '2 Hari 1 Malam', rundown: ['Penyeberangan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 950.000 / orang', catatan: 'Premium trip'
  },
  {
    id: 103, title: 'Pulau Pramuka via Baywalk', location: 'DKI Jakarta', image: '/img/pulau/pramuka.jpg', description: 'Pulau Pramuka 2H1M via Baywalk', features: ['Speedboat PP', 'Homestay VIP', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Baywalk - Pramuka', duration: '2 Hari 1 Malam', rundown: ['Penyeberangan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 1.150.000 / orang', catatan: 'Premium trip'
  },
  {
    id: 104, title: 'Pulau Harapan via Baywalk', location: 'DKI Jakarta', image: '/img/pulau/pulauharapan.jpg', description: 'Pulau Harapan 2H1M via Baywalk', features: ['Speedboat PP', 'Homestay VIP', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Baywalk - Harapan', duration: '2 Hari 1 Malam', rundown: ['Penyeberangan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 1.150.000 / orang', catatan: 'Premium trip'
  },
  {
    id: 105, title: 'Pulau Peucang (Ujung Kulon)', location: 'Banten', image: '/img/pulau/peucang.jpg', description: 'Taman Nasional Ujung Kulon Mepo Jakarta 2H1M', features: ['Transport PP', 'Kapal PP', 'Homestay', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Jakarta - Ujung Kulon', duration: '2 Hari 1 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 750.000 / orang', catatan: 'Wisata alam'
  },
  {
    id: 106, title: 'Pulau Sebesi', location: 'Lampung', image: '/img/pulau/sebesi.jpg', description: 'Pulau Sebesi Mepo Jakarta 2H1M', features: ['Transport PP', 'Kapal PP', 'Homestay', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Jakarta - Lampung', duration: '2 Hari 1 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 700.000 / orang', catatan: 'Krakatau trip'
  },
  {
    id: 107, title: 'Pulau Pahawang', location: 'Lampung', image: '/img/pulau/pahawang.jpg', description: 'Pulau Pahawang Mepo Jakarta 2H1M', features: ['Transport PP', 'Kapal PP', 'Homestay', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Jakarta - Lampung', duration: '2 Hari 1 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 750.000 / orang', catatan: 'Snorkeling trip'
  },
  {
    id: 108, title: 'Pulau Pahawang + Wayang', location: 'Lampung', image: '/img/pulau/pahawang.jpg', description: 'Pulau Pahawang & Pulau Wayang Mepo Jakarta 2H1M', features: ['Transport PP', 'Kapal PP', 'Homestay', 'Makan', 'Snorkeling', 'Guide'], jalur: 'Jakarta - Lampung', duration: '2 Hari 1 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 1.800.000 / orang', catatan: 'Premium trip'
  }
`;

const exploreContent = `export const exploreData = [
  {
    id: 1, title: 'Rafting Pangalengan', location: 'Jawa Barat', image: '/img/dokumentasi/gambar3.jpg', description: 'Rafting seru di Pangalengan', features: ['Transport PP', 'Rafting Gear', 'Guide', 'Makan', 'Dokumentasi'], jalur: 'Situ Cileunca', duration: '1 Hari', rundown: ['Basecamp - Rafting - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 485.000 / orang', catatan: 'Seru & Aman'
  },
  {
    id: 2, title: 'Explore Jogja + Jeep Merapi', location: 'DI Yogyakarta', image: '/img/dokumentasi/gambar6.jpg', description: 'Liburan explore Jogja dan Lava Tour Merapi', features: ['Transport PP', 'Hotel', 'Makan', 'Jeep', 'Guide', 'Tiket Wisata'], jalur: 'Jogja', duration: '3 Hari 2 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 2.400.000 / orang', catatan: 'Liburan keluarga'
  },
  {
    id: 3, title: 'Explore Jogja Selatan', location: 'DI Yogyakarta', image: '/img/dokumentasi/gambar6.jpg', description: 'Liburan pantai-pantai Jogja Selatan', features: ['Transport PP', 'Hotel', 'Makan', 'Guide', 'Tiket Wisata'], jalur: 'Jogja Selatan', duration: '3 Hari 2 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 2.300.000 / orang', catatan: 'Pantai Indah'
  },
  {
    id: 4, title: 'Explore Dieng', location: 'Jawa Tengah', image: '/img/gunung/prau.jpg', description: 'Explore keindahan Dieng Plateau', features: ['Transport PP', 'Homestay', 'Makan', 'Guide', 'Tiket Wisata'], jalur: 'Dieng', duration: '2 Hari 1 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 850.000 / orang', catatan: 'Suhu dingin'
  },
  {
    id: 5, title: 'Explore Banyuwangi', location: 'Jawa Timur', image: '/img/gunung/raung.jpg', description: 'Explore pesona alam Banyuwangi', features: ['Transport PP', 'Hotel', 'Makan', 'Jeep', 'Guide', 'Tiket Wisata'], jalur: 'Banyuwangi', duration: '3 Hari 2 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 1.800.000 / orang', catatan: 'Destinasi ikonik'
  },
  {
    id: 6, title: 'Explore Bromo + Tumpak Sewu', location: 'Jawa Timur', image: '/img/gunung/bromo.jpg', description: 'Explore Bromo & Air Terjun Tumpak Sewu', features: ['Transport PP', 'Hotel', 'Makan', 'Jeep Bromo', 'Guide', 'Tiket Wisata'], jalur: 'Jawa Timur', duration: '3 Hari 2 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 1.500.000 / orang', catatan: 'Pemandangan spektakuler'
  },
  {
    id: 7, title: 'Explore Bali via Udara', location: 'Bali', image: '/img/dokumentasi/gambar8.jpg', description: 'Liburan eksklusif Bali dengan pesawat', features: ['Tiket Pesawat PP', 'Hotel Bintang', 'Transport Lokal', 'Makan', 'Guide', 'Tiket Wisata'], jalur: 'Bali', duration: '4 Hari 3 Malam', rundown: ['Penerbangan - Explore - Kembali'], kuota: 'Min 2', jadwal: 'By Request', price: 'Mulai Rp 6.700.000 / orang', catatan: 'Premium Holiday'
  },
  {
    id: 8, title: 'Explore Bali via Darat', location: 'Bali', image: '/img/dokumentasi/gambar8.jpg', description: 'Roadtrip seru ke Bali via darat', features: ['Bus/Elf VIP', 'Hotel Bintang', 'Makan', 'Kapal Penyeberangan', 'Guide', 'Tiket Wisata'], jalur: 'Jawa - Bali', duration: '5 Hari 4 Malam', rundown: ['Perjalanan - Explore - Kembali'], kuota: 'Min 4', jadwal: 'By Request', price: 'Mulai Rp 4.500.000 / orang', catatan: 'Liburan seru & hemat'
  }
];
`;

fs.writeFileSync('./src/data/explore.js', exploreContent);

let m = fs.readFileSync('./src/data/mountains.js', 'utf8');
m = m.replace(/\];$/, mountainsAdd + '\n];');
fs.writeFileSync('./src/data/mountains.js', m);

let i = fs.readFileSync('./src/data/islands.js', 'utf8');
i = i.replace(/\];$/, islandsAdd + '\n];');
fs.writeFileSync('./src/data/islands.js', i);

console.log("Added new packages.");
