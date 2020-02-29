export default {
	findPathName(query) {
		return new URLSearchParams(query).get("page");
	},
	async getDocumentFile(path) {
		const response = await fetch(path);
		return await response.text();
	}
}