// requiring all dependencies
var express = require('express');
var morgan = require('morgan');
// var logger = require('morgan');
// var routes = require('./routes');
// var swig = require('swig');
// var bodyParser = require('body-parser');
// var socketio = require('socket.io');

// creating server using express
var app = express();

// listening to server at port 3000

var server = app.listen(3000);
var io = socketio.listen(server);

// not caching swig
swig.setDefaults({ cache : false });

// loading app engine
app.engine('html', swig.renderFile);

// setting engine
app.set('view engine', 'html');
// locating template
app.set('views', __dirname + "/views");

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/submit',bodyParser.urlencoded({ extended: false }));

// routing
app.use('/', routes(io));