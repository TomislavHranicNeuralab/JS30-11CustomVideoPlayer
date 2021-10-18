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
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	toggle.textContent = icon = this.paused ? '►' : '❚ ❚';
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
