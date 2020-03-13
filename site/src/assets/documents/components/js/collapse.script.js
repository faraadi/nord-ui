(function() {
	const button = document.querySelector("[collapse-target]");

	button.onclick = function(e) {
		e.preventDefault();
		e.target.parentNode.classList.toggle("open")
	}
})();