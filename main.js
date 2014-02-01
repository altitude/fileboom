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
routes.dashboard = require('./routes/dashboard');

/**
* Creating app
*/
var app = express();

/**
* Routes association
*/
app.get("/file", routes.dl);

app.get("/dashboard", routes.dashboard);

app.put("/token", function(req, res){

});
app.delete("/token", function(res, res){

});

/**
* Listen
*/
app.listen(config.port, function(){
	console.log("Server is live and listening on :"+config.port);
});