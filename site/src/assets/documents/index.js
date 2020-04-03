import IndexDoc from './index.md';

import QuickStartDoc from './getting-started/quick-start.md';
import IntroductionDoc from './getting-started/introduction.md';
import InstallationDoc from './getting-started/installation.md';
import UsageDoc from './getting-started/usage.md';

import ColorsDoc from './core/colors.md';
import TypographyDoc from './core/typography.md';
import VariablesDoc from './core/variables.md';

import FlexDoc from './flexbox/flex.md';
import AlignmentDoc from './flexbox/alignment.md';
import VisibilityDoc from './flexbox/visibility.md';
import GutterDoc from './flexbox/gutter.md';

import ButtonDoc from './components/button.md';
import CalloutDoc from './components/callout.md';
import CardDoc from './components/card.md';
import CollapseDoc from './components/collapse.md';
import CollapseScript from './components/js/collapse.script.js';
import FormDoc from './components/form.md';
import ModalDoc from './components/modal.md';
import ModalScript from './components/js/modal.script.js';
import SpinnerDoc from './components/spinner.md';
import TableDoc from './components/table.md';
import TooltipDoc from './components/tooltip.md';

import HelperClassesDoc from './utility/helper-classes.md';
import DefaultsDoc from './utility/defaults.md';

import DarkThemeDoc from './guides/dark-theme.md';
import RightToLeftDoc from './guides/right-to-left.md';
import CustomizationDoc from './guides/customization.md';

export default {
	"index" : {
		name: "Docs Home",
		path: "/doc",
		file: IndexDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/index.md"
	},
	"quick-start": {
		name: "Quick Start",
		path: "/docs/getting-started/quick-start",
		file: QuickStartDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/quick-start.md"
	},
	"introduction": {
		name: "Introduction",
		path: "/docs/getting-started/introduction",
		file: IntroductionDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/introduction.md"
	},
	"installation": {
		name: "Installation",
		path: "/docs/getting-started/installation",
		file: InstallationDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/installation.md"
	},
	"usage": {
		name: "Usage",
		path: "/docs/getting-started/usage",
		file: UsageDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/usage.md"
	},
	"colors": {
		name: "Colors",
		path: "/docs/core/colors",
		file: ColorsDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/colors.md"
	},
	"typography": {
		name: "Typography",
		path: "/docs/core/typography",
		file: TypographyDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/typography.md"	
	},
	"variables": {
		name: "Variables",
		path: "/docs/core/variables",
		file: VariablesDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/variables.md"	
	},
	"flex": {
		name: "Flex",
		path: "/docs/flexbox/flex",
		file: FlexDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/flex.md"	
	},
	"alignment": {
		name: "Alignment",
		path: "/docs/flexbox/alignment",
		file: AlignmentDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/alignment.md"	
	},
	"visibility": {
		name: "Visibility",
		path: "/docs/flexbox/visibility",
		file: VisibilityDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/visibility.md"	
	},
	"gutter": {
		name: "Gutter",
		path: "/docs/flexbox/gutter",
		file: GutterDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/gutter.md"	
	},
	"button": {
		name: "Button",
		path: "/docs/components/button",
		file: ButtonDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/button.md"
	},
	"callout": {
		name: "Callout",
		path: "/docs/components/callout",
		file: CalloutDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/callout.md"
	},
	"card": {
		name: "Card",
		path: '/docs/components/card',
		file: CardDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/card.md"
	},
	"collapse": {
		name: "Collapse",
		path: "/docs/components/collapse",
		file: CollapseDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/collapse.md",
		scripts: [CollapseScript]
	},
	"form": {
		name: "Form",
		path: "/docs/components/form",
		file: FormDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/form.md"
	},
	"modal": {
		name: "Modal",
		path: "/docs/components/modal",
		file: ModalDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/modal.md",
		scripts: [ModalScript]
	},
	"spinner": {
		name: "Spinner",
		path: "/docs/components/spinner",
		file: SpinnerDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/spinner.md"
	},
	"tooltip": {
		name: "Tooltip",
		path: "/docs/components/tooltip",
		file: TooltipDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/tooltip.md"
	},
	"table": {
		name: "Table",
		path: "/docs/components/table",
		file: TableDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/table.md"
	},
	"helper-classes": {
		name: "Helper Classes",
		path: "/docs/utility/helper-classes",
		file: HelperClassesDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/utility/helper-classes.md"
	},
	"defaults": {
		name: "defaults",
		path: "/docs/utility/defaults",
		file: DefaultsDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/utility/defaults.md"
	},
	"dark-theme": {
		name: "Dark Theme",
		path: "/docs/guides/dark-theme",
		file: DarkThemeDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/dark-theme.md"
	},
	"rtl": {
		name: "Right To Left",
		path: "/docs/guides/rtl",
		file: RightToLeftDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/right-to-left.md"
	},
	"customization": {
		name: "Customization",
		path: "/docs/guides/customization",
		file: CustomizationDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/customization.md"
	},
};