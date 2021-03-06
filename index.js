var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

//need parser to read POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//enable crossdomain
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res) => {
  res.send('You have arrived at servicemonstah');
});

app.post('/query', function (req, res) {
	console.log('request body:',req.body)
	var species = req.body.species;
	var broh = req.body.broh;
	
	var html;

	console.log('inputs:',species,broh)
	
	if (species == 'babyWheel') {
		html = "<p class='bubble' style:'margin:8px;padding:10px;'>holee shit dood its a " + species + "!</p>";
	}  
	else if ((species == 'seaTuhtal') || (species == 'tuner') || (species == 'floundah')) {
		console.log('match found')
		html = "<p class='bubble' style:'margin:8px;padding:10px;'>its a fackin " + species + " dood</p>";
	}
	//there isn't a species, just unknown
	else if (species == 'unknown') {
		html = "<p class='bubble' style:'margin:8px;padding:10px;'>we ah seein' some shit we ain't never seen before " + broh + "</br>Try one of these: babyWheel,seaTuhtal,tuner,floundah</p>";
	}
	else {
		html = "<div class='alert alert-danger' role='alert'>What is that thing d00d?</div><p class='bubble' style:'margin:8px;padding:10px;'>Try one of these: babyWheel,seaTuhtal,tuner,floundah</p>";
	} 
	
	console.log('response:',html)
	res.send(html)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);