//Express
var express = require('express');
var app = express();

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Static Folder
app.use(express.static(__dirname + '/client'));

app.listen(5000, function(){
	console.log('Server listening on port: 5000')
})