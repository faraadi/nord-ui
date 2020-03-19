# Dark Theme

Although Nord UI comes with a Light Theme by default, it aims at dark schemes and has a fancy built-in Dark Theme to acheive this goal.

> This document also comes with both color schemes. to switch between them, look for theme button at header.

This Dark Theme can be applied on any individual element and its children, as well as whole document. so you can have both themes simultaneously and nest Dark Theme inside Light Theme. the only limitaion is that you can not nest Light Theme inside Dark Theme.

Before start using Dark Theme, we need to import Dark Theme's basic styles and component's style.

## Import Path

Import following style(s) to include `Dark Theme` styles in your app.

- Base: `nord-ui/dist/dark-theme.css`

## Including Dark Theme

If you're using CDN distribution or have imported entire package using `import 'nord-ui'`, you are all set and no further steps required.

Some components have specific styles for Dark Theme that you need to import in order to display them on dark scheme. after importing basic styles from `nord-ui/dist/dark-theme.css`, you need to import Dark Theme for those components too.

To check whether a component has separate styles for Dark Theme, go to the component page on this Documents and check `Import Path` section for Dark Theme styles.

For example to use `card` component, you need to import its dark styles from `nord-ui/dist/card.dark.css`.

> files containing dark styles have `[component].dark.css` format in their name.

Another important point, is that the component's dark styles only contains color modification like text, background and border colors. not the basic styles like `padding`, `position` and `transition`. so you must import component's basic styles before including its dark theme.

Our `card` example, will finally looks like this:

<div class='code-example'>
	<div class='source'>
```javascript
import 'nord-ui/dist/card.css';
import 'nord-ui/dist/card.dark.css';
```
	</div>
</div>

## Usage

Using Dark Theme is pretty straightforward. after including it in your project, just add `.dark` class to any element in order to switch to Dark Theme on its children.

### On Element

<div class='code-example'>
	<div class="preview">
		<div class="row justify-space-between">
			<div class="col xs-6 md-4 dark">
				<div class="card ">
					<div class="card-body">Dark Theme</div>
				</div>
			</div>
			<div class="col xs-6 md-4">
				<div class="card">
					<div class="card-body">Light Theme</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="row justify-space-between">
	<div class="col xs-6 md-4 dark">
		<div class="card ">
			<div class="card-body">Dark Theme</div>
		</div>
	</div>
	<div class="col xs-6 md-4">
		<div class="card">
			<div class="card-body">Light Theme</div>
		</div>
	</div>
</div>
```
	</div>
</div>
<br>

> switch documents theme to see result

### On Document

Add `.dark` class to `<body>`.

<div class='code-example'>
	<div class='source'>
```html
<body class="dark">
	...
</body>
```
	</div>
</div>