suite('Test for page "About": ', function(){
	test('Check link to page "Contact"', function(){
		assert($('a[href="/contact"]').length);
	});
});