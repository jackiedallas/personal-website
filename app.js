const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));


app.get("/", function (req, res) {
	res.sendFile(__dirname + "/main.html");
});



app.listen(4000, function () {
	console.log("Server is running...");
});
