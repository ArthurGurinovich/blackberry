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

app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' && 
	req.query.test === '1';
	next();
});


// Site pages



app.get('/', function(req, res){
	res.render('home');
});


var speakers = require('./lib/speakers');
app.get('/about', function(req, res){
	res.render('about', {
		speaker: speakers.getSpeaker(),
		pageTestScript: 'qa/tests-about.js'
	});
});
app.get('/works/water', function(req, res){
	res.render('works/water');
});
app.get('/works/add-new-work', function(req, res){
	res.render('works/add-new-work');
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