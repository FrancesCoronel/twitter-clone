/**
 * Add a data array to the store module (as a variable, not an export). This will store the tweets.
 */
var _ = require("underscore");

var data = [];

var add = function (name, text) {
  data.push({ name: name, text: text });
};

var list = function () {
  return _.clone(data);
};

// var newData = [{"awesome_adj": "awesome"}, {"awesome_adj": "afdfa"}, {"awesome_adj": "awesome"}];

var find = function (properties) {
  // return _.where(newData, {awesome_adj: "awesome"});
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find };

// getting random element from array
var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// creating full fake names from sample data
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

// 2 random adjectives generated in default fake tweet
var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// generate 10 tweets using one full fake name and a fake tweet with 2 random adjectives
for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data);