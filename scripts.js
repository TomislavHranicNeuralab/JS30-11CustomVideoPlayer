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

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime   = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress); // Update progress bar width

let progressMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => progressMouseDown && scrub(e));
progress.addEventListener('mousedown', () => progressMouseDown = true);
progress.addEventListener('mouseup', () => progressMouseDown = false);

// ToDo:
// [] Range update only on mousedown
// [] Fullscreen button
