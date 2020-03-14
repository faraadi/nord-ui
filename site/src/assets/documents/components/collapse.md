# Collapse

Collapse is a widely-used widget that could toggle visibility of it's content.

## Import Path
Import following style(s) to include `collapse` styles in your app.

- Base: `nord-ui/dist/collapse.css`
- Dark Theme: `none`

## Implementaion
generaly, `collapse`'s implementaion require Javascript functionality. since Nord UI comes with no Javascript, you need to handle this on your own.

But still there's another way to create `collapse` with Nord UI in plain html you may consider.

So, whether you're using Javascript to create this component, or not, here's the solutions:

### Using Javascript
The `collapse` component will consists three elements:
- a `<div class='collapse'>` that wraps other elements
- an element with `.collapse-label` class that could have any tag name
- a `<div class='collapse-content'>` that holds collapse content and is hidden by default.

To toggle collapse content visibility, just add/remove `.open` modifier class to/from `<div class='collapse'>` with Javascript.

See example below:

<div class='code-example'>
	<div class="preview">
		<div class='collapse'>
			<button class='btn primary block collapse-label' collapse-target>Toggle Collapse</button>
			<div class="collapse-content">
				<div class="card minimal">
					<div class="card-body">
						Now You See Me!
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class='collapse'>
	<button class='btn primary block collapse-label'>Toggle Collapse</button>
	<div class="collapse-content">
		<div class="card minimal">
			<div class="card-body">
				Now You See Me!
			</div>
		</div>
	</div>
</div>
```
	</div>
</div>

### Using Plain HTML
It is possible to use `collapse` without Javascript, using a `checkbox`.
Our `collapse` will consists four parts:
- a `<div class='collapse'>` that wraps other elements.
- a hidden `<input class='collapse-input' type='checkbox' id='myId'>` with unique `id` attribute.
- a `<label class='collapse-label' for='myId'>` where `for` points to input's `id` attribute.
- a `<div class='collapse-content'>` that holds collapse content and is hidden by default.

<div class='code-example'>
	<div class="preview">
		<div class='collapse'>
			<label class='collapse-label' for='collapse-toggler'>Toggle Collapse</label>
			<input class='collapse-input' type="checkbox" id="collapse-toggler">
			<div class="collapse-content">
				<div class="card minimal">
					<div class="card-body">
						Now You See Me!
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class='collapse'>
	<label class='collapse-label' for='collapse-toggler'>Toggle Collapse</label>
	<input class='collapse-input' type="checkbox" id="collapse-toggler">
	<div class="collapse-content">
		<div class="card minimal">
			<div class="card-body">
				Now You See Me!
			</div>
		</div>
	</div>
</div>
```
	</div>
</div>