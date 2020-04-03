import { Nodes } from 'modules';

export default {
	init() {
		const btn = Nodes.get(".mobile-menu-toggler");
		btn.onclick = function (e) {
			e.preventDefault();
			Nodes.get("aside.leftbar").classList.toggle("mobile-open");
		}
	},
	close() {
		Nodes.get("aside.leftbar").classList.remove("mobile-open");
	}
}