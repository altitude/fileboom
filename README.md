Fileboom
========

Fileboom is a premium files distribution server for individuals, made with Node.js.  
It allows you to serve files to your users through tokens. Each token is associated with a file and can have a download limit.  
Simply add files in the files/ folder, and use the API to manage tokens from your application.  

## Dead Simple API

**GET** /file  
parameters: token

Download the file associated with *token*, removes 1 download credit.  
*Example link: http://example.com/file?token=d45q3dzq3f86e4r*  

**PUT** /token  
parameters: api_id, api_key, token, filename, downloadLimit

Register a new *token* associated with *filename* with a download limit of *downloadLimit*  
*Example request: curl -X PUT -d {api_id:default, api_key:default, "e543f3", "doge.png", 10} 127.0.0.1:8080*  

**DELETE** /token  
parameters: api_id, api_key, token

Delete the specified token.  
*Example request: curl -X DELETE -d {api_id:default, api_key:default, "e543f3"} 127.0.0.1:8080*

### Dependencies
Fileboom requires Node.js v0.10+ and Redis 2.8.5+