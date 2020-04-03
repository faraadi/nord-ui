import { Nodes } from 'modules';

const loadingQuery = ".loading-container";

export default {
	show() {
		Nodes.get(loadingQuery).classList.remove("hide");
	},
	hide() {
		Nodes.get(loadingQuery).classList.add("hide");
	}
}