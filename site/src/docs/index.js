const links = document.querySelectorAll(".doc-link");
if(links) {
	links.forEach( link =>  link.onclick = navigateToAnotherPage);
};

function navigateToAnotherPage(e) {
	e.preventDefault();
	const pathname = findPathName(e.target.href);
	console.log(pathname);
};

function findPathName(_href) {
	const href = _href.split("/");
	const prevIndex = href.indexOf("docs");
	return prevIndex > -1 ? href[prevIndex + 1] : "404";
};