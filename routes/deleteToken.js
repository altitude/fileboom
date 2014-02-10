var	redis = require("redis").createClient();

module.exports = function(req, res){
	
	//aliasing the parameters
	var api_id = req.body.api_id;
	var api_key = req.body.api_key;
	var token = req.body.token;

	//checking credentials
	if(api_id != config.api_id || api_key != config.api_key){
		res.writeHead(403);
		res.end("Sorry, you can't do this.");
		return;
	}

	//delete the token from redis
	redis.del("fileboom.tokens.files."+token, function(){
		redis.del("fileboom.tokens.dl."+token, function(){
			res.writeHead(200);
			res.end("Token removed");
		});
	});

}