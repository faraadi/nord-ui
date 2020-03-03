import IndexDoc from './index.md';
import QuickStartDoc from './quick-start.md';
import IntroductionDoc from './introduction.md';
import InstallationDoc from './installation.md';
import UsageDoc from './usage.md';

export default {
	"index" : {
		path: "/",
		file: IndexDoc
	},
	"quick-start": {
		path: "/quick-start",
		file: QuickStartDoc
	},
	"introduction": {
		path: "/introduction",
		file: IntroductionDoc
	},
	"installation": {
		path: "/installation",
		file: InstallationDoc
	},
	"usage": {
		path: "/usage",
		file: UsageDoc
	}
}