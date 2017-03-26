var speakers = require('../lib/speakers');
var expect = require('chai').expect;

suite('Select speakers from list', function(){
	test('Check that speaker returned', function(){
		expect(typeof speakers.getSpeaker() === 'string');
	});
});