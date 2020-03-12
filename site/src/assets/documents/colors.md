# Colors

## Swatches

As mentioned before, Nord UI uses [Nord](https://www.nordtheme.com) colors. Nord consists sixteen colors, placed in four color palettes:

### Polar Night

Polar Night is made up of four darker colors that are commonly used for base elements like backgrounds or text color in bright ambiance designs.

<div class="row justify-center">
	<div class="col xs-2 bg-nord0 color-swatch">
		nord-0
		<div class="hex-code">#2E3440</div>
	</div>
	<div class="col xs-2 bg-nord1 color-swatch">
		nord-1
		<div class="hex-code">#3B4252</div>
	</div>
	<div class="col xs-2 bg-nord2 color-swatch">
		nord-2
		<div class="hex-code">#434C5E</div>
	</div>
	<div class="col xs-2 bg-nord3 color-swatch">
		nord-3
		<div class="hex-code">#4C566A</div>
	</div>
</div>

### Snow Storm

Snow Storm is made up of three bright colors that are commonly used for text colors or base UI elements in bright ambiance designs.

<div class="row justify-center">
	<div class="col xs-2 bg-nord4 color-swatch light">
		nord-4
		<div class="hex-code light">#D8DEE9</div>
	</div>
	<div class="col xs-2 bg-nord5 color-swatch light">
		nord-5
		<div class="hex-code light">#E5E9F0</div>
	</div>
	<div class="col xs-2 bg-nord6 color-swatch light">
		nord-6
		<div class="hex-code light">#ECEFF4</div>
	</div>
</div>

### Frost

Frost can be described as the heart palette of Nord, a group of four bluish colors that are commonly used for primary UI component and text highlighting and essential code syntax elements.

<div class="row justify-center">
	<div class="col xs-2 bg-nord7 color-swatch">
		nord-7
		<div class="hex-code light">#8FBCBB</div>
	</div>
	<div class="col xs-2 bg-nord8 color-swatch">
		nord-8
		<div class="hex-code light">#88C0D0</div>
	</div>
	<div class="col xs-2 bg-nord9 color-swatch">
		nord-9
		<div class="hex-code light">#81A1C1</div>
	</div>
	<div class="col xs-2 bg-nord10 color-swatch">
		nord-10
		<div class="hex-code light">#5E81AC</div>
	</div>
</div>

### Aurora

Aurora consists of five colorful components reminiscent of the [„Aurora borealis“](https://en.wikipedia.org/wiki/Aurora), sometimes referred to as polar lights or northern lights.

<div class="row justify-center">
	<div class="col xs-2 bg-nord11 color-swatch">
		nord-11
		<div class="hex-code light">#BF616A</div>
	</div>
	<div class="col xs-2 bg-nord12 color-swatch">
		nord-12
		<div class="hex-code light">#D08770</div>
	</div>
	<div class="col xs-2 bg-nord13 color-swatch">
		nord-13
		<div class="hex-code light">#EBCB8B</div>
	</div>
	<div class="col xs-2 bg-nord14 color-swatch">
		nord-14
		<div class="hex-code light">#A3BE8C</div>
	</div>
	<div class="col xs-2 bg-nord15 color-swatch">
		nord-15
		<div class="hex-code light">#B48EAD</div>
	</div>
</div>

> For more details about colors, refer to [Nord Theme Documents](https://www.nordtheme.com/docs/colors-and-palettes).


## Color Variants

Nord UI uses six colors as it's color swatch. these are core colors that commonly been used in components. some components even have special modifier class to easily switch to one of these colors.
<div class="row">
	<div class="col xs-2 bg-primary color-swatch">Primary</div>
	<div class="col xs-2 bg-secondary color-swatch">Secondary</div>
	<div class="col xs-2 bg-info color-swatch">Info</div>
	<div class="col xs-2 bg-success color-swatch">Success</div>
	<div class="col xs-2 bg-warning color-swatch">Warning</div>
	<div class="col xs-2 bg-danger color-swatch">Danger</div>
</div>

- <span class="text-primary">Primary:</span> suitable for many UI states.
- <span class="text-secondary">Secondary:</span> suitable for many UI states and in combination with Primary color.
- <span class="text-info">Info:</span> useful when showing information or noticing user.
- <span class="text-success">Success:</span> indicates a successful operation.
- <span class="text-warning">Warning:</span> to warn user about something.
- <span class="text-danger">Danger:</span> indicates an error, failure operation or dangerous actions.

## Using Color

It's easy to modify Nord UI components and other UI element using these colors. each color comes with two modifier class. one for textual content and one for background color.

> If you've installed Nord UI using package managers (link NPM and Yarn), you need to manually import colors classes.

### Import Path

Import following style(s) to include colors classes in your app:

- Base: `nord-ui/dist/colors.css`
- Dark Theme: `none`

### Texts
Each color has a modifier class that ends with the color's name, prefixed by `text-`. for example, `nord-3`'s class is `text-nord3`.

<div class='code-example'>
	<div class='preview'>
		<span class="text-nord11">Using nord-11 to display this text</span>
	</div>
	<div class='source'>
```html
<span class="text-nord11">Using nord-11 to display this text</span>
```
	</div>
</div>

<br>

Also, core colors, can be accessed with both variant name and color name. e.g. the Primary is `nord-7` and has both `text-primary` and `text-nord7` classes.

See Example:

<div class='code-example'>
	<div class='preview'>
		<p class="text-success">A successful message</p>
		<p class="text-nord14">Another successful message</p>
	</div>
	<div class='source'>
```html
<p class="text-success">A successful message</p>
<p class="text-nord14">Another successful message</p>
```
	</div>
</div>

### Backgrounds
Like textual content, we can change `background-color` property of an element using modifier class, except we'll use `bg-` prefix on class name.

<div class='code-example'>
	<div class='preview'>
		<div class="card">
			<div class="card-body bg-primary">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="card">
	<div class="card-body bg-primary">
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
	</div>
</div>
```
	</div>
</div>

<style type="text/css">
	.color-swatch {
		text-align: center;
		padding: 15px;
		font-family: 'Fira Code';
		color: var(--nord6)
	}
	.color-swatch.light {
		color: var(--nord0)
	}
	.color-swatch:first-child {
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px
	}
	.color-swatch:last-child {
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px
	}
	.hex-code {
		font-size: 0.8em;
		margin-top: 5px;
		color: var(--nord4);
		font-family: monospace;
	}
	.hex-code.light {
		color: var(--nord3);
	}
</style>