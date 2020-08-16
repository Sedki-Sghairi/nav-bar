const navToggle = document.getElementById('nav-toggle');
const links = document.getElementById('links');

navToggle.addEventListener('click', function() {
	// links.classList.toggle('show-links');
	if (links.classList.contains('show-links')) {
		links.classList.remove('show-links');
	} else {
		links.classList.add('show-links');
	}
});
