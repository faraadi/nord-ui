import { Nodes } from 'modules';
import docsModel from 'assets/documents';

const BottomNavigation = {
	init(callback) {
		Nodes.get(".docs-bottom-navigation.previous").onclick = callback;
		Nodes.get(".docs-bottom-navigation.next").onclick = callback;
	},
	getLinksData(docName) {
		const docsList = Object.keys(docsModel);
		const index = docsList.indexOf(docName);
		const nextName = docsList[index + 1];
		if (index >= 1) {
			const previousName = docsList[index - 1];
			if (!nextName) {
				return {
					previous: {
						text: docsModel[previousName].name,
						href: window.location.origin + docsModel[previousName].path
					}
				}
			}
			return {
				previous: {
					text: docsModel[previousName].name,
					href: window.location.origin + docsModel[previousName].path
				},
				next: {
					text: docsModel[nextName].name,
					href: window.location.origin + docsModel[nextName].path
				}
			}
		}
		else {
			return {
				next: {
					text: docsModel[nextName].name,
					href: window.location.origin + docsModel[nextName].path
				}
			};
		}

	},

	update(docName) {
		const data = BottomNavigation.getLinksData(docName);

		const previousBtn = Nodes.get(".docs-bottom-navigation.previous");
		if (data.previous) {
			previousBtn.href = data.previous.href;
			previousBtn.innerHTML = "&laquo;&nbsp;" + data.previous.text;
			previousBtn.style.display = "block";
		}
		else previousBtn.style.display = "none";

		const nextBtn = Nodes.get(".docs-bottom-navigation.next");
		if(data.next) {
			nextBtn.href = data.next.href;
			nextBtn.innerHTML = data.next.text + "&nbsp;&raquo;";
			nextBtn.style.display = "block";
		}
		else nextBtn.style.display = "none";
	}
};

export default BottomNavigation;