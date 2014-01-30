/**
* Requirements
*/
var express = require("express");

/**
* Retrieving config
*/
var config = require("./config/config");

/**
* Retrieving routes
*/
var routes = {};
routes.dl = require('./routes/dl');

/**
* Creating app
*/
var app = express();

//test tokens
// redis.set("fileboom.tokens.files.fqjemkzjgsfe45fes453fq", "doge.png");
// redis.set("fileboom.tokens.dl.fqjemkzjgsfe45fes453fq", 10);

/**
* Routes association
*/
app.get("/dl", routes.dl);

app.get("/test", function(req, res){
	res.writeHead(200);
	res.end("test");
});

/**
* Listen
*/
app.listen(config.port, function(){
	console.log("Server is live and listening on :"+config.port);
});