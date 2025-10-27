const fs = require('fs')

// const book = {
//     judul: 'Pemograman Jaringan',
//     penulis: 'Bunga Aprillia',
// }

// const bukuJSON = JSON.stringify(book)
// fs.writeFileSync('1-jsontest.json', bukuJSON)

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul)

