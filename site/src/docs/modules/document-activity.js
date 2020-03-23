import { markdownConverter, Prism } from './index.js';
import { clipboard, Nodes, ThemeActivity } from 'modules';
import loading from './loading-activity.js';
import mobileMenu from './mobile-menu-activity.js';
import utils from './utils';
import docs from 'assets/documents';

const Activity = {
	docLinks: null,

	previousActiveLink: null,

	isMobile: false,

	init() {
		const links = Nodes.get(".doc-link", true);
		if(links) {
			links.forEach( link => link.onclick = Activity.onLinkClick);
			Activity.docLinks = links;
		}
		Activity.checkBrowser();
		Activity.goToDoc();
		window.requestIdleCallback(ThemeActivity.init);
		if(Activity.isMobile) window.requestIdleCallback(mobileMenu.init);
		window.onpopstate = Activity.onHistoryChange;
	},

	onLinkClick(e) {
		e.preventDefault();
		const pathname = utils.findPathName(e.target.pathname);
		window.history.pushState({}, pathname, e.target.href);
		Activity.goToDoc(pathname);
	},

	async goToDoc() {
		loading.show();
		if(Activity.isMobile) mobileMenu.close();
		Nodes.get("#main").innerHTML = null;
		const { page } = utils.findPathName(window.location.pathname);
		if(page in docs) {
			const docFile = await utils.getDocumentFile(docs[page].file);
			if(docFile) Activity.renderDoc(page, docFile);
		}
		else render404();
	},

	renderDoc(docName, docFile) {
		Activity.renderPreProcess();
		const mainElement = Nodes.get("#main");
		mainElement.innerHTML = markdownConverter(docFile);
		Activity.renderPostProcess(docName);
		loading.hide();
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
		const temporaryScriptsContainer = Nodes.get(".temporary-scripts-container");
		for(let child of temporaryScriptsContainer.children) child.remove();	
	},

	activateDocLink() {
		if(Activity.previousActiveLink) Activity.previousActiveLink.classList.remove("active");
		const docLinks = Nodes.get(".doc-link", true);
		for(let docLink of docLinks) {
			if(docLink.href === window.location.href) {
				docLink.classList.add("active");
				Activity.previousActiveLink = docLink;
				break;
			}
		}
	},

	addCopyButton() {
		Nodes.get("pre[class*='language-']", true, true).forEach(function(el) {
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
		const headings = Nodes.get(".documentation>h2, .documentation>h3, .documentation>h4", true, true);
		const rightbar = Nodes.get(".rightbar");
		// rightbar.innerHTML = null;
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
			if(rightbar.childElementCount > 1) rightbar.removeChild(rightbar.children[0]);
			outlineContainer.style.width = rightbar.parentNode.clientWidth + "px";
			rightbar.prepend(outlineContainer);
		}
	},

	updateDocEditLink(docName, gitPath) {
		const editLink = Nodes.get(".doc-edit-link");
		editLink.href = gitPath;
		editLink.innerText = `edit ${docName} page`;
	},

	loadDocumentScripts(docName) {
		const { scripts } = docs[docName];
		if(scripts) {
			const temporaryScriptsContainer = Nodes.get(".temporary-scripts-container");
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
	},

	onHistoryChange(e) {
		Activity.goToDoc()
	}
}

function render404() {
}

export default Activity;