//Homework #3
//Get neccessary modules
var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
//Determine Output
app.get('/', function(request, response) {
  var infile ="index.html";
  var out = fs.readFileSync(infile)
  response.send( out );
});
//Routing Output
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
