import { MarkdownConverter, utils } from './index.js';
import docs from 'assets/documents';

let documentRoot = null;

export default async function renderDocument(docName) {
	if(docName) {
		const doc = await utils.getDocumentFile(docs[docName].file);
		const mainElement = document.querySelector("#main");
		mainElement.innerHTML = MarkdownConverter(doc);
	}
	else render404();
};

function render404() {

}