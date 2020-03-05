# Button


Buttons are an Essential part of the web app. add `.btn` modifier class to any button to create a basic button.

Nord UI buttons can be created in three ways:
- `<button class='btn'></button>`
- `<a class='btn'></a>`
- `<input class='btn' type="submit">` or `<input class='btn' type="reset">`
## import path
Import following style(s) to include button styles in your app.

- Base: `nord-ui/lib/button.css`
- Dark Theme: `none`

## Basic Style

There are 6 color variants for buttons.

<div class='code-example'>
	<div class='preview'>
		<button class='btn primary'>Primary</button>
		<button class='btn secondary'>Secondary</button>
		<button class='btn success'>Success</button>
		<button class='btn warning'>Warning</button>
		<button class='btn danger'>Danger</button>
		<button class='btn info'>Info</button>
	</div>
	<div class='source'>
```html
<button class='btn primary'>Primary</button>
<button class='btn secondary'>Secondary</button>
<button class='btn success'>Success</button>
<button class='btn warning'>Warning</button>
<button class='btn danger'>Danger</button>
<button class='btn info'>Info</button>
```
	</div>
</div>

> Always use a color modifier with your buttons!

## Sizes

<div class='code-example'>
	<div class='preview'>
		<button class='btn primary large'>Large</button>
		<button class='btn primary'>Medium</button>
		<button class='btn primary small'>Small</button>
	</div>
	<div class='source'>
```html
<button class='btn primary large'>Large</button>
<button class='btn primary'>Medium</button>
<button class='btn primary small'>Small</button>
```
	</div>
</div>

## Block Button

<div class="code-example">
	<div class="preview">
		<button class="btn primary block">Full Width Block Button</button>
		<button class="btn secondary block">Full Width Block Button</button>
		<button class="btn danger block">Full Width Block Button</button>
	</div>
	<div class="source">
```html
<button class="btn primary block">Full Width Block Button</button>
<button class="btn secondary block">Full Width Block Button</button>
<button class="btn danger block">Full Width Block Button</button>
```
	</div>
</div>


## Anchor Buttons
Buttons also can be created using `<a>` tags to navigate users around. add `btn` modifier to the tag classes.

<div class='code-example'>
	<div class='preview'>
		<a href="https://somewhere.com" class='btn info'>Link</a>
	</div>
	<div class='source'>
```html
<a href="https://somewhere.com" class='btn info'>Link</a>
```
	</div>
</div>


## Loading State

<div class='code-example'>
	<div class='preview'>
		<button class='btn primary loading'>loading...</button>
		<button class='btn secondary loading'>loading...</button>
	</div>
	<div class='source'>
```html
<button class='btn primary loading'>loading...</button>
<button class='btn secondary loading'>loading...</button>
```
	</div>
</div>

## Disabled State

You can toggle disabled state on buttons using `disabled` attribute on `<button>`, as well as `.diabled` modifier class. the later will be useful for anchor buttons, since `<a>` does not support `disabled` attribute.
<div class='code-example'>
	<div class='preview'>
		<button class='btn primary' disabled>Disbaled Button</button>
		<a href="https://somewhere.com" class='btn secondary disabled'>Disabled Link</a>
	</div>
	<div class='source'>
```html
<button class='btn primary' disabled>Disbaled Button</button>
<a href="https://somewhere.com" class='btn secondary disabled'>Disabled Link</a>
```
	</div>
</div>

## Hover State

Simulate hover state on buttons using `.hover` modifier class
<div class='code-example'>
	<div class='preview'>
		<button class='btn primary'>Normal Button</button>
		<button class='btn primary hover'>Hovered Button</button>
	</div>
	<div class='source'>
```html
<button class='btn primary'>Normal Button</button>
<button class='btn primary hover'>Hovered Button</button>
```
	</div>
</div>

## Active State

Just like hover state, use `.active` modifier class to bring active state to your buttons.
<div class='code-example'>
	<div class='preview'>
		<button class='btn primary'>Noraml Button</button>
		<button class='btn primary active'>Actived Button</button>
	</div>
	<div class='source'>
```html
<button class='btn primary'>Noraml Button</button>
<button class='btn primary active'>Actived Button</button>
```
	</div>
</div>