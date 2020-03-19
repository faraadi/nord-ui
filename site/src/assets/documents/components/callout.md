# Callout

Callout can highlight messages and important content and give it the user's attention.

## Import Path

Import following style(s) to include `callout` styles in your app.

- Base: `nord-ui/dist/callout.css`
- Base - RTL: `nord-ui/dist/callout.rtl.css`
- Dark Theme: `nord-ui/dist/callout.dark.css`

## Basic Style
Add `.callout` element class to any `div` tag. also `callout` can consists a title. use `.callout-title` element class on any element inside `.callout` to create a callout title

<div class='code-example'>
	<div class='preview'>
		<div class="callout">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class='source'>
```html
<div class="callout">
	<h3 class="callout-title">Title</h3>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</div>
```
	</div>
</div>

## Color Variants

`callout` comes with built-in classes for color variants.

<div class='code-example'>
	<div class='preview'>
		<div class="row gutter-tiny">
			<div class="col xs-12 sm-6">
				<div class="callout primary">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout secondary">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout info">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout success">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout warning">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout danger">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
		</div>
	</div>
	<div class='source fixed-height'>
```html
<div class="row gutter-tiny">
	<div class="col xs-12 sm-6">
		<div class="callout primary">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout secondary">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout info">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout success">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout warning">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout danger">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
</div>
```
	</div>
</div>

## Minimal Style

For a minimal and constant backgrounc color, use `.minimal` modifier class on `<div class='callout'>`

<div class='code-example'>
	<div class='preview'>
		<div class="row gutter-tiny">
			<div class="col xs-12 sm-6">
				<div class="callout minimal primary">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout minimal secondary">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout minimal info">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout minimal success">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout minimal warning">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
			<div class="col xs-12 sm-6">
				<div class="callout minimal danger">
					<h3 class="callout-title">Title</h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</div>
			</div>
		</div>
	</div>
	<div class='source fixed-height'>
```html
<div class="row gutter-tiny">
	<div class="col xs-12 sm-6">
		<div class="callout minimal primary">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout minimal secondary">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout minimal info">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout minimal success">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout minimal warning">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
	<div class="col xs-12 sm-6">
		<div class="callout minimal danger">
			<h3 class="callout-title">Title</h3>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
		</div>
	</div>
</div>
```
	</div>
</div>

<style type="text/css">
	.callout-title {
		margin: 0
	}
</style>