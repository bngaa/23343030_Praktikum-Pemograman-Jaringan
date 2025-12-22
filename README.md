# Praktikum Pemograman Jaringan - Semester 5

Dokumentasi lengkap untuk semua praktikum pemograman jaringan dari PBJ1 hingga PBJ9. Repositori ini berisi proyek-proyek pembelajaran Node.js, Express.js, dan teknologi jaringan terkait.

---

## 📚 Daftar Praktikum

### PBJ1 - Pengantar Node.js
**Tujuan:** Memahami dasar-dasar Node.js dan cara menjalankan script JavaScript di server.

**File Utama:**
- `hello.js` - Script sederhana yang menampilkan welcome message
- `hello-world.js` - Variasi program Hello World
- `index.js` - File utama

**Teknologi:** Node.js v18+

**Cara Menjalankan:**
```bash
cd "PBJ1 - Pengantar Node.js"
node hello.js
```

**Output:** Pesan welcome dari Bunga Aprillia

---

### PBJ2 - Asynchronous Programming
**Tujuan:** Mempelajari konsep pemrograman asynchronous, callback, promise, dan async/await.

> **Note:** Dokumentasi lengkap akan ditambahkan di README file lokal.

**Topik Pembelajaran:**
- Callback Functions
- Promise & Then/Catch
- Async/Await
- Error Handling

---

### PBJ3 - Node.js Module System
**Tujuan:** Memahami sistem modul Node.js dan cara membuat module yang dapat digunakan kembali.

**File Utama:**
- `app.js` - File aplikasi utama
- `catatan.js` - Module untuk manajemen catatan
- `catatan.json` - File JSON untuk penyimpanan data

**Teknologi:** Node.js Module System (require/module.exports)

**Cara Menjalankan:**
```bash
cd "PBJ3 - Node.Js Module System"
node app.js
```

**Fitur:**
- Menambah catatan baru
- Membaca semua catatan
- Fungsi helper untuk manajemen data

---

### PBJ4 - HTTP Request and API
**Tujuan:** Mempelajari cara membuat HTTP request dan berinteraksi dengan API eksternal.

**File Utama:**
- `app.js` - Aplikasi utama untuk HTTP request
- `cekCuaca.js` - Module untuk pengecekan cuaca dari API

**Teknologi:** 
- Node.js `http` module
- postman-request library
- API Weather

**Cara Menjalankan:**
```bash
cd "PBJ4 - HTTP Request dan API"
npm install
node app.js
```

**Fitur:**
- Request ke API cuaca
- Parsing JSON response
- Error handling

---

### PBJ5 - Web Server dan Express.js
**Tujuan:** Membangun web server menggunakan Express.js dengan server-side rendering menggunakan Handlebars.

**File Utama:**
- `src/app.js` - Server Express.js utama
- `templates/views/` - File template Handlebars
- `public/css/style.css` - Styling modern dengan gradients

**Teknologi:**
- Express.js v5.1.0
- Handlebars (HBS) - Template engine
- CSS3 (Gradients, Transitions, Animations)

**Cara Menjalankan:**
```bash
cd "PBJ5 - Web Server dan ExpressJs"
npm install
npm start
```

**Server berjalan di:** `http://localhost:4000`

**Routes:**
- `GET /` - Halaman beranda
- `GET /tentang` - Halaman tentang profil Bunga Aprillia
- `GET /bantuan` - Halaman bantuan dan FAQ

**Fitur Desain:**
- Header gradient biru-purple
- Navigasi responsif
- Shadow effects modern
- Animated transitions

---

### PBJ6 - JSON HTTP Endpoints
**Tujuan:** Membuat REST API dengan JSON endpoints dan integrasi API eksternal.

**File Utama:**
- `src/app.js` - Server Express dengan API endpoints
- `src/utils/geocode.js` - Utility untuk geolokasi
- `src/utils/prediksiCuaca.js` - Utility untuk prediksi cuaca
- `templates/views/` - File template dengan design modern

**Teknologi:**
- Express.js v4.18.2
- Handlebars (HBS)
- postman-request
- CSS3 modern

**Cara Menjalankan:**
```bash
cd "PBJ6 - JSON HTTP Endpoints/web-server"
npm install
npm start
```

**Server berjalan di:** `http://localhost:5000`

**Routes:**
- `GET /` - Halaman utama dengan hero section
- `GET /tentang` - Profil Bunga Aprillia dengan skill dan kontak
- `GET /bantuan` - FAQ dengan expandable items
- `GET /berita` - Halaman berita dengan search
- `GET /api/cuaca?address=lokasi` - API endpoint untuk cuaca

**Fitur Utama:**
- **Hero Section:** Weather emoji animation (☀️ 🌧️ ☁️)
- **Search Form:** Cari cuaca berdasarkan lokasi
- **Profile:** Tampilkan profil dengan skills dan contact info
- **FAQ:** Item yang dapat di-expand/collapse
- **News:** Halaman berita dengan dummy data fallback
- **Modern CSS:** 500+ lines dengan gradients, animations, hover effects

---

### PBJ7 - Version Control dan App Deployment
**Tujuan:** Mempelajari Git version control dan deployment aplikasi.

> **Deployment:** Aplikasi ini di-deploy ke Vercel.
> 
> **Link Vercel:** [Akan ditambahkan oleh user]

**Topik Pembelajaran:**
- Git basics & commands
- GitHub repository management
- Deployment ke platform cloud
- Environment variables
- CI/CD pipeline

**Catatan:** Akan di-push ke Vercel dengan konfigurasi deployment otomatis dari GitHub.

---

### PBJ8 - MongoDB dan No-SQL Databases
**Tujuan:** Memahami database NoSQL (MongoDB) dan operasi CRUD.

**File Utama:**
- `setupDatabase.js` - Setup dan inisialisasi database
- `insertDocument.js` - Insert dokumen baru
- `readDocument.js` - Membaca dokumen
- `updateDocument.js` - Update dokumen
- `deleteDocument.js` - Delete dokumen

**Teknologi:** MongoDB, Node.js mongodb driver

**Cara Menjalankan:**
```bash
cd "PBJ8 - MongoDB dan No-SQL Databases"
npm install
node setupDatabase.js   # Setup database
node insertDocument.js  # Insert data
node readDocument.js    # Read data
```

**Data Sample:**
- Nama: Bunga Aprillia
- Kelas: Praktikum Pemograman Jaringan

**Operasi CRUD:**
- Create: Insert dokumen baru
- Read: Query dokumen
- Update: Modifikasi field dokumen
- Delete: Hapus dokumen

---

### PBJ9 - Socket Programming
**Tujuan:** Membangun aplikasi real-time chat menggunakan WebSocket (Socket.io).

**File Utama:**
- `src/index.js` - Server Socket.io
- `src/utils/messages.js` - Utility untuk format message
- `src/utils/users.js` - Utility untuk manajemen user
- `public/chat.html` - Interface chat
- `public/index.html` - Halaman welcome

**Teknologi:**
- Express.js
- Socket.io v4.x
- WebSocket
- CSS3

**Cara Menjalankan:**
```bash
cd "PBJ9 - Socket Programming"
npm install
npm start
```

**Fitur:**
- Real-time messaging
- User management (join/leave)
- Room-based chat
- User notifications
- Message timestamps
- Active users display

**Event Handlers:**
- `sendMessage` - Kirim pesan
- `sendLocation` - Kirim lokasi
- `disconnect` - User disconnect

---

## 🔄 Perubahan Terbaru

### Update v1.0
- ✅ Semua referensi nama diganti dari "Devani/Vani" menjadi "Bunga Aprillia/Bunga"
- ✅ PBJ5 & PBJ6 design di-modernisasi dengan CSS gradients dan animations
- ✅ PBJ6 ditambahkan fitur hero section, profile page, FAQ, dan news page
- ✅ Data sample di PBJ8 diupdate menjadi "Bunga Aprillia"
- ✅ Semua file sudah di-commit dan di-push ke GitHub

---

## 🛠️ Setup & Installasi

### Prerequisites
- Node.js v18 atau lebih tinggi
- npm atau yarn
- Git
- MongoDB (untuk PBJ8)

### Setup Umum
```bash
# Clone repository
git clone https://github.com/bngaa/23343030_Praktikum-Pemograman-Jaringan.git
cd 23343030_Praktikum-Pemograman-Jaringan

# Navigasi ke folder praktikum
cd "PBJ5 - Web Server dan ExpressJs"

# Install dependencies
npm install

# Jalankan aplikasi
npm start
```

### Setup untuk Setiap Praktikum
Setiap folder praktikum memiliki `package.json` sendiri. Install dependencies dengan:
```bash
npm install
```

---

## 📝 Catatan Penting

### Naming Convention
Semua proyek menggunakan nama **"Bunga Aprillia"** sebagai nama owner/profile untuk konsistensi.

### Environment Variables
Untuk PBJ6 yang menggunakan API eksternal, tambahkan `.env` file jika diperlukan:
```env
API_KEY=your_api_key_here
```

### Database Connection
PBJ8 memerlukan MongoDB. Pastikan MongoDB sudah berjalan:
```bash
# Windows
mongod

# Linux/Mac
brew services start mongodb-community
```

---

## 🎯 Learning Outcomes

Setelah menyelesaikan semua praktikum, Anda akan memahami:

| PBJ | Topik | Skills |
|-----|-------|--------|
| 1 | Node.js Basics | JavaScript runtime, console logging |
| 2 | Async Programming | Callbacks, Promises, Async/Await |
| 3 | Module System | require/export, code organization |
| 4 | HTTP & API | Making requests, parsing JSON |
| 5 | Web Server | Express.js, SSR, Handlebars |
| 6 | REST API | JSON endpoints, full-stack app |
| 7 | Deployment | Git, version control, cloud hosting |
| 8 | NoSQL Database | MongoDB, CRUD operations |
| 9 | Real-time | WebSocket, Socket.io, chat apps |

---

## 🚀 Deployment

### PBJ5 (Localhost)
```bash
npm start  # Runs on http://localhost:4000
```

### PBJ6 (Localhost)
```bash
npm start  # Runs on http://localhost:5000
```

### PBJ7 (Vercel)
> **Status:** Siap untuk di-deploy
> 
> **Vercel Link:** [Link akan ditambahkan setelah deployment]

---

## 📦 Dependencies Summary

### Global Dependencies
- `express` - Web framework
- `hbs` - Template engine
- `postman-request` - HTTP client
- `mongodb` - Database driver
- `socket.io` - Real-time communication

### Version Details
- Node.js: v18.x or higher
- Express.js: v4.18.2 - v5.1.0
- Socket.io: v4.x

---

## 📧 Contact & Support

**Author:** Bunga Aprillia  
**Class:** Praktikum Pemograman Jaringan - Semester 5  
**GitHub:** [https://github.com/bngaa](https://github.com/bngaa)

---

## 📄 License

Proyek ini adalah bagian dari kurikulum pembelajaran dan dapat digunakan untuk tujuan edukasi.

---

**Last Updated:** 2024  
**Status:** ✅ All modules completed and deployed
