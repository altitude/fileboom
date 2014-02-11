var	redis = require("redis").createClient();
var config = require("../config/config");

module.exports = function(req, res){
	
	//aliasing the parameters
	var api_id = req.body.api_id;
	var api_key = req.body.api_key;
	var token = req.body.token;
	var filename = req.body.filename;
	var downloadLimit = parseInt(req.body.downloadLimit) || 0;

	//checking credentials
	if(api_id != config.api_id || api_key != config.api_key){
		res.writeHead(403);
		res.end("Sorry, you can't do this.");
		return;
	}

	//checking parameters
	if(token == undefined || filename == undefined){
		res.writeHead(400);
		res.end("Sorry, invalid request");
		return;
	}

	//registering the token
	redis.set("fileboom.tokens.files."+token, filename, function(){
		redis.set("fileboom.tokens.dl."+token, downloadLimit, function(){
			res.writeHead(200);
			res.end("Token registered");
		});
	});

}