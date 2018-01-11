# Express.js Dasar

--------------------------------------------------------------------------------

## Node.js and Express.js

Sudah tahu Node.js kan?

Secara mendasar, Node.js memungkinkan kita untuk membuat aplikasi JavaScript di server atau backend.

Express.js (atau berikutnya bisa disebut "Express" saja) adalah salah satu package Node.js yang memungkinkan kita untuk membuat HTTP REST API ataupun aplikasi web dengan mudah.

Di [website](https://expressjs.com)-nya, Express.js disebut sebagai "fast, unopinionated, minimalist web framework for Node.js".

Express menganut "configuration over convention" yang mana kita dapat mengatur sebebas kita bagaimana bentuk pengembangan aplikasi kita, tanpa harus mengikuti aturan yang baku.

Dengan Express, kita dapat membuat berbagai hal berikut dengan lebih cepat daripada harus membuatnya secara manual:

* Parsing request body dari HTTP
* Parsing cookies 
* Mengatur session
* Mengatur routes berbasis path URL paths dan method HTTP request
* Mengekstrak URL parameter (misalnya `/items/123`) dan URL query (misalnya `/items?id=123`)
* Menentukan response berbasiskan tipe data
* Menangani errors

Beberapa perusahaan yang menggunakan Node.js dan Express antara lain: Microsoft, Uber, PayPal, Netflix, Capital One, RisingStack, QuizUp, IBM, Accenture, dan lainnya.

Sebagai catatan, pedoman ini menggunakan beberapa kebutuhan dengan versi berikut:

* Node.js v9
* Express v4
* NPM v5

--------------------------------------------------------------------------------

## Installation


Sebelum menginstal Express, disarankan untuk memakai `npm init` dahulu untuk menghasilkan file metadata (informasi dari suatu aplikasi) berupa `package.json`:

```sh
npm init
```

Jawablah beberapa pertanyaan inisialisasi dengan serius, dikarenakan informasi yang kamu berikan yang akan digunakan di aplikasi kedepannya.

Setelah itu, akan terbuat file `package.json` yang berisi seperti:

```json
{
  "name": "application",
  "version": "1.0.0",
  "description": "An application",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Full Name <name@domain.com> (https://domain.com)",
  "license": "MIT"
}
```

Kemudian kita instal Express:

```sh
npm install --save express
```

Buat dan isilah file `server.js` dengan code dasar berikut:

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => res.send("Hello Express!"))

app.listen(3000, () => console.log("Server is listening on localhost:3000"))
```

Lalu jalankan programnya dengan Node:

```sh
$ node server.js
Server is listening on localhost:3000
```

Ataupun jika melalui npm, kita modifikasi sebagian `package.json` dengan sedemikian rupa di bagian `scripts`:

```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  ...
}
```

```sh
$ npm start
Server is listening on localhost:3000
```

Server tersebut dapat kita akses di browser dengan langsung atau `curl`.

```
$ curl http://localhost:3000
Hello Express!
```

Selamat, kita sudah membuat aplikasi web paling sederhana dengan Express!

Disarankan juga untuk mengabaikan `node_modules` di Git melalui `.gitignore`:

```sh
echo node_modules > .gitignore
```

--------------------------------------------------------------------------------

## Case study

Express bisa digunakan untuk apa saja?

### REST API

Membuat REST API berbasiskan HTTP seperti yang sudah kita buat di atas.

### Web Application

Membuat aplikasi web yang terdapat bagian frontend-nya menggunakan HTML, CSS, dan JavaScript di browser.

--------------------------------------------------------------------------------

## References

Untuk lebih lanjut belajar mengenai Express, silakan cek:

* https://expressjs.com/en/starter/installing.html
* https://expressjs.com/en/guide/routing.html
* https://expressjs.com/en/resources/glossary.html
* https://expressjs.com/en/resources/frameworks.html

Terutama artikel berikut:

* [Going out to eat and understanding the basics of Express.js](https://medium.freecodecamp.org/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66)
* [“Hello World!” app with Node.js and Express – freeCodeCamp](https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30)

--------------------------------------------------------------------------------

## Live Code

Terdapat live code via [Glitch](https://glitch.me) di <https://glitch.com/~basic-express> yang dapat dilihat hasilnya di <https://static-express.glitch.me> dan source code-nya di <https://glitch.com/edit/#!/static-express>.
