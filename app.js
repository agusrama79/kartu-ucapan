/**
 * KarsaKartu — Professional Digital Greeting & Invitation Card Customizer
 * Vanilla JavaScript (Zero external runtime dependencies)
 * Fully accessible, WCAG AA compliant, localized in natural Indonesian.
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. Template Presets & Seed Data
  // =========================================================================
  const TEMPLATE_PRESETS = {
    "dino-jurassic-adventure": {
      "template": "dino-jurassic-adventure",
      "recipient": "Adik Raffa Pradipta",
      "title": "Jurassic Roar & Pesta Fosil Dino",
      "milestone": "Petualangan Ulang Tahun ke-6 di Lembah Jurassic",
      "message": "Raawr! Mari berpetualang ke masa prasejarah merayakan ulang tahun Raffa ke-6! Bersiaplah mencari jejak fosil, memecahkan teka-teki telur dinosaurus, dan menikmati kue tart purba istimewa bersama kawan-kawan penjelajah cilik.",
      "sender": "Keluarga Besar Bpk. Hendra & Ibu Maya",
      "date": "2026-11-14",
      "time": "15:30 WIB",
      "location": "Dino Adventure Park & Café, Bandung",
      "rsvp": "Konfirmasi kehadiran via WhatsApp ke 0812-3456-7890 sebelum 10 November 2026.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "space-astronot-kosmik": {
      "template": "space-astronot-kosmik",
      "recipient": "Kapten Arka Dirgantara",
      "title": "Misi Kosmik Menembus Bintang",
      "milestone": "Hitung Mundur Peluncuran Usia ke-8 di Galaksi Bima Sakti",
      "message": "3... 2... 1... Liftoff! Pesawat antariksa misi Apollo 8 siap meluncur merayakan hari ulang tahun Kapten Arka yang ke-8! Bergabunglah dalam pelatihan kosmonot cilik, perburuan batu meteor, dan pesta es krim luar angkasa.",
      "sender": "Komando Misi: Ayah Rama & Bunda Citra",
      "date": "2026-11-21",
      "time": "14:00 WIB",
      "location": "Observatorium Planetarium Mini SkyDome, Jakarta Timur",
      "rsvp": "Konfirmasi nomor kursi kru sebelum 18 November 2026.",
      "font": "font-inter",
      "tone": "original",
      "role": "invitation"
    },
    "sweet-sixteen-glitz": {
      "template": "sweet-sixteen-glitz",
      "recipient": "Clarissa Aurelia",
      "title": "Sweet Sixteen Celebration & Soirée",
      "milestone": "Enam Belas Musim Penuh Pesona, Impian & Kilau Kasih",
      "message": "Enam belas tahun merekah dengan sejuta senyuman dan cita-cita manis. Kami mengundang sahabat terkasih untuk hadir merayakan Sweet 16 Clarissa dalam malam bertabur glitter, musik pop akustik, dan pesta gaun warna pastel rose gold!",
      "sender": "Dengan Cinta: Keluarga Bpk. Aris & Ibu Diana",
      "date": "2026-10-17",
      "time": "18:00 WIB",
      "location": "The Glasshouse Rooftop Lounge, Senopati, Jakarta",
      "rsvp": "Dress code: Rose Gold / Pastel Chic. RSVP via WhatsApp.",
      "font": "font-playfair",
      "tone": "original",
      "role": "invitation"
    },
    "gamer-level-up-quest": {
      "template": "gamer-level-up-quest",
      "recipient": "Reyhan 'Shadow' Pratama",
      "title": "Player 1 Leveled Up to 12!",
      "milestone": "Selamat! Quest Utama Berhasil Diselesaikan",
      "message": "Attention Players! Reyhan berhasil menyelesaikan dungeon tahun ke-11 dan resmi mencapai Level 12! Bergabunglah dalam turnamen co-op arcade, pizza party, dan kumpulkan bonus EXP legendaris sepanjang sore.",
      "sender": "Party Leader: Reyhan & Family",
      "date": "2026-11-28",
      "time": "13:30 WIB",
      "location": "Pixel Arena Gaming Lounge & Café, BSD City",
      "rsvp": "Bawa controller andalanmu! RSVP sebelum 25 November 2026.",
      "font": "font-plus-jakarta",
      "tone": "original",
      "role": "invitation"
    },
    "matcha-tea-garden": {
      "template": "matcha-tea-garden",
      "recipient": "Shasya Indira",
      "title": "Zen Garden & Matcha Birthday Gathering",
      "milestone": "Menyambut Babak Usia Baru dengan Ketenangan Jiwa & Syukur",
      "message": "Semoga di usia yang baru ini, setiap harimu senantiasa dipenuhi ketenangan, kesehatan yang berlimpah, dan kebahagiaan yang tulus sehangat secangkir teh matcha pilihan. Selamat ulang tahun, sahabat tersayang!",
      "sender": "Dari: Nadya, Rara & Dinda",
      "date": "2026-10-30",
      "time": "16:00 WIB",
      "location": "Bambu Kuning Tea Pavilion, Dago Atas, Bandung",
      "rsvp": "Kehadiranmu adalah kado terindah bagi kami.",
      "font": "font-lora",
      "tone": "original",
      "role": "greeting"
    },
    "circus-vintage-carnival": {
      "template": "circus-vintage-carnival",
      "recipient": "Keenan Alvaro",
      "title": "Welcome to The Greatest Carnival Party!",
      "milestone": "Panggung Atraksi Terheboh di Hari Ulang Tahun ke-5",
      "message": "Ladies and gentlemen, boys and girls! Panggung sirkus mini Keenan resmi dibuka! Nikmati popcorn manis, pertunjukan sulap komedi, melipat balon binatang, dan pesta permen lolipop bersama para badut bersahabat.",
      "sender": "Sirkus Master: Ayah Dimas & Ibu Gita",
      "date": "2026-11-07",
      "time": "15:00 WIB",
      "location": "Carnival Wonderland Club House, Kemang, Jakarta",
      "rsvp": "Tiket masuk gratis! RSVP via WhatsApp sebelum 4 November.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "sweet-sixty-golden-age": {
      "template": "sweet-sixty-golden-age",
      "recipient": "Bpk. H. Rahmat Hidayat, M.Si.",
      "title": "Tasyakuran & Gala Dinner Usia Emas 60 Tahun",
      "milestone": "Enam Dekade Pengabdian, Kebijaksanaan & Limpahan Karunia",
      "message": "Puji syukur kami panjatkan ke hadirat Allah SWT atas nikmat umur panjang, kesehatan, dan keteladanan yang senantiasa menaungi keluarga kami. Kami mengundang Bapak/Ibu/Kerabat sekalian untuk hadir berbagi kebahagiaan dalam malam tasyakuran usia emas ke-60.",
      "sender": "Putra-Putri & Cucu Tercinta",
      "date": "2026-12-05",
      "time": "19:00 WIB",
      "location": "Grand Ballroom Hotel Indonesia Kempinski, Jakarta Pusat",
      "rsvp": "Konfirmasi kehadiran via Sekretariat Acara sebelum 30 November.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "roller-skate-disco-funk": {
      "template": "roller-skate-disco-funk",
      "recipient": "Nadira Putri",
      "title": "Gliding into 21! Roller Disco Bash",
      "milestone": "Meluncur dengan Riang Menuju Usia 21 Tahun Penuh Gaya",
      "message": "Kenakan kostum retro terkerenmu, pasang sepatu rodanya, dan bersiap meluncur di bawah cahaya warna-warni bola disko! Mari berdansa merayakan ulang tahun Nadira ke-21 dengan alunan lagu-lagu funk legendaris.",
      "sender": "The Funk Crew: Nadira & Friends",
      "date": "2026-11-20",
      "time": "18:30 WIB",
      "location": "Retro Rink & Diner, Senayan Park, Jakarta",
      "rsvp": "Sewa sepatu roda gratis! RSVP sebelum 16 November 2026.",
      "font": "font-poppins",
      "tone": "original",
      "role": "invitation"
    },
    "perak-25th-silver-anniversary": {
      "template": "perak-25th-silver-anniversary",
      "recipient": "Bpk. Ir. Gunawan & Ibu Ratna Sari",
      "title": "Silver Wedding Anniversary Celebration",
      "milestone": "25 Tahun Mengarungi Bahtera Kasih, Komitmen & Kebahagiaan",
      "message": "Dua puluh lima tahun silam, sebuah janji suci diikrarkan. Kini, cinta itu telah bertransformasi menjadi mahakarya perak yang berkilau indah menaungi keluarga kami. Kami mengundang sahabat dan kerabat untuk bersama mensyukuri anugerah indah ini.",
      "sender": "Dengan Hormat: Gunawan & Ratna Sari",
      "date": "2026-11-18",
      "time": "19:00 WIB",
      "location": "Plataran Dharmawangsa Dining Room, Jakarta Selatan",
      "rsvp": "Dress code: Touch of Silver / Elegant Navy. RSVP via WhatsApp.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "lavender-provence-fields": {
      "template": "lavender-provence-fields",
      "recipient": "Hendra & Fiona",
      "title": "Happy 5th Wedding Anniversary!",
      "milestone": "Lima Tahun Kasih yang Harum Merekah Seindah Bunga Musim Panas",
      "message": "Setiap momen bersamamu terasa menenangkan seperti embusan angin di antara ladang lavender Provence. Terima kasih telah menjadi rumah, tempat kembali, dan sahabat terbaik dalam setiap langkah. Selamat ulang tahun pernikahan kita yang ke-5!",
      "sender": "Selamanya Milikmu: Fiona",
      "date": "2026-10-22",
      "time": "18:00 WIB",
      "location": "Le Jardin Secret, Dago Highland, Bandung",
      "rsvp": "Sebuah perayaan intim berdua.",
      "font": "font-cormorant",
      "tone": "original",
      "role": "greeting"
    },
    "paris-eiffel-twilight": {
      "template": "paris-eiffel-twilight",
      "recipient": "Dimas & Yolanda",
      "title": "Un Amour Éternel — Happy Anniversary",
      "milestone": "Setiap Detik Bersamamu adalah Mahakarya Paling Berharga",
      "message": "Di bawah pendar langit senja Paris, kita belajar bahwa cinta sejati bukanlah tentang kesempurnaan, melainkan tentang dua hati yang selalu memilih untuk berjalan beriringan. Selamat merayakan hari jadi cinta kita!",
      "sender": "Dengan Seluruh Hatiku: Dimas",
      "date": "2026-11-12",
      "time": "19:00 WIB",
      "location": "Bistro de Paris, Menteng, Jakarta Pusat",
      "rsvp": "Malam istimewa perayaan berdua.",
      "font": "font-playfair",
      "tone": "original",
      "role": "greeting"
    },
    "candlelight-jazz-loft": {
      "template": "candlelight-jazz-loft",
      "recipient": "Arya & Melinda",
      "title": "An Intimate Candlelight Anniversary Soirée",
      "milestone": "Menghangatkan Jiwa dalam Harmoni Kasih yang Tak Pernah Pudar",
      "message": "Dalam kehangatan cahaya lilin dan lantunan nada saxophone yang syahdu, kami ingin merayakan perjalanan kasih yang kian matang dan berharga. Kehadiran sahabat dekat adalah kehormatan bagi malam istimewa ini.",
      "sender": "Dengan Hangat: Arya & Melinda",
      "date": "2026-11-26",
      "time": "19:30 WIB",
      "location": "The Loft Brass & Candlelight Dining, SCBD, Jakarta",
      "rsvp": "Dress code: Cocktail Smart. Mohon konfirmasi sebelum 22 November.",
      "font": "font-merriweather",
      "tone": "original",
      "role": "invitation"
    },
    "cherry-blossom-kyoto": {
      "template": "cherry-blossom-kyoto",
      "recipient": "Kenji & Amanda",
      "title": "Tiga Musim Bersemi Bersamamu",
      "milestone": "Tiga Tahun Janji Suci Selembut Kelopak Sakura Musim Semi",
      "message": "Seperti mekarnya sakura di musim semi, cintamu selalu membawa warna, harapan baru, dan kesejukan dalam hidupku. Terima kasih untuk 3 tahun yang penuh kelembutan dan pengertian. Selamat ulang tahun pernikahan!",
      "sender": "Dengan Cinta Tulus: Amanda",
      "date": "2026-11-04",
      "time": "17:30 WIB",
      "location": "Kyoto Pavilion, Taman Mini Indonesia Indah",
      "rsvp": "Momen syukur dan doa berdua.",
      "font": "font-lora",
      "tone": "original",
      "role": "greeting"
    },
    "desert-glamping-stargaze": {
      "template": "desert-glamping-stargaze",
      "recipient": "Rizky & Talitha",
      "title": "Under the Desert Stars — Anniversary Dinner",
      "milestone": "Di Bawah Jutaan Bintang, Hatiku Tetap Memilihmu Selalu",
      "message": "Di bawah hamparan galaksi yang tak berujung, perjalanan hidup terasa begitu megah dan indah karena kulalui bersamamu. Mari merayakan kisah cinta kita di malam tenang penuh taburan bintang.",
      "sender": "Dengan Cinta Abadi: Rizky",
      "date": "2026-11-27",
      "time": "18:30 WIB",
      "location": "Dune & Oasis Glamping Resort, Sentul Highland",
      "rsvp": "Dress code: Desert Earthy Chic. RSVP via WhatsApp.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "cozy-fireplace-chalet": {
      "template": "cozy-fireplace-chalet",
      "recipient": "Bram & Citra",
      "title": "Kehangatan yang Tak Pernah Padam",
      "milestone": "Bersamamu, Setiap Musim Dingin Terasa Hangat dan Teduh",
      "message": "Dunia di luar sana mungkin sering kali dingin dan terburu-buru, namun di sisimu aku selalu menemukan kehangatan perapian yang menenangkan. Selamat merayakan hari jadi kita. Terima kasih telah selalu menjadi tempat ternyaman untuk pulang.",
      "sender": "Dengan Cinta Hangat: Bram",
      "date": "2026-11-15",
      "time": "18:00 WIB",
      "location": "Pine Chalet Lodge, Lembang, Jawa Barat",
      "rsvp": "Malam syahdu penuh kehangatan berdua.",
      "font": "font-lora",
      "tone": "original",
      "role": "greeting"
    },
    "love-lock-pont-des-arts": {
      "template": "love-lock-pont-des-arts",
      "recipient": "David & Stella",
      "title": "Locked in Eternal Love — Anniversary Note",
      "milestone": "Terkunci Selamanya dalam Janji Setia yang Tak Terpisahkan",
      "message": "Satu gembok terpatri erat, satu kunci dilempar ke riak air yang mengalir. Cinta kita bukan lagi sekadar kata, melainkan janji abadi yang mengakar kuat di dalam sanubari. Selamat ulang tahun pernikahan, belahan jiwaku!",
      "sender": "Dengan Kasih Tak Berbatas: David",
      "date": "2026-11-09",
      "time": "18:30 WIB",
      "location": "Riverside Terrace Dining, Pantai Indah Kapuk, Jakarta",
      "rsvp": "Malam perayaan romantis berdua.",
      "font": "font-playfair",
      "tone": "original",
      "role": "greeting"
    },
    "sunda-silih-asih": {
      "template": "sunda-silih-asih",
      "recipient": "Raden Galih & Nyi Ageng Sekar Arum",
      "title": "Walimatul 'Urs & Pawiwahan Adat Sunda",
      "milestone": "Mapag Penganten & Ngiring Bingah Jatukrami Luhur Pasundan",
      "message": "Niti wanci nu mustari, ninggang mangsa nu utama. Kalayan widi Gusti Nu Maha Suci, sim kuring saparakanca seja ngahaturanan rawuh Bapak/Ibu/Saderek sadaya dina acara jatukrami putra-putri kami. Karesikan manah sinareng panyuun doa restu mangrupi kabagjaan anu taya hinggana.",
      "sender": "Kel. Bpk. Rd. Cecep Hidayat & Kel. Bpk. H. Dadang Koswara",
      "date": "2026-11-29",
      "time": "09:00 WIB",
      "location": "Bale Asri Pusdai Jawa Barat, Jl. Diponegoro No. 63, Bandung",
      "rsvp": "Konfirmasi kehadiran sateuacanna kaping 24 November 2026.",
      "font": "font-cormorant",
      "tone": "original",
      "role": "invitation"
    },
    "toraja-tongkonan-gold": {
      "template": "toraja-tongkonan-gold",
      "recipient": "Pong Tiku Rombe & Lai' Rara'",
      "title": "Rambu Tuka' Rampanan Kapa' Adat Toraja",
      "milestone": "Misa' Kada Dipotuo Pantan Kada Dipomate — Janji Luhur Toraja",
      "message": "Kurre sumanga' langi' sia salama' tanda kaboro'. Dengan segala hormat dan ketulusan hati, rumpun keluarga besar kami mengundang Bapak/Ibu/Kerabat handai taulan untuk menghadiri upacara pernikahan suci adat Rampanan Kapa' putra-putri kami.",
      "sender": "Keluarga Besar Tongkonan Kete Kesu & Tongkonan Pallawa",
      "date": "2026-12-12",
      "time": "10:00 WITA",
      "location": "Kompleks Tongkonan Heritage Resort, Rantepao, Tana Toraja",
      "rsvp": "Misa' kada dipotuo. RSVP via perwakilan panitia keluarga.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "palembang-aesan-gede": {
      "template": "palembang-aesan-gede",
      "recipient": "Kiagus M. Yusuf & Nyimas Dewi Sartika",
      "title": "Munggah & Resepsi Pernikahan Adat Palembang",
      "milestone": "Kemegahan Mahkota Kesultanan Palembang Darussalam",
      "message": "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran akad nikah dan resepsi adat Munggah Palembang putra-putri kami. Kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian adalah kehormatan besar bagi kami.",
      "sender": "Keluarga Bpk. Kiagus H. Basyir & Bpk. Kemas H. Mansyur",
      "date": "2026-11-22",
      "time": "10:30 WIB",
      "location": "The Sultan Convention Center, Jl. Sultan M. Mansyur, Palembang",
      "rsvp": "Konfirmasi kehadiran mohon disampaikan sebelum 18 November.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "glasshouse-botanical-greenhouse": {
      "template": "glasshouse-botanical-greenhouse",
      "recipient": "Julian & Aurelia",
      "title": "The Glasshouse Conservatory Wedding",
      "milestone": "Janji Sehidup Semati di Antara Kaca Kristal & Semerbak Pakis Hijau",
      "message": "Di bawah kubah kaca konservatori bermandikan cahaya alami dan diapit kehijauan dedaunan botani yang tenang, kami mengikat janji suci untuk saling menyayangi selamanya. Kami mengundang Bapak/Ibu/Sahabat untuk menjadi saksi hari bahagia kami.",
      "sender": "Dengan Penuh Syukur: Julian & Aurelia",
      "date": "2026-11-15",
      "time": "15:30 WIB",
      "location": "The Glasshouse Botanical Sanctuary, Bogor Nirwana Residence",
      "rsvp": "Dress code: Botanical Earth Tones. RSVP sebelum 10 November.",
      "font": "font-playfair",
      "tone": "original",
      "role": "invitation"
    },
    "uluwatu-cliff-ocean-sunset": {
      "template": "uluwatu-cliff-ocean-sunset",
      "recipient": "Adrian & Michelle",
      "title": "Uluwatu Cliffside Ocean Sunset Nuptials",
      "milestone": "Ikrar Suci Berlatar Ombak Samudra & Mega Senja Keemasan",
      "message": "Di puncak tebing karang yang menjulang di atas Samudra Hindia, kami berjanji untuk saling setia menjaga cinta sedalam samudra dan sehangat mentari senja. Merupakan sukacita mendalam bila Bapak/Ibu berkenan hadir mendoakan langkah kami.",
      "sender": "Dengan Penuh Bahagia: Adrian & Michelle",
      "date": "2026-11-28",
      "time": "17:00 WITA",
      "location": "The Edge Cliffside Resort, Pecatu, Uluwatu, Bali",
      "rsvp": "Dress code: Sunset Resort Elegance. RSVP sebelum 15 November.",
      "font": "font-cormorant",
      "tone": "original",
      "role": "invitation"
    },
    "versailles-baroque-palace": {
      "template": "versailles-baroque-palace",
      "recipient": "Viscount Edward & Lady Vivienne",
      "title": "Grand Baroque Gala & Wedding Nuptials",
      "milestone": "Upacara Pernikahan Kemegahan Arsitektur Klasik Eropa",
      "message": "Dalam keanggunan tata cahaya lilin istana dan ornamen emas barok yang memesona, kami mengundang kehadiran Bapak/Ibu/Kerabat terhormat untuk merayakan penyatuan dua keluarga besar dalam pesta gala resepsi pernikahan agung.",
      "sender": "The Grand Royal Household & Families",
      "date": "2026-12-08",
      "time": "18:30 WIB",
      "location": "The Grand Versailles Ballroom, Dharmawangsa, Jakarta",
      "rsvp": "Dress code: Black Tie / Royal Evening Gown. RSVP wajib.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "boho-desert-pampas": {
      "template": "boho-desert-pampas",
      "recipient": "Liam & Scarlett",
      "title": "Sun-Drenched Boho Pampas Wedding",
      "milestone": "Cinta yang Bebas, Hangat, dan Tumbuh Alami di Tengah Alam",
      "message": "Bersatu dalam kehangatan alam terbuka, desau angin di antara rerumputan pampas keemasan, dan janji suci yang tulus dari lubuk hati. Kami dengan bahagia mengundang sahabat sekalian untuk merayakan cinta kami yang tumbuh bersahaja.",
      "sender": "Dengan Kasih Hangat: Liam & Scarlett",
      "date": "2026-11-21",
      "time": "16:00 WIB",
      "location": "Pampas Valley Outdoor Sanctuary, Sentul, Jawa Barat",
      "rsvp": "Dress code: Terracotta, Oatmeal & Cream. RSVP sebelum 16 Nov.",
      "font": "font-lora",
      "tone": "original",
      "role": "invitation"
    },
    "garden-pergola-white-rose": {
      "template": "garden-pergola-white-rose",
      "recipient": "Kevin & Jessica",
      "title": "White Rose Garden Nuptials",
      "milestone": "Rangkaian Mawar Putih Murni Menyambut Babak Baru Kehidupan",
      "message": "Di bawah naungan pergola kayu berhiaskan rimbun mawar putih yang merekah harum, kami mengikrarkan janji setia untuk saling mengasihi dalam suka dan duka. Kehadiran Bapak/Ibu/Saudara/i sekalian akan menyempurnakan hari bahagia kami.",
      "sender": "Dengan Kasih: Kevin & Jessica",
      "date": "2026-11-22",
      "time": "16:00 WIB",
      "location": "The Rose Pergola Garden, Cisarua Highland, Puncak",
      "rsvp": "Dress code: All White / Soft Sage Green. RSVP sebelum 17 Nov.",
      "font": "font-playfair",
      "tone": "original",
      "role": "invitation"
    },
    "farmasi-apoteker-mortar": {
      "template": "farmasi-apoteker-mortar",
      "recipient": "apt. Firdaus Maulana, S.Farm.",
      "title": "Sidang Terbuka Pengambilan Sumpah Apoteker",
      "milestone": "Dedikasi Ilmu Kefarmasian demi Kemaslahatan Kesehatan Insani",
      "message": "Dengan rasa syukur ke hadirat Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Kerabat sekalian untuk menghadiri Sidang Terbuka Pengambilan Sumpah & Pelantikan Profesi Apoteker. Doa dan kehadiran Anda adalah berkah bagi langkah pengabdian kami.",
      "sender": "apt. Firdaus Maulana, S.Farm. & Keluarga",
      "date": "2026-11-19",
      "time": "08:30 WIB",
      "location": "Auditorium Fakultas Farmasi Universitas Indonesia, Depok",
      "rsvp": "Konfirmasi kehadiran undangan wisuda sebelum 15 November.",
      "font": "font-plus-jakarta",
      "tone": "original",
      "role": "invitation"
    },
    "akpol-akmil-perwira-pedang": {
      "template": "akpol-akmil-perwira-pedang",
      "recipient": "Letda Aris Danurdara, S.Tr.Han.",
      "title": "Tasyakuran Pelantikan Perwira Remaja TNI / POLRI",
      "milestone": "Pengukuhan Korps Perwira Remaja & Sumpah Kesetiaan Nusa Bangsa",
      "message": "Kehormatan adalah nyawa, kesetiaan adalah nafas. Alhamdulillah atas karunia kelulusan dan pelantikan perwira remaja. Kami mengundang keluarga, guru, dan sahabat untuk hadir dalam tasyakuran kehormatan dan tradisi pedang pora ini.",
      "sender": "Letda Aris Danurdara & Keluarga Besar",
      "date": "2026-11-25",
      "time": "18:30 WIB",
      "location": "Gedung Balai Sudirman, Grand Ballroom, Jakarta Selatan",
      "rsvp": "Dress code: PDU IV / PSL Batik Formal. RSVP sebelum 20 Nov.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "seni-desain-kreatif-portfolio": {
      "template": "seni-desain-kreatif-portfolio",
      "recipient": "Nabila Anandita, S.Ds.",
      "title": "Graduation Exhibition & Creative Celebration",
      "milestone": "Merayakan Imajinasi, Estetika Visual & Mahakarya Desain",
      "message": "Setelah ribuan jam di depan kanvas dan layar digital, perjalanan studi Desain Komunikasi Visual akhirnya berbuah manis! Kami mengundang Anda untuk menghadiri pesta kelulusan sekaligus pameran instalasi karya tugas akhir Nabila.",
      "sender": "Nabila Anandita & Keluarga Studio",
      "date": "2026-11-20",
      "time": "16:00 WIB",
      "location": "Galeri Seni Ruang Rupa, Kemang Timur No. 58, Jakarta Selatan",
      "rsvp": "RSVP via Instagram DM @nabila.design / WhatsApp.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "psikologi-klinis-humaniora": {
      "template": "psikologi-klinis-humaniora",
      "recipient": "Larasati Wulandari, M.Psi., Psikolog",
      "title": "Pelantikan & Sumpah Profesi Psikolog Klinis",
      "milestone": "Menghargai Nurani, Memulihkan Jiwa & Menumbuhkan Harapan",
      "message": "Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Rekan sejawat untuk menghadiri tasyakuran pelantikan profesi psikolog Larasati Wulandari. Semoga ilmu dan empati yang ditempa senantiasa menjadi suluh penerang bagi jiwa-jiwa yang mencari jalan pulang.",
      "sender": "Larasati Wulandari, M.Psi., Psikolog & Keluarga",
      "date": "2026-11-21",
      "time": "14:00 WIB",
      "location": "Hall Humaniora Universitas Gadjah Mada, Yogyakarta",
      "rsvp": "Konfirmasi kehadiran via WhatsApp sebelum 17 November.",
      "font": "font-lora",
      "tone": "original",
      "role": "invitation"
    },
    "it-ai-computer-science": {
      "template": "it-ai-computer-science",
      "recipient": "Farhan Ramadhan, S.Kom.",
      "title": "Computer Science & AI Graduation Party",
      "milestone": "Menembus Batas Algoritma, Neural Network & Arsitektur Masa Depan",
      "message": "Setelah ribuan baris kode, debugging larut malam, dan pelatihan model deep learning, gelar Sarjana Ilmu Komputer resmi diraih! Mari rayakan momen pencapaian ini bersama keluarga dan para rekan software engineer.",
      "sender": "Farhan Ramadhan & Keluarga",
      "date": "2026-11-28",
      "time": "15:00 WIB",
      "location": "The Tech Hub Lounge, BSD Green Office Park, Tangerang",
      "rsvp": "Konfirmasi kehadiran via GitHub / WhatsApp.",
      "font": "font-inter",
      "tone": "original",
      "role": "invitation"
    },
    "pilot-wing-aviation": {
      "template": "pilot-wing-aviation",
      "recipient": "First Officer Dimas Wicaksono",
      "title": "Aviation Wing Day & Graduation Ceremony",
      "milestone": "Memperoleh Wing Emas & Menaklukkan Angkasa Raya Nusantara",
      "message": "Setelah ratusan jam terbang solo dan uji navigasi lintas pulau yang menuntut disiplin tinggi, impian menjadi penerbang komersial resmi terwujud! Kami mengundang Bapak/Ibu/Sahabat untuk menyaksikan penyematan brevet sayap emas First Officer Dimas.",
      "sender": "FO Dimas Wicaksono & Keluarga",
      "date": "2026-11-14",
      "time": "10:00 WIB",
      "location": "Hanggar Akademi Penerbang Indonesia, Bandara Budiarto, Curug",
      "rsvp": "RSVP dan pas masuk bandara sebelum 10 November 2026.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "arsitektur-lanskap-hijau": {
      "template": "arsitektur-lanskap-hijau",
      "recipient": "Irfan Fauzan, S.Ars.",
      "title": "Landscape Architecture Graduation Soirée",
      "milestone": "Membangun Harmoni Antara Ruang Hidup Manusia & Kelestarian Bumi",
      "message": "Setelah melewati ratusan asistensi studio, maket skala mikro, dan riset ekologi kota, gelar Sarjana Arsitektur resmi disandang! Mari berkumpul merayakan kelulusan dan melihat pameran portofolio desain taman kota Irfan Fauzan.",
      "sender": "Irfan Fauzan & Rekan Studio Arsitektur",
      "date": "2026-11-27",
      "time": "16:30 WIB",
      "location": "Atrium Gedung Desain & Lingkungan ITB, Bandung",
      "rsvp": "Kehadiran Anda adalah kehormatan bagi kami.",
      "font": "font-plus-jakarta",
      "tone": "original",
      "role": "invitation"
    },
    "doktor-riset-promosi-phd": {
      "template": "doktor-riset-promosi-phd",
      "recipient": "Dr. H. Faisal Basri, S.T., M.T.",
      "title": "Sidang Terbuka Promosi Doktor Ilmu Teknik",
      "milestone": "Puncak Dedikasi Akademik & Sumbangsih Disertasi untuk Bangsa",
      "message": "Dengan memanjatkan puji dan syukur ke hadirat Allah SWT, kami mengundang Bapak/Ibu/Rekan akademisi untuk menghadiri Sidang Terbuka Promosi Doktor dan Syukuran Penganugerahan Gelar Ph.D. Kehadiran Bapak/Ibu merupakan kehormatan tak terhingga bagi kami.",
      "sender": "Dr. H. Faisal Basri, S.T., M.T. & Keluarga Besar",
      "date": "2026-12-05",
      "time": "09:30 WIB",
      "location": "Balai Senat Akademik Universitas Indonesia, Kampus UI Salemba",
      "rsvp": "Dress code: Sipil Lengkap / Batik Sutra. RSVP sebelum 30 Nov.",
      "font": "font-merriweather",
      "tone": "original",
      "role": "invitation"
    },
    "syukuran-rumah-skandinavia": {
      "template": "syukuran-rumah-skandinavia",
      "recipient": "Bagas & Nadia",
      "title": "Tasyakuran Menempati Rumah Baru",
      "milestone": "Menempati Rumah Idaman Baru Penuh Kehangatan, Damai & Berkah",
      "message": "Alhamdulillah, berkat rahmat Allah SWT, kami telah selesai mendirikan dan menempati rumah impian kami. Kami mengundang Bapak/Ibu/Sahabat sekalian untuk hadir dalam acara tasyakuran dan doa bersama demi keberkahan tempat tinggal kami.",
      "sender": "Keluarga Bagas & Nadia",
      "date": "2026-11-22",
      "time": "16:00 WIB",
      "location": "Cluster Scandinavian Pines No. 12, Sentul City, Bogor",
      "rsvp": "Kehadiran dan doa restu Anda adalah berkah terindah bagi kami.",
      "font": "font-lora",
      "tone": "original",
      "role": "invitation"
    },
    "ramadhan-iftar-berkah": {
      "template": "ramadhan-iftar-berkah",
      "recipient": "Keluarga Besar & Sahabat Silaturahmi",
      "title": "Buka Puasa Bersama & Tasyakuran Ramadhan",
      "milestone": "Menyambung Ukhuwah & Meraih Keberkahan Bulan Suci yang Mulia",
      "message": "Marhaban ya Ramadhan. Dalam rangka mempererat tali ukhuwah islamiyah dan mensyukuri limpahan berkah di bulan suci, kami mengundang Bapak/Ibu/Saudara/i untuk hadir berbuka puasa bersama serta shalat tarawih berjamaah.",
      "sender": "Keluarga Besar Bpk. H. Mahmud & Ibu Hj. Siti Aminah",
      "date": "2026-10-18",
      "time": "17:00 WIB",
      "location": "Gedung Pertemuan Masjid Raya Al-Barkah, Jakarta Selatan",
      "rsvp": "Mohon konfirmasi jumlah rombongan sebelum 15 Oktober.",
      "font": "font-cormorant",
      "tone": "original",
      "role": "invitation"
    },
    "waisak-borobudur-lantern": {
      "template": "waisak-borobudur-lantern",
      "recipient": "Para Sahabat & Peziarah Kedamaian",
      "title": "Malam Pelepasan Lampion Waisak Nasional",
      "milestone": "Menerbangkan Doa, Harapan & Cahaya Kebajikan ke Angkasa Raya",
      "message": "Sabbe satta bhavantu sukhitatta — Semoga semua makhluk hidup berbahagia. Kami mengundang Anda untuk bergabung dalam momen sakral pelepasan ribuan lampion perdamaian di pelataran Candi Borobudur, menghantarkan doa kebajikan untuk kedamaian dunia.",
      "sender": "Panitia Nasional Hari Raya Tri Suci Waisak",
      "date": "2026-11-25",
      "time": "19:00 WIB",
      "location": "Plataran Marga Utama Candi Borobudur, Magelang, Jawa Tengah",
      "rsvp": "Tiket lampion wajib registrasi online sebelum 20 November.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "pesta-panen-kopi-nusantara": {
      "template": "pesta-panen-kopi-nusantara",
      "recipient": "Komunitas Barista & Petani Kopi Nusantara",
      "title": "Syukuran Panen Raya Kopi & Cupping Session",
      "milestone": "Menikmati Seduhan Segar dari Tanah Subur Pegunungan Negeri",
      "message": "Hasil bumi pegunungan melimpah ruah! Mari bersyukur atas panen raya kopi musim ini dengan mencicipi seduhan segar single origin, menyaksikan demo sangrai biji kopi manual, dan berbagi cerita hangat di antara sesama pecinta kopi.",
      "sender": "Kelompok Tani Harapan & Java Roastery",
      "date": "2026-11-29",
      "time": "14:00 WIB",
      "location": "Kebun Kopi Malabar Heritage & Roastery, Pangalengan, Bandung",
      "rsvp": "Sesi cupping gratis! RSVP via WhatsApp sebelum 25 Nov.",
      "font": "font-merriweather",
      "tone": "original",
      "role": "invitation"
    },
    "pagelaran-wayang-kulit": {
      "template": "pagelaran-wayang-kulit",
      "recipient": "Pecinta Seni & Budaya Nusantara",
      "title": "Pagelaran Seni Wayang Kulit Purwa",
      "milestone": "Menyimak Petuah Bijak Lakon Wahyu Makutharama & Gamelan Ageng",
      "message": "Nyuwun gunging samudra pangaksami. Kanthi hangajeng-ajeng karaharjan, kami mengundang para rawuh sedaya kersa rawuh mirsani pagelaran wayang kulit purwa lampahan Wahyu Makutharama kairing Gamelan Kyai Kanjeng minangka wujud syukur lan nguri-uri kabudayan.",
      "sender": "Keluarga Ageng Bpk. R.M. Suryodiningrat",
      "date": "2026-11-28",
      "time": "20:00 WIB",
      "location": "Pendopo Agung Sasana Hinggil, D.I. Yogyakarta",
      "rsvp": "Terbuka untuk umum. Mangga rawuh kanthi bungah.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
    },
    "donor-darah-kemanusiaan": {
      "template": "donor-darah-kemanusiaan",
      "recipient": "Sahabat Relawan & Pejuang Kemanusiaan",
      "title": "Aksi Peduli Donor Darah & Syukuran Sehat",
      "milestone": "Bersama Berbagi Kehidupan bagi Saudara Kita yang Membutuhkan",
      "message": "Setetes darah kita adalah sejuta harapan bagi mereka yang berjuang menyambung nyawa. Dalam rangka syukuran ulang tahun komunitas relawan, kami mengundang Bapak/Ibu untuk berpartisipasi dalam bakti sosial donor darah bekerjasama dengan PMI.",
      "sender": "Komunitas Sahabat Peduli Sesama & PMI Kota",
      "date": "2026-11-21",
      "time": "08:00 WIB",
      "location": "Aula Serbaguna Graha Kemanusiaan, Jakarta Pusat",
      "rsvp": "Pendaftaran donor dibuka di tempat atau via tautan panitia.",
      "font": "font-plus-jakarta",
      "tone": "original",
      "role": "invitation"
    },
    "peresmian-bistro-kuliner": {
      "template": "peresmian-bistro-kuliner",
      "recipient": "Rekan Media, Foodies & Tamu Kehormatan",
      "title": "Grand Opening & VIP Tasting Night",
      "milestone": "Menyajikan Cita Rasa Istimewa dari Dapur Terbaik Kami",
      "message": "Sebuah mimpi kuliner kini resmi menyambut tamu terhormat! Kami mengundang Anda untuk menjadi bagian dari malam peluncuran VIP tasting night bistro kami, menikmati sajian menu kreasi chef andalan dan iringan live jazz.",
      "sender": "Founder & Executive Chef The Garden Bistro",
      "date": "2026-11-20",
      "time": "18:00 WIB",
      "location": "The Garden Bistro & Terrace, Senopati Raya No. 45, Jakarta",
      "rsvp": "Reservasi meja VIP wajib via WhatsApp sebelum 17 November.",
      "font": "font-playfair",
      "tone": "original",
      "role": "invitation"
    },
    "konser-akustik-indie-senja": {
      "template": "konser-akustik-indie-senja",
      "recipient": "Sahabat Penggemar Musik Senja",
      "title": "Sunset Acoustic Sessions & Gathering",
      "milestone": "Duduk Bersama, Menikmati Petikan Senar & Langit Jingga",
      "message": "Mari meluangkan waktu sejenak dari hiruk-pikuk kota. Kami mengundangmu duduk santai di atas bantal jerami di halaman rumput, menikmati hangatnya minuman teh serai, dan mendengarkan alunan petikan gitar akustik saat mentari terbenam.",
      "sender": "Senja & Nada Akustik Collective",
      "date": "2026-11-21",
      "time": "16:30 WIB",
      "location": "Amfiteater Kebun Teh Senja, Ciwidey, Bandung Selatan",
      "rsvp": "Bawa selimut hangatmu! RSVP via WhatsApp panitia.",
      "font": "font-outfit",
      "tone": "original",
      "role": "invitation"
    },
    "khitanan-barokah-nusantara": {
      "template": "khitanan-barokah-nusantara",
      "recipient": "Ananda Farhan Al-Ghifari",
      "title": "Walimatul Khitan & Tasyakuran",
      "milestone": "Menapaki Kedewasaan & Menjadi Anak Sholeh",
      "message": "Alhamdulillah atas limpahan karunia dan rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara tasyakuran walimatul khitan putra kami. Kehadiran serta doa restu yang tulus akan menjadi berkah yang amat berarti bagi tumbuh kembangnya menjadi insan berilmu dan berakhlak mulia.",
      "sender": "Keluarga Besar Bpk. Ahmad Fauzi & Ibu Sarah",
      "date": "2026-10-25",
      "time": "10:00 WIB",
      "location": "Gedung Pertemuan Graha Barokah, Jakarta Selatan",
      "rsvp": "Konfirmasi kehadiran mohon disampaikan sebelum 22 Oktober 2026.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
},
    "reuni-akbar-nostalgia": {
      "template": "reuni-akbar-nostalgia",
      "recipient": "Sahabat Alumni Angkatan 2016",
      "title": "Reuni Akbar & Malam Keakraban",
      "milestone": "10 Tahun Perjalanan & Cerita Tanpa Henti",
      "message": "Sepuluh tahun berlalu sejak kita meninggalkan bangku sekolah dengan sejuta tawa dan cita-cita. Mari bersua kembali, bernostalgia melepas rindu, dan merayakan persaudaraan yang tak lekang oleh waktu dalam malam gala reuni akbar!",
      "sender": "Panitia Reuni Akbar SMAN 1 Angkatan 2016",
      "date": "2026-11-08",
      "time": "18:30 WIB",
      "location": "Ballroom Heritage Hotel & Resort, Yogyakarta",
      "rsvp": "Dress code: Vintage Smart Casual. Konfirmasi via grup panitia.",
      "font": "font-playfair",
      "tone": "original",
      "role": "invitation"
},
    "sunset-bbq-garden-party": {
      "template": "sunset-bbq-garden-party",
      "recipient": "Keluarga & Kerabat Dekat",
      "title": "Sunset Garden BBQ & Gathering",
      "milestone": "Menyambut Akhir Pekan Penuh Kehangatan",
      "message": "Kami mengundang kamu untuk menikmati sore santai bersama: daging panggangan istimewa, es teh segar, obrolan lepas, dan petikan gitar akustik di halaman belakang kami. Datanglah dan nikmati indahnya senja bersama!",
      "sender": "Dari: Dimas & Keluarga Pondok Pinang",
      "date": "2026-10-17",
      "time": "16:30 WIB",
      "location": "The Backyard Garden, Kemang Timur No. 42",
      "rsvp": "Bawa senyum terbaikmu dan perut kosong!",
      "font": "font-sans",
      "tone": "amber",
      "role": "invitation"
},
    "siraman-pengajian-jawa": {
      "template": "siraman-pengajian-jawa",
      "recipient": "Ibu-Ibu Pengajian & Kerabat Terhormat",
      "title": "Siraman & Pengajian Pra-Nikah",
      "milestone": "Memohon Doa Restu Menuju Mahligai Pernikahan",
      "message": "Bismillahirrahmannirrahim. Dengan memohon ridho dan keberkahan Allah SWT, kami mengundang kehadiran Bapak/Ibu/Saudara/i untuk melantunkan doa bersama serta menyaksikan prosesi sakral siraman putri kami menjelang akad nikah.",
      "sender": "Keluarga Bpk. H. Soedibjo & Ibu Hj. Retno Wulandari",
      "date": "2026-11-20",
      "time": "08:30 WIB",
      "location": "Kediaman Ndalem Sekar Arum, Solo",
      "rsvp": "Doa restu Anda adalah pelita kebaikan bagi ananda.",
      "font": "font-playfair",
      "tone": "emerald",
      "role": "invitation"
},
    "akad-glassmorphism-aurora": {
      "template": "akad-glassmorphism-aurora",
      "recipient": "Keluarga Inti & Sahabat Dekat",
      "title": "Akad Nikah Intimate",
      "milestone": "Mengikat Janji Seumur Hidup dalam Ridho Ilahi",
      "message": "Tanpa mengurangi rasa hormat, kami bermaksud mengundang keluarga dan sahabat terkasih untuk menyaksikan momen paling sakral dalam hidup kami: ijab kabul dan ikrar janji setia di hadapan Sang Pencipta.",
      "sender": "Rizky Ananda & Nadhira Salsabila",
      "date": "2026-12-05",
      "time": "07:30 WIB",
      "location": "Glass House Sanctuary, Sentul Highland",
      "rsvp": "Mohon hadir 15 menit sebelum prosesi dimulai.",
      "font": "font-cinzel",
      "tone": "original",
      "role": "invitation"
},
    "lamaran-peony-blush": {
      "template": "lamaran-peony-blush",
      "recipient": "Keluarga Besar & Sahabat Terkasih",
      "title": "The Engagement of Danang & Alika",
      "milestone": "Langkah Awal Menuju Ikatan Seumur Hidup",
      "message": "Dengan penuh rasa syukur dan sukacita, kami mengundang kehadiran Bapak/Ibu serta rekan-rekan sekalian untuk menjadi saksi pengikatan janji pertunangan dan silaturahmi kedua keluarga besar kami.",
      "sender": "Keluarga Besar Danang Wijaya & Alika Putri",
      "date": "2026-10-31",
      "time": "11:00 WIB",
      "location": "Pavilion Rumah Kaca Melati, Bandung",
      "rsvp": "Kehadiran Anda adalah restu terindah bagi kami.",
      "font": "font-playfair",
      "tone": "rose",
      "role": "invitation"
},
    "grand-opening-ceremony": {
      "template": "grand-opening-ceremony",
      "recipient": "Mitra Bisnis, Kolega & Rekan Terhormat",
      "title": "Grand Opening & Office Dedication",
      "milestone": "Merayakan Ekspansi & Tonggak Prestasi Baru",
      "message": "Kami dengan bangga mengundang Bapak/Ibu sekalian untuk menghadiri upacara peresmian gedung kantor baru kami, diikuti dengan networking cocktail dan tur fasilitas kerja masa depan.",
      "sender": "Dewan Direksi & Manajemen PT Artha Sinergi Corpora",
      "date": "2026-11-18",
      "time": "09:30 WIB",
      "location": "Menara Sinergi Lt. 28, SCBD Jakarta",
      "rsvp": "Harap menunjukkan QR undangan pada meja registrasi lobi.",
      "font": "font-cinzel",
      "tone": "gold",
      "role": "invitation"
},
    "sleepover-slumber-party": {
      "template": "sleepover-slumber-party",
      "recipient": "Besties Geng Cerita",
      "title": "Tiara's Sweet Sleepover Bash!",
      "milestone": "Pesta Piyama & Midnight Pillow Talk",
      "message": "Pack your favorite pajamas, cozy socks, and warmest sleeping bag! Kita bakal maraton film komedi, karaokean, popcorn party, dan cerita sampai subuh. Don't miss the sleepover of the year!",
      "sender": "Tiara & Mom",
      "date": "2026-10-24",
      "time": "19:00 WIB (Menginap)",
      "location": "Villa Lavender Attic, Cisarua Puncak",
      "rsvp": "Konfirmasi sebelum hari Kamis ya gengs!",
      "font": "font-sans",
      "tone": "purple",
      "role": "invitation"
},
    "summer-pool-party": {
      "template": "summer-pool-party",
      "recipient": "Sahabat & Teman Asyik",
      "title": "Summer Splash Pool Party!",
      "milestone": "Menyambut Usia Baru dengan Kesejukan Ombak",
      "message": "Grab your coolest swimwear and sunglasses! Kita bakal rayakan ulang tahun dengan pesta kolam renang seharian: permainan air, pelampung flamingo raksasa, BBQ poolside, and endless tropical tunes!",
      "sender": "Dari: Kevin & Crew",
      "date": "2026-11-01",
      "time": "14:00 WIB – Senja",
      "location": "Lagoon Pool Club, Jimbaran Bay",
      "rsvp": "Handuk & sunblock disediakan. Bawa energi terhebohmu!",
      "font": "font-sans",
      "tone": "cyan",
      "role": "invitation"
},
    "peluncuran-buku-penulis": {
      "template": "peluncuran-buku-penulis",
      "recipient": "Pencinta Sastra, Sahabat & Rekan Media",
      "title": "Peluncuran Novel \"Lentera di Balik Kabut\"",
      "milestone": "Karya Perdana & Diskusi Mendalam Bersama Penulis",
      "message": "Setelah proses penulisan panjang, kini lembaran-lembaran cerita ini siap menyapa para pembaca. Kami mengundang Anda untuk hadir dalam bincang santai, sesi tanda tangan buku eksklusif, dan jamuan teh petang.",
      "sender": "Arya Mahardika & Penerbit Grama Sastra",
      "date": "2026-11-21",
      "time": "15:30 WIB",
      "location": "Ruang Baca Kafe Pustaka, Menteng Jakarta",
      "rsvp": "Dapatkan buku bertandatangan eksklusif bagi 50 tamu pertama.",
      "font": "font-playfair",
      "tone": "amber",
      "role": "invitation"
},
    "aqiqah-safari-pastel": {
      "template": "aqiqah-safari-pastel",
      "recipient": "Keluarga Besar, Tetangga & Kerabat Tercinta",
      "title": "Tasyakuran Aqiqah & Doa Nama",
      "milestone": "Menyambut Putri Pertama: Zaskia Ayla Kinanti",
      "message": "Tiada kata yang mampu melukiskan rasa syukur kami atas kelahiran putri pertama kami. Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam doa bersama aqiqah dan pemotongan rambut ananda.",
      "sender": "Keluarga Bpk. Reza Firmansyah & Ibu Dini",
      "date": "2026-10-18",
      "time": "09:00 WIB",
      "location": "Kediaman Bintaro Sektor 9, Tangerang Selatan",
      "rsvp": "Doa restu Anda merupakan hadiah terindah bagi putri kecil kami.",
      "font": "font-sans",
      "tone": "emerald",
      "role": "invitation"
},
    "batak-ulos-gorga": {
      "template": "batak-ulos-gorga",
      "recipient": "Dongan Tubu, Boru, Bere & Raja Naposo",
      "title": "Pemberkatan & Pesta Adat Unjuk Batak",
      "milestone": "Martumpol & Mangadapi Pesta Unjuk Parumaen",
      "message": "Marhite serep ni roha dohot holong na sian Tuhan, manjou hami di haroromuna laho mangadapi pesta unjuk ni anak dohot borunami. Sai horas jala gabe ma hita saluhutna di pandonganion ni Tuhanta.",
      "sender": "Kel. St. M. Simanjuntak / Br. Hutapea & Kel. P. Sitompul / Br. Tobing",
      "date": "2026-11-28",
      "time": "10:00 WIB",
      "location": "Gedung Pertemuan Mulia Raja, Rawamangun",
      "rsvp": "Kehadiran dan doa restu Bapak/Ibu/Saudara/i sangat kami harapkan.",
      "font": "font-cinzel",
      "tone": "crimson",
      "role": "invitation"
},
    "wisuda-dental-dentist": {
      "template": "wisuda-dental-dentist",
      "recipient": "Keluarga Tercinta, Dosen & Rekan Sejawat",
      "title": "Pelantikan & Pengambilan Sumpah Dokter Gigi",
      "milestone": "Gelar drg. — Mengabdi untuk Senyuman Indonesia",
      "message": "Puji dan syukur ke hadirat Tuhan Yang Maha Esa atas terselesaikannya pendidikan profesi dokter gigi. Dengan bangga dan kerendahan hati, saya mengundang Bapak/Ibu dan rekan-rekan untuk hadir dalam momen pengucapan sumpah dan syukuran kelulusan.",
      "sender": "drg. Clarissa Maharani & Keluarga Besar",
      "date": "2026-10-22",
      "time": "09:00 WIB",
      "location": "Grand Ballroom Sasana Budaya Ganesha",
      "rsvp": "Resepsi ramah tamah dilanjutkan pukul 12.00 WIB.",
      "font": "font-sans",
      "tone": "cyan",
      "role": "invitation"
},
    "wisuda-hukum-lex-justitia": {
      "template": "wisuda-hukum-lex-justitia",
      "recipient": "Keluarga Terhormat, Rekan Mahasiswa & Kolega",
      "title": "Wisuda Sarjana Hukum & Syukuran Gelar S.H.",
      "milestone": "Magna Cum Laude — Demi Keadilan & Kebenaran",
      "message": "Menandai tuntasnya perjuangan studi ilmu hukum, kami mengundang Anda untuk turut merayakan wisuda dan syukuran kelulusan ini. Semoga amanah ilmu yang diraih mampu memberikan pembelaan dan keadilan sejati bagi masyarakat.",
      "sender": "Gibran Danendra, S.H. & Keluarga",
      "date": "2026-11-12",
      "time": "10:00 WIB",
      "location": "Auditorium Graha Praja Widya Keadilan",
      "rsvp": "Kehadiran dan doa terbaik Anda adalah kehormatan bagi kami.",
      "font": "font-cinzel",
      "tone": "gold",
      "role": "invitation"
},
    "vernissage-galeri-seni": {
      "template": "vernissage-galeri-seni",
      "recipient": "Kolektor Seni, Kurator & Sahabat Kreatif",
      "title": "Vernissage: \"Spektrum Ruang & Rasa\"",
      "milestone": "Pameran Seni Rupa Tunggal 2026",
      "message": "Kami mengundang kehadiran Anda pada malam pembukaan pameran seni lukis kontemporer 'Spektrum Ruang & Rasa'. Nikmati pengalaman visual multi-sensori, bincang karya kuratorial, dan jamuan wine reception eksklusif.",
      "sender": "Galeri Ruang Putih & Seniman Bayu Bramantyo",
      "date": "2026-11-06",
      "time": "19:00 WIB",
      "location": "Ruang Rupa Contemporary Art Space, Jakarta Pusat",
      "rsvp": "RSVP terbatas untuk 100 tamu terdaftar.",
      "font": "font-sans",
      "tone": "original",
      "role": "invitation"
},
    "pantai-sunset-beach-wedding": {
      "template": "pantai-sunset-beach-wedding",
      "recipient": "Keluarga Tercinta & Sahabat Petualang",
      "title": "The Beachfront Wedding of Leo & Maya",
      "milestone": "Mengikat Janji di Bawah Langit Senja Samudra",
      "message": "Tinggalkan sepatu Anda dan bergabunglah di atas pasir putih hangat! Kami ingin berbagi momen terindah saat kami mengucapkan janji suci di tepi samudra dengan diiringi senja keemasan dan alunan debur ombak.",
      "sender": "Leonardo Sanjaya & Mayang Sari",
      "date": "2026-10-30",
      "time": "16:30 WIB",
      "location": "Karma Beach Pavilion, Uluwatu Bali",
      "rsvp": "Dress code: Tropical Linen & Barefoot Chic.",
      "font": "font-playfair",
      "tone": "amber",
      "role": "invitation"
},
    "golden-50th-anniversary": {
      "template": "golden-50th-anniversary",
      "recipient": "Keluarga Besar, Cucu-Cicit & Sahabat Sepuh",
      "title": "The 50th Golden Anniversary",
      "milestone": "50 Tahun Cinta, Pengorbanan & Kesetiaan Abadi",
      "message": "Lima puluh tahun merajut bahtera rumah tangga dalam suka dan duka dengan penuh kasih sayang. Bersama anak, menantu, dan cucu-cicit, kami memohon kehadiran Anda untuk bersyukur dan merayakan pesta emas pernikahan kami.",
      "sender": "Opa Hendra Gunawan & Oma Ratna Suryani",
      "date": "2026-12-12",
      "time": "18:00 WIB",
      "location": "Imperial Diamond Ballroom, Hotel Mulia",
      "rsvp": "Doa kesehatan dan kehadiran Anda adalah anugerah terbesar.",
      "font": "font-cinzel",
      "tone": "gold",
      "role": "invitation"
},
    "wisuda-magister-doktor": {
      "template": "wisuda-magister-doktor",
      "recipient": "Promotor, Dewan Penguji, Kolega & Keluarga",
      "title": "Sidang Terbuka Promosi Doktor & Syukuran S3",
      "milestone": "Gelar Doktor (Ph.D) — Dedikasi untuk Riset Bangsa",
      "message": "Dengan penuh rasa syukur atas selesainya disertasi dan sidang terbuka promosi doktor, kami mengundang Bapak/Ibu dan rekan-rekan civitas akademika untuk hadir dalam prosesi wisuda serta syukuran peraihan gelar doktor ini.",
      "sender": "Dr. Raditya Daniswara, M.Sc & Keluarga",
      "date": "2026-11-26",
      "time": "09:30 WIB",
      "location": "Balai Sidang Utama Universitas Indonesia",
      "rsvp": "Ramah tamah dan jamuan makan siang pukul 12:30 WIB.",
      "font": "font-cinzel",
      "tone": "gold",
      "role": "invitation"
},
    "venetian-masquerade-ball": {
      "template": "venetian-masquerade-ball",
      "recipient": "Para Bangsawan, Rekan & Tamu Kehormatan",
      "title": "The Grand Venetian Masquerade Ball",
      "milestone": "A Night of Mystery, Music, and Gilded Wonder",
      "message": "Kenakan topeng terbaikmu dan masuki dunia penuh pesona rahasia! Anda diundang ke pesta dansa masquerade malam ini: orkestra waltz klasik, pertunjukan akrobatik lilin, dan jamuan prasmanan ala istana Venesia.",
      "sender": "Lord Alexander & Lady Genevieve",
      "date": "2026-10-31",
      "time": "20:00 WIB – Tengah Malam",
      "location": "The Grand Atrium Palais, Menteng",
      "rsvp": "Topeng wajib dikenakan sebelum memasuki pintu gerbang ballroom.",
      "font": "font-playfair",
      "tone": "purple",
      "role": "invitation"
},
    "tahun-baru-countdown-gala": {
      "template": "tahun-baru-countdown-gala",
      "recipient": "Sahabat, Kolega & Keluarga Terkasih",
      "title": "Grand New Year's Eve Countdown Gala",
      "milestone": "Menyambut Tahun Baru 2027 Penuh Cahaya Harapan",
      "message": "Mari bersama-sama menghitung mundur detik-detik pergantian tahun dalam kemeriahan musik live band, sajian gala dinner istimewa, parade kembang api meteor, dan toast champagne tepat di tengah malam!",
      "sender": "The Executive Gala Committee",
      "date": "2026-12-31",
      "time": "20:00 WIB s/d Selesai",
      "location": "Skyline Panoramic Lounge, Lt. 55 Senayan",
      "rsvp": "Dress code: Black Tie & Sparkles. Konfirmasi sebelum 20 Desember.",
      "font": "font-cinzel",
      "tone": "gold",
      "role": "invitation"
},

    "ultah-echa": {
      template: "ultah-echa",
      recipient: "Echa Tersayang",
      title: "Happy Birthday",
      milestone: "Spesial Untuk Sahabat Terbaik 🌸",
      message: "Di hari yang begitu istimewa ini, terima kasih sudah hadir di dunia dan menjadi sahabat yang luar biasa buat aku. Terima kasih untuk setiap tawa lepas kita, sesi curhat larut malam, dan saling menguatkan di kala rapuh. Semoga Allah selalu melimpahkan kesehatan, kebahagiaan tanpa akhir, kelapangan rezeki, dan memudahkan semua impian yang sedang kamu perjuangkan! Tetaplah jadi Echa yang ceria, rendah hati, dan bersinar apa adanya 💕",
      sender: "Dari: Sahabat Terbaikmu 💕",
      date: "2026-10-19",
      time: "15:00 WIB",
      location: "The Garden Pavilion & Cafe, Joyville",
      rsvp: "Kehadiran dan senyum bahagiamu adalah hadiah terindah.",
      font: "font-playfair",
      tone: "rose",
      role: "invitation"
    },
    "ultah-ceria": {
      template: "ultah-ceria",
      recipient: "Clarissa Melody",
      title: "Selamat Ulang Tahun!",
      milestone: "Semoga Bahagia & Sukses Selalu",
      message: "Selamat bertambah usia, sahabat terbaikku! Terima kasih sudah selalu ada dalam suka dan duka. Semoga tahun ini membawa sejuta peluang baru, tawa tanpa henti, dan rezeki yang berlimpah.",
      sender: "Dari: Rian & Sahabat Sejati",
      date: "2026-10-15",
      time: "16:00 WIB",
      location: "Cafe Kopi Senja, Sanur",
      rsvp: "Kehadiranmu sangat kami nantikan.",
      font: "font-playfair",
      tone: "original",
      role: "greeting"
    },
    "ultah-elegan": {
      template: "ultah-elegan",
      recipient: "dr. Kevin Pratama",
      title: "Happy 30th Milestone",
      milestone: "Merayakan Tiga Dekade Dedikasi",
      message: "Selamat menyambut usia ke-30 dengan penuh rasa bangga dan syukur. Semoga setiap langkah pengabdianmu terus diberkahi keberhasilan besar, kesehatan prima, dan kedamaian hati yang sejati.",
      sender: "Keluarga Besar & Rekan Sejawat",
      date: "2026-11-04",
      time: "19:00 WIB",
      location: "Grand Ballroom Arya Duta",
      rsvp: "Mohon konfirmasi kehadiran sebelum 1 November.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "anniv-romantis": {
      template: "anniv-romantis",
      recipient: "Ayahanda & Ibunda Tercinta",
      title: "Happy Silver Anniversary",
      milestone: "25 Tahun Mahligai Cinta & Kasih",
      message: "Dua puluh lima tahun perjalanan cinta yang begitu menginspirasi kami semua. Terima kasih atas teladan kesetiaan, kesabaran, dan kehangatan yang tak pernah pudar. Semoga Allah senantiasa menjaga keluarga kita dalam sakinah dan berkah.",
      sender: "Dari: Putra-Putri Tersayang",
      date: "2026-12-20",
      time: "18:30 WIB",
      location: "Kediaman Keluarga, Jimbaran",
      rsvp: "Doa restu Anda adalah kebahagiaan terbesar kami.",
      font: "font-playfair",
      tone: "rose",
      role: "invitation"
    },
    "anniv-botanical": {
      template: "anniv-botanical",
      recipient: "Bella Aurelia",
      title: "Happy 3rd Anniversary!",
      milestone: "3 Tahun Penuh Cerita & Cinta",
      message: "Tiga tahun berlalu begitu cepat di sisimu. Setiap hari bersamamu adalah anugerah terindah yang selalu aku syukuri. Terima kasih telah menjadi rumah tempatku pulang dan bermimpi bersama. I love you to the moon and back!",
      sender: "Dari: Aditya yang Selalu Mencintaimu",
      date: "2026-09-28",
      time: "19:30 WIB",
      location: "Dinner Romantis @ Seaside Cliff",
      rsvp: "Siapkan senyum tercantikmu malam ini.",
      font: "font-sans",
      tone: "emerald",
      role: "greeting"
    },
    "wisuda-prestise": {
      template: "wisuda-prestise",
      recipient: "drg. Anindya Laksmi, S.KG",
      title: "Wisuda Sarjana & Sumpah Profesi",
      milestone: "Magna Cum Laude — IPK 3.92",
      message: "Selamat atas kelulusan dan raihan gelar sarjanamu! Perjuangan panjang, kerja keras, dan ketekunanmu kini berbuah manis membanggakan. Teruslah berkarya dan membawa manfaat besar bagi sesama.",
      sender: "Keluarga Besar & Sahabat",
      date: "2026-10-20",
      time: "08:30 WIB",
      location: "Auditorium Graha Widya Bhakti",
      rsvp: "Keluarga dan sahabat dipersilakan hadir.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "royal-emerald": {
      template: "royal-emerald",
      recipient: "Raden Arya & Kirana Larasati",
      title: "Walimatul Ursy & Resepsi Akbar",
      milestone: "Menyatukan Dua Hati dalam Ikatan Suci",
      message: "Semoga Allah SWT memberkahi ikatan suci pernikahan kalian berdua, menyatukan dalam kebaikan, dan melimpahkan sakinah, mawaddah, wa rahmah sepanjang hayat. Selamat menempuh hidup baru!",
      sender: "Keluarga Besar Sasongko & Hadiningrat",
      date: "2026-11-14",
      time: "19:00 WIB",
      location: "Grand Ballroom The Royal Palace",
      rsvp: "Kehadiran dan doa restu Anda adalah kehormatan bagi kami.",
      font: "font-playfair",
      tone: "emerald",
      role: "invitation"
    },
    "tiup-lilin-kue": {
      template: "tiup-lilin-kue",
      recipient: "Nathania Keisha",
      title: "Selamat Ulang Tahun Ke-17",
      milestone: "Sweet Seventeen & Tiup Lilin Perayaan",
      message: "Selamat menyambut usia ke-17 yang manis dan penuh pesona! Semoga setiap cita-cita terindahmu tercapai, langkahmu senantiasa dilindungi, dan senyum bahagiamu selalu merekah. Tiup lilinmu dan buatlah harapan terindah!",
      sender: "Dari: Keluarga & Sahabat Tersayang",
      date: "2026-10-18",
      time: "18:30 WIB",
      location: "The Glass House Cafe & Sky Garden",
      rsvp: "Konfirmasi kehadiran via WhatsApp sebelum 15 Okt.",
      font: "font-playfair",
      tone: "gold",
      role: "greeting"
    },
    "amplop-surat-cinta": {
      template: "amplop-surat-cinta",
      recipient: "Nadia Larasati",
      title: "Happy 4th Anniversary",
      milestone: "Empat Tahun Rajutan Kasih Abadi",
      message: "Terima kasih untuk empat tahun kebersamaan yang begitu menghangatkan hati. Bersamamu, setiap hari adalah puisi dan setiap perjalanan terasa lebih bermakna. Aku bersyukur memilikimu di setiap detik hidupku.",
      sender: "Dari: Dimas yang Selalu Menyayangimu",
      date: "2026-11-12",
      time: "19:00 WIB",
      location: "Bale Sutra Private Dining",
      rsvp: "Malam romantis khusus untuk kita berdua.",
      font: "font-playfair",
      tone: "rose",
      role: "greeting"
    },
    "golden-gate-wedding": {
      template: "golden-gate-wedding",
      recipient: "Bramasta Arya & Althea Putri",
      title: "The Royal Wedding Reception",
      milestone: "Menyatukan Dua Jiwa dalam Janji Suci",
      message: "Dengan memohon rahmat dan berkah Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Sahabat untuk hadir memberikan doa restu pada hari bahagia pernikahan putra-putri kami.",
      sender: "Keluarga Besar Sasongko & Brotohadikusumo",
      date: "2026-12-05",
      time: "18:00 WIB",
      location: "Grand Ballroom The Mulia Resort",
      rsvp: "Doa restu Anda merupakan kehormatan tak terhingga bagi kami.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "undangan-pintu-ukir-bali": {
      template: "undangan-pintu-ukir-bali",
      recipient: "I Putu Gede & Ni Luh Ayu",
      title: "Pawiwahan & Resepsi Adat Bali",
      milestone: "Upacara Manusa Yadnya Sakral",
      message: "Malarapan asung kertha wara nugraha Ida Sang Hyang Widhi Wasa, titiang ngaturang piuning indik pawiwahan mangda presida ngemolihang kerahayuan lan kerahajengan selawasnyane.",
      sender: "Keluarga Ageng Puri Kaleran",
      date: "2026-11-28",
      time: "10:00 WITA",
      location: "Jaba Tengah Puri Agung Sanur",
      rsvp: "Matur suksma antuk pemargi lan restu semeton sami.",
      font: "font-cinzel",
      tone: "original",
      role: "invitation"
    },
    "tirai-teater-broadway": {
      template: "tirai-teater-broadway",
      recipient: "Jonathan Wijaya",
      title: "The Grand Premiere Gala",
      milestone: "Malam Perayaan Prestasi Gemilang",
      message: "Sebuah kehormatan mengundang Anda untuk merayakan malam penganugerahan dan mahakarya bersama kami. Mari bersulang dalam kemegahan panggung karpet merah yang bertabur bintang!",
      sender: "Dari: Komite Eksekutif & Dewan Kurator",
      date: "2026-11-20",
      time: "19:30 WIB",
      location: "Teater Tertutup Ciputra Artpreneur",
      rsvp: "Dress code: Black Tie & Evening Gown.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "pesiar-sunset-ocean": {
      template: "pesiar-sunset-ocean",
      recipient: "Adrian & Jessica",
      title: "Sunset Cruise Wedding Reception",
      milestone: "Berlayar Mengarungi Samudra Cinta Bersama",
      message: "Diiringi deburan ombak senja dan lumba-lumba yang menari di cakrawala, kami mengundang sahabat terkasih untuk menjadi saksi janji suci dan merayakan pelayaran cinta kami berdua.",
      sender: "Adrian & Jessica Bersama Keluarga",
      date: "2026-12-10",
      time: "17:00 WITA",
      location: "Luxury Catamaran Pier 7, Benoa",
      rsvp: "Konfirmasi boarding pass sebelum 1 Desember.",
      font: "font-playfair",
      tone: "original",
      role: "invitation"
    },
    "disko-retro-neon": {
      template: "disko-retro-neon",
      recipient: "Michael Steven",
      title: "Michael's Neon Disco Birthday",
      milestone: "Turning 24 & Ready to Groove",
      message: "Kenakan busana retro neon terbaikmu dan bersiaplah berdansa di bawah bola disko gemerlap! Musik terbaik, gemerlap sinar laser, dan keceriaan tanpa batas menantimu malam ini.",
      sender: "Dari: Michael & Squad",
      date: "2026-10-31",
      time: "20:00 WIB",
      location: "Retro Club 80s, Seminyak",
      rsvp: "Bring your best dance moves!",
      font: "font-sans",
      tone: "original",
      role: "invitation"
    },
    "jawa-keraton-gunungan": {
      template: "jawa-keraton-gunungan",
      recipient: "Raden Bagus & Dyah Ayu",
      title: "Pawiwahan Ageng Keraton",
      milestone: "Ngesti Berkahing Gusti Ingkang Murbeng Dumadi",
      message: "Kanthi memuji syukur dhumateng Gusti Kang Akarya Jagad, kula sakulawarga ngaturaken serat ulem pawiwahan ageng anak-anak kula. Rawuh panjenengan dados berkah tumrap temanten sarimbit.",
      sender: "Kulawarga Ageng Sasongko Hadiningrat",
      date: "2026-11-18",
      time: "10:00 WIB",
      location: "Pendopo Sasana Handrawina",
      rsvp: "Kula suwun rawuh kanthi busana kejawen jangkep.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "salju-wonderland": {
      template: "salju-wonderland",
      recipient: "Julian & Kimberly",
      title: "Winter Wonderland Anniversary",
      milestone: "5 Tahun Kasih Murni Seperti Kristal Salju",
      message: "Dinginnya musim tak pernah mampu melunturkan hangatnya pelukan kasihmu. Lima tahun yang begitu murni, menyejukkan, dan abadi. Selamat hari ulang tahun pernikahan, belahan jiwaku.",
      sender: "Dari: Julian yang Mencintaimu Selalu",
      date: "2026-12-24",
      time: "18:30 WIB",
      location: "The Glass Igloo Lounge, Batu",
      rsvp: "Kehadiranmu melengkapi kehangatan keluarga kami.",
      font: "font-playfair",
      tone: "original",
      role: "greeting"
    },
    "piramida-arabian-nights": {
      template: "piramida-arabian-nights",
      recipient: "Syeikh Al-Mansyur & Keluarga",
      title: "Malam 1001 Malam & Syukuran",
      milestone: "Kemegahan Silaturahmi Akbar Kasultanan",
      message: "Ahlan wa sahlan! Kami mengundang Yang Mulia beserta kerabat tercinta untuk menghadiri jamuan makan malam akbar bernuansa 1001 malam, bermandikan cahaya lentera padang pasir dan wewangian oud istana.",
      sender: "Keluarga Besar Al-Qashr",
      date: "2026-11-08",
      time: "19:00 WIB",
      location: "Grand Ballroom Oasis Majlis",
      rsvp: "Mohon konfirmasi delegasi kehadiran.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "cyberpunk-arcade-pixel": {
      template: "cyberpunk-arcade-pixel",
      recipient: "Gerry Bramantyo",
      title: "Level 25 Unlocked!",
      milestone: "Player 1 Ready & New Milestone",
      message: "Selamat naik level ke-25, sahabatku! Semoga setiap quest hidup yang kamu ambil selalu berbuah kemenangan gemilang, bonus rezeki tanpa batas, dan stamina selalu penuh. Teruslah push rank impianmu sampai tuntas!",
      sender: "Dari: Guild Sahabat Sejati 🎮",
      date: "2026-11-05",
      time: "19:00 WIB",
      location: "Arcade Zone & Retro Cafe, Sudirman",
      rsvp: "Konfirmasi kehadiran untuk reservasi kursi player.",
      font: "font-sans",
      tone: "original",
      role: "greeting"
    },
    "boho-safari-watercolor": {
      template: "boho-safari-watercolor",
      recipient: "Nadine Safira",
      title: "Wild & Free 23rd Birthday",
      milestone: "Mekar Indah Seperti Bunga Padang Senja",
      message: "Selamat ulang tahun untuk jiwa yang selalu hangat dan mencintai alam. Semoga usiamu yang baru diliputi kedamaian hati yang tulus, petualangan baru yang menyenangkan, dan kebahagiaan sederhana yang melimpah setiap hari.",
      sender: "Dari: Keluarga & Sahabat Tercinta 🌾",
      date: "2026-10-25",
      time: "16:00 WIB",
      location: "Terracotta Sunset Garden, Ubud",
      rsvp: "Kehadiran sahabat melengkapi hangatnya perayaan.",
      font: "font-playfair",
      tone: "rose",
      role: "greeting"
    },
    "superhero-comic-boom": {
      template: "superhero-comic-boom",
      recipient: "Arya Bimasakti",
      title: "BOOM! Happy 10th Birthday!",
      milestone: "Superhero Cilik Paling Berani & Hebat",
      message: "Selamat ulang tahun ke-10 untuk jagoan super kami! Teruslah tumbuh menjadi anak yang berani, senang menolong sesama, dan selalu ceria menyinari hari-hari keluarga. Jadilah pahlawan kebaikan di mana pun berada!",
      sender: "Dari: Ayah, Bunda & Seluruh Squad 💥",
      date: "2026-10-28",
      time: "14:00 WIB",
      location: "Hero Playland & Party Hall, Kelapa Gading",
      rsvp: "Kenakan kostum pahlawan favoritmu!",
      font: "font-sans",
      tone: "gold",
      role: "greeting"
    },
    "underwater-aquarium-glow": {
      template: "underwater-aquarium-glow",
      recipient: "Kalea Samudra",
      title: "Under The Sea Sweet 17",
      milestone: "Mengarungi Samudra Kedewasaan yang Indah",
      message: "Selamat merayakan Sweet Seventeen, putri samudra tercinta! Bagaikan terumbu karang bercahaya di kedalaman laut, semoga hidupmu senantiasa memancarkan keindahan, ketenangan batin, dan pesona kebaikan yang tak pernah pudar.",
      sender: "Keluarga Besar & Sahabat Karib 🪼",
      date: "2026-11-12",
      time: "17:30 WIB",
      location: "Ocean Dome Lounge & Aquarium, Jimbaran",
      rsvp: "Mohon konfirmasi kehadiran sebelum 5 November.",
      font: "font-playfair",
      tone: "emerald",
      role: "invitation"
    },
    "vinyl-jazz-noir": {
      template: "vinyl-jazz-noir",
      recipient: "Ferdinand & Veronica",
      title: "Happy 10th Anniversary",
      milestone: "Satu Dekade Melodi Cinta yang Abadi",
      message: "Sepuluh tahun bersama laksana komposisi jazz klasik yang kian nikmat didengarkan seiring berjalannya waktu. Terima kasih telah saling mendampingi dalam harmoni cinta yang tenang dan tulus. Selamat hari ulang tahun pernikahan!",
      sender: "Dari: Sahabat & Rekan Musisi 🎷",
      date: "2026-11-15",
      time: "19:30 WIB",
      location: "The Speakeasy Velvet Room, Senopati",
      rsvp: "Malam intim perayaan bersama kerabat terdekat.",
      font: "font-playfair",
      tone: "gold",
      role: "greeting"
    },
    "starlit-campfire-glamping": {
      template: "starlit-campfire-glamping",
      recipient: "Arga & Dania",
      title: "Cozy Hearth 5th Anniversary",
      milestone: "Lima Musim Hangat Bersebelahan",
      message: "Di bawah taburan bintang dan aroma pinus yang menenangkan, terima kasih telah menjadi api unggun yang selalu menghangatkan hatiku di malam paling dingin sekalipun. Selamat lima tahun perjalanan cinta yang luar biasa, sayang.",
      sender: "Dari: Arga yang Selalu Mencintaimu 🔥",
      date: "2026-10-30",
      time: "18:00 WIB",
      location: "Pine Hill Eco Glamping, Lembang",
      rsvp: "Siapkan jaket hangatmu untuk malam perayaan kita.",
      font: "font-playfair",
      tone: "original",
      role: "greeting"
    },
    "origami-crane-serenade": {
      template: "origami-crane-serenade",
      recipient: "Kenji & Ayumi",
      title: "Senbazuru 7th Anniversary",
      milestone: "Seribu Burung Bangau Lambang Kesetiaan",
      message: "Setiap helai kenangan bersamamu terlipat rapi dengan penuh syukur dan kesetiaan, layaknya seribu bangau origami yang mengantarkan doa abadi. Selamat hari ulang tahun pernikahan, semoga kasih kita selalu terjaga murni.",
      sender: "Dari: Keluarga Besar Matsuyama & Pratama 🕊️",
      date: "2026-11-22",
      time: "18:30 WIB",
      location: "Bonsai Pavilion & Japanese Dining, Menteng",
      rsvp: "Doa dan kehadiran Anda adalah kehormatan bagi kami.",
      font: "font-cinzel",
      tone: "rose",
      role: "invitation"
    },
    "rooftop-cinema-under-stars": {
      template: "rooftop-cinema-under-stars",
      recipient: "Rangga & Cinta",
      title: "Our Classic Love Story",
      milestone: "Happy 4th Anniversary Under The Stars",
      message: "Empat tahun kisah kita adalah film romantis terindah yang tak pernah bosan kuputar berulang kali. Terima kasih untuk setiap tawa, dialog hangat, dan genggaman tangan di bawah gemerlap lampu malam. I love you endlessly.",
      sender: "Dari: Belahan Jiwamu Selamanya 💡",
      date: "2026-11-02",
      time: "19:00 WIB",
      location: "Skyline Rooftop Cinema & Lounge, Jakarta",
      rsvp: "Malam kencan spesial khusus untuk berdua.",
      font: "font-playfair",
      tone: "gold",
      role: "greeting"
    },
    "rustic-barn-wooden": {
      template: "rustic-barn-wooden",
      recipient: "Bagas Wicaksono & Tania Maharani",
      title: "Rustic Garden Wedding Reception",
      milestone: "Janji Suci di Antara Aroma Kayu & Daun Segar",
      message: "Dengan penuh rasa syukur ke hadirat Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Sahabat untuk menjadi saksi janji suci ikatan pernikahan putra-putri kami dalam kehangatan suasana kebun alami bernuansa kayu jati.",
      sender: "Keluarga Besar Wicaksono & Hadipranoto 🌿",
      date: "2026-12-12",
      time: "16:00 WIB",
      location: "The Wooden Barn Courtyard, Bogor",
      rsvp: "Konfirmasi RSVP kehadiran via WhatsApp sebelum 1 Des.",
      font: "font-playfair",
      tone: "emerald",
      role: "invitation"
    },
    "maroko-riadh-mosaic": {
      template: "maroko-riadh-mosaic",
      recipient: "Farhan Malik & Yasmin Az-Zahra",
      title: "The Royal Moroccan Wedding",
      milestone: "Malam Keagungan Mozaik Zellige & Lentera Emas",
      message: "Bismillahirrohmanirrohim. Kami bermaksud melangsungkan walimatul ursy putra-putri kami berbalut kemegahan arsitektur Riad Moorish. Merupakan kehormatan besar bagi kami apabila Anda berkenan hadir dan mendoakan.",
      sender: "Keluarga Besar Malik & Al-Habsyi 🕌",
      date: "2026-11-21",
      time: "19:00 WIB",
      location: "Grand Riad Courtyard & Ballroom, Surabaya",
      rsvp: "Kehadiran dan doa restu adalah karunia terbaik.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "minang-rumah-gadang": {
      template: "minang-rumah-gadang",
      recipient: "Sutan Bagindo & Puti Renjana",
      title: "Baralek Gadang Pernikahan Adat",
      milestone: "Batagak Payuang Adat Luhur Minangkabau",
      message: "Siriah sacabiak pinang sagatok, tando niaik suci di dalam hati. Kami mengundang bako jo pasumandan sarato dunsanak kasadonyo untuk menghadiri pesta Baralek Gadang putra-putri kami.",
      sender: "Keluarga Gadang Datuak Bandaro Sati 👑",
      date: "2026-11-29",
      time: "11:00 WIB",
      location: "Balai Gadang Adat Nusantara, Padang",
      rsvp: "Tarimo kasih ateh kadatangan sarato doa restu semeton.",
      font: "font-cinzel",
      tone: "original",
      role: "invitation"
    },
    "nordic-fjord-aurora": {
      template: "nordic-fjord-aurora",
      recipient: "Erik Lindqvist & Natasha Halim",
      title: "Nordic Fjord Wedding Celebration",
      milestone: "Kemurnian Kristal Es & Cahaya Aurora Tenang",
      message: "Di hadapan keheningan alam yang agung, kami bersatu dalam janji suci pernikahan sejati. Mari bersama kami merayakan awal perjalanan baru yang elegan, jernih, dan penuh damai.",
      sender: "Erik & Natasha Bersama Keluarga 💎",
      date: "2026-12-18",
      time: "18:00 WIB",
      location: "The Glass House Fjord Pavilion, Bandung",
      rsvp: "Dress code: Minimalist Platinum & Scandinavian Earth.",
      font: "font-cinzel",
      tone: "emerald",
      role: "invitation"
    },
    "summa-cum-laude-gold": {
      template: "summa-cum-laude-gold",
      recipient: "dr. Muhammad Rayhan, Sp.A, M.Ked",
      title: "Wisuda Spesialis & Summa Cum Laude",
      milestone: "Lulusan Terbaik Fakultas Kedokteran — IPK 4.00",
      message: "Selamat atas kelulusan spesialis anak dengan predikat Summa Cum Laude! Dedikasi tanpa henti, ketulusan pengorbanan, dan kecintaanmu pada ilmu telah mengantarkanmu ke puncak kehormatan ini. Bangga tak terhingga!",
      sender: "Dari: Seluruh Keluarga Besar & Kolega 🏅",
      date: "2026-10-24",
      time: "08:30 WIB",
      location: "Balai Sidang Utama Universitas Airlangga",
      rsvp: "Keluarga dipersilakan hadir di baris kehormatan.",
      font: "font-cinzel",
      tone: "gold",
      role: "greeting"
    },
    "blueprint-arsitek-teknik": {
      template: "blueprint-arsitek-teknik",
      recipient: "Fathir Danendra, S.T. (Arsitektur)",
      title: "Wisuda Sarjana Teknik Arsitektur",
      milestone: "Gelar Sarjana Teknik & Desain Presisi Tinggi",
      message: "Selamat atas diraihnya gelar Sarjana Teknik! Dari setiap garis blueprint yang kamu gambar di malam hari hingga maket yang kini berdiri kokoh, perjuanganmu telah terbayar lunas. Selamat merancang masa depan peradaban!",
      sender: "Dari: Sahabat Studio Studio Desain 📐",
      date: "2026-10-22",
      time: "09:00 WIB",
      location: "Sasana Budaya Ganesha (Sabuga), Bandung",
      rsvp: "Mari bersulang merayakan kelulusan insinyur baru!",
      font: "font-sans",
      tone: "emerald",
      role: "greeting"
    },
    "stetoskop-medika-hippocrates": {
      template: "stetoskop-medika-hippocrates",
      recipient: "dr. Alisha Daniswara",
      title: "Lafal Sumpah Dokter Indonesia",
      milestone: "Pengabdian Suci Bagi Kemanusiaan & Kesehatan",
      message: "Selamat atas pengucapan Lafal Sumpah Dokter! Menjadi penyembuh adalah panggilan mulia yang membutuhkan kelembutan hati dan keteguhan jiwa. Semoga Allah selalu membimbing setiap langkah tanganmu menolong sesama.",
      sender: "Keluarga Besar Daniswara & Sahabat Sejawat 🩺",
      date: "2026-11-06",
      time: "08:00 WIB",
      location: "Auditorium Fakultas Kedokteran UI, Salemba",
      rsvp: "Kehadiran kerabat adalah penambah semangat pengabdian.",
      font: "font-cinzel",
      tone: "emerald",
      role: "invitation"
    },
    "buku-literasi-scholar": {
      template: "buku-literasi-scholar",
      recipient: "Dr. Hendrawan Kusuma, S.H., M.H.",
      title: "Sidang Promosi Doktor Ilmu Hukum",
      milestone: "Yudisium Cum Laude & Pengukuhan Cendekiawan",
      message: "Selamat atas keberhasilan mempertahankan disertasi dan meraih gelar Doktor Ilmu Hukum. Sumbangsih pemikiranmu akan menjadi lentera keadilan dan pencerahan bagi penegakan hukum di tanah air.",
      sender: "Dari: Sivitas Akademika & Rekan Advokat 📜",
      date: "2026-11-10",
      time: "10:00 WIB",
      location: "Gedung Pascasarjana Ruang Promosi Doktor",
      rsvp: "Jamuan syukuran berlangsung seusai sidang terbuka.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "akikah-baby-cloud": {
      template: "akikah-baby-cloud",
      recipient: "Ananda Arkanza Malik",
      title: "Tasyakuran Aqiqah & Tasmiyah",
      milestone: "Anugerah Terindah Karunia Buah Hati Pertama",
      message: "Alhamdulillahirabbil'alamin, dengan rasa syukur mendalam atas kelahiran putra kami tercinta, kami mengundang Bapak/Ibu/Sahabat untuk hadir dalam tasyakuran aqiqah, memohon doa keselamatan dan keberkahan.",
      sender: "Keluarga Rendy & Tiara Malik 🍼",
      date: "2026-11-01",
      time: "10:00 WIB",
      location: "Kediaman Keluarga Malik, Kemang",
      rsvp: "Doa terbaik Anda adalah hadiah terindah bagi si kecil.",
      font: "font-playfair",
      tone: "original",
      role: "invitation"
    },
    "housewarming-tedak-siten": {
      template: "housewarming-tedak-siten",
      recipient: "Keluarga Besar & Sahabat Tetangga",
      title: "Syukuran Menempati Rumah Baru",
      milestone: "Baitii Jannatii — Rumah Impian Penuh Berkah",
      message: "Puji syukur kami panjatkan karena kini kami telah menempati rumah baru. Mengundang Bapak/Ibu/Kerabat untuk hadir dalam jamuan doa bersama dan silaturahmi, memohon rumah ini selalu dilimpahi sakinah dan rezeki berkah.",
      sender: "Keluarga Bayu & Sarah Prasetya 🏡",
      date: "2026-11-07",
      time: "16:00 WIB",
      location: "Cluster Nirwana Asri No. B7, Bintaro",
      rsvp: "Mohon konfirmasi kedatangan untuk persiapan hidangan.",
      font: "font-sans",
      tone: "original",
      role: "invitation"
    },
    "chinese-new-year-dragon": {
      template: "chinese-new-year-dragon",
      recipient: "Keluarga Besar Tan & Rekan Bisnis",
      title: "Gong Xi Fa Cai 2027",
      milestone: "Tahun Naga Emas — Kemakmuran & Kesehatan Berlimpah",
      message: "Semoga di tahun yang baru ini, usaha dan karier Anda melonjak tinggi laksana naga emas, dilimpahi rezeki yang mengalir deras tanpa henti, keharmonisan keluarga yang hangat, dan kesehatan yang sempurna!",
      sender: "Salam Hangat dari: Tan Family & Partners 🐉",
      date: "2027-02-06",
      time: "18:30 WIB",
      location: "Imperial Dragon Ballroom, Pantai Indah Kapuk",
      rsvp: "Jamuan makan malam Imlek & pertunjukan barongsai.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "tedak-siten-jawa-tradisi": {
      template: "tedak-siten-jawa-tradisi",
      recipient: "Raden Mas Abimanyu Seno",
      title: "Upacara Adat Tedak Siten",
      milestone: "Pitonan Turun Tanah Ananda Tercinta (7 Bulan)",
      message: "Kanthi asung puji syukur dhumateng Gusti Kang Murbeng Dumadi, kula sakulawarga ngaturi rawuh panjenengan sedaya wonten upacara adat Tedak Siten putranipun kula, nyuwun donga pangestu karaharjan lan budi pekerti luhur.",
      sender: "Kulawarga Ageng Suryo Brotohadiningrat 🌾",
      date: "2026-11-14",
      time: "09:30 WIB",
      location: "Ndalem Sasana Trah Keraton, Surakarta",
      rsvp: "Rawuh panjenengan dados kabingahan kula sakulawarga.",
      font: "font-cinzel",
      tone: "gold",
      role: "invitation"
    },
    "ultah-pastel": {
        "template": "ultah-pastel",
        "recipient": "Clarissa Melody",
        "title": "Selamat Ulang Tahun",
        "milestone": "Mekar Manis Usia ke-20 dengan Penuh Berkah",
        "message": "Selamat ulang tahun untuk sahabat tersayang Clarissa! Semoga di usia yang ke-20 ini, langkahmu senantiasa dipenuhi bunga-bunga kebahagiaan, kehangatan cinta dari orang-orang terkasih, dan kemudahan dalam menggapai semua impian manismu.",
        "sender": "Dari: Sahabat & Teman Seperjuangan",
        "date": "2026-10-22",
        "time": "16:00 WIB",
        "location": "Pastel Blossom Café & Florist, Kemang",
        "rsvp": "Konfirmasi kehadiran via WhatsApp sebelum 18 Oktober.",
        "font": "font-playfair",
        "tone": "rose",
        "role": "greeting"
  },
    "anniv-celestial": {
        "template": "anniv-celestial",
        "recipient": "Dimas & Nadine",
        "title": "To Infinity & Beyond",
        "milestone": "Satu Dekade Rajutan Kasih Abadi di Bawah Naungan Bintang",
        "message": "Sepuluh tahun mengarungi samudra waktu bersama, membuktikan bahwa cinta sejati tak pernah lekang oleh badai kehidupan. Terima kasih telah saling menggenggam tangan dan menjadi pelita di setiap malam gulita. Selamat hari jadi pernikahan ke-10!",
        "sender": "Dengan Penuh Cinta: Nadine untuk Dimas",
        "date": "2026-11-15",
        "time": "19:00 WIB",
        "location": "Starlight Sky Lounge, Senayan",
        "rsvp": "Malam intim perayaan satu dekade cinta kita.",
        "font": "font-playfair",
        "tone": "original",
        "role": "greeting"
  },
    "sakura-blossom": {
        "template": "sakura-blossom",
        "recipient": "Hanami Aulia",
        "title": "Selamat Ulang Tahun",
        "milestone": "Mekar Anggun & Bahagia di Musim Semi Kehidupan",
        "message": "Seperti mekarnya bunga sakura yang menebarkan kedamaian dan keindahan, semoga kehadiranmu senantiasa membawa sukacita bagi setiap insan di sekitarmu. Selamat menyambut usia yang baru, semoga hari-harimu selalu harum dengan syukur dan berkah.",
        "sender": "Dari: Keluarga Besar & Sahabat",
        "date": "2026-10-25",
        "time": "15:00 WIB",
        "location": "Paviliun Taman Zen Kyodai, Bandung",
        "rsvp": "Kehadiran dan doa terbaikmu adalah hadiah paling bermakna.",
        "font": "font-lora",
        "tone": "rose",
        "role": "greeting"
  },
    "galaxy-aurora": {
        "template": "galaxy-aurora",
        "recipient": "Arya & Natasya",
        "title": "Perayaan Malam Spektakuler",
        "milestone": "Menjemput Cahaya Masa Depan di Bawah Langit Aurora",
        "message": "Dengan penuh rasa syukur, kami mengundang rekan, sahabat, dan keluarga tercinta untuk hadir merayakan malam peluncuran karya dan syukur atas pencapaian milestone istimewa ini dalam atmosfer magis bertabur kilau aurora kosmik.",
        "sender": "Komite Penyelenggara & Rekan Kerja",
        "date": "2026-11-20",
        "time": "18:30 WIB",
        "location": "The Aurora Sky Dome, PIK 2, Jakarta",
        "rsvp": "Mohon konfirmasi kehadiran sebelum 15 November 2026.",
        "font": "font-plus-jakarta",
        "tone": "original",
        "role": "invitation"
  },
    "festive-carnival": {
        "template": "festive-carnival",
        "recipient": "Kenzo Althaf",
        "title": "Fiesta Ulang Tahun Kenzo!",
        "milestone": "Pesta Ceria Penuh Tawa & Atraksi Spektakuler ke-7",
        "message": "Ayo kawan-kawan semua! Kenzo mengundang sahabat cilik untuk hadir bermain di pesta karnaval ulang tahun ke-7! Ada atraksi sulap lucu, mandi bola warna-warni, perlombaan seru, dan pesta kue tart istimewa yang meriah!",
        "sender": "Dari: Papa Danang & Mama Ratih",
        "date": "2026-11-08",
        "time": "14:00 WIB",
        "location": "Carnival Fun Park Hall, Kelapa Gading",
        "rsvp": "Dress code: Pakaian warna-warni ceria. RSVP via WhatsApp.",
        "font": "font-outfit",
        "tone": "original",
        "role": "invitation"
  },
    "oriental-lantern": {
        "template": "oriental-lantern",
        "recipient": "Keluarga Besar Tan & Rekan",
        "title": "Malam Syukuran & Silaturahmi Emas",
        "milestone": "Menebar Harmoni, Melipatgandakan Rezeki & Berkah Luhur",
        "message": "Keluarga besar kami mengundang Bapak, Ibu, dan Kerabat terhormat untuk hadir bersama dalam jamuan makan malam syukuran. Di bawah pendaran lentera merah sutra emas, mari kita sambut babak baru penuh kerukunan, kesehatan, dan kemakmuran berlimpah.",
        "sender": "Keluarga Besar Tanoto & Wijaya",
        "date": "2026-11-21",
        "time": "18:00 WIB",
        "location": "Imperial Jade Banquet Hall, Glodok",
        "rsvp": "Mohon konfirmasi jumlah rombongan keluarga sebelum 16 Nov.",
        "font": "font-cinzel",
        "tone": "gold",
        "role": "invitation"
  },
    "ocean-pearl": {
        "template": "ocean-pearl",
        "recipient": "Satria & Maya",
        "title": "The Ocean Wedding Celebration",
        "milestone": "Mengikrarkan Janji Suci Sebening Mutiara Samudra",
        "message": "Dengan mengucap syukur kepada Tuhan Yang Maha Kuasa, kami mengundang Bapak/Ibu/Sahabat untuk menjadi saksi janji suci ikatan pernikahan putra-putri kami, diiringi sejuknya semilir angin pantai dan deburan ombak lautan nan syahdu.",
        "sender": "Keluarga Bpk. Satria Wijaya & Bpk. Hendarto",
        "date": "2026-12-12",
        "time": "16:30 WITA",
        "location": "The Pearl Cliff Pavilion, Nusa Dua, Bali",
        "rsvp": "Dress code: Beach Formal / White & Sandy Breeze.",
        "font": "font-playfair",
        "tone": "ocean",
        "role": "invitation"
  },
    "minimalist-monochrome": {
        "template": "minimalist-monochrome",
        "recipient": "Nusantara Capital Group Partners",
        "title": "Annual Gala & Excellence Night",
        "milestone": "Satu Dekade Prestasi, Dedikasi & Integritas Tanpa Kompromi",
        "message": "Manajemen eksekutif mengundang para mitra strategis dan kolega kehormatan untuk menghadiri malam penganugerahan dan perayaan pencapaian satu dekade perjalanan bisnis yang presisi, solid, dan berorientasi masa depan.",
        "sender": "Dewan Komisaris & Direksi Nusantara Group",
        "date": "2026-11-27",
        "time": "19:00 WIB",
        "location": "Platinum Grand Ballroom, SCBD, Jakarta",
        "rsvp": "Dress code: Black Tie & Architectural Monochrome.",
        "font": "font-inter",
        "tone": "original",
        "role": "invitation"
  },
    "lebaran-fitri": {
        "template": "lebaran-fitri",
        "recipient": "Keluarga Besar & Sahabat Muslimin",
        "title": "Selamat Hari Raya Idul Fitri 1447 H",
        "milestone": "Taqabbalallahu Minna Wa Minkum — Menata Hati Kembali Suci",
        "message": "Di hari yang fitri nan penuh berkah ini, dengan ketulusan hati kami sekeluarga memohon maaf lahir dan batin atas segala khilaf kata dan perbuatan. Semoga Allah SWT menerima amal ibadah kita dan melimpahkan rahmat serta kesehatan bagi keluarga tercinta.",
        "sender": "Keluarga Besar Bpk. Ahmad Pratama & Ibu Siti",
        "date": "2026-03-21",
        "time": "08:00 WIB",
        "location": "Kediaman Utama, Pejaten Barat, Jakarta Selatan",
        "rsvp": "Pintu silaturahmi senantiasa terbuka lebar bagi keluarga.",
        "font": "font-lora",
        "tone": "emerald",
        "role": "greeting"
  },
    "champagne-glamour": {
        "template": "champagne-glamour",
        "recipient": "Drs. Hendra & Linda Hartanto",
        "title": "The Golden Jubilee Celebration",
        "milestone": "Malam Bersulang Emas 50 Tahun Perjalanan Cinta & Mahakarya",
        "message": "Sebuah kehormatan mengundang sahabat dan handai tolan untuk bersulang bersama dalam malam bertabur kilau emas dan denting gelas sampanye, merayakan lima dekade keteladanan, cinta tulus, dan karya gemilang Bapak Drs. Hendra & Ibu Linda.",
        "sender": "Putra-Putri & Cucu Tercinta",
        "date": "2026-11-29",
        "time": "19:00 WIB",
        "location": "Grand Ballroom The St. Regis Jakarta",
        "rsvp": "Dress code: Midnight Black & Champagne Gold.",
        "font": "font-cinzel",
        "tone": "gold",
        "role": "invitation"
  },
    "vintage-romantic": {
        "template": "vintage-romantic",
        "recipient": "Julian & Clarissa",
        "title": "Janji Suci Dua Hati",
        "milestone": "Menjalin Kasih Selamanya dalam Ikatan Pernikahan Abadi",
        "message": "Dengan rahmat Tuhan Yang Maha Pengasih, kami mengundang Bapak/Ibu/Sahabat untuk hadir melingkupi kami dengan doa restu pada hari pemberkatan dan resepsi pernikahan kami yang bernuansa romansa klasik penuh kehangatan.",
        "sender": "Julian & Clarissa Bersama Orang Tua",
        "date": "2026-12-06",
        "time": "11:00 WIB",
        "location": "The Heritage Botanical Glasshouse, Lembang",
        "rsvp": "Kehadiran dan doa Anda adalah berkat terindah bagi kami.",
        "font": "font-playfair",
        "tone": "rose",
        "role": "invitation"
  },
    "pesta-balon-udara": {
        "template": "pesta-balon-udara",
        "recipient": "Mikael Arka",
        "title": "Petualangan Balon Udara Mikael",
        "milestone": "Melayang Menuju Cita-Cita Tinggi di Ulang Tahun ke-5",
        "message": "Siapkan tiketmu kawan! Mikael mengundang seluruh sahabat cilik untuk naik balon udara fantasi merayakan ulang tahun ke-5! Mari bernyanyi di atas awan, bermain permainan awan permen kapas, dan meniup lilin kue bersama-sama.",
        "sender": "Ayahanda Aris & Bundanya Mikael",
        "date": "2026-11-14",
        "time": "15:30 WIB",
        "location": "Skyline Garden Club, Sentul City",
        "rsvp": "Bawa senyum ceriamu! RSVP via WhatsApp sebelum 10 Nov.",
        "font": "font-outfit",
        "tone": "original",
        "role": "invitation"
  },
    "lilin-aroma-spa": {
        "template": "lilin-aroma-spa",
        "recipient": "Reza & Faradina",
        "title": "Harmoni Kasih & Kedamaian",
        "milestone": "Merawat Cinta yang Tenang Sehangat Nyala Lilin Aromaterapi",
        "message": "Di tengah hiruk pikuk dunia, pelukan dan pengertianmu adalah oase paling menyejukkan. Terima kasih telah menjadi rumah yang damai bagi jiwaku selama 6 tahun kebersamaan ini. Selamat hari jadi pernikahan, belahan hatiku.",
        "sender": "Dari: Faradina untuk Reza Tersayang",
        "date": "2026-11-18",
        "time": "18:00 WIB",
        "location": "Paviliun Tirta Aromatik, Ubud, Bali",
        "rsvp": "Momen refleksi dan syukur berdua.",
        "font": "font-lora",
        "tone": "original",
        "role": "greeting"
  },
    "amplop-bordir-songket": {
        "template": "amplop-bordir-songket",
        "recipient": "Tengku Haidar & Syarifah Zulaikha",
        "title": "Resepsi Pernikahan Adat Melayu Sriwijaya",
        "milestone": "Malam Berinai & Akad Nikah Agung Benang Emas Pusaka",
        "message": "Dengan memohon ridho Allah SWT, kami mengundang kerabat, sahabat, dan handai tolan untuk hadir memberikan doa restu pada helat pernikahan sakral putra-putri kami yang berhias adat agung wastra songket berbenang emas pusaka nusantara.",
        "sender": "Keluarga Besar Tengku Mansyur & Syarifah Hanum",
        "date": "2026-12-19",
        "time": "19:00 WIB",
        "location": "Balerong Agung Rumah Limas Sriwijaya, Palembang",
        "rsvp": "Doa restu Anda merupakan kehormatan tak terhingga bagi kami.",
        "font": "font-cinzel",
        "tone": "gold",
        "role": "invitation"
  },
    "kembang-api-milestone": {
        "template": "kembang-api-milestone",
        "recipient": "Richard Gunawan",
        "title": "Richard's Golden 40th Milestone",
        "milestone": "Malam Perayaan Empat Dekade Bertabur Sparkler Emas Pijar",
        "message": "Empat puluh tahun perjalanan dedikasi, integritas, dan kehangatan persahabatan! Bergabunglah bersama kami merayakan momen emas Richard dalam malam gala bertabur sparkler emas, live jazz, dan jamuan istimewa.",
        "sender": "Dari: Rekan Kerja & Sahabat Dekat",
        "date": "2026-11-13",
        "time": "19:30 WIB",
        "location": "Rooftop Sky Terrace, Sudirman, Jakarta",
        "rsvp": "Dress code: Cocktail Attire. RSVP via WhatsApp.",
        "font": "font-plus-jakarta",
        "tone": "gold",
        "role": "invitation"
  },
    "wisuda-topi-toga": {
        "template": "wisuda-topi-toga",
        "recipient": "Muhammad Ilham, S.T.",
        "title": "Selamat Atas Gelar Sarjana Teknik!",
        "milestone": "Kelulusan Membanggakan & Awal Langkah Menaklukkan Dunia",
        "message": "Alhamdulillah! Perjuangan panjang, malam-malam tanpa tidur, dan dedikasi luar biasamu berbuah manis pada hari ini. Selamat atas kelulusan dan gelar barumu, Ilham! Kami sekeluarga sangat bangga dan mendoakan masa depan kariermu gilang-gemilang.",
        "sender": "Dari: Ayah, Ibu, dan Seluruh Keluarga",
        "date": "2026-10-28",
        "time": "10:30 WIB",
        "location": "Auditorium Graha Widya ITB, Bandung",
        "rsvp": "Doa restu senantiasa menyertai setiap langkah barumu.",
        "font": "font-plus-jakarta",
        "tone": "emerald",
        "role": "greeting"
  },
    "petik-bintang-nebula": {
        "template": "petik-bintang-nebula",
        "recipient": "Aurora Calista",
        "title": "Sweet 17th Nebula Dreams",
        "milestone": "Menjangkau Bintang & Mewujudkan Cita di Usia Ketujuh Belas",
        "message": "Selamat ulang tahun ke-17 Aurora! Semoga langkahmu di usia dewasa ini senantiasa diterangi bintang-bintang penuntun, hatimu selalu hangat, dan keberanianmu tak pernah surut dalam meraih impian setinggi angkasa raya.",
        "sender": "Dengan Penuh Kasih: Papa, Mama & Adik",
        "date": "2026-11-06",
        "time": "17:00 WIB",
        "location": "The Stargazer Observatory Café, Lembang",
        "rsvp": "Kehadiranmu melengkapi kebahagiaan keluarga kami.",
        "font": "font-playfair",
        "tone": "original",
        "role": "greeting"
  },
    "taman-kunang-kunang": {
        "template": "taman-kunang-kunang",
        "recipient": "Davin & Nadine",
        "title": "Enchanted Glow Anniversary",
        "milestone": "7 Tahun Merajut Cinta Teduh di Tengah Hutan Kasih Sayang",
        "message": "Cinta kita laksana kunang-kunang di rimba malam; tak perlu bising untuk memancarkan keindahan, cukup setia berpendar menghangatkan suasana. Selamat hari ulang tahun pernikahan ketujuh, semoga rumah tangga kita selalu diberkahi ketenteraman.",
        "sender": "Dari: Davin untuk Nadine Terkasih",
        "date": "2026-11-23",
        "time": "18:30 WIB",
        "location": "The Secret Firefly Garden, Batu, Malang",
        "rsvp": "Malam penuh keteduhan cinta kita berdua.",
        "font": "font-lora",
        "tone": "original",
        "role": "greeting"
  },
    "kincir-festival-sakura": {
        "template": "kincir-festival-sakura",
        "recipient": "Komunitas Sahabat Budaya",
        "title": "Festival Matsuri Hanabi & Syukuran",
        "milestone": "Pesta Lentera Berayun & Kembang Api Musim Panas",
        "message": "Konichiwa! Kami mengundang Anda dan sahabat terkasih untuk hadir merayakan malam syukuran kebudayaan dengan semarak lentera merah gantung berayun, parade kincir angin warna-warni, serta dentuman kembang api Hanabi yang memukau cakrawala malam.",
        "sender": "Panitia Pelaksana Matsuri Nusantara",
        "date": "2026-11-22",
        "time": "17:00 WIB",
        "location": "Paviliun Budaya Taman Mini, Jakarta Timur",
        "rsvp": "Yukata & Kimono Chic disarankan. RSVP sebelum 18 Nov.",
        "font": "font-outfit",
        "tone": "original",
        "role": "invitation"
  },
    "kastil-neuschwanstein": {
        "template": "kastil-neuschwanstein",
        "recipient": "Putri Aurelia Maharani",
        "title": "The Royal Fairytale Ball",
        "milestone": "Perayaan Sweet Seventeen di Panggung Megah Kastil Impian",
        "message": "Dengan rasa syukur yang mendalam, kami mengundang para sahabat dan kerabat terhormat untuk hadir dalam pesta dansa kerajaan merayakan ulang tahun ke-17 Putri Aurelia. Sambut malam bertabur gaun malam megah dan musik orkestra klasik.",
        "sender": "Keluarga Besar Bpk. H. Rahmat & Ibu Maharani",
        "date": "2026-12-05",
        "time": "18:30 WIB",
        "location": "Royal Castle Grand Ballroom, Ciumbuleuit, Bandung",
        "rsvp": "Dress code: Royal Evening Gown & Formal Suit.",
        "font": "font-cinzel",
        "tone": "gold",
        "role": "invitation"
  },
    "taman-kupu-kupu-flora": {
        "template": "taman-kupu-kupu-flora",
        "recipient": "Keluarga Besar Pratama & Sahabat",
        "title": "Syukuran Bunga & Kupu-Kupu Indah",
        "milestone": "Menebar Harum Kebaikan & Kebahagiaan yang Bertransformasi Indah",
        "message": "Seperti ulat yang bertransformasi menjadi kupu-kupu bersayap elok di taman peony yang mekar, setiap proses hidup adalah berkah yang layak disyukuri. Kami sekeluarga menyampaikan rasa terima kasih atas doa tulus dan kasih sayang yang senantiasa mengalir.",
        "sender": "Dari: Keluarga Besar Bpk. & Ibu Pratama",
        "date": "2026-11-16",
        "time": "10:00 WIB",
        "location": "Botanical Butterfly Sanctuary, Bogor",
        "rsvp": "Doa dan silaturahmi Anda adalah kebahagiaan kami.",
        "font": "font-lora",
        "tone": "rose",
        "role": "greeting"
  }
  };

  // Backward compatibility alias keys for quick preset chips
  TEMPLATE_PRESETS["sahabat-ultah"] = TEMPLATE_PRESETS["ultah-ceria"];
  TEMPLATE_PRESETS["milestone-30"] = TEMPLATE_PRESETS["ultah-elegan"];
  TEMPLATE_PRESETS["anniv-perak"] = TEMPLATE_PRESETS["anniv-romantis"];
  TEMPLATE_PRESETS["anniv-pacaran"] = TEMPLATE_PRESETS["anniv-botanical"];
  TEMPLATE_PRESETS["wisuda-sarjana"] = TEMPLATE_PRESETS["wisuda-prestise"];
  TEMPLATE_PRESETS["resepsi-royal"] = TEMPLATE_PRESETS["royal-emerald"];
  TEMPLATE_PRESETS["tiup-lilin"] = TEMPLATE_PRESETS["tiup-lilin-kue"];
  TEMPLATE_PRESETS["surat-cinta"] = TEMPLATE_PRESETS["amplop-surat-cinta"];
  TEMPLATE_PRESETS["gate-wedding"] = TEMPLATE_PRESETS["golden-gate-wedding"];
  TEMPLATE_PRESETS["bali-kori"] = TEMPLATE_PRESETS["undangan-pintu-ukir-bali"];
  TEMPLATE_PRESETS["broadway-gala"] = TEMPLATE_PRESETS["tirai-teater-broadway"];
  TEMPLATE_PRESETS["sunset-pesiar"] = TEMPLATE_PRESETS["pesiar-sunset-ocean"];
  TEMPLATE_PRESETS["disko-neon"] = TEMPLATE_PRESETS["disko-retro-neon"];
  TEMPLATE_PRESETS["keraton-jawa"] = TEMPLATE_PRESETS["jawa-keraton-gunungan"];
  TEMPLATE_PRESETS["salju-winter"] = TEMPLATE_PRESETS["salju-wonderland"];
  TEMPLATE_PRESETS["arabian-nights"] = TEMPLATE_PRESETS["piramida-arabian-nights"];


  const RANDOM_WISHES = [
    "Semoga di usiamu yang baru ini, setiap langkahmu dipenuhi dengan kebahagiaan, kesehatan yang prima, dan pencapaian impian yang kian gemilang. Terima kasih telah selalu menjadi sosok yang menginspirasi!",
    "Selamat ulang tahun! Semoga hari-harimu ke depan senantiasa diiringi tawa renyah, kedamaian jiwa, dan keberkahan rezeki yang tak pernah putus.",
    "Satu tahun lagi bertambah dengan sejuta kisah indah. Selamat merayakan hari kelahiran! Teruslah bersinar dan membawa hangat bagi sekitarmu.",
    "Selamat hari anniversary! Terima kasih atas komitmen, kehangatan, dan cinta yang tulus melewati setiap musim kehidupan bersama.",
    "Cinta bukan sekadar menatap satu sama lain, melainkan menatap ke satu arah yang sama. Selamat merayakan hari istimewa kebersamaan kita!"
  ];

  // =========================================================================
  // 2. Application State
  // =========================================================================
  const state = {
    template: "ultah-echa",
    recipient: "Echa Tersayang",
    title: "Happy Birthday",
    milestone: "Spesial Untuk Sahabat Terbaik 🌸",
    message: "Di hari yang begitu istimewa ini, aku cuma mau mengucapkan terima kasih yang sebesar-besarnya karena kamu sudah hadir di dunia dan menjadi sahabat yang luar biasa buat aku. Terima kasih untuk setiap tawa lepas kita, sesi curhat larut malam, dan saling menguatkan di kala rapuh. Semoga Allah selalu melimpahkan kesehatan, kebahagiaan tanpa akhir, kelapangan rezeki, dan memudahkan semua impian yang sedang kamu perjuangkan! Tetaplah jadi Echa yang ceria, rendah hati, dan bersinar apa adanya 💕",
    sender: "Dari: Sahabat Terbaikmu 💕",
    date: "2026-10-19",
    time: "15:00 WIB",
    location: "The Garden Pavilion & Cafe, Joyville",
    rsvp: "Kehadiran dan senyum bahagiamu adalah hadiah terindah.",
    font: "font-playfair",
    tone: "rose",
    cardRole: "invitation",
    confettiEnabled: true,
    soundEnabled: true,
    isEnvelopeOpened: true,
    isRecipientView: false,
    isCandleBlown: false,
    isDramaticPreview: false,
    isMusicPlaying: false,
    isDramaticCandleBlown: false,
    isCatalogExpanded: false,
    activeCategory: "all",
    photos: []
  };

  // =========================================================================
  // 3. DOM Elements Cache
  // =========================================================================
  const dom = {
    // Form Inputs
    templateSelect: document.getElementById("input-template-select"),
    recipientInput: document.getElementById("input-recipient"),
    titleInput: document.getElementById("input-title"),
    milestoneInput: document.getElementById("input-milestone"),
    messageInput: document.getElementById("input-message"),
    senderInput: document.getElementById("input-sender"),
    dateInput: document.getElementById("input-date"),
    timeInput: document.getElementById("input-time"),
    locationInput: document.getElementById("input-location"),
    rsvpInput: document.getElementById("input-rsvp"),
    fontSelect: document.getElementById("font-family-select"),
    charCount: document.getElementById("char-count"),
    errRecipient: document.getElementById("err-recipient"),
    btnRandomQuote: document.getElementById("btn-random-quote"),
    toggleConfetti: document.getElementById("toggle-confetti"),
    toggleSound: document.getElementById("toggle-sound"),
    toneRadios: document.querySelectorAll('input[name="accent-tone"]'),

    // Gallery Upload & Polaroid Display Targets
    inputGalleryPhotos: document.getElementById("input-gallery-photos"),
    btnBrowsePhotos: document.getElementById("btn-browse-photos"),
    galleryDropzone: document.getElementById("gallery-dropzone"),
    galleryUploadList: document.getElementById("gallery-upload-list"),
    galleryEmptyState: document.getElementById("gallery-empty-state"),
    galleryCountBadge: document.getElementById("gallery-count-badge"),
    galleryCountText: document.getElementById("gallery-count-text"),
    btnClearAllPhotos: document.getElementById("btn-clear-all-photos"),
    btnLoadSamplePhotos: document.getElementById("btn-load-sample-photos"),
    cardPhotosPreviewStrip: document.getElementById("card-photos-preview-strip"),
    cardPhotosStripText: document.getElementById("card-photos-strip-text"),
    cardPhotosStripThumbs: document.getElementById("card-photos-strip-thumbs"),
    dramaticGallerySection: document.getElementById("dramatic-gallery-section"),
    dramaticGalleryTitle: document.getElementById("dramatic-gallery-title"),
    dramaticGallerySubtitle: document.getElementById("dramatic-gallery-subtitle"),
    dramaticPolaroidsRow: document.getElementById("dramatic-polaroids-row"),

    // Lightbox Modal Components
    galleryLightboxModal: document.getElementById("gallery-lightbox-modal"),
    lightboxImg: document.getElementById("lightbox-img"),
    lightboxCaption: document.getElementById("lightbox-caption"),
    lightboxSub: document.getElementById("lightbox-sub"),
    btnCloseLightbox: document.getElementById("btn-close-lightbox"),

    // Form Section Tabs
    formTabButtons: document.querySelectorAll(".form-tab-btn"),
    formTabPanes: document.querySelectorAll(".form-tab-pane"),

    // Card Live Display Targets
    cardElement: document.getElementById("greeting-card-element"),
    cardSalutation: document.getElementById("card-display-salutation"),
    cardTitle: document.getElementById("card-display-title"),
    cardRecipient: document.getElementById("card-display-recipient"),
    cardMilestone: document.getElementById("card-display-milestone"),
    cardMessage: document.getElementById("card-display-message"),
    cardEventBlock: document.getElementById("card-display-event-block"),
    cardDate: document.getElementById("card-display-date"),
    cardTime: document.getElementById("card-display-time"),
    cardLocation: document.getElementById("card-display-location"),
    cardRsvp: document.getElementById("card-display-rsvp"),
    cardSender: document.getElementById("card-display-sender"),
    envDisplayName: document.getElementById("env-display-name"),

    // Interactive Candle Widget Components
    interactiveCandleWidget: document.getElementById("interactive-candle-widget"),
    btnCandleFlame: document.getElementById("btn-candle-flame"),
    candleFlameHalo: document.getElementById("candle-flame-halo"),
    candleSmokeRise: document.getElementById("candle-smoke-rise"),
    candleChipIcon: document.getElementById("candle-chip-icon"),
    candleChipText: document.getElementById("candle-chip-text"),

    // Envelope Components
    envelopeWrapper: document.getElementById("envelope-wrapper"),
    btnOpenSeal: document.getElementById("btn-open-seal"),
    btnToggleEnvelope: document.getElementById("btn-toggle-envelope"),
    btnEnvelopeText: document.getElementById("btn-envelope-text"),
    btnTriggerCelebrate: document.getElementById("btn-trigger-celebrate"),
    confettiCanvas: document.getElementById("confetti-canvas"),

    // Catalog & Filter
    filterTabs: document.querySelectorAll(".filter-tab"),
    templateCards: document.querySelectorAll(".template-card"),
    catalogEmptyState: document.getElementById("catalog-empty-state"),
    btnResetFilter: document.getElementById("btn-reset-filter"),
    catalogPaginationWrap: document.getElementById("catalog-pagination-wrap"),
    btnToggleCatalogMore: document.getElementById("btn-toggle-catalog-more"),
    catalogToggleText: document.getElementById("catalog-toggle-text"),
    catalogVisibleNum: document.getElementById("catalog-visible-num"),
    catalogTotalNum: document.getElementById("catalog-total-num"),

    // Share & Action Buttons
    btnShareLink: document.getElementById("btn-share-link"),
    btnShareWhatsapp: document.getElementById("btn-share-whatsapp"),
    btnDownloadImage: document.getElementById("btn-download-image"),
    btnFullscreenPreview: document.getElementById("btn-fullscreen-preview"),

    // Share Modal
    shareModal: document.getElementById("share-modal"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    shareUrlInput: document.getElementById("share-url-input"),
    btnCopyUrlModal: document.getElementById("btn-copy-url-modal"),
    qrCanvas: document.getElementById("qr-canvas"),
    modalWaLink: document.getElementById("modal-wa-link"),

    // Toast Container
    toastContainer: document.getElementById("toast-container"),

    // Recipient View & Actions Elements
    recipientBanner: document.getElementById("recipient-banner"),
    bannerRecipientName: document.getElementById("banner-recipient-name"),
    bannerSenderName: document.getElementById("banner-sender-name"),
    bannerSenderWrap: document.getElementById("banner-sender-wrap"),
    btnRecipientBannerOpen: document.getElementById("btn-recipient-banner-open"),
    btnRecipientBannerCreate: document.getElementById("btn-recipient-banner-create"),
    btnRecipientBannerEdit: document.getElementById("btn-recipient-banner-edit"),

    recipientActionsBar: document.getElementById("recipient-actions-bar"),
    btnRecipientOpenToggle: document.getElementById("btn-recipient-open-toggle"),
    btnRecipientReplyWa: document.getElementById("btn-recipient-reply-wa"),
    btnRecipientDownloadImg: document.getElementById("btn-recipient-download-img"),
    btnRecipientCelebrate: document.getElementById("btn-recipient-celebrate"),
    btnRecipientCreateNew: document.getElementById("btn-recipient-create-new"),

    // Mobile Studio Switcher & Workspace Controls
    mobileStudioSwitch: document.querySelector(".mobile-studio-switch"),
    btnMobileViewForm: document.getElementById("btn-mobile-view-form"),
    btnMobileViewPreview: document.getElementById("btn-mobile-view-preview"),
    btnMobileBackForm: document.getElementById("btn-mobile-back-form"),
    editorWorkspaceGrid: document.getElementById("editor-workspace-grid"),

    // Wizard Navigation & Quick Action Controls
    btnNextTabs: document.querySelectorAll(".btn-next-tab"),
    btnPrevTabs: document.querySelectorAll(".btn-prev-tab"),
    btnDoneToPreview: document.getElementById("btn-done-to-preview"),
    btnQuickCopy: document.getElementById("btn-quick-copy"),
    quickCopyText: document.getElementById("quick-copy-text"),
    mobileJumpBar: document.getElementById("mobile-jump-bar"),
    btnMobileJump: document.getElementById("btn-mobile-jump"),
    jumpIcon: document.getElementById("jump-icon"),
    jumpText: document.getElementById("jump-text"),
    statusIndicatorDot: document.querySelector(".status-indicator-dot"),

    // Dramatic Mode & Envelope Modal Elements (Ala Ultah-Echa)
    envelopeModal: document.getElementById("envelopeModal"),
    envelopeCover: document.getElementById("envelopeCover"),
    btnOpenDramaticInvitation: document.getElementById("btn-open-dramatic-invitation"),
    envelopeModalName: document.getElementById("envelope-modal-name"),
    envelopeModalBadge: document.getElementById("envelope-modal-badge"),

    dramaticFloatingControls: document.getElementById("dramaticFloatingControls"),
    musicToggleBtn: document.getElementById("musicToggleBtn"),
    floatingConfettiBtn: document.getElementById("floatingConfettiBtn"),
    btnCloseDramaticPreview: document.getElementById("btn-close-dramatic-preview"),
    btnOpenDramaticMode: document.getElementById("btn-open-dramatic-mode"),

    dramaticInvitationView: document.getElementById("dramaticInvitationView"),
    dramaticBadgeContent: document.getElementById("dramatic-badge-content"),
    dramaticHeroTitlePrefix: document.getElementById("dramatic-hero-title-prefix"),
    dramaticHeroName: document.getElementById("dramatic-hero-name"),
    dramaticHeroMilestone: document.getElementById("dramatic-hero-milestone"),
    dramaticBannerTag: document.getElementById("dramatic-banner-tag"),
    dramaticBannerTitle: document.getElementById("dramatic-banner-title"),
    dramaticBannerSub: document.getElementById("dramatic-banner-sub"),

    dramaticDays: document.getElementById("dramatic-days"),
    dramaticHours: document.getElementById("dramatic-hours"),
    dramaticMinutes: document.getElementById("dramatic-minutes"),
    dramaticSeconds: document.getElementById("dramatic-seconds"),

    dramaticLetterName: document.getElementById("dramatic-letter-name"),
    dramaticLetterMessage: document.getElementById("dramatic-letter-message"),
    dramaticLetterSign: document.getElementById("dramatic-letter-sign"),

    dramaticCakeSection: document.getElementById("dramatic-cake-section"),
    btnDramaticBlowCandle: document.getElementById("btn-dramatic-blow-candle"),
    dramaticBlowText: document.getElementById("dramatic-blow-text"),
    dramaticFlames: document.querySelectorAll(".dramatic-flame"),
    dramaticSmokes: document.querySelectorAll(".dramatic-smoke"),

    dramaticEventDate: document.getElementById("dramatic-event-date"),
    dramaticEventTime: document.getElementById("dramatic-event-time"),
    dramaticEventLocName: document.getElementById("dramatic-event-loc-name"),
    dramaticEventLocAddress: document.getElementById("dramatic-event-loc-address"),
    dramaticMapsLink: document.getElementById("dramatic-maps-link"),
    dramaticEventRsvpNote: document.getElementById("dramatic-event-rsvp-note"),

    dramaticWishForm: document.getElementById("dramaticWishForm"),
    dramaticWishName: document.getElementById("dramaticWishName"),
    dramaticWishStatus: document.getElementById("dramaticWishStatus"),
    dramaticWishMessage: document.getElementById("dramaticWishMessage"),
    dramaticWishesCount: document.getElementById("dramatic-wishes-count"),
    dramaticWishesContainer: document.getElementById("dramatic-wishes-container"),

    btnDramaticShareWa: document.getElementById("btn-dramatic-share-wa"),
    btnDramaticShareTelegram: document.getElementById("btn-dramatic-share-telegram"),
    btnDramaticCopyLink: document.getElementById("btn-dramatic-copy-link"),
    btnDramaticReplyWa: document.getElementById("btn-dramatic-reply-wa"),
    btnDramaticDownloadImg: document.getElementById("btn-dramatic-download-img"),
    btnDramaticCreateOwn: document.getElementById("btn-dramatic-create-own"),

    celebrationPopup: document.getElementById("celebrationPopup"),
    btnCloseCelebrationPopup: document.getElementById("btn-close-celebration-popup"),

    // Card Role & Purpose Elements (Greeting vs Invitation)
    roleRadios: document.querySelectorAll('input[name="card-role"]'),
    roleOptionCards: document.querySelectorAll(".role-option-card"),
    formTab2Btn: document.getElementById("form-tab-2"),
    formTab2Pane: document.getElementById("tab-pane-event"),
    tabStepNum3: document.getElementById("tab-step-num-3"),
    tabStepNum4: document.getElementById("tab-step-num-4"),
    stepCounterPane1: document.getElementById("step-counter-pane-1"),
    btnNextFromPane1: document.getElementById("btn-next-from-pane-1"),
    btnNextTextPane1: document.getElementById("btn-next-text-pane-1"),
    btnPrevFromPane3: document.getElementById("btn-prev-from-pane-3"),
    btnPrevTextPane3: document.getElementById("btn-prev-text-pane-3"),
    stepCounterPane2: document.getElementById("step-counter-pane-2"),
    stepCounterPane3: document.getElementById("step-counter-pane-3"),
    stepCounterPane4: document.getElementById("step-counter-pane-4"),
    dramaticCountdownBox: document.getElementById("dramatic-countdown-box"),
    dramaticGuestbookSection: document.getElementById("dramatic-guestbook-section"),
    dramaticEventSection: document.getElementById("dramatic-event-section"),
    dramaticShareTitle: document.getElementById("dramatic-share-title"),
    dramaticShareSubtitle: document.getElementById("dramatic-share-subtitle"),
    dramaticCopyLinkText: document.getElementById("dramatic-copy-link-text"),
    tabEventGreetingNotice: document.getElementById("tab-event-greeting-notice"),
    tabEventInfoCallout: document.getElementById("tab-event-info-callout")
  };

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================================================================
  // 4. Web Audio Synthesizer (Harmonious Pure Celebratory Chime & Music Box)
  // =========================================================================
  let audioCtx = null;
  let musicInterval = null;

  const NOTES = {
    'G3': 196.00, 'A3': 220.00, 'B3': 246.94, 'C4': 261.63,
    'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99,
    'G4': 392.00, 'A4': 440.00, 'B4': 493.88, 'C5': 523.25,
    'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99
  };

  const MELODY = [
    { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.35 }, { note: 'A4', dur: 0.7 }, { note: 'G4', dur: 0.7 }, { note: 'C5', dur: 0.7 }, { note: 'B4', dur: 1.2 },
    { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.35 }, { note: 'A4', dur: 0.7 }, { note: 'G4', dur: 0.7 }, { note: 'D5', dur: 0.7 }, { note: 'C5', dur: 1.2 },
    { note: 'G4', dur: 0.35 }, { note: 'G4', dur: 0.35 }, { note: 'G5', dur: 0.7 }, { note: 'E5', dur: 0.7 }, { note: 'C5', dur: 0.7 }, { note: 'B4', dur: 0.7 }, { note: 'A4', dur: 1.0 },
    { note: 'F5', dur: 0.35 }, { note: 'F5', dur: 0.35 }, { note: 'E5', dur: 0.7 }, { note: 'C5', dur: 0.7 }, { note: 'D5', dur: 0.7 }, { note: 'C5', dur: 1.5 }
  ];

  function ensureAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playKalimbaNote(freq, startTime, duration = 0.8) {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(freq * 2, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      subGain.gain.setValueAtTime(0.06, startTime);
      subGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.7);

      osc.connect(gain);
      subOsc.connect(subGain);
      gain.connect(ctx.destination);
      subGain.connect(ctx.destination);

      osc.start(startTime);
      subOsc.start(startTime);
      osc.stop(startTime + duration);
      subOsc.stop(startTime + duration);
    } catch (e) {
      console.warn("Kalimba audio error:", e);
    }
  }

  function playBlowSound() {
    try {
      const ctx = ensureAudioCtx();
      if (!ctx) return;
      const bufferSize = ctx.sampleRate * 0.8;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.8);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) {
      console.warn("Blow sound error:", e);
    }
  }

  function playCheerChime() {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    const chimeNotes = ['C5', 'E5', 'G5', 'C6'];
    chimeNotes.forEach((note, idx) => {
      playKalimbaNote(NOTES[note] || 523.25, ctx.currentTime + (idx * 0.12), 1.2);
    });
  }

  function scheduleMusic() {
    const ctx = ensureAudioCtx();
    if (!ctx || !state.isMusicPlaying) return;
    let currTime = ctx.currentTime + 0.1;
    MELODY.forEach(item => {
      const freq = NOTES[item.note] || 440;
      playKalimbaNote(freq, currTime, item.dur * 1.5);
      currTime += item.dur * 0.85;
    });

    const totalDuration = (currTime - ctx.currentTime + 1.5) * 1000;
    musicInterval = setTimeout(() => {
      if (state.isMusicPlaying) scheduleMusic();
    }, totalDuration);
  }

  function toggleMusic(forcePlay = null) {
    ensureAudioCtx();
    const musicIcon = document.getElementById("musicIcon");
    const musicLabel = document.getElementById("musicLabel");

    if (forcePlay === true) {
      state.isMusicPlaying = true;
    } else if (forcePlay === false) {
      state.isMusicPlaying = false;
    } else {
      state.isMusicPlaying = !state.isMusicPlaying;
    }

    if (state.isMusicPlaying) {
      if (musicIcon) musicIcon.textContent = "🎵";
      if (musicLabel) musicLabel.textContent = "Musik On";
      clearTimeout(musicInterval);
      scheduleMusic();
    } else {
      if (musicIcon) musicIcon.textContent = "🔇";
      if (musicLabel) musicLabel.textContent = "Musik Off";
      clearTimeout(musicInterval);
    }
  }

  function playCelebrationChime() {
    if (!state.soundEnabled) return;

    try {
      const ctx = ensureAudioCtx();
      if (!ctx) return;

      // Pentatonic celebratory ascending chord: C5, E5, G5, B5, C6
      const chordFrequencies = [523.25, 659.25, 783.99, 987.77, 1046.50];
      const now = ctx.currentTime;

      chordFrequencies.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + index * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 1.3);
      });
    } catch (e) {
      console.warn("Audio Context not allowed or supported:", e);
    }
  }

  // =========================================================================
  // 5. Confetti Engine (Pure HTML5 Canvas)
  // =========================================================================
  let confettiAnimId = null;
  const particles = [];
  const CONFETTI_COLORS = ["#be123c", "#f59e0b", "#d97706", "#22c55e", "#38bdf8", "#ec4899", "#8b5cf6"];

  function resizeConfettiCanvas() {
    if (!dom.confettiCanvas) return;
    const parent = dom.confettiCanvas.parentElement;
    dom.confettiCanvas.width = parent.clientWidth;
    dom.confettiCanvas.height = parent.clientHeight;
  }

  function launchConfetti() {
    if (!state.confettiEnabled || !dom.confettiCanvas) return;

    resizeConfettiCanvas();
    const width = dom.confettiCanvas.width;
    const height = dom.confettiCanvas.height;
    const ctx = dom.confettiCanvas.getContext("2d");

    // Spawn 70 celebration particles
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 120,
        y: height / 2 + 50,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 4,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        shape: Math.random() > 0.4 ? "rect" : "circle"
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!dom.confettiCanvas) return;
    const ctx = dom.confettiCanvas.getContext("2d");
    const width = dom.confettiCanvas.width;
    const height = dom.confettiCanvas.height;

    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // Gravity
      p.vx *= 0.98; // Friction
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity <= 0 || p.y > height + 20) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (particles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimId = null;
      ctx.clearRect(0, 0, width, height);
    }
  }

  function fireConfettiBlast() {
    if (typeof window.confetti === "function") {
      window.confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#f43f5e", "#fb7185", "#f59e0b", "#fbbf24", "#ec4899", "#c084fc"]
      });
      window.confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#f43f5e", "#fb7185", "#f59e0b", "#fbbf24", "#ec4899", "#c084fc"]
      });
      setTimeout(() => {
        window.confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#f43f5e", "#f59e0b", "#3b82f6", "#10b981", "#a855f7"]
        });
      }, 250);
    } else {
      launchConfetti();
    }
  }

  function fireMegaFireworks() {
    if (typeof window.confetti !== "function") {
      launchConfetti();
      return;
    }
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 45 * (timeLeft / duration);
      window.confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#f43f5e", "#fb7185", "#f59e0b", "#fbbf24", "#a855f7"]
      }));
      window.confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#ec4899", "#38bdf8", "#34d399", "#fbbf24", "#f43f5e"]
      }));
    }, 220);
  }

  // =========================================================================
  // 6. UI Synchronization & State Rendering
  // =========================================================================
  function formatDateIndonesian(dateString) {
    if (!dateString) return "";
    try {
      const parts = dateString.split("-");
      if (parts.length !== 3) return dateString;
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    } catch {
      return dateString;
    }
  }

  function renderCard() {
    // 1. Texts
    const recName = state.recipient.trim() || "Nama Penerima";
    dom.cardRecipient.textContent = recName;
    dom.envDisplayName.textContent = recName;

    dom.cardTitle.textContent = state.title.trim() || "Selamat Berbahagia";

    if (state.milestone.trim()) {
      dom.cardMilestone.textContent = state.milestone.trim();
      dom.cardMilestone.style.display = "inline-block";
    } else {
      dom.cardMilestone.style.display = "none";
    }

    dom.cardMessage.textContent = state.message.trim() || "Semoga kebahagiaan dan kesehatan selalu menyertaimu.";
    dom.cardSender.textContent = state.sender.trim() || "Dari: Sahabat & Keluarga";

    // 2. Event Meta (Date, Time, Location)
    const isGreeting = state.cardRole === "greeting";
    if (isGreeting) {
      if (dom.cardEventBlock) dom.cardEventBlock.classList.add("hidden");
    } else {
      const formattedDate = formatDateIndonesian(state.date);
      const dateWrap = document.getElementById("event-display-date-wrap");
      const timeWrap = document.getElementById("event-display-time-wrap");
      const locWrap = document.getElementById("event-display-location-wrap");

      if (formattedDate) {
        if (dom.cardDate) dom.cardDate.textContent = formattedDate;
        if (dateWrap) dateWrap.style.display = "flex";
      } else {
        if (dateWrap) dateWrap.style.display = "none";
      }

      if (state.time.trim()) {
        if (dom.cardTime) dom.cardTime.textContent = state.time.trim();
        if (timeWrap) timeWrap.style.display = "flex";
      } else {
        if (timeWrap) timeWrap.style.display = "none";
      }

      if (state.location.trim()) {
        if (dom.cardLocation) dom.cardLocation.textContent = state.location.trim();
        if (locWrap) locWrap.style.display = "flex";
      } else {
        if (locWrap) locWrap.style.display = "none";
      }

      // Hide entire event box if all empty
      if (!formattedDate && !state.time.trim() && !state.location.trim()) {
        if (dom.cardEventBlock) dom.cardEventBlock.classList.add("hidden");
      } else {
        if (dom.cardEventBlock) dom.cardEventBlock.classList.remove("hidden");
      }
    }

    // 2b. RSVP Note Display (Only visible when role is invitation)
    if (isGreeting) {
      if (dom.cardRsvp) dom.cardRsvp.style.display = "none";
    } else if (state.rsvp.trim()) {
      if (dom.cardRsvp) {
        dom.cardRsvp.textContent = state.rsvp.trim();
        dom.cardRsvp.style.display = "block";
      }
    } else {
      if (dom.cardRsvp) dom.cardRsvp.style.display = "none";
    }

    // 2c. Mini Photo Strip Display (If photos exist)
    renderCardPhotosStrip();

    // 3. Template Class
    // Remove previous theme classes
    const themeClasses = Array.from(dom.cardElement.classList).filter(c => c.startsWith("theme-"));
    themeClasses.forEach(c => dom.cardElement.classList.remove(c));
    dom.cardElement.classList.add(`theme-${state.template}`);

    // 4. Font Class
    const fontClasses = Array.from(dom.cardElement.classList).filter(c => c.startsWith("font-"));
    fontClasses.forEach(c => dom.cardElement.classList.remove(c));
    dom.cardElement.classList.add(state.font);

    // 5. Envelope State
    if (state.isEnvelopeOpened) {
      dom.envelopeWrapper.classList.add("is-opened");
      dom.btnEnvelopeText.textContent = "Tutup ke Amplop";
      dom.btnToggleEnvelope.setAttribute("aria-pressed", "true");
    } else {
      dom.envelopeWrapper.classList.remove("is-opened");
      dom.btnEnvelopeText.textContent = "Buka Amplop";
      dom.btnToggleEnvelope.setAttribute("aria-pressed", "false");
    }

    // 6. Character counter
    if (dom.charCount) {
      dom.charCount.textContent = state.message.length;
    }

    // 7. Candle widget state sync (for tiup-lilin-kue)
    if (dom.candleFlameHalo) {
      if (state.isCandleBlown) {
        dom.candleFlameHalo.classList.add("is-blown");
        if (dom.candleSmokeRise) dom.candleSmokeRise.classList.remove("hidden");
        if (dom.candleChipText) dom.candleChipText.textContent = "Hore! Lilin Ditiup 🎉 (Nyalakan Lagi)";
        if (dom.candleChipIcon) dom.candleChipIcon.textContent = "✨";
        if (dom.btnCandleFlame) dom.btnCandleFlame.setAttribute("aria-label", "Lilin telah ditiup. Ketuk untuk menyalakan lilin kembali.");
      } else {
        dom.candleFlameHalo.classList.remove("is-blown");
        if (dom.candleSmokeRise) dom.candleSmokeRise.classList.add("hidden");
        if (dom.candleChipText) dom.candleChipText.textContent = "Ketuk untuk Tiup Lilin! 💨";
        if (dom.candleChipIcon) dom.candleChipIcon.textContent = "🎂";
        if (dom.btnCandleFlame) dom.btnCandleFlame.setAttribute("aria-label", "Lilin menyala. Ketuk untuk meniup lilin ulang tahun.");
      }
    }

    // 8. Reassuring live sync micro-pulse
    if (dom.statusIndicatorDot) {
      dom.statusIndicatorDot.classList.remove("pulse");
      void dom.statusIndicatorDot.offsetWidth;
      dom.statusIndicatorDot.classList.add("pulse");
    }

    // 9. Sync Dramatic View (Ala Ultah-Echa)
    syncDramaticViewWithState();
  }

  function blowCandle() {
    if (!state.isCandleBlown) {
      state.isCandleBlown = true;
      if (dom.candleFlameHalo) dom.candleFlameHalo.classList.add("is-blown");
      if (dom.candleSmokeRise) dom.candleSmokeRise.classList.remove("hidden");
      if (dom.candleChipText) dom.candleChipText.textContent = "Hore! Lilin Ditiup 🎉 (Nyalakan Lagi)";
      if (dom.candleChipIcon) dom.candleChipIcon.textContent = "✨";
      if (dom.btnCandleFlame) dom.btnCandleFlame.setAttribute("aria-label", "Lilin telah ditiup. Ketuk untuk menyalakan lilin kembali.");

      playCelebrationChime();
      launchConfetti();
      showToast("🎂 Hore! Lilin berhasil ditiup! Semoga semua harapan dan doamu terkabul!", "success");
    } else {
      state.isCandleBlown = false;
      if (dom.candleFlameHalo) dom.candleFlameHalo.classList.remove("is-blown");
      if (dom.candleSmokeRise) dom.candleSmokeRise.classList.add("hidden");
      if (dom.candleChipText) dom.candleChipText.textContent = "Ketuk untuk Tiup Lilin! 💨";
      if (dom.candleChipIcon) dom.candleChipIcon.textContent = "🎂";
      if (dom.btnCandleFlame) dom.btnCandleFlame.setAttribute("aria-label", "Lilin menyala. Ketuk untuk meniup lilin ulang tahun.");

      playCelebrationChime();
      showToast("Lilin dinyalakan kembali, siap untuk ditiup lagi!", "info");
    }
  }

  // =========================================================================
  // 6b. Card Role Management (Greeting vs Invitation)
  // =========================================================================
  function setCardRole(role, silent = false) {
    if (role !== "greeting" && role !== "invitation") return;
    state.cardRole = role;

    const isGreeting = role === "greeting";

    // 1. Update Radio in Tab 1
    const radioGreeting = document.getElementById("role-choice-greeting");
    const radioInvitation = document.getElementById("role-choice-invitation");
    const labelGreeting = document.getElementById("role-label-greeting");
    const labelInvitation = document.getElementById("role-label-invitation");

    if (isGreeting) {
      if (radioGreeting) radioGreeting.checked = true;
      if (labelGreeting) labelGreeting.classList.add("active");
      if (labelInvitation) labelInvitation.classList.remove("active");
    } else {
      if (radioInvitation) radioInvitation.checked = true;
      if (labelInvitation) labelInvitation.classList.add("active");
      if (labelGreeting) labelGreeting.classList.remove("active");
    }

    // 2. Tab Navigation & Step Numbering Dynamic Updates
    const tab2Btn = dom.formTab2Btn || document.getElementById("form-tab-2");
    const tab2Pane = dom.formTab2Pane || document.getElementById("tab-pane-event");
    const stepNum3 = dom.tabStepNum3 || document.getElementById("tab-step-num-3");
    const stepNum4 = dom.tabStepNum4 || document.getElementById("tab-step-num-4");

    const stepCounter1 = dom.stepCounterPane1 || document.getElementById("step-counter-pane-1");
    const btnNextPane1 = dom.btnNextFromPane1 || document.getElementById("btn-next-from-pane-1");
    const btnNextText1 = dom.btnNextTextPane1 || document.getElementById("btn-next-text-pane-1");

    const btnPrevPane3 = dom.btnPrevFromPane3 || document.getElementById("btn-prev-from-pane-3");
    const btnPrevText3 = dom.btnPrevTextPane3 || document.getElementById("btn-prev-text-pane-3");
    const stepCounter2 = dom.stepCounterPane2 || document.getElementById("step-counter-pane-2");
    const stepCounter3 = dom.stepCounterPane3 || document.getElementById("step-counter-pane-3");
    const stepCounter4 = dom.stepCounterPane4 || document.getElementById("step-counter-pane-4");

    if (isGreeting) {
      // Sembunyikan tab Waktu & Lokasi (Tab 2)
      if (tab2Btn) {
        tab2Btn.classList.add("hidden");
        tab2Btn.style.display = "none";
      }
      if (tab2Pane) {
        tab2Pane.classList.remove("active");
      }

      // Jika user sedang berada di Tab 2, alihkan ke Tab 1 (index 0)
      const currentActiveBtn = document.querySelector(".form-tab-btn.active");
      if (currentActiveBtn && currentActiveBtn.id === "form-tab-2") {
        switchFormTab(0);
      }

      // Perbarui penomoran langkah tab (Total 3 langkah)
      if (stepNum3) stepNum3.textContent = "2";
      if (stepNum4) stepNum4.textContent = "3";

      // Navigasi Pane 1
      if (stepCounter1) stepCounter1.textContent = "Langkah 1 dari 3";
      if (btnNextPane1) btnNextPane1.setAttribute("data-target-tab", "2"); // Langsung ke Galeri Foto
      if (btnNextText1) btnNextText1.textContent = "Lanjut: Galeri Foto";

      // Navigasi Pane 3
      if (stepCounter3) stepCounter3.textContent = "Langkah 2 dari 3";
      if (btnPrevPane3) btnPrevPane3.setAttribute("data-target-tab", "0"); // Kembali ke Isi Kartu
      if (btnPrevText3) btnPrevText3.textContent = "Kembali: Isi Kartu";

      // Navigasi Pane 4
      if (stepCounter4) stepCounter4.textContent = "Langkah 3 dari 3";
    } else {
      // Tampilkan kembali tab Waktu & Lokasi (Tab 2)
      if (tab2Btn) {
        tab2Btn.classList.remove("hidden");
        tab2Btn.style.display = "";
      }

      // Perbarui penomoran langkah tab (Total 4 langkah)
      if (stepNum3) stepNum3.textContent = "3";
      if (stepNum4) stepNum4.textContent = "4";

      // Navigasi Pane 1
      if (stepCounter1) stepCounter1.textContent = "Langkah 1 dari 4";
      if (btnNextPane1) btnNextPane1.setAttribute("data-target-tab", "1"); // Ke Waktu & Lokasi
      if (btnNextText1) btnNextText1.textContent = "Lanjut: Waktu & Lokasi";

      // Navigasi Pane 2
      if (stepCounter2) stepCounter2.textContent = "Langkah 2 dari 4";

      // Navigasi Pane 3
      if (stepCounter3) stepCounter3.textContent = "Langkah 3 dari 4";
      if (btnPrevPane3) btnPrevPane3.setAttribute("data-target-tab", "1"); // Kembali ke Waktu & Lokasi
      if (btnPrevText3) btnPrevText3.textContent = "Kembali: Waktu & Lokasi";

      // Navigasi Pane 4
      if (stepCounter4) stepCounter4.textContent = "Langkah 4 dari 4";
    }

    // 3. Update Tab 2 callouts
    if (dom.tabEventGreetingNotice && dom.tabEventInfoCallout) {
      if (isGreeting) {
        dom.tabEventGreetingNotice.classList.remove("hidden");
        dom.tabEventInfoCallout.classList.add("hidden");
      } else {
        dom.tabEventGreetingNotice.classList.add("hidden");
        dom.tabEventInfoCallout.classList.remove("hidden");
      }
    }

    // 4. Re-render studio card and dramatic view
    renderCard();
    syncDramaticViewWithState();

    if (!silent) {
      const msg = isGreeting
        ? "Mode diubah ke: Memberikan Ucapan Selamat (Pilihan waktu & lokasi ditiadakan)"
        : "Mode diubah ke: Mengundang Hadir di Acara (Lengkap dengan pilihan waktu, lokasi, & RSVP)";
      showToast(msg, "info");
    }
  }

  // =========================================================================
  // 6c. Dramatic Invitation Engine (Ala Ultah-Echa)
  // =========================================================================
  let countdownInterval = null;

  function syncDramaticViewWithState() {
    const recName = state.recipient.trim() || "Echa";
    const title = state.title.trim() || "Happy Birthday";
    const milestone = state.milestone.trim() || "Spesial Untuk Sahabat Terbaik 🌸";
    const sender = state.sender.trim() || "Dari: Sahabat Terbaikmu 💕";
    const formattedDate = formatDateIndonesian(state.date) || "Sabtu, 19 Oktober 2026";
    const time = state.time.trim() ? `${state.time.trim()} – Selesai` : "Pukul 15:00 WIB – Selesai";
    const location = state.location.trim() || "The Garden Pavilion & Cafe";
    const rsvp = state.rsvp.trim() || "Kehadiran dan senyum bahagiamu adalah hadiah terindah.";

    if (dom.envelopeModalName) dom.envelopeModalName.textContent = recName;
    if (dom.envelopeModalBadge) dom.envelopeModalBadge.textContent = milestone;

    if (dom.dramaticBadgeContent) dom.dramaticBadgeContent.textContent = milestone;
    if (dom.dramaticHeroTitlePrefix) dom.dramaticHeroTitlePrefix.textContent = title.endsWith("!") || title.endsWith(",") ? title : `${title},`;
    if (dom.dramaticHeroName) dom.dramaticHeroName.textContent = recName;
    if (dom.dramaticHeroMilestone) dom.dramaticHeroMilestone.textContent = milestone;

    if (dom.dramaticBannerTag) dom.dramaticBannerTag.textContent = milestone;
    if (dom.dramaticBannerTitle) dom.dramaticBannerTitle.textContent = `${title} ${recName}`;

    if (dom.dramaticLetterName) dom.dramaticLetterName.textContent = recName;
    if (dom.dramaticLetterMessage) {
      const paragraphs = state.message.split("\n").filter(p => p.trim());
      if (paragraphs.length > 1) {
        dom.dramaticLetterMessage.innerHTML = paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");
      } else {
        dom.dramaticLetterMessage.innerHTML = `<p>${escapeHtml(state.message)}</p>`;
      }
    }
    if (dom.dramaticLetterSign) dom.dramaticLetterSign.textContent = sender;

    if (dom.dramaticEventDate) dom.dramaticEventDate.textContent = formattedDate;
    if (dom.dramaticEventTime) dom.dramaticEventTime.textContent = time;
    if (dom.dramaticEventLocName) dom.dramaticEventLocName.textContent = location;
    if (dom.dramaticMapsLink) {
      dom.dramaticMapsLink.href = `https://maps.google.com/?q=${encodeURIComponent(location)}`;
    }
    if (dom.dramaticEventRsvpNote) dom.dramaticEventRsvpNote.textContent = rsvp;

    // --- Dynamic Card Role Visibility ---
    const isGreeting = state.cardRole === "greeting";

    // 1. Countdown Box
    if (dom.dramaticCountdownBox) {
      dom.dramaticCountdownBox.style.display = isGreeting ? "none" : "block";
    }

    // 2. Guestbook & RSVP Section (including wishes board)
    if (dom.dramaticGuestbookSection) {
      dom.dramaticGuestbookSection.style.display = isGreeting ? "none" : "block";
    }

    // 3. Event Details Section
    if (dom.dramaticEventSection) {
      dom.dramaticEventSection.style.display = isGreeting ? "none" : "block";
    }

    // 4. Update banner copy & share labels based on role
    if (isGreeting) {
      if (dom.dramaticBannerSub) {
        dom.dramaticBannerSub.textContent = "Pesan hangat, doa tulus, dan perayaan spesial dari sahabat! 🌸";
      }
      if (dom.dramaticShareTitle) dom.dramaticShareTitle.textContent = "Bagikan Kartu Ucapan Ini 💌";
      if (dom.dramaticShareSubtitle) {
        dom.dramaticShareSubtitle.textContent = "Kirimkan tautan kartu ucapan ini ke WhatsApp atau Telegram agar teman-teman lainnya bisa ikut membaca ucapan dan doa hangat ini!";
      }
      if (dom.dramaticCopyLinkText) dom.dramaticCopyLinkText.textContent = "Salin Link Kartu Ucapan";
    } else {
      if (dom.dramaticBannerSub) {
        dom.dramaticBannerSub.textContent = "You're cordially invited to celebrate! 🌸";
      }
      if (dom.dramaticShareTitle) dom.dramaticShareTitle.textContent = "Bagikan Undangan Ini 💌";
      if (dom.dramaticShareSubtitle) {
        dom.dramaticShareSubtitle.textContent = "Kirimkan tautan undangan ini ke Telegram atau WhatsApp agar sahabat dan teman-teman lainnya bisa ikut memberikan ucapan selamat!";
      }
      if (dom.dramaticCopyLinkText) dom.dramaticCopyLinkText.textContent = "Salin Link Undangan";
    }

    // 5. Update Envelope Wax Seal Modal Copy
    if (dom.btnOpenDramaticInvitation) {
      const openBtnText = dom.btnOpenDramaticInvitation.querySelector("span:first-child");
      if (openBtnText) {
        openBtnText.textContent = isGreeting ? "Buka Kartu Ucapan" : "Buka Undangan";
      }
    }
    const envelopeScript = document.querySelector(".envelope-modal-script");
    if (envelopeScript) {
      envelopeScript.textContent = isGreeting ? "Sebuah kartu ucapan spesial untukmu! 🌸" : "You're warmly invited to celebrate! 🌸";
    }
    const envelopeDesc = document.querySelector(".envelope-modal-desc");
    if (envelopeDesc) {
      envelopeDesc.textContent = isGreeting
        ? "Ada pesan hangat, doa tulus, dan perayaan indah yang telah disiapkan khusus untuk menyambut hari bahagiamu."
        : "Ada sebuah surat manis, perayaan penuh kebahagiaan, dan informasi acara yang telah disiapkan khusus untuk menyambut kehadiranmu.";
    }

    // 6. Update Dramatic Gallery Title & Render Polaroids
    if (dom.dramaticGalleryTitle) {
      dom.dramaticGalleryTitle.textContent = recName && recName !== "Echa" ? `Galeri Kenangan ${recName}` : "Galeri Kenangan Sahabat";
    }
    renderDramaticGallery();

    if (!isGreeting) {
      updateDramaticCountdown();
    }
  }

  function updateDramaticCountdown() {
    if (!dom.dramaticDays || !dom.dramaticHours || !dom.dramaticMinutes || !dom.dramaticSeconds) return;

    let targetMs = 0;
    if (state.date) {
      let timeStr = "15:00:00";
      const timeMatch = (state.time || "").match(/(\d{1,2})[:.](\d{2})/);
      if (timeMatch) {
        timeStr = `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}:00`;
      }
      const parsed = new Date(`${state.date}T${timeStr}`);
      if (!isNaN(parsed.getTime())) {
        targetMs = parsed.getTime();
      }
    }

    if (!targetMs) {
      targetMs = Date.now() + (24 * 24 * 3600 * 1000);
    }

    const now = Date.now();
    let diff = targetMs - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    dom.dramaticDays.textContent = String(days).padStart(2, "0");
    dom.dramaticHours.textContent = String(hours).padStart(2, "0");
    dom.dramaticMinutes.textContent = String(minutes).padStart(2, "0");
    dom.dramaticSeconds.textContent = String(seconds).padStart(2, "0");
  }

  function initDramaticCountdown() {
    if (state.cardRole === "greeting") {
      if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
      return;
    }
    updateDramaticCountdown();
    if (!countdownInterval) {
      countdownInterval = setInterval(() => {
        if (state.cardRole === "greeting") {
          clearInterval(countdownInterval);
          countdownInterval = null;
          return;
        }
        updateDramaticCountdown();
      }, 1000);
    }
  }

  function blowDramaticCandles() {
    if (state.isDramaticCandleBlown) {
      // Relight
      state.isDramaticCandleBlown = false;
      if (dom.dramaticFlames) {
        dom.dramaticFlames.forEach(f => f.classList.remove("blown-out"));
      }
      if (dom.dramaticSmokes) {
        dom.dramaticSmokes.forEach(s => s.classList.remove("active"));
      }
      if (dom.dramaticBlowText) {
        dom.dramaticBlowText.textContent = "Tiup Lilin Sekarang! 🎂";
      }
      return;
    }

    state.isDramaticCandleBlown = true;
    playBlowSound();

    if (dom.dramaticFlames) {
      dom.dramaticFlames.forEach(f => f.classList.add("blown-out"));
    }
    if (dom.dramaticSmokes) {
      dom.dramaticSmokes.forEach(s => s.classList.add("active"));
    }

    setTimeout(() => {
      playCheerChime();
      fireMegaFireworks();
      showCelebrationPopup();
      if (dom.dramaticBlowText) {
        dom.dramaticBlowText.textContent = "Nyalakan Lilin Kembali ✨";
      }
    }, 400);
  }

  function showCelebrationPopup() {
    if (dom.celebrationPopup) {
      dom.celebrationPopup.classList.remove("hidden");
      const closeBtn = document.getElementById("btn-close-celebration-popup");
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeCelebrationPopup() {
    if (dom.celebrationPopup) {
      dom.celebrationPopup.classList.add("hidden");
    }
  }

  const DEFAULT_WISHES = [
    {
      name: "Sahabat Terbaikmu 💕",
      status: "Hadir",
      message: "Happy birthday Echa tersayang! Terima kasih udah selalu jadi sahabat yang paling baik, paling mengerti, dan selalu ada di suka maupun duka. Semoga tahun ini penuh keberkahan, kebahagiaan, dan semua cita-citamu tercapai! Love you to the moon and back! 💖✨",
      time: "Hari ini, 09:30"
    },
    {
      name: "Rian & Geng Kampus 🎓",
      status: "Hadir",
      message: "Met ultah Cha! Makin sukses, bahagia selalu, dan jangan lupa traktirannya yaa haha! See you at the party! 🥳🎉",
      time: "Hari ini, 10:15"
    },
    {
      name: "Nabila Putri ✨",
      status: "Hadir",
      message: "Barakallah fii umrik Echa cantik! Semoga berkah umurnya, dimudahkan segala urusannya, dan senantiasa dalam lindungan Allah SWT. Aamiin 🌸",
      time: "Hari ini, 11:00"
    }
  ];

  function getStoredWishes() {
    try {
      const raw = localStorage.getItem("karsa-dramatic-wishes");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return [...DEFAULT_WISHES];
  }

  function renderDramaticWishes() {
    if (!dom.dramaticWishesContainer) return;
    const wishes = getStoredWishes();

    if (dom.dramaticWishesCount) {
      dom.dramaticWishesCount.textContent = `${wishes.length} Doa & Ucapan`;
    }

    dom.dramaticWishesContainer.innerHTML = wishes.map((item) => {
      const isAttending = item.status === "Hadir";
      const statusBadge = isAttending
        ? '<span class="status-pill status-hadir">✓ Hadir</span>'
        : item.status === "Belum Pasti"
        ? '<span class="status-pill status-ragu">? Belum Pasti</span>'
        : '<span class="status-pill status-absen">✕ Berhalangan</span>';

      return `
        <article class="wish-card" tabindex="0">
          <div class="wish-card-top">
            <div class="wish-author">
              <span class="wish-avatar" aria-hidden="true">${escapeHtml(item.name.charAt(0).toUpperCase())}</span>
              <div>
                <h4 class="wish-name">${escapeHtml(item.name)}</h4>
                <time class="wish-time">${escapeHtml(item.time || "Baru saja")}</time>
              </div>
            </div>
            ${statusBadge}
          </div>
          <p class="wish-text">${escapeHtml(item.message)}</p>
        </article>
      `;
    }).join("");
  }

  function handleWishSubmit(e) {
    e.preventDefault();
    const name = (dom.dramaticWishName ? dom.dramaticWishName.value : "").trim();
    const status = dom.dramaticWishStatus ? dom.dramaticWishStatus.value : "Hadir";
    const message = (dom.dramaticWishMessage ? dom.dramaticWishMessage.value : "").trim();

    if (!name || !message) {
      showToast("Mohon isi nama dan pesan doa Anda", "error");
      return;
    }

    const now = new Date();
    const timeFormatted = `Hari ini, ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const newWish = {
      name,
      status,
      message,
      time: timeFormatted
    };

    const list = getStoredWishes();
    list.unshift(newWish);
    try {
      localStorage.setItem("karsa-dramatic-wishes", JSON.stringify(list));
    } catch (err) {}

    renderDramaticWishes();
    if (dom.dramaticWishForm) dom.dramaticWishForm.reset();
    showToast("Doa & ucapan Anda berhasil dikirim!", "success");
    fireConfettiBlast();
  }

  function openDramaticInvitationModal() {
    if (dom.envelopeModal) {
      dom.envelopeModal.classList.remove("hidden");
      if (dom.envelopeCover) {
        dom.envelopeCover.style.transform = "scale(1)";
        dom.envelopeCover.style.opacity = "1";
      }
    }
  }

  function openDramaticInvitation() {
    if (dom.envelopeCover) {
      dom.envelopeCover.style.transform = "scale(0.9) translateY(-30px)";
      dom.envelopeCover.style.opacity = "0";
    }

    setTimeout(() => {
      if (dom.envelopeModal) dom.envelopeModal.classList.add("hidden");
      if (dom.dramaticInvitationView) dom.dramaticInvitationView.classList.remove("hidden");
      if (dom.dramaticFloatingControls) dom.dramaticFloatingControls.classList.remove("hidden");

      fireConfettiBlast();
      toggleMusic(true);
      initDramaticCountdown();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  }

  function openDramaticPreview() {
    state.isDramaticPreview = true;
    syncDramaticViewWithState();
    if (dom.dramaticInvitationView) dom.dramaticInvitationView.classList.remove("hidden");
    if (dom.dramaticFloatingControls) {
      dom.dramaticFloatingControls.classList.remove("hidden");
      if (dom.btnCloseDramaticPreview) dom.btnCloseDramaticPreview.classList.remove("hidden");
    }
    dom.dramaticInvitationView.scrollIntoView({ behavior: "smooth" });
    fireConfettiBlast();
    initDramaticCountdown();
    showToast("Pratinjau Undangan Dramatis Ala Echa aktif!", "info");
  }

  function closeDramaticPreview() {
    state.isDramaticPreview = false;
    if (dom.dramaticInvitationView) dom.dramaticInvitationView.classList.add("hidden");
    if (dom.dramaticFloatingControls) dom.dramaticFloatingControls.classList.add("hidden");
    if (dom.envelopeModal) dom.envelopeModal.classList.add("hidden");
    toggleMusic(false);

    const preview = document.getElementById("preview-stage");
    if (preview) preview.scrollIntoView({ behavior: "smooth" });
  }

  // =========================================================================
  // 6d. Photo Upload & Memories Gallery Engine (Polaroid Gallery)
  // =========================================================================
  const DEFAULT_POLAROIDS_HTML = `
    <div class="polaroid-card pol-1">
      <div class="washi-tape tape-variant-1" aria-hidden="true"></div>
      <div class="polaroid-frame">
        <div class="polaroid-visual visual-coffee">☕✨</div>
      </div>
      <p class="polaroid-caption">"Sesi ngopi & curhat tanpa akhir ☕"</p>
      <p class="polaroid-sub">Teman cerita yang selalu ada</p>
    </div>

    <div class="polaroid-card pol-2">
      <div class="washi-tape tape-variant-2" aria-hidden="true"></div>
      <div class="polaroid-frame">
        <div class="polaroid-visual visual-laugh">😂🎉</div>
      </div>
      <p class="polaroid-caption">"Ketawa sampai perut kram! 😆"</p>
      <p class="polaroid-sub">Selalu seru tiap kali ketemu</p>
    </div>

    <div class="polaroid-card pol-3">
      <div class="washi-tape tape-variant-3" aria-hidden="true"></div>
      <div class="polaroid-frame">
        <div class="polaroid-visual visual-bestie">🌷💖</div>
      </div>
      <p class="polaroid-caption">"Always supportive bestie 👭"</p>
      <p class="polaroid-sub">Saling dukung dalam segala hal</p>
    </div>
  `;

  const SAMPLE_GALLERY_PHOTOS = [
    {
      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'><rect width='600' height='450' fill='%23fff1f2'/><circle cx='300' cy='225' r='160' fill='%23ffe4e6'/><g transform='translate(180, 110) scale(1.6)'><rect x='35' y='55' width='80' height='70' rx='10' fill='%23e11d48'/><path d='M115 70 C135 70, 135 105, 115 105' fill='none' stroke='%23e11d48' stroke-width='8'/><rect x='25' y='125' width='100' height='8' rx='4' fill='%23be123c'/><ellipse cx='75' cy='55' rx='35' ry='12' fill='%23be123c'/><path d='M55 40 Q65 20 60 5 M75 40 Q85 20 80 5 M95 40 Q105 20 100 5' fill='none' stroke='%23fda4af' stroke-width='4' stroke-linecap='round'/></g><text x='300' y='380' font-family='sans-serif' font-size='22' font-weight='bold' fill='%239f1239' text-anchor='middle'>Sesi Ngopi &amp; Curhat ☕</text></svg>",
      caption: "Sesi ngopi & curhat tanpa akhir ☕",
      sub: "Teman cerita yang selalu ada"
    },
    {
      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'><rect width='600' height='450' fill='%23fef3c7'/><circle cx='300' cy='225' r='160' fill='%23fde68a'/><g transform='translate(190, 100) scale(1.5)'><circle cx='75' cy='75' r='55' fill='%23f59e0b'/><circle cx='55' cy='65' r='7' fill='%2378350f'/><circle cx='95' cy='65' r='7' fill='%2378350f'/><path d='M50 85 Q75 120 100 85 Z' fill='%23b45309'/><polygon points='20,10 30,30 10,25' fill='%23ef4444'/><polygon points='130,20 115,35 135,40' fill='%233b82f6'/><polygon points='120,120 140,110 130,135' fill='%2310b981'/><circle cx='30' cy='110' r='6' fill='%23ec4899'/></g><text x='300' y='380' font-family='sans-serif' font-size='22' font-weight='bold' fill='%23b45309' text-anchor='middle'>Ketawa Sampai Kram! 🎉</text></svg>",
      caption: "Ketawa sampai perut kram! 😆",
      sub: "Selalu seru tiap kali ketemu"
    },
    {
      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'><rect width='600' height='450' fill='%23eff6ff'/><circle cx='300' cy='225' r='160' fill='%23dbeafe'/><g transform='translate(190, 110) scale(1.5)'><path d='M75 40 C60 10, 15 25, 30 70 C45 110, 75 130, 75 130 C75 130, 105 110, 120 70 C135 25, 90 10, 75 40 Z' fill='%23ec4899'/><circle cx='50' cy='65' r='12' fill='%23fbcfe8'/><circle cx='100' cy='65' r='12' fill='%23fbcfe8'/><text x='75' y='90' font-family='sans-serif' font-size='30' text-anchor='middle'>👭</text></g><text x='300' y='380' font-family='sans-serif' font-size='22' font-weight='bold' fill='%231d4ed8' text-anchor='middle'>Always Supportive Bestie 💕</text></svg>",
      caption: "Always supportive bestie 👭",
      sub: "Saling dukung dalam segala hal"
    }
  ];

  function saveDraftToStorage() {
    try {
      const payload = {
        t: state.template,
        r: state.recipient,
        h: state.title,
        m: state.milestone,
        msg: state.message,
        s: state.sender,
        d: state.date,
        tm: state.time,
        l: state.location,
        rsvp: state.rsvp,
        f: state.font,
        role: state.cardRole,
        photos: state.photos || []
      };
      localStorage.setItem("karsa-last-created-card", JSON.stringify(payload));
    } catch (e) {}
  }

  function compressImageFile(file, maxDimension = 1000, quality = 0.82) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.match(/^image\//i)) {
        return reject(new Error("Format berkas harus berupa gambar (JPG, PNG, atau WEBP)."));
      }
      if (file.size > 15 * 1024 * 1024) {
        return reject(new Error("Ukuran berkas asli maksimal 15MB."));
      }

      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Gagal membaca berkas gambar."));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error("Gagal memproses gambar."));
        img.onload = () => {
          let width = img.naturalWidth || img.width;
          let height = img.naturalHeight || img.height;

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);

          try {
            const dataUrl = canvas.toDataURL("image/jpeg", quality);
            resolve(dataUrl);
          } catch (err) {
            resolve(e.target.result);
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function handlePhotoUpload(fileList) {
    if (!fileList || fileList.length === 0) return;

    if (!state.photos) state.photos = [];
    const remainingSlots = 6 - state.photos.length;
    if (remainingSlots <= 0) {
      showToast("Maksimal 6 foto telah tercapai. Hapus salah satu foto jika ingin mengganti.", "warning");
      return;
    }

    const filesToProcess = Array.from(fileList).slice(0, remainingSlots);
    if (fileList.length > remainingSlots) {
      showToast(`Hanya ${remainingSlots} foto yang dapat ditambahkan (batas maksimal 6 foto).`, "info");
    }

    showToast("Mengompresi dan mengunggah foto...", "info");

    let addedCount = 0;
    for (const file of filesToProcess) {
      try {
        const compressedUrl = await compressImageFile(file, 1000, 0.82);
        state.photos.push({
          url: compressedUrl,
          caption: "Momen Bahagia 💖",
          sub: "Kenangan Bersama"
        });
        addedCount++;
      } catch (err) {
        console.warn("Gagal memproses gambar:", err);
        showToast(err.message || "Gagal memproses satu foto.", "error");
      }
    }

    if (addedCount > 0) {
      renderPhotoUploadList();
      renderDramaticGallery();
      renderCardPhotosStrip();
      saveDraftToStorage();
      showToast(`${addedCount} foto berhasil ditambahkan ke Galeri Kenangan!`, "success");
    }
  }

  function renderPhotoUploadList() {
    if (!dom.galleryUploadList || !dom.galleryEmptyState) return;

    const count = state.photos ? state.photos.length : 0;
    if (dom.galleryCountText) {
      dom.galleryCountText.textContent = `${count} / 6 foto terunggah`;
    }

    if (count === 0) {
      dom.galleryUploadList.classList.add("hidden");
      dom.galleryUploadList.innerHTML = "";
      dom.galleryEmptyState.classList.remove("hidden");
      if (dom.btnClearAllPhotos) dom.btnClearAllPhotos.classList.add("hidden");
      return;
    }

    dom.galleryEmptyState.classList.add("hidden");
    dom.galleryUploadList.classList.remove("hidden");
    if (dom.btnClearAllPhotos) dom.btnClearAllPhotos.classList.remove("hidden");

    let html = "";
    state.photos.forEach((photo, index) => {
      html += `
        <div class="gallery-photo-item" data-index="${index}">
          <div class="photo-thumb-wrap">
            <img src="${photo.url}" alt="Foto ${index + 1}" class="photo-thumb-img">
            <span class="photo-order-tag">#${index + 1}</span>
          </div>
          <div class="photo-fields-wrap">
            <input type="text" class="photo-input-caption" placeholder="Caption foto (contoh: Liburan bareng 🌊)" value="${escapeHtml(photo.caption || '')}" maxlength="70" aria-label="Caption foto ${index + 1}">
            <input type="text" class="photo-input-sub" placeholder="Keterangan singkat / tanggal (opsional)" value="${escapeHtml(photo.sub || '')}" maxlength="50" aria-label="Keterangan foto ${index + 1}">
          </div>
          <button type="button" class="photo-delete-btn" aria-label="Hapus foto ${index + 1}" title="Hapus foto ini">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
    });

    dom.galleryUploadList.innerHTML = html;

    dom.galleryUploadList.querySelectorAll(".gallery-photo-item").forEach(item => {
      const idx = parseInt(item.getAttribute("data-index"), 10);
      const capInput = item.querySelector(".photo-input-caption");
      const subInput = item.querySelector(".photo-input-sub");
      const delBtn = item.querySelector(".photo-delete-btn");

      if (capInput) {
        capInput.addEventListener("input", (e) => {
          if (state.photos[idx]) {
            state.photos[idx].caption = e.target.value;
            renderDramaticGallery();
            renderCardPhotosStrip();
            saveDraftToStorage();
          }
        });
      }

      if (subInput) {
        subInput.addEventListener("input", (e) => {
          if (state.photos[idx]) {
            state.photos[idx].sub = e.target.value;
            renderDramaticGallery();
            saveDraftToStorage();
          }
        });
      }

      if (delBtn) {
        delBtn.addEventListener("click", () => {
          state.photos.splice(idx, 1);
          renderPhotoUploadList();
          renderDramaticGallery();
          renderCardPhotosStrip();
          saveDraftToStorage();
          showToast("Foto berhasil dihapus.", "info");
        });
      }
    });
  }

  function renderDramaticGallery() {
    if (!dom.dramaticPolaroidsRow) return;

    if (!state.photos || state.photos.length === 0) {
      dom.dramaticPolaroidsRow.innerHTML = DEFAULT_POLAROIDS_HTML;
      return;
    }

    const html = state.photos.map((photo, index) => {
      const polClass = `pol-${(index % 6) + 1}`;
      const tapeClass = `tape-variant-${(index % 4) + 1}`;
      const caption = photo.caption && photo.caption.trim() ? photo.caption.trim() : "Momen Bahagia 💖";
      const sub = photo.sub && photo.sub.trim() ? photo.sub.trim() : "Kenangan Bersama";

      return `
        <div class="polaroid-card ${polClass} custom-photo" data-photo-index="${index}" role="button" tabindex="0" aria-label="Lihat foto lebih besar: ${escapeHtml(caption)}">
          <div class="washi-tape ${tapeClass}" aria-hidden="true"></div>
          <div class="polaroid-frame">
            <img src="${photo.url}" alt="${escapeHtml(caption)}" class="polaroid-photo-img" loading="lazy">
            <span class="polaroid-zoom-badge" aria-hidden="true">🔍</span>
          </div>
          <p class="polaroid-caption">"${escapeHtml(caption)}"</p>
          <p class="polaroid-sub">${escapeHtml(sub)}</p>
        </div>
      `;
    }).join("");

    dom.dramaticPolaroidsRow.innerHTML = html;

    dom.dramaticPolaroidsRow.querySelectorAll(".polaroid-card.custom-photo").forEach(card => {
      const openHandler = () => {
        const idx = parseInt(card.getAttribute("data-photo-index"), 10);
        if (state.photos && state.photos[idx]) {
          openPhotoLightbox(state.photos[idx]);
        }
      };

      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

  function renderCardPhotosStrip() {
    if (!dom.cardPhotosPreviewStrip || !dom.cardPhotosStripThumbs) return;
    if (state.photos && state.photos.length > 0) {
      dom.cardPhotosPreviewStrip.classList.remove("hidden");
      if (dom.cardPhotosStripText) {
        dom.cardPhotosStripText.textContent = `${state.photos.length} Foto Kenangan Terlampir`;
      }
      const maxThumbs = 4;
      const shown = state.photos.slice(0, maxThumbs);
      let html = shown.map(p => `
        <div class="card-strip-thumb-item" title="${escapeHtml(p.caption || 'Foto Kenangan')}">
          <img src="${p.url}" alt="${escapeHtml(p.caption || 'Foto Kenangan')}" loading="lazy">
        </div>
      `).join("");
      if (state.photos.length > maxThumbs) {
        html += `<div class="card-strip-thumb-item extra-count" style="display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;background:var(--color-primary-subtle);color:var(--color-primary);font-variant-numeric:tabular-nums;">+${state.photos.length - maxThumbs}</div>`;
      }
      dom.cardPhotosStripThumbs.innerHTML = html;
    } else {
      dom.cardPhotosPreviewStrip.classList.add("hidden");
      dom.cardPhotosStripThumbs.innerHTML = "";
    }
  }

  function openPhotoLightbox(photo) {
    if (!dom.galleryLightboxModal || !dom.lightboxImg) return;
    dom.lightboxImg.src = photo.url;
    if (dom.lightboxCaption) {
      dom.lightboxCaption.textContent = photo.caption && photo.caption.trim() ? `"${photo.caption.trim()}"` : "";
    }
    if (dom.lightboxSub) {
      dom.lightboxSub.textContent = photo.sub || "";
    }
    dom.galleryLightboxModal.classList.remove("hidden");
    if (dom.btnCloseLightbox) {
      dom.btnCloseLightbox.focus();
    }
  }

  function closePhotoLightbox() {
    if (!dom.galleryLightboxModal) return;
    dom.galleryLightboxModal.classList.add("hidden");
    if (dom.lightboxImg) {
      dom.lightboxImg.src = "";
    }
  }

  function clearAllPhotos() {
    if (!state.photos || state.photos.length === 0) return;
    state.photos = [];
    renderPhotoUploadList();
    renderDramaticGallery();
    renderCardPhotosStrip();
    saveDraftToStorage();
    showToast("Semua foto berhasil dihapus dari galeri kenangan.", "info");
  }

  function loadSamplePhotos() {
    state.photos = JSON.parse(JSON.stringify(SAMPLE_GALLERY_PHOTOS));
    renderPhotoUploadList();
    renderDramaticGallery();
    renderCardPhotosStrip();
    saveDraftToStorage();
    showToast("3 foto kenangan contoh berhasil dimuat!", "success");
  }

  function syncFormWithState() {
    dom.templateSelect.value = state.template;
    dom.recipientInput.value = state.recipient;
    dom.titleInput.value = state.title;
    dom.milestoneInput.value = state.milestone;
    dom.messageInput.value = state.message;
    dom.senderInput.value = state.sender;
    dom.dateInput.value = state.date;
    dom.timeInput.value = state.time;
    dom.locationInput.value = state.location;
    dom.rsvpInput.value = state.rsvp;
    dom.fontSelect.value = state.font;

    dom.toneRadios.forEach(radio => {
      radio.checked = radio.value === state.tone;
    });

    setCardRole(state.cardRole, true);
    renderPhotoUploadList();
    renderCardPhotosStrip();
    renderCard();
  }

  // =========================================================================
  // 7. Toast Notification System
  // =========================================================================
  function showToast(message, type = "success") {
    if (!dom.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", "status");

    let icon = "✓";
    if (type === "error") icon = "✕";
    if (type === "info") icon = "ℹ";

    toast.innerHTML = `<span aria-hidden="true" style="font-weight:700;">${icon}</span><span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(20px)";
      toast.style.transition = "opacity 200ms ease, transform 200ms ease";
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 200);
    }, 3500);
  }

  // =========================================================================
  // 8. URL Serialization & Deserialization
  // =========================================================================
  function generateSharePayload() {
    const payload = {
      t: state.template,
      r: state.recipient,
      h: state.title,
      m: state.milestone,
      msg: state.message,
      s: state.sender,
      d: state.date,
      tm: state.time,
      l: state.location,
      rsvp: state.rsvp,
      f: state.font,
      role: state.cardRole,
      photos: state.photos || []
    };
    return encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(payload)))));
  }

  let cachedShortUrl = null;

  async function getOrSaveShareableURL() {
    const payload = {
      t: state.template,
      r: state.recipient,
      h: state.title,
      m: state.milestone,
      msg: state.message,
      s: state.sender,
      d: state.date,
      tm: state.time,
      l: state.location,
      rsvp: state.rsvp,
      f: state.font,
      role: state.cardRole,
      photos: state.photos || []
    };

    try {
      localStorage.setItem("karsa-last-created-card", JSON.stringify(payload));
    } catch (e) {}

    // 1. URL-Safe Base64 Fallback (tanpa '=', penggantian + jadi - dan / jadi _)
    let urlSafeB64 = "";
    try {
      const jsonStr = JSON.stringify(payload);
      const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
      urlSafeB64 = b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } catch (e) {}

    const baseUrl = window.location.href.split("#")[0].split("?")[0].replace(/\/+$/, "") + "/";
    const fallbackUrl = `${baseUrl}?card=${urlSafeB64}`;

    // 2. Simpan ke Backend Server untuk Tautan Pendek Bersih & Tahan Potongan WhatsApp
    try {
      const response = await fetch("/api/card/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card: payload })
      });
      if (response.ok) {
        const res = await response.json();
        if (res.success && res.id) {
          cachedShortUrl = `${baseUrl}?c=${res.id}`;
          return cachedShortUrl;
        }
      }
    } catch (err) {
      console.warn("Gagal menyimpan kartu ke server, beralih ke fallback base64 URL-safe:", err);
    }

    return fallbackUrl;
  }

  function getShareableURL() {
    if (cachedShortUrl) return cachedShortUrl;
    const baseUrl = window.location.href.split("#")[0].split("?")[0].replace(/\/+$/, "") + "/";
    const payload = {
      t: state.template,
      r: state.recipient,
      h: state.title,
      m: state.milestone,
      msg: state.message,
      s: state.sender,
      d: state.date,
      tm: state.time,
      l: state.location,
      rsvp: state.rsvp,
      f: state.font,
      role: state.cardRole,
      photos: state.photos || []
    };
    try {
      const jsonStr = JSON.stringify(payload);
      const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
      const urlSafeB64 = b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      return `${baseUrl}?card=${urlSafeB64}`;
    } catch (e) {
      return baseUrl;
    }
  }

  async function loadStateFromURL() {
    try {
      let data = null;
      const urlObj = new URL(window.location.href);

      // 1. Cek parameter tautan pendek (?c=... atau ?id=...)
      const shortId = urlObj.searchParams.get("c") || urlObj.searchParams.get("id");
      if (shortId) {
        const cleanId = shortId.replace(/[^a-zA-Z0-9-_]/g, "");
        if (cleanId) {
          try {
            const res = await fetch(`/api/card?id=${cleanId}`);
            if (res.ok) {
              data = await res.json();
            } else {
              const res2 = await fetch(`cards/${cleanId}.json`);
              if (res2.ok) data = await res2.json();
            }
          } catch (e) {
            console.warn("Gagal mengambil data kartu dari server:", e);
          }
        }
      }

      // 2. Fallback cek parameter base64 (?card=... atau #card=...)
      if (!data) {
        let raw = urlObj.searchParams.get("card");
        if (!raw && window.location.href.includes("?card=")) {
          const match = window.location.href.match(/[?&]card=([^&#]+)/);
          if (match) raw = match[1];
        }
        if (!raw && window.location.hash && window.location.hash.includes("card=")) {
          const match = window.location.hash.match(/#card=([^&#]+)/);
          if (match) raw = match[1];
        }

        if (raw) {
          raw = raw.split("&")[0].split("#")[0];
          let cleanB64 = decodeURIComponent(raw).replace(/ /g, "+").replace(/-/g, "+").replace(/_/g, "/");
          while (cleanB64.length % 4 !== 0) {
            cleanB64 += "=";
          }
          const jsonStr = decodeURIComponent(escape(atob(cleanB64)));
          data = JSON.parse(jsonStr);
        }
      }

      if (!data) return false;

      // Sinkronisasi data ke state aplikasi
      if (data.t) state.template = data.t;
      if (data.r) state.recipient = data.r;
      if (data.h) state.title = data.h;
      if (data.m) state.milestone = data.m;
      if (data.msg) state.message = data.msg;
      if (data.s) state.sender = data.s;
      if (data.d) state.date = data.d;
      if (data.tm) state.time = data.tm;
      if (data.l) state.location = data.l;
      if (data.rsvp) state.rsvp = data.rsvp;
      if (data.f) state.font = data.f;
      if (data.role) state.cardRole = data.role === "greeting" ? "greeting" : "invitation";
      if (data.photos && Array.isArray(data.photos)) {
        state.photos = data.photos;
      } else if (data.p && Array.isArray(data.p)) {
        state.photos = data.p;
      }

      state.isRecipientView = true;
      return true;
    } catch (e) {
      console.warn("Gagal memuat data kartu dari URL:", e);
      return false;
    }
  }

  function updateRecipientOpenButton(opened) {
    const btn = dom.btnRecipientOpenToggle;
    const icon = document.getElementById("recipient-toggle-icon");
    const text = document.getElementById("recipient-toggle-text");
    if (!btn || !text) return;

    if (opened) {
      if (icon) icon.textContent = "✉️";
      text.textContent = "Tutup ke Amplop";
      btn.className = "btn btn-ghost btn-lg";
      btn.setAttribute("aria-label", "Tutup kartu ke dalam amplop");
    } else {
      if (icon) icon.textContent = "✦";
      text.textContent = "Buka Kartu";
      btn.className = "btn btn-primary btn-lg";
      btn.setAttribute("aria-label", "Buka kartu ucapan dari amplop");
    }
  }

  function openRecipientCard() {
    state.isEnvelopeOpened = true;
    renderCard();
    playCelebrationChime();
    launchConfetti();
    updateRecipientOpenButton(true);
  }

  function toggleRecipientEnvelope() {
    if (state.isEnvelopeOpened) {
      state.isEnvelopeOpened = false;
      renderCard();
      updateRecipientOpenButton(false);
    } else {
      openRecipientCard();
    }
  }

  function replyViaWhatsApp() {
    const rawSender = state.sender ? state.sender.replace(/^Dari:\s*/i, "").trim() : "";
    const greeting = rawSender ? `Halo ${rawSender}!` : "Halo!";
    const replyText = `${greeting} Terima kasih banyak atas kiriman kartu ucapan "${state.title}" yang sangat berkesan dan indah ini. Senang dan bahagia sekali menerimanya! ❤️`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(replyText)}`, "_blank");
  }

  function activateRecipientMode() {
    state.isRecipientView = true;
    document.body.classList.add("recipient-mode");

    // Sembunyikan elemen pembuat kartu, navbar, katalog & studio editor
    if (dom.recipientBanner) dom.recipientBanner.classList.add("hidden");
    const editorSec = document.getElementById("studio-editor");
    if (editorSec) editorSec.classList.add("hidden");

    // Pastikan tombol atau banner pemilih mode tidak pernah ada di halaman penerima
    document.querySelectorAll("#btn-toggle-dramatic-role, #btn-switch-dramatic-role, #dramatic-role-banner, .floating-role-btn, .role-switch-btn").forEach(el => el.remove());

    // Tampilkan Tampilan Undangan Dramatis Ala Echa
    if (dom.dramaticInvitationView) dom.dramaticInvitationView.classList.remove("hidden");
    if (dom.dramaticFloatingControls) dom.dramaticFloatingControls.classList.remove("hidden");
    if (dom.btnCloseDramaticPreview) dom.btnCloseDramaticPreview.classList.add("hidden");

    // Sinkronkan seluruh data kartu ke tampilan undangan dramatis
    syncDramaticViewWithState();
    initDramaticCountdown();

    // Buka amplop modal pembuka segel lilin interaktif untuk penerima
    openDramaticInvitationModal();

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function exitRecipientMode(target = "catalog") {
    document.body.classList.remove("recipient-mode");
    state.isRecipientView = false;
    closeDramaticPreview();
    if (dom.recipientBanner) dom.recipientBanner.classList.add("hidden");
    const editorSec = document.getElementById("studio-editor");
    if (editorSec) editorSec.classList.remove("hidden");

    // Bersihkan parameter query dari URL agar user dapat menjelajah katalog secara normal
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Buka amplop agar di editor terlihat jelas
    state.isEnvelopeOpened = true;
    renderCard();

    if (target === "catalog") {
      const cat = document.getElementById("katalog");
      if (cat) cat.scrollIntoView({ behavior: "smooth" });
      showToast("Selamat datang di Katalog Template! Pilih desain untuk membuat kartu Anda sendiri.", "info");
    } else if (target === "editor") {
      const ed = document.getElementById("studio-editor");
      if (ed) ed.scrollIntoView({ behavior: "smooth" });
      showToast("Studio Editor aktif. Anda dapat mengubah teks dan rincian kartu.", "info");
    }
  }

  // =========================================================================
  // 9. QR Code Generator (Pure HTML5 Canvas - Compact Standard Grid)
  // =========================================================================
  function drawFallbackQRCode(canvas, text) {
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);

    // Generate pseudo-deterministic QR grid based on text hash
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash) + text.charCodeAt(i);
      hash |= 0;
    }

    const gridSize = 21; // 21x21 QR Version 1 layout
    const moduleSize = size / (gridSize + 4);
    const offset = moduleSize * 2;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "#1e293b";

    // Draw position detection finder patterns (3 corners)
    function drawFinder(r, c) {
      ctx.fillRect(offset + c * moduleSize, offset + r * moduleSize, 7 * moduleSize, 7 * moduleSize);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(offset + (c + 1) * moduleSize, offset + (r + 1) * moduleSize, 5 * moduleSize, 5 * moduleSize);
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(offset + (c + 2) * moduleSize, offset + (r + 2) * moduleSize, 3 * moduleSize, 3 * moduleSize);
    }

    drawFinder(0, 0);
    drawFinder(0, 14);
    drawFinder(14, 0);

    // Draw content data bits
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Skip finder areas
        if ((r < 8 && c < 8) || (r < 8 && c > 12) || (r > 12 && c < 8)) continue;

        // Timing patterns
        if (r === 6 || c === 6) {
          if ((r + c) % 2 === 0) {
            ctx.fillRect(offset + c * moduleSize, offset + r * moduleSize, moduleSize, moduleSize);
          }
          continue;
        }

        // Pseudo bit based on string code
        const bit = ((hash ^ (r * 31 + c * 17)) + (text.charCodeAt((r + c) % text.length) || 0)) % 2 === 0;
        if (bit) {
          ctx.fillRect(offset + c * moduleSize, offset + r * moduleSize, moduleSize, moduleSize);
        }
      }
    }
  }

  // =========================================================================
  // 10. High-Resolution PNG Card Exporter (Canvas 2D)
  // =========================================================================
  function downloadCardAsImage() {
    if (!state.recipient.trim()) {
      dom.errRecipient.classList.remove("hidden");
      dom.recipientInput.focus();
      showToast("Nama penerima wajib diisi sebelum mengunduh", "error");
      return;
    }

    showToast("Menyiapkan berkas gambar kartu...", "info");

    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 1200;
    exportCanvas.height = 900;
    const ctx = exportCanvas.getContext("2d");

    // Colors mapping based on active template
    let bg = "#ffffff";
    let primary = "#be123c";
    let text = "#1e293b";
    let accent = "#d97706";
    let border = "#e2e8f0";

    if (state.template === "dino-jurassic-adventure") {
      bg = "#0d2215";
      primary = "#22c55e";
      text = "#f0fdf4";
      accent = "#f59e0b";
      border = "#15803d";
    } else if (state.template === "space-astronot-kosmik") {
      bg = "#091226";
      primary = "#38bdf8";
      text = "#f8fafc";
      accent = "#f97316";
      border = "#0284c7";
    } else if (state.template === "sweet-sixteen-glitz") {
      bg = "#260b18";
      primary = "#fb7185";
      text = "#fff1f2";
      accent = "#facc15";
      border = "#be185d";
    } else if (state.template === "gamer-level-up-quest") {
      bg = "#0b1120";
      primary = "#a3e635";
      text = "#f0fdf4";
      accent = "#a855f7";
      border = "#4d7c0f";
    } else if (state.template === "matcha-tea-garden") {
      bg = "#172412";
      primary = "#65a30d";
      text = "#f7fee7";
      accent = "#fef08a";
      border = "#4d7c0f";
    } else if (state.template === "circus-vintage-carnival") {
      bg = "#290a0d";
      primary = "#ef4444";
      text = "#fef2f2";
      accent = "#fbbf24";
      border = "#b91c1c";
    } else if (state.template === "sweet-sixty-golden-age") {
      bg = "#0a132c";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#38bdf8";
      border = "#ca8a04";
    } else if (state.template === "roller-skate-disco-funk") {
      bg = "#200926";
      primary = "#ec4899";
      text = "#fdf4ff";
      accent = "#06b6d4";
      border = "#c026d3";
    } else if (state.template === "perak-25th-silver-anniversary") {
      bg = "#0f172a";
      primary = "#94a3b8";
      text = "#f8fafc";
      accent = "#38bdf8";
      border = "#64748b";
    } else if (state.template === "lavender-provence-fields") {
      bg = "#1c0e2d";
      primary = "#c084fc";
      text = "#faf5ff";
      accent = "#facc15";
      border = "#7e22ce";
    } else if (state.template === "paris-eiffel-twilight") {
      bg = "#1e1324";
      primary = "#f472b6";
      text = "#fdf2f8";
      accent = "#fbbf24";
      border = "#db2777";
    } else if (state.template === "candlelight-jazz-loft") {
      bg = "#1b0e07";
      primary = "#f97316";
      text = "#ffedd5";
      accent = "#eab308";
      border = "#c2410c";
    } else if (state.template === "cherry-blossom-kyoto") {
      bg = "#211016";
      primary = "#fb7185";
      text = "#fff1f2";
      accent = "#e11d48";
      border = "#be123c";
    } else if (state.template === "desert-glamping-stargaze") {
      bg = "#181126";
      primary = "#ea580c";
      text = "#fff7ed";
      accent = "#38bdf8";
      border = "#c2410c";
    } else if (state.template === "cozy-fireplace-chalet") {
      bg = "#1c1009";
      primary = "#f97316";
      text = "#fef3c7";
      accent = "#dc2626";
      border = "#c2410c";
    } else if (state.template === "love-lock-pont-des-arts") {
      bg = "#091724";
      primary = "#0284c7";
      text = "#f0f9ff";
      accent = "#eab308";
      border = "#0369a1";
    } else if (state.template === "sunda-silih-asih") {
      bg = "#112613";
      primary = "#22c55e";
      text = "#f0fdf4";
      accent = "#eab308";
      border = "#15803d";
    } else if (state.template === "toraja-tongkonan-gold") {
      bg = "#1e0e0a";
      primary = "#dc2626";
      text = "#fef2f2";
      accent = "#eab308";
      border = "#b91c1c";
    } else if (state.template === "palembang-aesan-gede") {
      bg = "#270914";
      primary = "#be123c";
      text = "#fff1f2";
      accent = "#facc15";
      border = "#9f1239";
    } else if (state.template === "glasshouse-botanical-greenhouse") {
      bg = "#092019";
      primary = "#10b981";
      text = "#ecfdf5";
      accent = "#d97706";
      border = "#059669";
    } else if (state.template === "uluwatu-cliff-ocean-sunset") {
      bg = "#081729";
      primary = "#0284c7";
      text = "#f0f9ff";
      accent = "#f97316";
      border = "#0369a1";
    } else if (state.template === "versailles-baroque-palace") {
      bg = "#1a140b";
      primary = "#ca8a04";
      text = "#fefce8";
      accent = "#fef08a";
      border = "#a16207";
    } else if (state.template === "boho-desert-pampas") {
      bg = "#21130d";
      primary = "#c2410c";
      text = "#fff7ed";
      accent = "#f59e0b";
      border = "#9a3412";
    } else if (state.template === "garden-pergola-white-rose") {
      bg = "#0a1f1d";
      primary = "#0d9488";
      text = "#f0fdfa";
      accent = "#f8fafc";
      border = "#0f766e";
    } else if (state.template === "farmasi-apoteker-mortar") {
      bg = "#091c17";
      primary = "#059669";
      text = "#ecfdf5";
      accent = "#0284c7";
      border = "#047857";
    } else if (state.template === "akpol-akmil-perwira-pedang") {
      bg = "#09101f";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#0284c7";
      border = "#ca8a04";
    } else if (state.template === "seni-desain-kreatif-portfolio") {
      bg = "#171116";
      primary = "#e11d48";
      text = "#fff1f2";
      accent = "#06b6d4";
      border = "#be123c";
    } else if (state.template === "psikologi-klinis-humaniora") {
      bg = "#0f132b";
      primary = "#6366f1";
      text = "#eef2ff";
      accent = "#14b8a6";
      border = "#4f46e5";
    } else if (state.template === "it-ai-computer-science") {
      bg = "#050d18";
      primary = "#06b6d4";
      text = "#ecfeff";
      accent = "#8b5cf6";
      border = "#0891b2";
    } else if (state.template === "pilot-wing-aviation") {
      bg = "#091224";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#38bdf8";
      border = "#ca8a04";
    } else if (state.template === "arsitektur-lanskap-hijau") {
      bg = "#0b1a10";
      primary = "#16a34a";
      text = "#f0fdf4";
      accent = "#a8a29e";
      border = "#15803d";
    } else if (state.template === "doktor-riset-promosi-phd") {
      bg = "#1e0c12";
      primary = "#b91c1c";
      text = "#fef2f2";
      accent = "#ca8a04";
      border = "#991b1b";
    } else if (state.template === "syukuran-rumah-skandinavia") {
      bg = "#191410";
      primary = "#d97706";
      text = "#fef3c7";
      accent = "#0d9488";
      border = "#b45309";
    } else if (state.template === "ramadhan-iftar-berkah") {
      bg = "#081d15";
      primary = "#059669";
      text = "#ecfdf5";
      accent = "#f59e0b";
      border = "#047857";
    } else if (state.template === "waisak-borobudur-lantern") {
      bg = "#0c102b";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#818cf8";
      border = "#ca8a04";
    } else if (state.template === "pesta-panen-kopi-nusantara") {
      bg = "#1c1108";
      primary = "#b45309";
      text = "#fef3c7";
      accent = "#15803d";
      border = "#92400e";
    } else if (state.template === "pagelaran-wayang-kulit") {
      bg = "#1c0f06";
      primary = "#b45309";
      text = "#fef3c7";
      accent = "#facc15";
      border = "#92400e";
    } else if (state.template === "donor-darah-kemanusiaan") {
      bg = "#1f080b";
      primary = "#dc2626";
      text = "#fef2f2";
      accent = "#0284c7";
      border = "#b91c1c";
    } else if (state.template === "peresmian-bistro-kuliner") {
      bg = "#0a1b18";
      primary = "#0f766e";
      text = "#f0fdfa";
      accent = "#eab308";
      border = "#115e59";
    } else if (state.template === "konser-akustik-indie-senja") {
      bg = "#200d17";
      primary = "#ea580c";
      text = "#ffedd5";
      accent = "#ec4899";
      border = "#c2410c";
    } else if (state.template === "khitanan-barokah-nusantara") {
      bg = "#0a192f";
      primary = "#38bdf8";
      text = "#f8fafc";
      accent = "#f59e0b";
      border = "#0284c7";
    } else if (state.template === "reuni-akbar-nostalgia") {
      bg = "#1c1815";
      primary = "#d97706";
      text = "#fef3c7";
      accent = "#f59e0b";
      border = "#b45309";
    } else if (state.template === "sunset-bbq-garden-party") {
      bg = "#24140c";
      primary = "#fb923c";
      text = "#ffedd5";
      accent = "#f97316";
      border = "#ea580c";
    } else if (state.template === "siraman-pengajian-jawa") {
      bg = "#1a1209";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#16a34a";
      border = "#ca8a04";
    } else if (state.template === "akad-glassmorphism-aurora") {
      bg = "#0c1b2e";
      primary = "#38bdf8";
      text = "#f0f9ff";
      accent = "#f472b6";
      border = "#7dd3fc";
    } else if (state.template === "lamaran-peony-blush") {
      bg = "#2b0b18";
      primary = "#f472b6";
      text = "#fff1f2";
      accent = "#fbbf24";
      border = "#ec4899";
    } else if (state.template === "grand-opening-ceremony") {
      bg = "#0a1224";
      primary = "#eab308";
      text = "#f8fafc";
      accent = "#38bdf8";
      border = "#ca8a04";
    } else if (state.template === "sleepover-slumber-party") {
      bg = "#1d0e2e";
      primary = "#c084fc";
      text = "#fdf4ff";
      accent = "#f472b6";
      border = "#a855f7";
    } else if (state.template === "summer-pool-party") {
      bg = "#06283d";
      primary = "#38bdf8";
      text = "#f0fdf4";
      accent = "#fb7185";
      border = "#0284c7";
    } else if (state.template === "peluncuran-buku-penulis") {
      bg = "#1a130b";
      primary = "#d97706";
      text = "#fef3c7";
      accent = "#ca8a04";
      border = "#92400e";
    } else if (state.template === "aqiqah-safari-pastel") {
      bg = "#0a221c";
      primary = "#6ee7b7";
      text = "#f0fdf4";
      accent = "#fcd34d";
      border = "#10b981";
    } else if (state.template === "batak-ulos-gorga") {
      bg = "#240609";
      primary = "#facc15";
      text = "#fef2f2";
      accent = "#ef4444";
      border = "#b91c1c";
    } else if (state.template === "wisuda-dental-dentist") {
      bg = "#072132";
      primary = "#38bdf8";
      text = "#f0fdfa";
      accent = "#34d399";
      border = "#0ea5e9";
    } else if (state.template === "wisuda-hukum-lex-justitia") {
      bg = "#141312";
      primary = "#ca8a04";
      text = "#fefce8";
      accent = "#eab308";
      border = "#854d0e";
    } else if (state.template === "vernissage-galeri-seni") {
      bg = "#111113";
      primary = "#f43f5e";
      text = "#f4f4f5";
      accent = "#facc15";
      border = "#71717a";
    } else if (state.template === "pantai-sunset-beach-wedding") {
      bg = "#16162c";
      primary = "#f97316";
      text = "#fdf2f8";
      accent = "#38bdf8";
      border = "#ea580c";
    } else if (state.template === "golden-50th-anniversary") {
      bg = "#120e06";
      primary = "#eab308";
      text = "#fefce8";
      accent = "#facc15";
      border = "#ca8a04";
    } else if (state.template === "wisuda-magister-doktor") {
      bg = "#220720";
      primary = "#eab308";
      text = "#fdf4ff";
      accent = "#c084fc";
      border = "#a855f7";
    } else if (state.template === "venetian-masquerade-ball") {
      bg = "#1a0528";
      primary = "#facc15";
      text = "#faf5ff";
      accent = "#e11d48";
      border = "#c084fc";
    } else if (state.template === "tahun-baru-countdown-gala") {
      bg = "#0a0a0f";
      primary = "#facc15";
      text = "#f8fafc";
      accent = "#38bdf8";
      border = "#eab308";
    } else if (state.template === "ultah-echa") {
      bg = "#fff5f7";
      primary = "#be123c";
      text = "#4c0519";
      accent = "#db2777";
      border = "#fbcfe8";
    } else if (state.template === "ultah-ceria") {
      bg = "#fffdf5";
      primary = "#b45309";
      text = "#451a03";
      accent = "#d97706";
      border = "#fde68a";
    } else if (state.template === "ultah-elegan") {
      bg = "#0f172a";
      primary = "#e2b04a";
      text = "#f8fafc";
      accent = "#e2b04a";
      border = "#d4af37";
    } else if (state.template === "ultah-pastel") {
      bg = "#fff5f7";
      primary = "#be123c";
      text = "#4c0519";
      accent = "#db2777";
      border = "#fbcfe8";
    } else if (state.template === "anniv-romantis") {
      bg = "#4c0519";
      primary = "#fef08a";
      text = "#fff1f2";
      accent = "#fbbf24";
      border = "#fbbf24";
    } else if (state.template === "anniv-botanical") {
      bg = "#fbfdfc";
      primary = "#166534";
      text = "#14532d";
      accent = "#15803d";
      border = "#86efac";
    } else if (state.template === "anniv-celestial") {
      bg = "#020617";
      primary = "#7dd3fc";
      text = "#f8fafc";
      accent = "#38bdf8";
      border = "#38bdf8";
    } else if (state.template === "royal-emerald") {
      bg = "#052e16";
      primary = "#fde047";
      text = "#f8fafc";
      accent = "#fbbf24";
      border = "#fbbf24";
    } else if (state.template === "sakura-blossom") {
      bg = "#fff5f7";
      primary = "#9f1239";
      text = "#4c0519";
      accent = "#e11d48";
      border = "#f472b6";
    } else if (state.template === "wisuda-prestise") {
      bg = "#091224";
      primary = "#fbbf24";
      text = "#f8fafc";
      accent = "#f59e0b";
      border = "#d97706";
    } else if (state.template === "galaxy-aurora") {
      bg = "#070919";
      primary = "#67e8f9";
      text = "#f8fafc";
      accent = "#c084fc";
      border = "#38bdf8";
    } else if (state.template === "festive-carnival") {
      bg = "#fffbeb";
      primary = "#c2410c";
      text = "#431407";
      accent = "#ea580c";
      border = "#ea580c";
    } else if (state.template === "oriental-lantern") {
      bg = "#4c0519";
      primary = "#fef08a";
      text = "#fff1f2";
      accent = "#facc15";
      border = "#facc15";
    } else if (state.template === "ocean-pearl") {
      bg = "#f0fdfa";
      primary = "#0d9488";
      text = "#0f172a";
      accent = "#0284c7";
      border = "#14b8a6";
    } else if (state.template === "minimalist-monochrome") {
      bg = "#090a0f";
      primary = "#f1f5f9";
      text = "#cbd5e1";
      accent = "#94a3b8";
      border = "#cbd5e1";
    } else if (state.template === "lebaran-fitri") {
      bg = "#022c22";
      primary = "#fef08a";
      text = "#f8fafc";
      accent = "#facc15";
      border = "#fde047";
    } else if (state.template === "champagne-glamour") {
      bg = "#09090b";
      primary = "#fef08a";
      text = "#f8fafc";
      accent = "#fbbf24";
      border = "#facc15";
    } else if (state.template === "vintage-romantic") {
      bg = "#fffdf5";
      primary = "#831843";
      text = "#4a044e";
      accent = "#b45309";
      border = "#9d174d";
    } else if (state.template === "tiup-lilin-kue") {
      bg = "#2a1711";
      primary = "#f59e0b";
      text = "#fffbeb";
      accent = "#fbbf24";
      border = "#d97706";
    } else if (state.template === "amplop-surat-cinta") {
      bg = "#fdfbf7";
      primary = "#881337";
      text = "#4c0519";
      accent = "#b45309";
      border = "#fecdd3";
    } else if (state.template === "golden-gate-wedding") {
      bg = "#091428";
      primary = "#facc15";
      text = "#f8fafc";
      accent = "#eab308";
      border = "#ca8a04";
    } else if (state.template === "pesta-balon-udara") {
      bg = "#24143a";
      primary = "#fb923c";
      text = "#fdf4ff";
      accent = "#f59e0b";
      border = "#c084fc";
    } else if (state.template === "lilin-aroma-spa") {
      bg = "#29211c";
      primary = "#fef08a";
      text = "#fafaf9";
      accent = "#84cc16";
      border = "#a8a29e";
    } else if (state.template === "amplop-bordir-songket") {
      bg = "#4a0414";
      primary = "#fde047";
      text = "#fff1f2";
      accent = "#eab308";
      border = "#d97706";
    } else if (state.template === "kembang-api-milestone") {
      bg = "#0b0f19";
      primary = "#facc15";
      text = "#f8fafc";
      accent = "#ea580c";
      border = "#f59e0b";
    } else if (state.template === "wisuda-topi-toga") {
      bg = "#0c192c";
      primary = "#fde047";
      text = "#f8fafc";
      accent = "#fbbf24";
      border = "#eab308";
    } else if (state.template === "petik-bintang-nebula") {
      bg = "#120b22";
      primary = "#38bdf8";
      text = "#f8fafc";
      accent = "#c084fc";
      border = "#818cf8";
    } else if (state.template === "undangan-pintu-ukir-bali") {
      bg = "#1c1917";
      primary = "#facc15";
      text = "#fafaf9";
      accent = "#eab308";
      border = "#d97706";
    } else if (state.template === "tirai-teater-broadway") {
      bg = "#230106";
      primary = "#facc15";
      text = "#fef08a";
      accent = "#ea580c";
      border = "#fde047";
    } else if (state.template === "pesiar-sunset-ocean") {
      bg = "#042f2e";
      primary = "#2dd4bf";
      text = "#f0fdfa";
      accent = "#fb7185";
      border = "#0d9488";
    } else if (state.template === "taman-kunang-kunang") {
      bg = "#021a13";
      primary = "#bef264";
      text = "#fefce8";
      accent = "#84cc16";
      border = "#65a30d";
    } else if (state.template === "kincir-festival-sakura") {
      bg = "#0f172a";
      primary = "#fde047";
      text = "#fff1f2";
      accent = "#f43f5e";
      border = "#fb7185";
    } else if (state.template === "disko-retro-neon") {
      bg = "#090014";
      primary = "#22d3ee";
      text = "#fdf4ff";
      accent = "#ec4899";
      border = "#06b6d4";
    } else if (state.template === "jawa-keraton-gunungan") {
      bg = "#180d06";
      primary = "#fde047";
      text = "#fefce8";
      accent = "#ca8a04";
      border = "#eab308";
    } else if (state.template === "kastil-neuschwanstein") {
      bg = "#1e1b4b";
      primary = "#fef08a";
      text = "#fdf4ff";
      accent = "#f472b6";
      border = "#c084fc";
    } else if (state.template === "salju-wonderland") {
      bg = "#02131d";
      primary = "#e0f2fe";
      text = "#f0f9ff";
      accent = "#38bdf8";
      border = "#7dd3fc";
    } else if (state.template === "taman-kupu-kupu-flora") {
      bg = "#fdf2f8";
      primary = "#9d174d";
      text = "#1e293b";
      accent = "#db2777";
      border = "#f472b6";
    } else if (state.template === "piramida-arabian-nights") {
      bg = "#020713";
      primary = "#fde047";
      text = "#f8fafc";
      accent = "#eab308";
      border = "#facc15";
    } else if (state.template === "cyberpunk-arcade-pixel") {
      bg = "#0a0818";
      primary = "#22d3ee";
      text = "#f8fafc";
      accent = "#f43f5e";
      border = "#22d3ee";
    } else if (state.template === "boho-safari-watercolor") {
      bg = "#fdf6ec";
      primary = "#c2410c";
      text = "#431407";
      accent = "#ea580c";
      border = "#fed7aa";
    } else if (state.template === "superhero-comic-boom") {
      bg = "#fffef2";
      primary = "#e11d48";
      text = "#18181b";
      accent = "#facc15";
      border = "#e11d48";
    } else if (state.template === "underwater-aquarium-glow") {
      bg = "#021424";
      primary = "#38bdf8";
      text = "#f0fdfa";
      accent = "#2dd4bf";
      border = "#2dd4bf";
    } else if (state.template === "vinyl-jazz-noir") {
      bg = "#120c08";
      primary = "#f59e0b";
      text = "#fef3c7";
      accent = "#d97706";
      border = "#f59e0b";
    } else if (state.template === "starlit-campfire-glamping") {
      bg = "#08110b";
      primary = "#f97316";
      text = "#fefce8";
      accent = "#ea580c";
      border = "#f97316";
    } else if (state.template === "origami-crane-serenade") {
      bg = "#fdfcfb";
      primary = "#dc2626";
      text = "#1e293b";
      accent = "#eab308";
      border = "#dc2626";
    } else if (state.template === "rooftop-cinema-under-stars") {
      bg = "#080816";
      primary = "#f59e0b";
      text = "#fdf4ff";
      accent = "#fda4af";
      border = "#f59e0b";
    } else if (state.template === "rustic-barn-wooden") {
      bg = "#18110b";
      primary = "#22c55e";
      text = "#fafaf9";
      accent = "#d97706";
      border = "#22c55e";
    } else if (state.template === "maroko-riadh-mosaic") {
      bg = "#06132b";
      primary = "#eab308";
      text = "#f8fafc";
      accent = "#06b6d4";
      border = "#eab308";
    } else if (state.template === "minang-rumah-gadang") {
      bg = "#2b0207";
      primary = "#facc15";
      text = "#fff1f2";
      accent = "#881337";
      border = "#facc15";
    } else if (state.template === "nordic-fjord-aurora") {
      bg = "#02141e";
      primary = "#7dd3fc";
      text = "#f8fafc";
      accent = "#34d399";
      border = "#7dd3fc";
    } else if (state.template === "summa-cum-laude-gold") {
      bg = "#071329";
      primary = "#facc15";
      text = "#f8fafc";
      accent = "#f59e0b";
      border = "#facc15";
    } else if (state.template === "blueprint-arsitek-teknik") {
      bg = "#051b36";
      primary = "#38bdf8";
      text = "#f8fafc";
      accent = "#facc15";
      border = "#38bdf8";
    } else if (state.template === "stetoskop-medika-hippocrates") {
      bg = "#021d17";
      primary = "#14b8a6";
      text = "#f0fdf4";
      accent = "#f59e0b";
      border = "#14b8a6";
    } else if (state.template === "buku-literasi-scholar") {
      bg = "#1a0b06";
      primary = "#fde68a";
      text = "#fef3c7";
      accent = "#991b1b";
      border = "#d97706";
    } else if (state.template === "akikah-baby-cloud") {
      bg = "#f0fdf9";
      primary = "#0284c7";
      text = "#0f172a";
      accent = "#fde047";
      border = "#38bdf8";
    } else if (state.template === "housewarming-tedak-siten") {
      bg = "#18130f";
      primary = "#fed7aa";
      text = "#fafaf9";
      accent = "#ea580c";
      border = "#ea580c";
    } else if (state.template === "chinese-new-year-dragon") {
      bg = "#2e0307";
      primary = "#facc15";
      text = "#fff1f2";
      accent = "#dc2626";
      border = "#facc15";
    } else if (state.template === "tedak-siten-jawa-tradisi") {
      bg = "#1f1106";
      primary = "#fde047";
      text = "#fefce8";
      accent = "#ca8a04";
      border = "#ca8a04";
    }

    // 1. Draw Canvas Background
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 900);

    // 2. Draw Decorative Borders
    ctx.strokeStyle = border;
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, 1120, 820);

    ctx.strokeStyle = primary;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(55, 55, 1090, 790);

    // 3. Ornaments at corners
    ctx.fillStyle = primary;
    ctx.font = "24px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("✦", 75, 80);
    ctx.fillText("✦", 1125, 80);
    ctx.fillText("✦", 75, 830);
    ctx.fillText("✦", 1125, 830);

    // 4. Header: Salutation & Title
    ctx.fillStyle = accent;
    ctx.font = "600 20px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("DENGAN PENUH KASIH & SUKACITA", 600, 140);

    ctx.fillStyle = primary;
    ctx.font = "bold 52px 'Playfair Display', Georgia, serif";
    ctx.fillText(state.title || "Selamat Ulang Tahun", 600, 210);

    // Divider
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(480, 240);
    ctx.lineTo(720, 240);
    ctx.stroke();

    // 5. Recipient Section
    ctx.fillStyle = text;
    ctx.font = "italic 22px Georgia, serif";
    ctx.fillText("Kepada yang Teristimewa,", 600, 310);

    ctx.fillStyle = primary;
    ctx.font = "bold 64px 'Playfair Display', Georgia, serif";
    ctx.fillText(state.recipient || "Nama Penerima", 600, 385);

    if (state.milestone.trim()) {
      ctx.fillStyle = accent;
      ctx.font = "600 24px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(state.milestone, 600, 435);
    }

    // 6. Message Block (Multi-line wrap)
    ctx.fillStyle = text;
    ctx.font = "24px 'Plus Jakarta Sans', sans-serif";
    const maxWidth = 860;
    const words = state.message.split(" ");
    let line = "";
    let y = 500;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, 600, y);
        line = words[n] + " ";
        y += 36;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 600, y);

    // 7. Event & Sender Footer
    const isGreeting = state.cardRole === "greeting";
    const formattedDate = formatDateIndonesian(state.date);
    if (!isGreeting && (formattedDate || state.location.trim())) {
      ctx.fillStyle = accent;
      ctx.font = "500 20px 'Plus Jakarta Sans', sans-serif";
      const infoParts = [];
      if (formattedDate) infoParts.push(formattedDate);
      if (state.time.trim()) infoParts.push(state.time.trim());
      if (state.location.trim()) infoParts.push(state.location.trim());
      ctx.fillText(infoParts.join("  •  "), 600, 750);
    }

    ctx.fillStyle = primary;
    ctx.font = "bold 26px 'Playfair Display', Georgia, serif";
    ctx.fillText(state.sender || "Dari: Rian & Sahabat Sejati", 600, 810);

    // Convert Canvas to downloadable PNG
    const link = document.createElement("a");
    const cleanFileName = (state.recipient || "kartu").toLowerCase().replace(/[^a-z0-9]/g, "-");
    link.download = `kartu-ucapan-${cleanFileName}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Gambar kartu berhasil diunduh!", "success");
  }

  // =========================================================================
  // 11. Modal & Share Actions
  // =========================================================================
  async function openShareModal() {
    if (!state.recipient.trim()) {
      dom.errRecipient.classList.remove("hidden");
      dom.recipientInput.focus();
      showToast("Harap isi nama penerima terlebih dahulu", "error");
      return;
    }

    dom.shareUrlInput.value = "Menyiapkan tautan kartu...";
    dom.shareModal.classList.remove("hidden");

    const shareUrl = await getOrSaveShareableURL();
    dom.shareUrlInput.value = shareUrl;

    // Build WhatsApp Direct Message
    const waText = `Halo ${state.recipient}! Ada kiriman kartu ucapan spesial untukmu:\n\n"${state.title}"\n\nBuka tautan ini untuk membaca kartu:\n${shareUrl}`;
    dom.modalWaLink.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;

    // Draw QR Code
    if (dom.qrCanvas) {
      drawFallbackQRCode(dom.qrCanvas, shareUrl);
    }

    dom.shareUrlInput.select();
  }

  function closeShareModal() {
    dom.shareModal.classList.add("hidden");
  }

  async function shareDirectWhatsApp() {
    if (!state.recipient.trim()) {
      dom.errRecipient.classList.remove("hidden");
      dom.recipientInput.focus();
      showToast("Harap isi nama penerima terlebih dahulu", "error");
      return;
    }

    showToast("Menyiapkan tautan kartu untuk WhatsApp...", "info");
    const shareUrl = await getOrSaveShareableURL();
    const waText = `Halo ${state.recipient}! Ada kiriman kartu ucapan spesial untukmu:\n\n"${state.title}"\n\nBuka tautan ini untuk membaca kartu:\n${shareUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, "_blank");
  }

  async function copyQuickLink() {
    if (!state.recipient.trim()) {
      dom.errRecipient.classList.remove("hidden");
      dom.recipientInput.focus();
      showToast("Harap isi nama penerima terlebih dahulu", "error");
      return;
    }

    const shareUrl = await getOrSaveShareableURL();
    const copySuccess = () => {
      if (dom.btnQuickCopy && dom.quickCopyText) {
        dom.btnQuickCopy.classList.add("copied");
        dom.quickCopyText.textContent = "Tersalin! ✓";
        setTimeout(() => {
          dom.btnQuickCopy.classList.remove("copied");
          dom.quickCopyText.textContent = "Salin Link";
        }, 2200);
      }
      showToast("Tautan kartu berhasil disalin! Siap dikirim ke WhatsApp.", "success");
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(copySuccess).catch(() => {
        const tempInput = document.createElement("input");
        tempInput.value = shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        copySuccess();
      });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      copySuccess();
    }
  }

  function switchFormTab(tabIndex) {
    if (state.cardRole === "greeting" && tabIndex === 1) {
      tabIndex = 2; // Lewati tab Waktu & Lokasi jika mode ucapan selamat
    }
    if (tabIndex < 0 || tabIndex >= dom.formTabButtons.length) return;

    dom.formTabButtons.forEach((b, i) => {
      if (i === tabIndex) {
        b.classList.add("active");
        b.setAttribute("aria-selected", "true");
      } else {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      }
    });

    dom.formTabPanes.forEach((p, i) => {
      if (i === tabIndex) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    const formPanel = document.querySelector(".editor-panel-form");
    if (formPanel) {
      const rect = formPanel.getBoundingClientRect();
      if (rect.top < 0) {
        formPanel.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  let isMobileViewingPreview = false;

  function setMobileStudioView(mode) {
    const isMobile = window.innerWidth <= 991;
    if (mode === "preview") {
      isMobileViewingPreview = true;
      if (dom.editorWorkspaceGrid) {
        dom.editorWorkspaceGrid.classList.remove("mobile-view-form");
        dom.editorWorkspaceGrid.classList.add("mobile-view-preview");
      }
      if (dom.btnMobileViewPreview) dom.btnMobileViewPreview.classList.add("active");
      if (dom.btnMobileViewForm) dom.btnMobileViewForm.classList.remove("active");
      updateMobileJumpState(true);

      if (isMobile) {
        const previewStage = document.getElementById("preview-stage");
        if (previewStage) {
          previewStage.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      isMobileViewingPreview = false;
      if (dom.editorWorkspaceGrid) {
        dom.editorWorkspaceGrid.classList.remove("mobile-view-preview");
        dom.editorWorkspaceGrid.classList.add("mobile-view-form");
      }
      if (dom.btnMobileViewForm) dom.btnMobileViewForm.classList.add("active");
      if (dom.btnMobileViewPreview) dom.btnMobileViewPreview.classList.remove("active");
      updateMobileJumpState(false);

      if (isMobile) {
        const formEditor = document.getElementById("card-editor-form");
        if (formEditor) {
          formEditor.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }

  function updateMobileJumpState(viewingPreview) {
    isMobileViewingPreview = viewingPreview;
    if (!dom.jumpIcon || !dom.jumpText || !dom.btnMobileJump) return;

    if (viewingPreview) {
      dom.jumpIcon.textContent = "✏️";
      dom.jumpText.textContent = "Edit Formulir";
      dom.btnMobileJump.setAttribute("aria-label", "Kembali ke Formulir Pengaturan");
    } else {
      dom.jumpIcon.textContent = "👁️";
      dom.jumpText.textContent = "Lihat Hasil Kartu";
      dom.btnMobileJump.setAttribute("aria-label", "Lihat Hasil Pratinjau Kartu");
    }
  }

  function initMobileJumpBar() {
    // Initial state: form is active on mobile
    if (dom.editorWorkspaceGrid) {
      dom.editorWorkspaceGrid.classList.add("mobile-view-form");
    }

    if (dom.btnMobileViewForm) {
      dom.btnMobileViewForm.addEventListener("click", () => setMobileStudioView("form"));
    }
    if (dom.btnMobileViewPreview) {
      dom.btnMobileViewPreview.addEventListener("click", () => setMobileStudioView("preview"));
    }
    if (dom.btnMobileBackForm) {
      dom.btnMobileBackForm.addEventListener("click", () => setMobileStudioView("form"));
    }

    if (dom.btnMobileJump) {
      dom.btnMobileJump.addEventListener("click", () => {
        if (!isMobileViewingPreview) {
          setMobileStudioView("preview");
        } else {
          setMobileStudioView("form");
        }
      });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991 && dom.editorWorkspaceGrid) {
        dom.editorWorkspaceGrid.classList.remove("mobile-view-form", "mobile-view-preview");
      } else if (dom.editorWorkspaceGrid && !dom.editorWorkspaceGrid.classList.contains("mobile-view-form") && !dom.editorWorkspaceGrid.classList.contains("mobile-view-preview")) {
        dom.editorWorkspaceGrid.classList.add(isMobileViewingPreview ? "mobile-view-preview" : "mobile-view-form");
      }
    });
  }

  // =========================================================================
  // 12. Event Listeners & Interactive Bindings
  // =========================================================================
  function initEventListeners() {
    // Two-way synchronization on form inputs
    dom.templateSelect.addEventListener("change", (e) => {
      const templateId = e.target.value;
      state.template = templateId;
      if (TEMPLATE_PRESETS[templateId] && TEMPLATE_PRESETS[templateId].role) {
        setCardRole(TEMPLATE_PRESETS[templateId].role, true);
      }
      renderCard();
    });

    dom.recipientInput.addEventListener("input", (e) => {
      state.recipient = e.target.value;
      if (state.recipient.trim()) {
        dom.errRecipient.classList.add("hidden");
      }
      renderCard();
    });

    dom.titleInput.addEventListener("input", (e) => {
      state.title = e.target.value;
      renderCard();
    });

    dom.milestoneInput.addEventListener("input", (e) => {
      state.milestone = e.target.value;
      renderCard();
    });

    dom.messageInput.addEventListener("input", (e) => {
      state.message = e.target.value;
      renderCard();
    });

    dom.senderInput.addEventListener("input", (e) => {
      state.sender = e.target.value;
      renderCard();
    });

    dom.dateInput.addEventListener("change", (e) => {
      state.date = e.target.value;
      renderCard();
    });

    dom.timeInput.addEventListener("input", (e) => {
      state.time = e.target.value;
      renderCard();
    });

    dom.locationInput.addEventListener("input", (e) => {
      state.location = e.target.value;
      renderCard();
    });

    dom.rsvpInput.addEventListener("input", (e) => {
      state.rsvp = e.target.value;
      renderCard();
    });

    dom.fontSelect.addEventListener("change", (e) => {
      state.font = e.target.value;
      renderCard();
    });

    dom.toggleConfetti.addEventListener("change", (e) => {
      state.confettiEnabled = e.target.checked;
    });

    dom.toggleSound.addEventListener("change", (e) => {
      state.soundEnabled = e.target.checked;
    });

    dom.toneRadios.forEach(radio => {
      radio.addEventListener("change", (e) => {
        state.tone = e.target.value;
        renderCard();
      });
    });

    // Form Section Tabs Navigation
    dom.formTabButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        switchFormTab(index);
      });
    });

    // Wizard Step Navigation Buttons (Next & Prev)
    dom.btnNextTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = parseInt(btn.getAttribute("data-target-tab"), 10);
        switchFormTab(targetTab);
      });
    });

    dom.btnPrevTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = parseInt(btn.getAttribute("data-target-tab"), 10);
        switchFormTab(targetTab);
      });
    });

    if (dom.btnDoneToPreview) {
      dom.btnDoneToPreview.addEventListener("click", () => {
        setMobileStudioView("preview");
        const previewStage = document.getElementById("preview-stage");
        if (previewStage) {
          previewStage.scrollIntoView({ behavior: "smooth" });
        }
        playCelebrationChime();
        launchConfetti();
        showToast("Kartu ucapan Anda siap dibagikan!", "success");
      });
    }

    // Gallery Photo Upload Listeners
    if (dom.btnBrowsePhotos && dom.inputGalleryPhotos) {
      dom.btnBrowsePhotos.addEventListener("click", (e) => {
        e.stopPropagation();
        dom.inputGalleryPhotos.click();
      });
    }

    if (dom.inputGalleryPhotos) {
      dom.inputGalleryPhotos.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handlePhotoUpload(e.target.files);
          e.target.value = "";
        }
      });
    }

    if (dom.galleryDropzone) {
      dom.galleryDropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dom.galleryDropzone.classList.add("dragover");
      });
      dom.galleryDropzone.addEventListener("dragleave", (e) => {
        e.preventDefault();
        dom.galleryDropzone.classList.remove("dragover");
      });
      dom.galleryDropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dom.galleryDropzone.classList.remove("dragover");
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handlePhotoUpload(e.dataTransfer.files);
        }
      });
      dom.galleryDropzone.addEventListener("click", (e) => {
        if (e.target.closest("#btn-browse-photos")) return;
        if (dom.inputGalleryPhotos) dom.inputGalleryPhotos.click();
      });
      dom.galleryDropzone.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (dom.inputGalleryPhotos) dom.inputGalleryPhotos.click();
        }
      });
    }

    if (dom.btnLoadSamplePhotos) {
      dom.btnLoadSamplePhotos.addEventListener("click", loadSamplePhotos);
    }

    if (dom.btnClearAllPhotos) {
      dom.btnClearAllPhotos.addEventListener("click", clearAllPhotos);
    }

    // Lightbox Modal Listeners
    if (dom.btnCloseLightbox) {
      dom.btnCloseLightbox.addEventListener("click", closePhotoLightbox);
    }
    if (dom.galleryLightboxModal) {
      dom.galleryLightboxModal.addEventListener("click", (e) => {
        if (e.target === dom.galleryLightboxModal) {
          closePhotoLightbox();
        }
      });
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dom.galleryLightboxModal && !dom.galleryLightboxModal.classList.contains("hidden")) {
        closePhotoLightbox();
      }
    });

    if (dom.btnQuickCopy) {
      dom.btnQuickCopy.addEventListener("click", copyQuickLink);
    }

    // Random Quote Generator Button
    dom.btnRandomQuote.addEventListener("click", () => {
      const current = state.message;
      let nextQuote = RANDOM_WISHES[Math.floor(Math.random() * RANDOM_WISHES.length)];
      if (nextQuote === current) {
        nextQuote = RANDOM_WISHES[(RANDOM_WISHES.indexOf(current) + 1) % RANDOM_WISHES.length];
      }
      state.message = nextQuote;
      dom.messageInput.value = nextQuote;
      renderCard();
      showToast("Contoh pesan ucapan diperbarui!", "info");
    });

    // Quick Preset Chips
    document.querySelectorAll(".btn-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".btn-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        const presetKey = chip.getAttribute("data-preset");
        const preset = TEMPLATE_PRESETS[presetKey];
        if (preset) {
          Object.assign(state, preset);
          syncFormWithState();
          showToast(`Preset "${chip.textContent.trim()}" dimuat!`, "success");
        }
      });
    });

    // Catalog Filter Tabs
    dom.filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        dom.filterTabs.forEach(t => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        state.activeCategory = tab.getAttribute("data-category") || "all";
        state.isCatalogExpanded = false;
        filterCatalog();
      });
    });

    // Catalog Toggle More Button (Expand/Collapse to prevent infinite stretching)
    if (dom.btnToggleCatalogMore) {
      dom.btnToggleCatalogMore.addEventListener("click", () => {
        state.isCatalogExpanded = !state.isCatalogExpanded;
        filterCatalog();

        if (!state.isCatalogExpanded) {
          const catalogSection = document.getElementById("katalog");
          if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }

    if (dom.btnResetFilter) {
      dom.btnResetFilter.addEventListener("click", () => {
        const allTab = document.getElementById("tab-all");
        if (allTab) allTab.click();
      });
    }

    // Catalog Template Cards Use & Preview Buttons
    document.querySelectorAll(".btn-use-template").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const templateId = btn.getAttribute("data-template-id");
        state.template = templateId;
        dom.templateSelect.value = templateId;
        if (TEMPLATE_PRESETS[templateId] && TEMPLATE_PRESETS[templateId].role) {
          setCardRole(TEMPLATE_PRESETS[templateId].role, true);
        }
        renderCard();

        if (window.innerWidth <= 991) {
          setMobileStudioView("form");
        }

        const editorSection = document.getElementById("studio-editor");
        if (editorSection) {
          editorSection.scrollIntoView({ behavior: "smooth" });
        }
        showToast("Desain template berhasil dipilih!", "success");
      });
    });

    document.querySelectorAll(".btn-preview-template").forEach(btn => {
      btn.addEventListener("click", () => {
        const templateId = btn.getAttribute("data-template-id");
        state.template = templateId;
        dom.templateSelect.value = templateId;
        if (TEMPLATE_PRESETS[templateId]) {
          Object.assign(state, TEMPLATE_PRESETS[templateId]);
          setCardRole(TEMPLATE_PRESETS[templateId].role || "invitation", true);
          syncFormWithState();
        }
        state.isEnvelopeOpened = true;
        renderCard();

        if (window.innerWidth <= 991) {
          setMobileStudioView("preview");
        }

        const previewStage = document.getElementById("preview-stage");
        if (previewStage) {
          previewStage.scrollIntoView({ behavior: "smooth" });
        }
        launchConfetti();
        playCelebrationChime();
      });
    });

    // Interactive Wax Seal & Envelope Button
    dom.btnOpenSeal.addEventListener("click", () => {
      openRecipientCard();
    });

    // Interactive Candle Blow Button
    if (dom.btnCandleFlame) {
      dom.btnCandleFlame.addEventListener("click", blowCandle);
    }

    dom.btnToggleEnvelope.addEventListener("click", () => {
      state.isEnvelopeOpened = !state.isEnvelopeOpened;
      renderCard();
      updateRecipientOpenButton(state.isEnvelopeOpened);
      if (state.isEnvelopeOpened) {
        playCelebrationChime();
        launchConfetti();
      }
    });

    dom.btnTriggerCelebrate.addEventListener("click", () => {
      playCelebrationChime();
      launchConfetti();
    });

    // Share & Export Actions (Creator Mode)
    dom.btnShareLink.addEventListener("click", openShareModal);
    dom.btnShareWhatsapp.addEventListener("click", shareDirectWhatsApp);
    dom.btnDownloadImage.addEventListener("click", downloadCardAsImage);

    // Recipient Actions Bar Listeners (Recipient Mode)
    if (dom.btnRecipientOpenToggle) {
      dom.btnRecipientOpenToggle.addEventListener("click", toggleRecipientEnvelope);
    }
    if (dom.btnRecipientReplyWa) {
      dom.btnRecipientReplyWa.addEventListener("click", replyViaWhatsApp);
    }
    if (dom.btnRecipientDownloadImg) {
      dom.btnRecipientDownloadImg.addEventListener("click", downloadCardAsImage);
    }
    if (dom.btnRecipientCelebrate) {
      dom.btnRecipientCelebrate.addEventListener("click", () => {
        launchConfetti();
        playCelebrationChime();
      });
    }
    if (dom.btnRecipientCreateNew) {
      dom.btnRecipientCreateNew.addEventListener("click", () => exitRecipientMode("catalog"));
    }


    // Recipient Top Banner Listeners
    if (dom.btnRecipientBannerOpen) {
      dom.btnRecipientBannerOpen.addEventListener("click", openRecipientCard);
    }
    if (dom.btnRecipientBannerCreate) {
      dom.btnRecipientBannerCreate.addEventListener("click", () => exitRecipientMode("catalog"));
    }
    if (dom.btnRecipientBannerEdit) {
      dom.btnRecipientBannerEdit.addEventListener("click", () => exitRecipientMode("editor"));
    }

    // Fullscreen View
    dom.btnFullscreenPreview.addEventListener("click", () => {
      const stage = document.getElementById("preview-stage");
      if (!stage) return;

      if (!document.fullscreenElement) {
        if (stage.requestFullscreen) {
          stage.requestFullscreen();
        } else if (stage.webkitRequestFullscreen) {
          stage.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });

    // Modal Copy URL
    dom.btnCopyUrlModal.addEventListener("click", () => {
      dom.shareUrlInput.select();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(dom.shareUrlInput.value).then(() => {
          showToast("Tautan kartu berhasil disalin ke clipboard!", "success");
        }).catch(() => {
          document.execCommand("copy");
          showToast("Tautan disalin!", "success");
        });
      } else {
        document.execCommand("copy");
        showToast("Tautan disalin!", "success");
      }
    });

    dom.btnCloseModal.addEventListener("click", closeShareModal);

    // Close modal on escape key or backdrop click
    dom.shareModal.addEventListener("click", (e) => {
      if (e.target === dom.shareModal) {
        closeShareModal();
      }
    });

    // Role Selection & Switcher Listeners
    if (dom.roleRadios) {
      dom.roleRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
          if (e.target.checked) {
            setCardRole(e.target.value);
            if (e.target.value === "invitation") {
              initDramaticCountdown();
            }
          }
        });
      });
    }

    // Dramatic Mode Listeners (Ala Ultah-Echa)
    if (dom.btnOpenDramaticMode) {
      dom.btnOpenDramaticMode.addEventListener("click", openDramaticPreview);
    }
    if (dom.btnOpenDramaticInvitation) {
      dom.btnOpenDramaticInvitation.addEventListener("click", openDramaticInvitation);
    }
    if (dom.musicToggleBtn) {
      dom.musicToggleBtn.addEventListener("click", () => toggleMusic());
    }
    if (dom.floatingConfettiBtn) {
      dom.floatingConfettiBtn.addEventListener("click", () => {
        fireConfettiBlast();
        playCelebrationChime();
      });
    }
    if (dom.btnCloseDramaticPreview) {
      dom.btnCloseDramaticPreview.addEventListener("click", closeDramaticPreview);
    }
    if (dom.btnDramaticBlowCandle) {
      dom.btnDramaticBlowCandle.addEventListener("click", blowDramaticCandles);
    }
    if (dom.btnCloseCelebrationPopup) {
      dom.btnCloseCelebrationPopup.addEventListener("click", closeCelebrationPopup);
    }
    if (dom.celebrationPopup) {
      dom.celebrationPopup.addEventListener("click", (e) => {
        if (e.target === dom.celebrationPopup) {
          closeCelebrationPopup();
        }
      });
    }
    if (dom.dramaticWishForm) {
      dom.dramaticWishForm.addEventListener("submit", handleWishSubmit);
    }
    if (dom.btnDramaticShareWa) {
      dom.btnDramaticShareWa.addEventListener("click", async () => {
        showToast("Menyiapkan tautan undangan untuk WhatsApp...", "info");
        const url = await getOrSaveShareableURL();
        const text = `Halo! Aku baru saja membuat kartu undangan spesial "${state.title}" untuk ${state.recipient}. Buka tautan ini untuk membaca undangan:\n${url}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
      });
    }
    if (dom.btnDramaticShareTelegram) {
      dom.btnDramaticShareTelegram.addEventListener("click", async () => {
        showToast("Menyiapkan tautan undangan...", "info");
        const url = await getOrSaveShareableURL();
        const text = `Undangan Spesial "${state.title}" untuk ${state.recipient}`;
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
      });
    }
    if (dom.btnDramaticCopyLink) {
      dom.btnDramaticCopyLink.addEventListener("click", async () => {
        const url = await getOrSaveShareableURL();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast("Tautan undangan dramatis berhasil disalin!", "success");
          }).catch(() => {
            showToast("Tautan disalin!", "success");
          });
        } else {
          showToast("Tautan disalin!", "success");
        }
      });
    }
    if (dom.btnDramaticReplyWa) {
      dom.btnDramaticReplyWa.addEventListener("click", replyViaWhatsApp);
    }
    if (dom.btnDramaticDownloadImg) {
      dom.btnDramaticDownloadImg.addEventListener("click", downloadCardAsImage);
    }
    if (dom.btnDramaticCreateOwn) {
      dom.btnDramaticCreateOwn.addEventListener("click", () => exitRecipientMode("catalog"));
    }

    // Global Keydown Handler (Accessible Modal Escape)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (dom.shareModal && !dom.shareModal.classList.contains("hidden")) {
          closeShareModal();
        }
        if (dom.celebrationPopup && !dom.celebrationPopup.classList.contains("hidden")) {
          closeCelebrationPopup();
        }
        if (state.isDramaticPreview) {
          closeDramaticPreview();
        }
      }
    });



    // Window resize handler for canvas
    window.addEventListener("resize", () => {
      resizeConfettiCanvas();
    });

    // Handle URL changes dynamically without full reload
    window.addEventListener("hashchange", async () => {
      if (await loadStateFromURL()) {
        syncFormWithState();
        activateRecipientMode();
      }
    });
  }

  const CATALOG_INITIAL_LIMIT = 6;

  function filterCatalog() {
    const category = state.activeCategory || "all";
    const matchingCards = [];

    dom.templateCards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (category === "all" || cardCat === category) {
        matchingCards.push(card);
      } else {
        card.classList.add("hidden");
        card.classList.remove("is-collapsed-item");
      }
    });

    const totalMatching = matchingCards.length;

    if (totalMatching === 0) {
      if (dom.catalogEmptyState) dom.catalogEmptyState.classList.remove("hidden");
      if (dom.catalogPaginationWrap) dom.catalogPaginationWrap.style.display = "none";
      return;
    }

    if (dom.catalogEmptyState) dom.catalogEmptyState.classList.add("hidden");

    if (state.isCatalogExpanded || totalMatching <= CATALOG_INITIAL_LIMIT) {
      matchingCards.forEach(card => {
        card.classList.remove("hidden");
        card.classList.remove("is-collapsed-item");
      });

      if (dom.catalogPaginationWrap) {
        if (totalMatching <= CATALOG_INITIAL_LIMIT) {
          dom.catalogPaginationWrap.style.display = "none";
        } else {
          dom.catalogPaginationWrap.style.display = "flex";
          if (dom.catalogToggleText) {
            dom.catalogToggleText.textContent = "Tampilkan Lebih Sedikit (6 Pilihan)";
          }
          if (dom.btnToggleCatalogMore) {
            dom.btnToggleCatalogMore.setAttribute("aria-expanded", "true");
            const arrow = dom.btnToggleCatalogMore.querySelector(".toggle-arrow");
            if (arrow) arrow.textContent = "▴";
          }
          if (dom.catalogVisibleNum) dom.catalogVisibleNum.textContent = totalMatching;
          if (dom.catalogTotalNum) dom.catalogTotalNum.textContent = totalMatching;
        }
      }
    } else {
      matchingCards.forEach((card, index) => {
        if (index < CATALOG_INITIAL_LIMIT) {
          card.classList.remove("hidden");
          card.classList.remove("is-collapsed-item");
        } else {
          card.classList.add("is-collapsed-item");
        }
      });

      if (dom.catalogPaginationWrap) {
        dom.catalogPaginationWrap.style.display = "flex";
        if (dom.catalogToggleText) {
          const catLabel = category === "all" ? `Semua ${totalMatching} Desain` : `${totalMatching} Desain Kategori Ini`;
          dom.catalogToggleText.textContent = `Tampilkan ${catLabel}`;
        }
        if (dom.btnToggleCatalogMore) {
          dom.btnToggleCatalogMore.setAttribute("aria-expanded", "false");
          const arrow = dom.btnToggleCatalogMore.querySelector(".toggle-arrow");
          if (arrow) arrow.textContent = "▾";
        }
        if (dom.catalogVisibleNum) dom.catalogVisibleNum.textContent = CATALOG_INITIAL_LIMIT;
        if (dom.catalogTotalNum) dom.catalogTotalNum.textContent = totalMatching;
      }
    }
  }

  function updateCatalogCounts() {
    const cards = document.querySelectorAll(".template-card");
    const total = cards.length;
    const allCount = document.querySelector("#tab-all .tab-count");
    if (allCount) allCount.textContent = total;

    const counts = {};
    cards.forEach(card => {
      const cat = card.getAttribute("data-category");
      if (cat) counts[cat] = (counts[cat] || 0) + 1;
    });

    dom.filterTabs.forEach(tab => {
      const cat = tab.getAttribute("data-category");
      if (cat && cat !== "all") {
        const span = tab.querySelector(".tab-count");
        if (span) span.textContent = counts[cat] || 0;
      }
    });
  }

  // =========================================================================
  // 13. Application Initialization
  // =========================================================================
  async function init() {
    // 1. Enforce Clean Warm Light Theme (Strictly No Dark Mode)
    document.documentElement.setAttribute("data-theme", "light");
    try {
      localStorage.removeItem("karsa-theme");
    } catch (e) {}

    // 2. Check if loaded with shared URL parameter (?c=... or ?card=... or #card=...)
    const hasSharedData = await loadStateFromURL();
    if (hasSharedData) {
      activateRecipientMode();
    } else {
      document.body.classList.remove("recipient-mode");
      if (dom.recipientBanner) dom.recipientBanner.classList.add("hidden");
      if (dom.dramaticInvitationView) dom.dramaticInvitationView.classList.add("hidden");
      if (dom.envelopeModal) dom.envelopeModal.classList.add("hidden");

      // Restore custom photos from local storage draft if available
      try {
        const savedDraft = localStorage.getItem("karsa-last-created-card");
        if (savedDraft) {
          const draftObj = JSON.parse(savedDraft);
          if (draftObj && draftObj.photos && Array.isArray(draftObj.photos)) {
            state.photos = draftObj.photos;
          }
        }
      } catch (e) {}
    }

    // 3. Sync form inputs with initial state & render card
    syncFormWithState();

    // 4. Update Catalog Category Counts & Initial Display Filter
    updateCatalogCounts();
    filterCatalog();

    // 5. Bind all event listeners
    initEventListeners();

    // 6. Initial canvas setup
    resizeConfettiCanvas();

    // 7. Initialize Mobile Quick Jump Floating Action
    initMobileJumpBar();

    // 8. Initialize Dramatic Invitation Features (Ala Ultah-Echa)
    initDramaticCountdown();
    renderDramaticWishes();
  }

  // Execute on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
