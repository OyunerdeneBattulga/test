const express = require("express");
const router = express.Router();
const { createdata,
        getdata,
} = require('./control');

router

.post("/", createdata)
.get("/:id", getdata)

module.exports = router;