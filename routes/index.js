var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

module.exports = function(io) {

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	});

	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: false } );
	});

	router.get( '/users/:name/tweets/:id', function (req, res) {
	  // use req.params here
	  var id = parseInt(req.params.id);
	  var name = req.params.name;
	  var idList = tweetBank.find( {id: id} );
	  res.render('index', { title: 'Twitter.js - Post # ' +id, tweets: idList, showForm: false } );
	});

	router.post('/submit', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  var id = parseInt(req.params.id);
	  tweetBank.add(name, text);
	  io.sockets.emit('new_tweet', { name: name, text: text });
	  res.redirect('/');
	});

	return router;

};

// module.exports = router;