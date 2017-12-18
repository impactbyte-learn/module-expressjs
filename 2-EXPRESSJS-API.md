# Express.js to Create REST API

--------------------------------------------------------------------------------

## Application structure

Secara berurutan, struktur aplikasi Express secara umum dibentuk sebagai berikut:

1. Memasukkan atau mengimpor berbagai dependency dan modul kita seperti controller,
utility, helper, dan model
2. Meng-instansiasi objek Express dan lainnya
3. Menghubungkan ke database
4. Mengkonfigurasi pengaturan aplikasi Express seperti template engine dan ekstensi file
5. Mendefinisikan middleware seperti error handler, static files folder, cookies, dan parser lainnya
6. Mendefinisikan routes dan request handler-nya
7. Menjalankan aplikasi yang akan memulai server di host dan port tertentu

--------------------------------------------------------------------------------

## Create basic REST API manually

Direkomendasikan untuk membaca dokumentasi [Express](https://expressjs.com) sebagai persiapan.

Kita akan mengimplementasi beberapa routes/requests REST API seperti `GET`, `POST`, `PUT`, `DELETE`.

Di dalam proyek, akan banyak digunakan method `res.send`/`res.json` untuk mengirim data.

Di sini kita akan membuat API yang dapat menampilkan dan memanipulasi daftar benda yang kita miliki.

### Design the routes dan data model

Sebelum membuat API-nya, disarankan untuk mendesain routes dan model datanya terlebih dahulu.

Misalnya routes-nya seperti:

| Route          | HTTP Verb | Description
|----------------|-----------|------------
| /api/items     | GET       | Get all the items
| /api/items/:id | GET       | Get a single item
| /api/items     | POST      | Save an item
| /api/items     | DELETE    | Remove all the items
| /api/items/:id | DELETE    | Remove an item
| /api/items/:id | PUT       | Update an item with new info

Kemudian data model-nya dalam JSON seperti:

```json
[
  {
    "id": 0,
    "name": "Money",
    "color": "various"
  },
  {
    "id": 1,
    "name": "Laptop",
    "color": "black"
  },
  {
    "id": 2,
    "name": "Mouse",
    "color": "white"
  },
  {
    "id": 3,
    "name": "Cable",
    "color": "gray"
  }
]
```

Untuk mempermudah pembelajaran, kita belum menggunakan database, melainkan variabel JSON biasa saja untuk menyimpan data.

Yang mana memang datanya akan reset lagi jika kita menjalankan ulang aplikasinya.

### Implement the designs

Kita implementasikan berbagai route di atas dalam Express dengan perlahan:

```js
const express = require("express")
const app = express()

// Initiate new data store
const data = []

// Get all the items
app.get("/api/items", (req, res) => {
  res.send("got one item")
})

// Get a single item
app.get("/api/items/:id", (req, res) => {
  res.send("got item with id", req.params.id)
})

// Save an item
app.post("/api/items", (req, res) => {
  res.send("saved new item")
})

// Remove all the items
app.delete("/api/items", (req, res) => {
  res.send("deleted all items")
})

// Remove an item
app.delete("/api/items/:id", (req, res) => {
  res.send("deleted one item")
})

// Update an item with new info
app.put("/api/items/:id", (req, res) => {
  res.send("updated one item")
})

// Run the app server
app.listen(3000, () => console.log("Server is listening on localhost:3000"))
```

Jalankan terlebih dahulu untuk mengecek jika secara garis besar aplikasinya sudah dapat bisa jalan.

