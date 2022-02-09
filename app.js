const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));
// app.set('view engine', 'ejs');


app.get("/", function (req, res) {
	res.sendFile(__dirname + "/main.html");
});

app.get("/projects", function (req, res) {
	res.sendFile(__dirname + "/projects.html");
})



app.listen(3000, function () {
	console.log("Server is running...");
});
