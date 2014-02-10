var	redis   = require("redis").createClient(),
	fs      = require("fs"),
	mime    = require("mime");

module.exports = function(req, res){
	res.writeHead(200);
	res.end("Hello Admin");
};