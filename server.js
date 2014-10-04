var express= require('express');
var mongojs = require('mongojs');
var db = mongojs("webdev", ["movie"]);
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port,ipaddress);

app.get('/',function(req,res){
	res.send('hello world!!!!');
});

var alice ={
	name:"Alice",
	
};

db.movie.insert(alice, function(err,data){
 console.log(err);
 console.log(data);
});
app.get('/env',function(req,res){
	res.json(process.env);
});