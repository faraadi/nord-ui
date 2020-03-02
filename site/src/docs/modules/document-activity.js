import { markdownConverter, Prism } from './index.js';
import {clipboard } from 'modules';
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
			Activity.addCopyButton();
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
	},
	addCopyButton() {
		document.querySelectorAll("pre[class*='language-']").forEach(function(el) {
			const button = document.createElement("button");
			button.className = "copy-btn";
			button.innerText = "copy";
			clipboard(button, e => e.target.previousSibling.innerText);
			el.append(button)
		})
	}
}

function render404() {

}

export default Activity;