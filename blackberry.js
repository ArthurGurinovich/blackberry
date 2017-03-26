var express = require('express');

var app = express();
app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/public'));

var handlebars = require('express-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.listen(app.get('port'), function(){
	console.log('Site Blackberry started on http://localhost:' + app.get('port') + '. Click on Crtl+C to Exit');
});



// Speakers list 
var speakers = [
	"Speaker 1",
	"Speaker 2",
	"Speaker 3",
	"Speaker 4",
	"Speaker 5"	
];

// Site pages

app.get('/', function(req, res){
	res.render('home');
});
app.get('/about', function(req, res){
	var speakerFromList = speakers[Math.floor(Math.random() * speakers.length)];

	res.render('about', {speaker: speakerFromList});
});



// Errors list

// Page: 404 - Not Found
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});


// Page: 500 - Server side issue
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});