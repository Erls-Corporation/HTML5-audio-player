var audio;
var $button;

$(function() {

	$audio = $('<audio></audio>')
		.attr({
		})
		.appendTo('body');

	audio = $audio[0];

	$button = $('<span>' + symbols[0] + '</span>')
		.attr({
			'class': 'play_pause'
		})
		.appendTo('body');

	$button.click(function(event) {
		togglePlay();
	});

	addFile('Evgeny_Grinko_-_05_-_Sunset.ogg');

	console.log($audio[0]);
});

var symbols = ['▶', '❚❚'];

function togglePlay() {

	if(audio.paused === true)
		play();
	else
		pause();
}

function play() {

	audio.play();

	$button.text(symbols[1]);
}

function pause() {

	audio.pause();

	$button.text(symbols[0]);
}

function addFile(source) {

	$audio.append('<source src="' + source + '" type="audio/ogg">');
}
