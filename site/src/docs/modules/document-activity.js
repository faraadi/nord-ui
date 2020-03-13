import { markdownConverter, Prism } from './index.js';
import { clipboard } from 'modules';
import nodes from './nodes-container.js';
import loading from './loading-activity.js';
import utils from './utils';
import docs from 'assets/documents';

const Activity = {
	docLinks: null,

	previousActiveLink: null,

	isMobile: false,

	init() {
		const links = nodes.get(".doc-link", true);
		if(links) {
			links.forEach( link => link.onclick = Activity.onLinkClick);
			Activity.docLinks = links;
		}
		const query = utils.findPathName(window.location.search);
		Activity.checkBrowser();
		Activity.goToDoc(query);
		window.requestIdleCallback(Activity.themeToggler);
	},

	onLinkClick(e) {
		e.preventDefault();
		const pathname = utils.findPathName(e.target.search);
		window.history.pushState({}, pathname, e.target.href);
		Activity.goToDoc(pathname);
	},

	async goToDoc(docName) {
		loading.show();
		nodes.get("#main").innerHTML = null;
		if(docName in docs) {
			const docFile = await utils.getDocumentFile(docs[docName].file);
			if(docFile) return Activity.renderDoc(docName, docFile);
		}
		Activity.renderDoc(undefined, undefined);
	},

	renderDoc(docName, docFile) {
		loading.hide();
		Activity.renderPreProcess();
		if(docFile) {
			const mainElement = nodes.get("#main");
			mainElement.innerHTML = markdownConverter(docFile);
			Activity.renderPostProcess(docName);
		}
		else render404();
	},

	renderPostProcess(docName) {
		Activity.activateDocLink();
		window.requestIdleCallback(() => Activity.loadDocumentScripts(docName));
		window.requestIdleCallback(Prism.highlightAll);
		window.requestIdleCallback(Activity.addCopyButton);
		if(!Activity.isMobile) window.requestIdleCallback(Activity.generateOutlines);
		Activity.updateDocEditLink(docName, docs[docName].gitPath);
	},

	renderPreProcess() {
		const temporaryScriptsContainer = nodes.get(".temporary-scripts-container");
		for(let child of temporaryScriptsContainer.children) child.remove();	
	},

	activateDocLink() {
		if(Activity.previousActiveLink) Activity.previousActiveLink.classList.remove("active");
		const docLinks = nodes.get(".doc-link", true);
		for(let docLink of docLinks) {
			if(docLink.href === window.location.href) {
				docLink.classList.add("active");
				Activity.previousActiveLink = docLink;
				break;
			}
		}
	},

	addCopyButton() {
		nodes.get("pre[class*='language-']", true, true).forEach(function(el) {
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
		const headings = nodes.get(".documentation>h2, .documentation>h3, .documentation>h4", true);
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
			const rightbar = nodes.get(".rightbar");
			if(rightbar.childElementCount > 1) rightbar.removeChild(rightbar.children[0]);
			outlineContainer.style.width = rightbar.parentNode.clientWidth + "px";
			rightbar.prepend(outlineContainer);
		}
	},

	updateDocEditLink(docName, gitPath) {
		const editLink = nodes.get(".doc-edit-link");
		editLink.href = gitPath;
		editLink.innerText = `edit ${docName} page`;
	},

	themeToggler() {
		const themeTogglerBtn = nodes.get(".toggle-theme-btn")
		themeTogglerBtn.onclick = function(e) {
			e.preventDefault();
			document.body.classList.contains("dark")
				? themeTogglerBtn.innerHTML = darkIcon
				: themeTogglerBtn.innerHTML = lightIcon;
			document.body.classList.toggle("dark");
		}
	},

	loadDocumentScripts(docName) {
		const { scripts } = docs[docName];
		if(scripts) {
			const temporaryScriptsContainer = nodes.get(".temporary-scripts-container");
			for(let scriptPath of scripts) {
				const script = document.createElement("script");
				script.src = scriptPath;
				script.type = "text/javascript";
				temporaryScriptsContainer.append(script);
			}
		}
	},

	checkBrowser() {
		if(window.innerWidth < 1280) Activity.isMobile = true;
	}
}

function render404() {
}

export default Activity;

const darkIcon = `<svg fill='white' width='30' viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
const lightIcon = `<svg fill='white' width='30' viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`;