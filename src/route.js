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
	res.sendFile("./pages/basicLoginForm.html", { root: __dirname });
});

express.get("/2", (req, res) => {
	res.sendFile("./pages/basicLoginCaptcha.html", { root: __dirname });
});

express.post("/2", parser, (req, res) => {
	if (req.body.uname == user.username && req.body.psw == user.password && req.body['g-recaptcha-response'] !== "" || req.body['g-recaptcha-response'] !== null || req.body['g-recaptcha-response'] !== undefined) {
		res.sendFile("./pages/loginSuccess.html", { root: __dirname });
	} if
		(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === "" || req.body['g-recaptcha-response'] === null) {
		return res.json({ "responseCode": 1, "responseDesc": "Please select captcha" });
	}
});

module.exports = express;
