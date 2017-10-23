const express = require("express").Router();
const bodyParser = require("body-parser");
bodyParser.urlencoded();

express.get("/", (req, res) => {
	console.log(req.body.uname);
	res.sendFile("./pages/basicLoginForm.html", { root: __dirname });
});

module.exports = express;
