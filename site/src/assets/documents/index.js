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
		path: "/",
		file: IndexDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/index.md"
	},
	"quick-start": {
		path: "/quick-start",
		file: QuickStartDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/quick-start.md"
	},
	"introduction": {
		path: "/introduction",
		file: IntroductionDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/introduction.md"
	},
	"installation": {
		path: "/installation",
		file: InstallationDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/installation.md"
	},
	"usage": {
		path: "/usage",
		file: UsageDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/getting-started/usage.md"
	},
	"colors": {
		path: "/usage",
		file: ColorsDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/colors.md"
	},
	"typography": {
		path: "/typography",
		file: TypographyDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/typography.md"	
	},
	"variables": {
		path: "/variables",
		file: VariablesDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/core/variables.md"	
	},
	"flex": {
		path: "/flex",
		file: FlexDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/flex.md"	
	},
	"alignment": {
		path: "/alignment",
		file: AlignmentDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/alignment.md"	
	},
	"visibility": {
		path: "/visibility",
		file: VisibilityDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/visibility.md"	
	},
	"gutter": {
		path: "/gutter",
		file: GutterDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/flexbox/gutter.md"	
	},
	"button": {
		path: "/button",
		file: ButtonDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/button.md"
	},
	"callout": {
		path: "/callout",
		file: CalloutDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/callout.md"
	},
	"card": {
		path: '/card',
		file: CardDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/card.md"
	},
	"collapse": {
		path: "/collapse",
		file: CollapseDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/collapse.md",
		scripts: [CollapseScript]
	},
	"form": {
		path: "/form",
		file: FormDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/form.md"
	},
	"modal": {
		path: "/modal",
		file: ModalDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/modal.md",
		scripts: [ModalScript]
	},
	"spinner": {
		path: "/spinner",
		file: SpinnerDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/spinner.md"
	},
	"tooltip": {
		path: "/tooltip",
		file: TooltipDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/tooltip.md"
	},
	"table": {
		path: "/table",
		file: TableDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/components/table.md"
	},
	"dark-theme": {
		path: "/dark-theme",
		file: DarkThemeDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/dark-theme.md"
	},
	"helper-classes": {
		path: "/helper-classes",
		file: HelperClassesDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/utility/helper-classes.md"
	},
	"defaults": {
		path: "/defaults",
		file: DefaultsDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/utility/defaults.md"
	},
	"rtl": {
		path: "/right-to-left",
		file: RightToLeftDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/right-to-left.md"
	},
	"customization": {
		path: "/customization",
		file: CustomizationDoc,
		gitPath: "https://github.com/faraadi/nord-ui/blob/master/site/src/assets/documents/guides/customization.md"
	},
};