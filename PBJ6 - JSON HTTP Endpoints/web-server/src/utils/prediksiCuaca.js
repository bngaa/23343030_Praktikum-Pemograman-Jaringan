const request = require('postman-request')

/**
 * Fungsi forecast untuk mendapatkan prediksi cuaca dari API weatherstack
 * Author: Bunga Aprillia (23343030)
 * Praktikum: PBJ6 - JSON HTTP Endpoints
 */
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dbba8e90d7a281c746c44bb942783e3b&query=' + 
                encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    
    request({url: url, json: true }, (error, response) => {
        if (error) {
            callback('Tidak dapat terkoneksi ke layanan', undefined)
        } else if (response.body.error) {
            callback('Tidak dapat menemukan lokasi', undefined)
        } else {
            callback(undefined, 
                'Info Cuaca: ' + response.body.current.weather_descriptions[0] + '. ' +
                'Suhu saat ini adalah ' + response.body.current.temperature + ' derajat. ' +
                'Index UV adalah ' + response.body.current.uv_index + '. ' +
                'Visibilitas ' + response.body.current.visibility + ' kilometer'
            )
        }
    })
}

module.exports = forecast
