export default function clipboard(_target, context) {
	let target = _target instanceof HTMLElement ? _target : document.querySelector(_target);; 
	target.addEventListener("click", function(e) {
		window.navigator.clipboard.writeText(typeof context === "string" ? context : context(e))
	});
}