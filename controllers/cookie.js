var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res){
	request(('http://api.icndb.com/jokes/random'), function(err, response, body){
		var data = JSON.parse(body);
		if (!err && response.statusCode === 200 && data)
		{
			res.render('home', {data: data});
			console.log(response.statusCode);
			console.log(data);
		} else {
			res.render('error');
		}
	});
});

function reveal(){
	// event.preventDefault;
	console.log("reveal() cookie.js");
	//once submit button is clicked: the image changes, 
	document.getElementById('cookie').src = 'cookieOpen.jpg';
	//the fortune appears, 
	document.getElementById('fortune').innerHTML = 'hi';
	//and the "revealed" div appears
	document.getElementById('revealed').style.display = 'block';
};  

module.exports = router;

// https://api.icndb.com CHUCK NORRIS 	http://api.icndb.com/jokes/random
// FORTUNE COOKIES: http://www.yerkee.com/api/fortune/definitions