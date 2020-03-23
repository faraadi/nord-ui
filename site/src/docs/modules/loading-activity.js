import { Nodes } from 'modules';

const loadingQuery = ".docs-loading";

export default {
	show() {
		Nodes.get(loadingQuery).classList.remove("hide");
	},
	hide() {
		Nodes.get(loadingQuery).classList.add("hide");
	}
}