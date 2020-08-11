import { deBounce, trackFocus } from './_utils.js';

// Ready.
window.addEventListener('DOMContentLoaded', function () {
	// Replace no-js with js on the root HTML element.
	document.documentElement.className =
		document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
	trackFocus(document.body);
	console.log(
		`Ready event / body classes: ${document.documentElement.classList}`,
	);
});

// Load.
window.addEventListener('load', function () {
	console.log('Load event');
});

// Resize.
window.addEventListener(
	'resize',
	deBounce(() => {
		console.log('Resize event');
	}, 100),
);
