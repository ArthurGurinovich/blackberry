// Speakers list 
var speakers = [
	"Speaker 1",
	"Speaker 2",
	"Speaker 3",
	"Speaker 4",
	"Speaker 5"	
];

exports.getSpeaker = function(){
	var spx = speakers[Math.floor(Math.random() * speakers.length)];
	return spx;
};