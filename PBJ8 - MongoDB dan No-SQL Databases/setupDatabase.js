/**
 * File: setupDatabase.js
 * Deskripsi: Script untuk setup database dan insert data dummy di MongoDB
 * Author: Bunga Aprillia
 * Tanggal: 2025
 */

const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function setupDatabase() {
    try {
        await client.connect();
        console.log('✓ Berhasil terhubung ke MongoDB server');

        // Setup database "testsaja"
        const dbTesaji = client.db('testsaja');
        
        // Hapus koleksi lama jika ada
        try {
            await dbTesaji.collection('pengguna').drop();
            console.log('✓ Koleksi lama "pengguna" dihapus');
        } catch (e) {
            // Koleksi tidak ada, lanjut saja
        }
        
        try {
            await dbTesaji.collection('tugas').drop();
            console.log('✓ Koleksi lama "tugas" dihapus');
        } catch (e) {
            // Koleksi tidak ada, lanjut saja
        }
        
        // Buat koleksi "pengguna" dengan data dummy
        const pengguna = dbTesaji.collection('pengguna');
        const penggunaInsert = await pengguna.insertMany([
            {
                _id: new ObjectId('6941ae29acddd120976523ec'),
                nama: "Bunga Aprillia",
                email: "bunga@example.com",
                usia: 21
            },
            {
                _id: new ObjectId('6941ae29acddd120976523ed'),
                nama: "Bunga Aprillia",
                email: "bunga.aprillia@example.com",
                usia: 21
            },
            {
                nama: "Bunga Aprillia",
                email: "bunga.dev@example.com",
                usia: 21
            },
            {
                nama: "Bunga Aprillia",
                email: "bunga.student@example.com",
                usia: 21
            }
        ]);
        console.log(`✓ Koleksi "pengguna" dibuat dengan ${penggunaInsert.insertedCount} dokumen`);

        // Buat koleksi "tugas" dengan data dummy
        const tugas = dbTesaji.collection('tugas');
        const tugasInsert = await tugas.insertMany([
            {
                nama: "Belajar MongoDB",
                Deskripsi: "Membersihkan rumah",
                StatusPenyelesaian: false,
                pembuatTugas: "Bunga Aprillia",
                createdAt: new Date()
            },
            {
                nama: "Mengerjakan Jobsheet",
                Deskripsi: "Mengerjakan jobsheet 8",
                StatusPenyelesaian: false,
                pembuatTugas: "Bunga Aprillia",
                createdAt: new Date()
            },
            {
                nama: "Review Code",
                Deskripsi: "Review code teman",
                StatusPenyelesaian: true,
                pembuatTugas: "Bunga Aprillia",
                createdAt: new Date()
            }
        ]);
        console.log(`✓ Koleksi "tugas" dibuat dengan ${tugasInsert.insertedCount} dokumen`);

        // Setup database "task-manager"
        const dbTaskManager = client.db('task-manager');
        
        // Hapus koleksi lama jika ada
        try {
            await dbTaskManager.collection('pengguna').drop();
            console.log('✓ Koleksi lama "pengguna" di task-manager dihapus');
        } catch (e) {
            // Koleksi tidak ada, lanjut saja
        }
        
        // Buat koleksi "pengguna" di task-manager
        const pengguna2 = dbTaskManager.collection('pengguna');
        const pengguna2Insert = await pengguna2.insertMany([
            {
                _id: new ObjectId('6941ae29acddd120976523ec'),
                nama: "Bunga Aprillia",
                email: "bunga@example.com",
                usia: 21
            },
            {
                nama: "Bunga Aprillia",
                email: "bunga.aprillia@example.com",
                usia: 21
            }
        ]);
        console.log(`✓ Koleksi "pengguna" di task-manager dibuat dengan ${pengguna2Insert.insertedCount} dokumen`);

        console.log('\n✅ Setup database berhasil!');
        console.log('\nDatabase yang dibuat:');
        console.log('  - testsaja (dengan koleksi: pengguna, tugas)');
        console.log('  - task-manager (dengan koleksi: pengguna)');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
        console.log('\n✓ Koneksi ditutup');
    }
}

setupDatabase();
