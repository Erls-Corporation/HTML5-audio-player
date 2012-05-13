var audio;
var $button;

var $loadingBar;
var $progressBar;

var symbols = ['▶', '❚❚'];

$(function() {

	$audio = $('<audio></audio>')
		.attr({
		})
		.appendTo('body');

	audio = $audio[0];

	$button = $('<div>' + symbols[0] + '</div>')
		.attr({
			class: 'play_pause'
		})
		.appendTo('body');

	$button.click(function(event) {
		togglePlay();
	});

	$bar = $('<div></div>')
		.attr({
			class: 'bar'
		})
		.appendTo('body');

	$loadingBar = $('<div></div>')
		.attr({
			class: 'loadingBar'
		})
		.appendTo($bar);

	$progressBar = $('<div></div>')
		.attr({
			class: 'progressBar'
		})
		.appendTo($loadingBar);

	addFile('Evgeny_Grinko_-_05_-_Sunset.ogg');

	audio.addEventListener('timeupdate', update);
});

function addFile(source) {

	$audio.append('<source src="' + source + '" type="audio/ogg">');
}

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

function update(event) {

	$progressBar.width($bar.width() * playingProgress());
}

function playingProgress() {

	return audio.currentTime / audio.duration;
}
