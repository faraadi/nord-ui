import './docs.css';
import { utils } from 'modules';
import { onDocLinkClick, gotoDoc } from './functions';

function initDocument() {
	attachDocLinksCallback();
	checkInitialRender();
}

function checkInitialRender()  {
	const query = utils.findPathName(window.location.search);
	gotoDoc(query)
}

function attachDocLinksCallback() {
	const links = document.querySelectorAll(".doc-link");
	if(links) links.forEach( link => link.onclick = onDocLinkClick);
}

initDocument();