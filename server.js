var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.status(200).send('Hello from api-service\n');
});

var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});

process.on("SIGINT", () => {
    process.exit(130 /* 128 + SIGINT */);
});

process.on("SIGTERM", () => {
    console.log("Terminating...");
    server.close();
});