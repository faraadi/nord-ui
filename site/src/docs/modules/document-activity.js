import { markdownConverter, Prism } from './index.js';
import docs from 'assets/documents';

const Activity = {
	docLinks: null,
	previousActiveLink: null,
	init() {
		const links = document.querySelectorAll(".doc-link");
		if(links) links.forEach( link => link.onclick = Activity.onLinkClick);

		const query = Activity.findPathName(window.location.search);
		Activity.getDocument(query);
	},
	onLinkClick(e) {
		e.preventDefault();
		const pathname = Activity.findPathName(e.target.search);
		window.history.pushState({}, pathname, e.target.href);
		Activity.getDocument(pathname);
	},
	getDocument(docName) {
		Activity.renderDoc(docName in docs ? docName : false);
	},
	async renderDoc(docName) {
		if(docName) {
			const doc = await Activity.getDocumentFile(docs[docName].file);
			const mainElement = document.querySelector("#main");
			mainElement.innerHTML = markdownConverter(doc);
			Activity.activateDocLink();
			Prism.highlightAll();
		}
		else render404();
	},
	activateDocLink() {
		if(Activity.previousActiveLink) Activity.previousActiveLink.classList.remove("active");
		if(!Activity.docLinks) Activity.docLinks = document.querySelectorAll(".doc-link");
		Activity.docLinks.forEach(linkElement => {
			if(linkElement.href === window.location.href) {
				linkElement.classList.add("active");
				Activity.previousActiveLink = linkElement;
			}
		});
	},
	async getDocumentFile(path) {
		const response = await fetch(path);
		return await response.text();
	},
	findPathName(query) {
		const pathName = new URLSearchParams(query).get("page");
		return (pathName === null || pathName === "") ? "index" : pathName;
	}
}

function render404() {

}

export default Activity;