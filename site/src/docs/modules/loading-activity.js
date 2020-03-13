import nodes from './nodes-container.js';
const loadingQuery = ".docs-loading";
export default {
	show() {
		nodes.get(loadingQuery).classList.remove("hide");
	},
	hide() {
		nodes.get(loadingQuery).classList.add("hide");
	}
}