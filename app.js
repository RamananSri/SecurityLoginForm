const express = require("express");
const route = require("./src/pages/basicLoginForm");
const app = express();

app.use("/login", route);

app.listen(3000, () => {
	console.log("server running");
});
