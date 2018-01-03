# Express.js to Create Web Application

--------------------------------------------------------------------------------

## Create a basic web app

Oke, lalu bagaimana cara kita membuat atau menyusun aplikasi web yang lengkap?

Yang kita inginkan adalah web yang memiliki tampilan juga.

Dengan Express, ada 2 jalan yang tersedia:

1. Membuat backend (REST API) dahulu lalu membuat frontend (HTML, CSS, JS) dalam sistemnya masing-masing, ataupun dengan urutan sebaliknya
2. Membuat backend dan frontend sekaligus dalam sistem yang sama dan pada waktu yang sama

Di sini sebagai permulaan, kita bisa langsung terjun ke cara kedua.

--------------------------------------------------------------------------------

## Create a full blown web app with generator

Kita bisa meng-generate aplikasi Express lebih instan dengan [Express application generator](https://www.npmjs.com/package/express-generator).

Terima kasih `express-generator`!

```sh
$ npm i -g express-generator
$ express app-name
$ cd app-name && npm install
```

Setelah setup dan instalasi, lalu jalankan:

```sh
$ npm start

> expressjs-web@1.0.0 start /home/yourname/3-EXPRESSJS-WEB
> node ./bin/www
```

Maka aplikasi berjalan di URL `localhost:3000`:

```sh
$ curl localhost:3000

<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head>
<body><h1>Express</h1><p>Welcome to Express</p></body></html>%
```

Jalankanlah web-nya di browser.

![express-web-welcome](./assets/express-web-welcome.png)

Di terminal juga akan terlihat log route apa saja yang diakses oleh user:

```sh
GET / 200 201.808 ms - 170
GET / 200 19.655 ms - 170
GET /stylesheets/style.css 200 5.881 ms - 111
GET /favicon.ico 404 31.150 ms - 1745
GET / 200 9.486 ms - 170
...
```

--------------------------------------------------------------------------------



--------------------------------------------------------------------------------

## Live Code

Terdapat live code via [Glitch](https://glitch.me) di <https://glitch.com/~static-express> yang dapat dilihat hasilnya di <https://static-express.glitch.me> dan source code-nya di <https://glitch.com/edit/#!/static-express>.
