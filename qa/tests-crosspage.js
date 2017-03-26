var Browser = require('zombie');
var assert = require('chai').assert;


var browser;
suite('Cross Browsers', function(){
	setup(function(){
		browser = new Browser();
	});

	test('Select type of work: Water', function(done){
		var referrer = 'http://localhost:4000/works/water';
		browser.visit(referrer, function(){
			browser.clickLink('.requestGroupRate', function(){
				assert(browser.field('referrer').value !== referrer);
				done();
			});
		});
	});


	test('Select action request for new type of Work', function(done){
		browser.visit('http://localhost:4000/works/add-new-work', function(){
			assert(browser.field('referrer').value === '');
			done();	
		});
	});
});