export default {
	get(query, isMultiple, refresh) {
		if(this.container[query] && !refresh) return this.container[query];
		else {
			const node = !isMultiple
				? document.querySelector(query)
				: document.querySelectorAll(query);
			this.container[query] = node;
			return node;
		}
	},
	container: {}
};