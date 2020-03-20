import nodes from './nodes-container.js';

export default {
	init() {
		const btn = nodes.get(".mobile-menu-toggler");
		btn.onclick = function(e) {
			e.preventDefault();
			nodes.get("aside.leftbar").classList.toggle("mobile-open");
		}
	},
	close() {
		nodes.get("aside.leftbar").classList.remove("mobile-open");
	}
}