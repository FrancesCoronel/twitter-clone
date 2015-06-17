// requiring all dependencies
var express = require('express');
var morgan = require('morgan');

// creating server using express
var app = express();

// listening to server at port 3000
var server = app.listen(3000);

app.use(morgan('dev'));

// routing
app.use('/', function(request, response) {
	response.send("hello");
});