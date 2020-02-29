export default {
	findPathName(query) {
		const pathName = new URLSearchParams(query).get("page");
		return (pathName === null || pathName === "") ? "index" : pathName;
	},
	async getDocumentFile(path) {
		const response = await fetch(path);
		return await response.text();
	}
}