// Import module yang dibutuhkan
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/prediksiCuaca')
const request = require('postman-request')

/**
 * Aplikasi Cuaca dengan Express.js
 * Author: Bunga Aprillia (23343030)
 * Praktikum: PBJ6 - JSON HTTP Endpoints
 * Deskripsi: Aplikasi untuk cek cuaca berdasarkan lokasi menggunakan API eksternal
 */

// Inisialisasi express
const app = express()

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public')
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
app.use(express.static(direktoriPublic))

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
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

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Bantuan',
        nama: 'Bunga Aprillia'
    })
})

// Halaman berita
app.get('/berita', (req, res) => {
    res.render('berita', {
        judul: 'Berita Terkini',
        nama: 'Bunga Aprillia'
    })
})

// API untuk info cuaca
app.get('/infocuaca', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Kamu harus memasukan lokasi yang ingin dicari'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, dataPrediksi) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                prediksiCuaca: dataPrediksi,
                lokasi: location,
                address: req.query.address
            })
        })
    })
})

// Handle 404 pages
app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Bunga Aprillia',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Bunga Aprillia',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

// Jalankan server
app.listen(5000, () => {
    console.log('Server berjalan pada port 5000.')
    console.log('Developer: Bunga Aprillia (23343030)')
    console.log('Buka: http://localhost:5000')
})
