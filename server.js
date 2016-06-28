var express = require('express');
var app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res) {
	res.render('pad');
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("The magic is happening on port => "+port);
});