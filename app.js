// requiring all dependencies
var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

//turning off Swig's caching
swig.setDefaults({ cache: false });

// creating server using express
var app = express();

//render html
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// listening to server at port 3000
var server = app.listen(3000);

app.use(morgan('dev'));

// routing
app.use('/', function(request, response) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	response.render( 'index', {title: 'Hall of Fame', people: people} );
});