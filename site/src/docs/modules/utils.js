export default {
	async getDocumentFile(path) {
		const response = await fetch(path);
		return response.text();
	},
	findPathName(path) {
		if (path.startsWith("/")) path = path.slice(1);
		const [, section, page] = path.split("/");
		if (!section || !page) return { page: "index" };
		return { section, page };
	},
}