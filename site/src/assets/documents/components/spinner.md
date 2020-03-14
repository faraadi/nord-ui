# Spinner

Spinners can indicates a loading state in your UI.

## Import Path

Import following style(s) to include `spinner` styles in your app.

- Base: `nord-ui/dist/spinner.css`
- Dark Theme: `nord-ui/dist/spinner.dark.css`

## Basic Style

To create a `spinner`, simply put `.spinner` element class on a `<span>`.

<div class='code-example'>
	<div class='preview'>
		<span class="spinner"></span>
	</div>
	<div class='source'>
```html
<span class="spinner"></span>
```
	</div>
</div>

## Color Variants

Like other components, `spinner` comes with colorful variants to customize its look.

<div class='code-example'>
	<div class='preview'>
		<span class="spinner"></span>
		<span class="spinner primary"></span>
		<span class="spinner secondary"></span>
		<span class="spinner info"></span>
		<span class="spinner success"></span>
		<span class="spinner warning"></span>
		<span class="spinner danger"></span>
	</div>
	<div class='source'>
```html
<span class="spinner"></span>
<span class="spinner primary"></span>
<span class="spinner secondary"></span>
<span class="spinner info"></span>
<span class="spinner success"></span>
<span class="spinner warning"></span>
<span class="spinner danger"></span>
```
	</div>
</div>

## Sizes

`spinner` has three sizes. default size is `normal`. `.large` and `.small` modifier classes are optional.
<div class='code-example'>
	<div class='preview'>
		<span class="spinner primary small"></span>
		<span class="spinner primary"></span>
		<span class="spinner primary large"></span>
	</div>
	<div class='source'>
```html
<span class="spinner primary small"></span>
<span class="spinner primary"></span>
<span class="spinner primary large"></span>
```
	</div>
</div>