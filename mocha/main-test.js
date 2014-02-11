var request = require("superagent");
var expect = require("expect.js");

describe('the PUT /token method', function(){

	it('should accept a valid token object', function(done){
		request
			.put("http://127.0.0.1:8080/token")
			.send({
				api_id:"default",
				api_key:"default",
				token:"a435fe438",
				filename:"doge.png",
				downloadLimit:2
			})
			.end(function(err, res){
				expect(res.status).to.be(200);
				done();
			});
	});

	it('should deny an invalid token object', function(done){
		request
			.put("http://127.0.0.1:8080/token")
			.send({
				api_id:"default",
				api_key:"default",
				token:"a435fe438",
				downloadLimit:1
			})
			.end(function(err, res){
				expect(res.status).to.be(400);
				done();
			});
	});

});

describe('the GET /file method', function(){

	it('should comply to a valid token', function(done){
		request
			.get("http://127.0.0.1:8080/file")
			.query({token:"a435fe438"})
			.end(function(err, res){
				expect(res.status).to.be(200);
				done();
			});
	});

	it('should deny an invalid token', function(done){
		request
			.get("http://127.0.0.1:8080/file")
			.query({token:"4zqd35dz4q5d43qz38d4"})
			.end(function(err, res){
				expect(res.status).to.be(404);
				done();
			});
	});

	it('should deny a download limit exceeded token', function(done){
		request
			.get("http://127.0.0.1:8080/file")
			.query({token:"a435fe438"})
			.end(function(err, res){
				expect(res.status).to.be(200);
				done();
			});
	});

});

describe('the DELETE /token method', function(){

	it('should delete a valid token', function(done){
		request
			.del("http://127.0.0.1:8080/token")
			.send({
				api_id:"default",
				api_key:"default",
				token:"a435fe438",
			})
			.end(function(err, res){
				expect(res.status).to.be(200);
				done();
			});
	});

	it('should deny a valid token', function(done){
		request
			.del("http://127.0.0.1:8080/token")
			.send({
				api_id:"default",
				api_key:"default",
			})
			.end(function(err, res){
				expect(res.status).to.be(400);
				done();
			});
	});

});