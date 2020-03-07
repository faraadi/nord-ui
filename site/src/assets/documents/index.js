import IndexDoc from './index.md';
import QuickStartDoc from './quick-start.md';
import IntroductionDoc from './introduction.md';
import InstallationDoc from './installation.md';
import UsageDoc from './usage.md';
import ButtonDoc from './button.md';
import CardDoc from './card.md';
import CollapseDoc from './collapse.md';
import CollapseScript from './js/collapse.script.js';

export default {
	"index" : {
		path: "/",
		file: IndexDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/index.md"
	},
	"quick-start": {
		path: "/quick-start",
		file: QuickStartDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/quick-start.md"
	},
	"introduction": {
		path: "/introduction",
		file: IntroductionDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/introduction.md"
	},
	"installation": {
		path: "/installation",
		file: InstallationDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/installation.md"
	},
	"usage": {
		path: "/usage",
		file: UsageDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/usage.md"
	},
	"button": {
		path: "/button",
		file: ButtonDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/button.md"
	},
	"card": {
		path: '/card',
		file: CardDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/card.md"
	},
	"collapse": {
		path: "/collapse",
		file: CollapseDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/collapse.md",
		scripts: [CollapseScript]
	}
}