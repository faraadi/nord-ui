import { markdownConverter, Prism } from './index.js';
import { clipboard } from 'modules';
import docs from 'assets/documents';

const Activity = {
	docLinks: null,

	previousActiveLink: null,

	init() {
		const links = document.querySelectorAll(".doc-link");
		if(links) {
			links.forEach( link => link.onclick = Activity.onLinkClick);
			Activity.docLinks = links;
		}
		const query = Activity.findPathName(window.location.search);
		Activity.getDocument(query);
		window.requestIdleCallback(Activity.themeToggler);
	},

	onLinkClick(e) {
		e.preventDefault();
		const pathname = Activity.findPathName(e.target.search);
		window.history.pushState({}, pathname, e.target.href);
		Activity.getDocument(pathname);
	},

	async getDocument(docName) {
		if(docName in docs) {
			const docFile = await Activity.getDocumentFile(docs[docName].file);
			if(docFile) return Activity.renderDoc(docName, docFile);
		}
		renderDoc(undefined, undefined);
	},

	renderDoc(docName, docFile) {
		if(docFile) {
			const mainElement = document.querySelector("#main");
			mainElement.innerHTML = markdownConverter(docFile);
			Activity.renderPostProcess(docName);
		}
		else render404();
	},

	renderPostProcess(docName) {
		Activity.activateDocLink();
		window.requestIdleCallback(Prism.highlightAll);
		window.requestIdleCallback(Activity.addCopyButton);
		window.requestIdleCallback(Activity.generateOutlines);
		window.requestIdleCallback(Activity.generateOutlines);
		Activity.updateDocEditLink(docs[docName].gitPath);
	},

	activateDocLink() {
		if(Activity.previousActiveLink) Activity.previousActiveLink.classList.remove("active");
		if(!Activity.docLinks) Activity.docLinks = document.querySelectorAll(".doc-link");
		for(let docLink of Activity.docLinks) {
			if(docLink.href === window.location.href) {
				docLink.classList.add("active");
				Activity.previousActiveLink = docLink;
				break;
			}
		}
	},

	async getDocumentFile(path) {
		const response = await fetch(path);
		return response.text();
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
		if(headings && headings.length) {
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
			if(rightbar.childElementCount > 1) rightbar.removeChild(rightbar.children[0]);
			outlineContainer.style.width = rightbar.parentNode.clientWidth + "px";
			rightbar.prepend(outlineContainer);
		}
	},

	updateDocEditLink(gitPath, target) {
		const link = document.querySelector(".doc-edit-link");
		link.href = gitPath;
	},

	themeToggler() {
		const themeToggleButton = document.querySelector(".toggle-theme-btn");
		themeToggleButton.onclick = function(e) {
			e.preventDefault();
			document.body.classList.contains("dark")
			? themeToggleButton.innerHTML = darkIcon
			: themeToggleButton.innerHTML = lightIcon;
			document.body.classList.toggle("dark");
		}
	}
}

function render404() {

}

export default Activity;

const darkIcon = `<svg fill='white' width='30' viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
const lightIcon = `<svg fill='white' width='30' viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`;