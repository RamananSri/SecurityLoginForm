const express = require("express");
const route = require("./src/route");
const app = express();

app.use("/login", route);

app.listen(3000, () => {
	console.log("server running");
});
