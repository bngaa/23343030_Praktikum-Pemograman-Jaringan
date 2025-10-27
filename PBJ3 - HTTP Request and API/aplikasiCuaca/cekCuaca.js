const request = require('postman-request')

// Ganti ***** dengan access key milikmu sendiri
const urlCuaca =
  'http://api.weatherstack.com/current?access_key=dbba8e90d7a281c746c44bb942783e3b&query=-0.8969796661164124, 100.3506470648109=m'

request({ url: urlCuaca, json: true }, (error, response) => {
  if (error) {
    console.log('Tidak dapat terhubung ke layanan cuaca!')
  } else if (response.body.error) {
    console.log('Error dari API:', response.body.error.info)
  } else {
    // Ambil data cuaca dari response
    const data = response.body.current

    // Tambahan dari instruksi (akses weather_descriptions)
    console.log(
      'Deskripsi cuaca saat ini adalah: ' + data.weather_descriptions[0]
    )

    // Menampilkan teks tambahan sesuai keinginan kamu
    console.log(
      `Suhu di luar saat ini mencapai ${data.temperature}°C dengan kemungkinan hujan sebesar ${data.precip}%.`
    )
  }
})
