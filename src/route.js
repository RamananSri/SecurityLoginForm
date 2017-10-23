const express = require("express").Router();
const bodyParser = require("body-parser");

express.get("/", (req, res) => {
	res.sendFile("./pages/basicLoginForm.html", { root: __dirname });
});

module.exports = express;
