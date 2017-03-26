suite('Global Tests:', function(){
	test('Check title length', function(){
		assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
	});
});