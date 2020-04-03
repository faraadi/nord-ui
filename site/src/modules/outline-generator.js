import { Nodes } from 'modules';

export default function outlineGenerator(selector) {
	const headings = Nodes.get(selector, true, true);
	const rightbar = Nodes.get(".rightbar");

	// rightbar.innerHTML = null;

	if (headings && headings.length) {
		const outlineContainer = document.createElement("div");
		outlineContainer.className = "outline-container";

		const outlineList = document.createElement("ul");
		outlineList.className = "outline-list";

		for (let heading of headings) {
			const outline = document.createElement("a");
			outline.className = "outline-link " + String(heading.nodeName).toLowerCase();
			outline.innerText = heading.innerText;
			outline.href = window.location.href + "#" + heading.id;
			const li = document.createElement("li");
			li.append(outline);
			outlineList.append(li);
		}
		outlineContainer.append(outlineList);
		if (rightbar.childElementCount > 1) rightbar.removeChild(rightbar.children[0]);
		outlineContainer.style.width = rightbar.parentNode.clientWidth + "px";
		rightbar.prepend(outlineContainer);
	}
}