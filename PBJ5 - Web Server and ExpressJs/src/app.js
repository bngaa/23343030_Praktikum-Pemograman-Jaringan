// Import module yang dibutuhkan
const path = require('path')
const express = require('express')
const hbs = require('hbs')

/**
 * Aplikasi Cuaca dengan Express.js
 * Author: Bunga Aprillia (23343030)
 * Praktikum: PBJ5 - Web Server and ExpressJs
 */

// Inisialisasi express
const app = express()

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublik = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// Helper untuk handlebars
hbs.registerHelper('eq', function (a, b) {
  return a === b;
});

// Setup direktori statis
app.use(express.static(direktoriPublik))

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Bunga Aprillia'
    })
})

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Bantuan',
        nama: 'Bunga Aprillia'
    })
})

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Bunga Aprillia'
    })
})

// API untuk info cuaca
app.get('/infocuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])
})

// Handle 404 pages
app.use((req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Bunga Aprillia',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

app.listen(4000, () => {
    console.log('Server berjalan pada port 4000')
})