import markdownConverter from './markdown-converter.js';
import { utils } from 'modules';
import docs from 'assets/documents';
import { Prism } from 'modules';

export function onDocLinkClick(e) {
	e.preventDefault();
	const pathname = utils.findPathName(e.target.search);
	window.history.pushState({}, pathname, e.target.href);
	gotoDoc(pathname);
}

export function gotoDoc(docName) {
	renderDoc(docName in docs ? docName : false);
}

export async function renderDoc(docName) {
	if(docName) {
		const doc = await utils.getDocumentFile(docs[docName].file);
		const mainElement = document.querySelector("#main");
		mainElement.innerHTML = markdownConverter(doc);
		activeDocLink();
		Prism.highlightAll();
	}
	else render404();
}


export function activeDocLink() {
	const previousActiveLink = document.querySelector("a.active");
	if(previousActiveLink) previousActiveLink.classList.remove("active");

	document.querySelectorAll(".doc-link").forEach(el => {
		if(el.href === window.location.href) el.classList.add("active")
	});
}

export function render404() {

}