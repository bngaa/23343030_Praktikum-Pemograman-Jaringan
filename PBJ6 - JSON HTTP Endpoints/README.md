# PBJ6 - JSON HTTP Endpoints

## Informasi Praktikum
- **Student:** Bunga Aprillia (23343030)
- **Materi:** JSON HTTP Endpoints
- **Deskripsi:** Membuat aplikasi web dengan Express.js yang mengintegrasikan API eksternal dan menampilkan data dalam format JSON

## Struktur Proyek

```
web-server/
├── src/
│   ├── app.js                 # Main application file
│   └── utils/
│       ├── geocode.js         # Mapbox API integration
│       └── prediksiCuaca.js   # WeatherStack API integration
├── public/
│   ├── css/
│   │   └── styles.css         # Stylesheet
│   ├── file_html/
│   │   ├── index.html
│   │   ├── tentang.html
│   │   └── bantuan.html
│   └── img/                   # Image folder
├── templates/
│   ├── views/
│   │   ├── index.hbs
│   │   ├── tentang.hbs
│   │   ├── bantuan.hbs
│   │   └── 404.hbs
│   └── partials/
│       ├── header.hbs
│       └── footer.hbs
├── package.json
└── package-lock.json
```

## Instalasi

1. Masuk ke folder project:
```bash
cd web-server
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan aplikasi:
```bash
npm start
```

4. Buka browser dan akses:
```
http://localhost:5000
```

## API Endpoints

### 1. Halaman Utama
```
GET /
```
Menampilkan halaman utama aplikasi.

### 2. Halaman Tentang
```
GET /tentang
```
Menampilkan informasi tentang developer.

### 3. Halaman Bantuan
```
GET /bantuan
```
Menampilkan bantuan penggunaan aplikasi.

### 4. API Cuaca (JSON)
```
GET /infocuaca?address=<nama_lokasi>
```

**Request Example:**
```
GET /infocuaca?address=Jakarta
```

**Response Example:**
```json
{
  "prediksiCuaca": "Info Cuaca: Clear. Suhu saat ini adalah 28 derajat. Index UV adalah 5. Visibilitas 10 kilometer",
  "lokasi": "Jakarta, Indonesia",
  "address": "Jakarta"
}
```

**Error Response:**
```json
{
  "error": "Kamu harus memasukan lokasi yang ingin dicari"
}
```

## Teknologi yang Digunakan

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Handlebars (hbs)** - Template engine
- **postman-request** - HTTP request library

### API Eksternal
- **Mapbox Geocoding API** - Konversi alamat ke latitude/longitude
- **WeatherStack API** - Data cuaca real-time

### Frontend
- **HTML** - Struktur halaman
- **CSS** - Styling
- **Handlebars** - Dynamic templates

## Dependencies

```json
{
  "express": "^4.18.2",
  "hbs": "^4.2.0",
  "postman-request": "^2.88.1-postman.45"
}
```

## Cara Kerja

1. **User Input** - User memasukkan nama lokasi di form atau melalui query parameter
2. **Geocoding** - Aplikasi menggunakan Mapbox API untuk mengonversi nama lokasi menjadi latitude dan longitude
3. **Weather Data** - Aplikasi menggunakan WeatherStack API untuk mendapatkan data cuaca berdasarkan koordinat
4. **Response** - Data cuaca ditampilkan dalam format JSON atau HTML

## Fitur Utama

✅ Web server dengan Express.js  
✅ API JSON untuk data cuaca  
✅ Template engine Handlebars  
✅ Integrasi multiple API eksternal  
✅ Error handling dan validation  
✅ Responsive design  
✅ Static file serving  
✅ Partials untuk reusable components  

## Contoh Penggunaan

### Dengan cURL
```bash
curl "http://localhost:5000/infocuaca?address=Jakarta"
```

### Dengan JavaScript Fetch
```javascript
fetch('/infocuaca?address=Jakarta')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Dengan Postman
1. Set method ke GET
2. URL: `http://localhost:5000/infocuaca?address=Jakarta`
3. Send request
4. Lihat JSON response

## Catatan Penting

- API Key Mapbox dan WeatherStack sudah disertakan dalam kode
- Server berjalan pada port 5000
- Pastikan koneksi internet tersedia untuk akses API eksternal
- Response time tergantung pada kecepatan koneksi

## Kredit
Dibuat oleh **Bunga Aprillia (23343030)**  
Praktikum Pemrograman Jaringan - PBJ6

---
Tanggal: 23 Desember 2025
