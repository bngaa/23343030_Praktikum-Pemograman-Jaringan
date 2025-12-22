const request = require('postman-request')

/**
 * Fungsi geocode untuk mendapatkan latitude dan longitude dari alamat
 * Author: Bunga Aprillia (23343030)
 * Praktikum: PBJ6 - JSON HTTP Endpoints
 */
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
                encodeURIComponent(address) +
                '.json?access_token=pk.eyJ1IjoiYnVuZ2hIiwiYSI6ImNtaDduNTI3eDBtcWoyaW9kMzRqcjBvNm4ifQ.U4V4eLS0qY2a56L8Gjm6_g&limit=1'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Tidak dapat terkoneksi ke layanan', undefined)
        } else if (response.body.features.length === 0) {
            callback('Tidak dapat menemukan lokasi. Lakukan pencarian lokasi yang lain', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
