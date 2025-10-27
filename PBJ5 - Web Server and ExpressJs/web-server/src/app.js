// Import module yang dibutuhkan
const path = require('path')
const express = require('express')
const hbs = require('hbs')

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

// Setup direktori statis
app.use(express.static(direktoriPublic))

// Halaman utama (menggunakan Handlebars)
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Bunga Aprillia'
    })
})

// Halaman tentang (menggunakan Handlebars)
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Bunga Aprillia'
    })
})

// Halaman bantuan (menggunakan Handlebars)
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        teksBantuan: 'Ini adalah teks bantuan',
        nama: 'Bunga Aprillia'
    })
})

// Halaman infoCuaca (tetap format JSON)
app.get('/infoCuaca', (req, res) => {
    res.send([
        {
            prediksiCuaca: 'Cuaca berpotensi hujan',
            lokasi: 'Padang'
        }
    ])
})

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
})
