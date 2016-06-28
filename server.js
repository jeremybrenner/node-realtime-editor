var express = require('express');
var app = express();
var sharejs = require('share');
var redis = require('redis');

app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res) {
	res.render('pad');
});
app.get('/:id', function(req,res) {
	res.render('pad');
});

// *** Server Config ***
// ==========================================================
var port = process.env.PORT || 3000;
var options = {
	db: {type: 'redis'}
};

sharejs.server.attach(app,options);

app.listen(port, function(){
	console.log("The magic is happening on port => "+port);
});