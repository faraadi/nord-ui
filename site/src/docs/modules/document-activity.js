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
			Activity.generateOutlines();
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
			clipboard(button, e => {
				e.target.innerText = "copied ✔";
				setTimeout(() => e.target.innerText = "copy", 2000);
				return e.target.previousSibling.innerText;
			});
			el.append(button);
		});
	},
	generateOutlines() {
		const headings = document.querySelectorAll(".documentation>h2, .documentation>h3, .documentation>h4");
		if(headings) {
			const outlineContainer = document.createElement("div");
			outlineContainer.className = "outline-container";

			const outlineList = document.createElement("ul");
			outlineList.className = "outline-list";

			for(let heading of headings) {
				const outline = document.createElement("a");
				outline.className = "outline-link " +  String(heading.nodeName).toLowerCase();
				outline.innerText = heading.innerText;
				outline.href = window.location.href + "#" + heading.id;
				const li = document.createElement("li");
				li.append(outline);
				outlineList.append(li);
			}
			outlineContainer.append(outlineList);
			const rightbar = document.querySelector(".rightbar");
			if(rightbar.childElementCount) rightbar.removeChild(rightbar.children[0]);
			rightbar.style.width = rightbar.parentNode.clientWidth + "px";
			rightbar.append(outlineContainer);
		}
	}
}

function render404() {

}

export default Activity;