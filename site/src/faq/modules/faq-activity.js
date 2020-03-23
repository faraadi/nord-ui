import { ThemeActivity, outlineGenerator } from 'modules';

const Activity = {
	init() {
		window.requestIdleCallback(ThemeActivity.init);
		window.requestIdleCallback(() => outlineGenerator("article h2, article h3, article h4"));
	}
};

export default Activity;