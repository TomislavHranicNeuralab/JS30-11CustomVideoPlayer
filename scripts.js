// Get our elemnts
const player      = document.querySelector('.player');
const video       = player.querySelector('.viewer');
const controls    = player.querySelector('.player__controls');
const progress    = controls.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle      = controls.querySelector('.toggle');
const skipButtons = controls.querySelectorAll('[data-skip]');
const ranges      = controls.querySelectorAll('.player__slider');

// Build functions
function togglePlay() {
	if ( video.paused ) {
		video.play();
	} else {
		video.pause();
	}
}

// Hook up the event listeners
