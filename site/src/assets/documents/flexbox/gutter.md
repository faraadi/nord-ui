# Gutter

Use `gutter` modifier classes to adjust padding on your `column`s, inside a `row`.

## Import Path

Import following style(s) to include `flex`, `alignment`, `visibility` and `gutter` styles in your app.

- Base: `nord-ui/dist/flex.css`
- Dark Theme: `none`

Add `.gutter-[size]` to `<div class='row'>` where `size` is one of `tiny`, `medium`, `large`, `xlarge`. it will set padding in 4 direction on each `column` inside `row`.

<br>
<div class='code-example'>
	<div class='preview'>
		<div class="row gutter-tiny">
			<div class="col xs-4">
				<div class="card minimal">
					<div class="card-body">
					4 of 12
					</div>
				</div>
			</div>
			<div class="col xs-4">
				<div class="card minimal">
					<div class="card-body">
					4 of 12
					</div>
				</div>
			</div>
			<div class="col xs-4">
				<div class="card minimal">
					<div class="card-body">
					4 of 12
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="row gutter-tiny">
	<div class="col xs-4">
		<div class="card minimal">
			<div class="card-body">
			4 of 12
			</div>
		</div>
	</div>
	<div class="col xs-4">
		<div class="card minimal">
			<div class="card-body">
			4 of 12
			</div>
		</div>
	</div>
	<div class="col xs-4">
		<div class="card minimal">
			<div class="card-body">
			4 of 12
			</div>
		</div>
	</div>
</div>
```
	</div>
</div>

## Gutter Sizes

These are default sizes, in pixel:

- `tiny`: 8px
- `medium`: 16px
- `large`: 24px
- `xlarge`: 36px

## Customize Gutter Sizes

It is possible to customize gutter sizes and change those default values using css variables. refer to [Customization](/docs?page=customization) for instruction.

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
</style>