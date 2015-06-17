// requiring all dependencies
var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var _ = require('underscore');
var bodyParser = require('body-parser');

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
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./routes');
app.use('/', routes);