var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
    res.status(200).send('Hello from api-service\n');
});

app.get('/user/:userId', function (req, res) {
    res.status(200).send(user);
});

app.get('/bike/:bikeId', function (req, res) {

    var bike = findBike(req.params.bikeId);

    res.status(200).send(bike);
});

app.get('/getAvailableBikes', function (req, res) {
    let bikes = bikesData;
    res.status(200).send(bikes);
});

app.post('/bike/:bikeId/rent', function (req, res) {
    user.state = "reserved";
    user.bikeId = req.params.bikeId;
    res.send({
        reservation: "confirmed",
        bike: findBike(req.params.bikeId)
    });
});

app.post('/bike/:bikeId/return', function (req, res) {
    user.state = "free";
    user.bikeId = null;
    res.send({
        reservation: "closed",
        bike: findBike(req.params.bikeId)
    });
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


// hard-coded bikes data

function findBike(id) {
    for (var i = 0; i < bikesData.length; i++) {
        if (bikesData[i].id == id) {
            return bikesData[i];
        }
    }
    return null;
}

var user = {
    state: "free"
}

var bikesData = [
    { id: "1", name: "Schwinn Women's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-1.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "2", name: "Huffy Men's Comfort", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-2.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "3", name: "Schwinn Women's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-3.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "4", name: "Schwinn Girl's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-4.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "5", name: "Huffy Women's Comfort", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-2.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "6", name: "Huffy Men's Comfort", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-1.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "7", name: "Schwinn Men's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-4.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "8", name: "Schwinn Women's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-1.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "9", name: "Huffy Women's Comfort", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-2.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "10", name: "Schwinn Women's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-3.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "11", name: "Huffy Women's Comfort", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-4.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "12", name: "Schwinn Girl's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-2.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
    { id: "13", name: "Schwinn Women's Cruiser", address: "One Microsoft Way, Redmond, WA 98052", rate: "5", imageUrl: "/static/sample-bike-1.jpg", owner: "Kelly", riderHeight: 7.35, maxWeight: 113.4},
];