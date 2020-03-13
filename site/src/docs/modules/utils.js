export default {
	async getDocumentFile(path) {
		const response = await fetch(path);
		return response.text();
	},
	findPathName(query) {
		const pathName = new URLSearchParams(query).get("page");
		return (pathName === null || pathName === "") ? "index" : pathName;
	},
}