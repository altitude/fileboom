var	redis   = require("redis").createClient();

module.exports = function(req, res){
	
	var api_id = req.body.api_id;
	var api_key = req.body.api_key;
	var token = req.body.token;

	if(api_id != config.api_id || api_key != config.api_key){
		res.writeHead(403);
		res.end("Sorry, you can't do this.");
	}

	redis.del(token, function(){
		res.writeHead(200);
		res.end("Token removed");
	});

}