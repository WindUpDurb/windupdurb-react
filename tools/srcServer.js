"use strict";

import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();
const MONGOURL = process.env.MONGODB_AWS || "mongodb://localhost/windupdurbWebsite";
const compiler = webpack(config);
// const pathToStatic = path.join(__dirname);
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


mongoose.connect(MONGOURL, function (error) {
    console.log(error || `Connected to MongoDB at ${MONGOURL}`);
});


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));


app.use(express.static(__dirname + "/statics"));



app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //pass public path defined in public.config
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/api", require("./routes/api"));

app.use("*", require("./routes/index"));



// handles your app
require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(443, function () {
    console.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
});