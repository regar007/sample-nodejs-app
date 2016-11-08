// create a web-app framework
var express = require('express');

// create a app of above framwork
var app = express();

// get ip and port of machine if available
var ipAddress = process.env.IP || "127.0.0.1";
var port = process.env.PORT || 3000;


app.get('/', function(req, res){
	res.send("Hello world!");
});

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port, ipAddress);
console.log('sample-nodejs-app listening on port http://localhost:3000/ !');


module.exports = app;