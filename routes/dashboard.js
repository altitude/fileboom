var	redis   = require("redis").createClient(),
	fs      = require("fs"),
	mime    = require("mime");

module.exports = function(req, res){
	if(req.ip != "127.0.0.1"){
		res.writeHead(403);
		res.end("You don't have permission to access this area");
		return;
	}
	res.writeHead(200);
	res.end("Hello Admin");
};