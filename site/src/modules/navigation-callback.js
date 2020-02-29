import { utils, renderDocument } from './index';
import docs from 'assets/documents';

let previousDocLink = null;

export default function navigationCallback(e) {
	e.preventDefault();
	if(previousDocLink) previousDocLink.classList.remove("active");
	const pathname = utils.findPathName(e.target.search);
	window.history.pushState({}, pathname, e.target.href);
	if(pathname in docs)  {
		e.target.classList.add("active");
		previousDocLink = e.target;
		renderDocument(pathname);
	}
	else renderDocument(false);
};