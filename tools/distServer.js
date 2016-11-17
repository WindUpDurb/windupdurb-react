"use strict";

import express from 'express';
import path from 'path';
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

/* eslint-disable no-console */

const lex = require('letsencrypt-express').create({
    // set to https://acme-v01.api.letsencrypt.org/directory in production
    server: 'staging',
    challenges: { 'http-01': require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' }) },
    store: require('le-store-certbot').create({ webrootPath: '/tmp/acme-challenges' }),
    approveDomains: ["windupdurb.com", "www.windupdurb.com"]
});

// handles acme-challenge and redirects to https
require('http').createServer(lex.middleware(require('redirect-https')())).listen(80, function () {
    console.log("Listening for ACME http-01 challenges on", this.address());
});

const app = express();
const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost/example";

mongoose.connect(MONGOURL, function (error) {
    console.log(error || `Connected to MongoDB at ${MONGOURL}`);
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(express.static("dist"));


app.use("/api", require("./routes/api"));

app.use("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../dist/index.html"));
});


// handles your app
require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(443, function () {
    console.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
});