# Visibility

When we build a web site, sometimes we need to toggle visibility of elements, depending on user screen size.

For example, you may hide unneccessary parts to display your site properly on mobile browsers.

Nord UI will help you to toggle display property of elements in response to screen sizes.

## Import Path
Import following style(s) to include `flex`, `alignment`, `visibility` and `gutter` styles in your app.

- Base: `nord-ui/lib/flex.css`
- Dark Theme: `none`

## Basic
`visibility` classes work by hiding elements at certain breakpoints or screen size ranges.

To hide any element, just add `.hide` modifier class.

<div class='code-example'>
	<div class='preview'>
		<div class="row simple-row hide">A Hidden Row</div>
		<div class="row simple-row">A Visible Row</div>
	</div>
	<div class='source'>
```html
<div class="row hidden">A Hidden Row</div>
<div class="row">A Visible Row</div>
```
	</div>
</div>

## Hiding on a screen size
Hidding an element is also possible for any given screen size using `.[size]-hide`, where `size` is one of screen sizes.

For example, to hide an element only in large screens, we use `.lg-hide`.

<div class='code-example'>
	<div class='preview'>
		<div class="row simple-row">A visible Row on any screen size</div>
		<div class="row simple-row lg-hide">Not visible on large screens</div>
		<div class="row simple-row md-hide">Not visible on medium screens</div>
	</div>
	<div class='source'>
```html
<div class="row">A visible Row on any screen size</div>
<div class="row lg-hide">Not visible on large screens</div>
<div class="row md-hide">Not visible on medium screens</div>
```
	</div>
</div>

> resize your browser's screen to see the changes

## Hiding in a screen range
You can specify a screen size range which an element will be hidden in that.

To hide an element in a given screen size range, use `.[size]-[direction]-hide` format to create class name, where size is the begining screen size and direction is `up` or `down`.

For Example, `.md-down-hide`, will hide the element, in `md`, `sm` and `xs` screen sizes. or `.sm-up-hide` will hide the element in `sm`, `md`, `lg` and `xl`.

<div class='code-example'>
	<div class='preview'>
		<div class="row">
			<div class="col xs-3 simple-col md-down-hide">hides in md down</div>
			<div class="col xs-6 simple-col sm-down-hide">hides in sm and down</div>
			<div class="col xs-3 simple-col xl-up-hide">hides in xl and up</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="col xs-3 md-down-hide">hides in md down</div>
<div class="col xs-6 sm-down-hide">hides in sm and down</div>
<div class="col xs-3 xl-up-hide">hides in xl and up</div>
```
	</div>
</div>

## Reference

|  | xs | sm | md | lg | xl |
| ---- | ---- | ---- | ---- | ---- | ---- |
| .xs-hide | hidden |  |  |  |  |
| .sm-hide |  | hidden |  |  |  |
| .md-hide |  |  | hidden |  |  |
| .lg-hide |  |  |  | hidden |  |
| .xl-hide |  |  |  |  | hidden |
| .xs-up-hide | hidden | hidden | hidden | hidden | hidden |
| .sm-up-hide |  | hidden | hidden | hidden | hidden |
| .md-up-hide |  |  | hidden | hidden | hidden |
| .lg-up-hide |  |  |  | hidden | hidden |
| .xl-up-hide |  |  |  |  | hidden |
| .xs-down-hide | hidden |  |  |  |  |
| .sm-down-hide | hidden | hidden |  |  |  |
| .md-down-hide | hidden | hidden | hidden |  |  |
| .lg-down-hide | hidden | hidden | hidden | hidden |  |
| .xl-down-hide | hidden | hidden | hidden | hidden | hidden |

<style type="text/css">
	.simple-row {
		padding: 10px;
		background-color: var(--nord3-pale);
	}
	.simple-col {
		padding: 10px;
		background-color: var(--nord3-pale);
		border: 1px solid var(--nord3)
	}
	table {
		width: 100%;
	}
	td,th {
		padding: 10px 15px;
		text-align: center
	}
	thead tr {
		background-color: var(--nord2);
		color: var(--nord4)
	}
	tbody tr:nth-child(2n-1) {
		background-color: var(--nord3-pale)
	}
	table, th, td {
		border-collapse: collapse;
	}
</style>