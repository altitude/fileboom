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
routes.getFile = require('./routes/getFile');
routes.putToken = require('./routes/putToken');
routes.deleteToken = require('./routes/deleteToken');
routes.dashboard = require('./routes/dashboard');

/**
* Creating app
*/
var app = express();

/**
* Middlewares
*/
app.use(express.bodyParser());

/**
* Routes registering
*/
app.get("/file", routes.getFile);

app.put("/token", routes.putToken);

app.delete("/token", routes.deleteToken);

// WIP feature
app.get("/dashboard", routes.dashboard);

/**
* Shhh ! Listen !
*/
app.listen(config.port, function(){
	console.log("Server is live and listening on :"+config.port);
});