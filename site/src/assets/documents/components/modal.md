# Modal

Display contents over screen using `modal` component. 

## Import Path

Import following style(s) to include `modal` styles in your app.

- Base: `nord-ui/dist/modal.css`
- Dark Theme: `none`

## Javascript Functionality
`modal` requires a mechanism to toggle its visibility. this can not be done using CSS or HTML and you would need Javascript to work with.

## Basic

Use `.modal-container` element class to create the modal. anything placed inside it, will be hidden untill `.open` modifier class added to `<div class="modal-container">`
<div class='code-example'>
	<div class='preview'>
		<button class='btn primary' id="modal-toggler">Open Modal</button>
		<div class="modal-container" id="modal-example">
			hello world
		</div>
	</div>
	<div class='source'>
```html
<button class='btn primary' id="modal-toggler">Open Modal</button>
<div class="modal-container" id="modal-example">
	hello world
</div>
```
	</div>
</div>
<br>

`.modal-container` is just a simple wrapper around your modal content and does nothing special other than displaying over page contents. you may build `modals`'s inner content with components like `card`, `row`, `col`.

A more useful example could be like:

<div class='code-example'>
	<div class='preview'>
		<button class='btn primary' id="modal-toggler2">Open Modal</button>
		<div class="modal-container" id="modal-example2">
			<div class="col xs-12 md-8 lg-4">
				<div class="card">
					<div class="card-body">
						<h2>hello world</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
						</p>
						<div class="row justify-end">
							<button class="btn danger">Decline</button>
							<button class="btn success">Accept</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<button class='btn primary' id="modal-toggler2">Open Modal</button>
<div class="modal-container" id="modal-example2">
	<div class="col xs-12 md-8 lg-4">
		<div class="card">
			<div class="card-body">
				<h2>hello world</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</p>
				<div class="row justify-end">
					<button class="btn danger">Decline</button>
					<button class="btn success">Accept</button>
				</div>
			</div>
		</div>
	</div>
</div>
```
	</div>
</div>

## Z Index
`modal` uses `position:fixed` alongside `z-index:10` to stay above other elements. if you have other elements with `position:fixed`, make sure your modal have higher `z-index` than others.

<style type="text/css">
	.modal-container .btn {
		margin: 0 2px
	}
	.modal-container h2 {
		margin-top: 0
	}
	.modal-container p {
		margin-bottom: 2em
	}
</style>