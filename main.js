var express = require("express"),
	redis   = require("redis").createClient(),
	fs      = require("fs"),
	mime    = require("mime");

var app = express();

//test tokens
redis.set("fileboom.tokens.files.fqjemkzjgsfe45fes453fq", "doge.png");
redis.set("fileboom.tokens.dl.fqjemkzjgsfe45fes453fq", 10);

app.get("/f/:token", function(req, res){

	redis.get("fileboom.tokens.files."+req.params.token, function(err, reply){
		if(err){
			res.writeHead(500);
			res.end("Such fail");
			return;
		}
		if(reply === null){
			res.writeHead(404);
			res.end("Poor shibe, file not found");
			return;
		}
		try{
			file = fs.createReadStream(__dirname+"/files/"+reply);
		} catch(err){
			res.writeHead(404);
			res.end("Poor shibe, file not found");
			return;
		}
		res.writeHead(200, {
			"Content-Type":mime.lookup(reply),
			"Content-Disposition":"attachment; filename=\""+reply+"\""
		});
		file.pipe(res).on("end", function(){
			res.end();
		});

	});

});

app.get("/test", function(req, res){
	res.writeHead(200);
	res.end("test");
});

app.listen(8080, function(){
	console.log("Starting server on :8080");
});