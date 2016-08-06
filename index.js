var express = require('express');
// var ejsLayouts = require('express-ejs-layouts');
var request = require('request');
// var session   = require('express-session');
// var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
// var db = require('./models');
// var flash = require('connect-flash');
var app = express();

app.set('view engine', 'ejs');
// app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// home page
app.get('/', function(req, res){
	res.render('home');
});

// about page
app.get('/about', function(req, res){
  res.render('about');
});

// get the fortune using the controller
app.use('/cookie', require('./controllers/cookie'));

// error handling
app.get('/404', function(req, res, next){
  res.render('error');
  next();
});

// SCRIPTS (SHOULD PUT THIS IN A DIFFERENT FOLDER?)
var reveal = function(){
	// event.preventDefault;
	console.log("reveal() cookie.js");
	//once submit button is clicked: the image changes, 
	// document.getElementById('cookie').src = 'cookieOpen.jpg';
	//the fortune appears, 
	document.getElementById('fortune').innerHTML = 'hi';
	//and the "revealed" div appears
	document.getElementById('fortuneDiv').style.display = 'block';
	document.getElementById('revealed').style.display = 'inline';
}; 

console.log("Chuck Norris never wet the bed as a child, the bed wet itself out of fear.");
app.listen(process.env.PORT || 3000);