//const fs = require ('fs')
//fs.writeFileSync ('catatan.txt', 'Nama Saya Bunga Aprillia')
//fs.appendFileSync ('catatan.txt', 'Saya tinggal di Padang')

//const catatan = require ('./catatan.js')
//const pesan = catatan()
//console.log(pesan)

//const validator = require ('validator')
//const ambilCatatan = require ('./catatan.js')
//const pesan = ambilCatatan()
//console.log(pesan)
//console.log(validator.isURL('https://bungaaprrillia.com'))

//const chalk = require('chalk')
//console.log(chalk.yellow('print warna kuning sukses'))
//console.log(chalk.red.bold('Ini teks merah dan tebal yang sudah diubah!'))
//console.log(chalk.green.italic('Ini teks hijau dan miring'))
//console.log(chalk.hex('#FFA500').underline('Ini teks orange dan bergaris bawah'))
//console.log(chalk.rgb(255, 192, 203).bgWhite('Ini teks pink dengan latar belakang putih'))
//console.log(chalk.blue.bgYellow.inverse('Teks ini biru, latar kuning, dan warnanya terbalik'))

//const ambilCatatan = require ('./catatan.js')

//const command = process.argv[2]
//console.log(process.argv[2])

//if (command === 'tambah') {
    //console.log('Menambahkan catatan baru!')
//} else if (command === 'hapus') {     
    //console.log('Menghapus catatan!')
//}

const yargsFactory = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const catatan = require('./catatan.js')

// buat instance yargs
const yargs = yargsFactory(hideBin(process.argv)).version('10.1.0')

// Perintah 'tambah'
yargs.command({
  command: 'tambah',
  describe: 'tambah sebuah catatan baru',
  builder: {
        judul: {
        describe: 'Judul catatan',
        demandOption: true,
        type: 'string'
        },
        isi: {
        describe: 'Isi catatan',
        demandOption: true,
        type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

// Perintah 'hapus'
yargs.command({
  command: 'hapus',
  describe: 'hapus catatan',
  builder: {
    judul: {
        describe: 'Judul catatan',
        demandOption: true,
        type: 'string'
    }
},
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul)
  }
})

 yargs.command({
  command: 'list',
  describe: 'tampilkan semua catatan',
  handler: function () {
    catatan.listCatatan()
  }
})

// command read
yargs.command({
  command: 'read',
  describe: 'baca catatan',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul)
  }
})

yargs.parse()
