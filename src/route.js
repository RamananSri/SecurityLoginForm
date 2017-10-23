const express = require("express").Router();
const bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({ extended: false });

var user = {
	username: "brian",
	password: "123456"
};

express.get("/", (req, res) => {
	res.sendFile("./pages/basicLoginForm.html", { root: __dirname });
});

express.post("/", parser, (req, res) => {
	if (req.body.uname == user.username && req.body.psw == user.password) {
		res.sendfile("./pages/loginSuccess.html", { root: __dirname });
	}
});

express.get("/2", (req, res) => {
	res.sendFile("./pages/basicLoginCaptcha.html", { root: __dirname });
});

module.exports = express;
