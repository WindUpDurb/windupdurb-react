"use strict";

const express = require("express");
const router = express.Router();

const Essay = require("../models/writings");

router.get("/", function (request, response) {
    Essay.find({}, function (error, essayList) {
        if (error) response.status(400).send(error);
        response.send(essayList);
    });
});

router.put("/getSingleEssay", function (request, response) {
    Essay.findOne({url: request.body.join("-")}, function (error, essay) {
        if (error) response.status(400).send(error);
        console.log("Essay: ", essay);
        response.send(essay);
    });
});

module.exports = router;