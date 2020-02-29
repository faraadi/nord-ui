import IndexDoc from './index.md';
import InstallationDoc from './installation.md';
import QuickStartDoc from './quick-start.md';
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
	"installation": {
		path: "/installation",
		file: InstallationDoc
	},
	"usage": {
		path: "/usage",
		file: UsageDoc
	}
}