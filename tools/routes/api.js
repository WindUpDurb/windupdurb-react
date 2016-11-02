"use strict";

const express = require("express");
const router = express.Router();

router.use("/essays", require("./essays"));

module.exports = router;