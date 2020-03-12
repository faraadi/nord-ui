# Card

A card is an excellent way to display contents over screen.

## Import Path
Import following style(s) to include `card` styles in your app.

- Base: `nord-ui/dist/card.css`
- Dark Theme: `nord-ui/dist/card.dark.css`

## Default Card Style
Put a `.card` class on a `<div>` to create a `card` component.

You may want to wrap your content inside another `<div>` with `.card-body` class to apply padding.

<div class='code-example'>
	<div class='preview'>
		<div class="row">
			<div class="col xs-4">
				<div class="card">
					<div class="card-body">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
					</div>
				</div>	
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="row">
	<div class="col xs-4">
		<div class="card">
			<div class="card-body">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			</div>
		</div>	
	</div>
</div>
```
	</div>
</div>

> Toggle theme to see different styles

## Minimal Style
By default, `card` comes with `box-shadow`. if you prefer more flat style, add `.minimal` modifier class to `<div class='card'>`.

<div class='code-example'>
	<div class='preview'>
		<div class="row justify-center">
			<div class="col xs-5">
				<div class="card minimal">
					<div class="card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</p>
						<br>
						<button class="btn success">Accept</button>
						<button class="btn danger">Decline</button>
					</div>
				</div>	
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="row justify-center">
	<div class="col xs-5">
		<div class="card minimal">
			<div class="card-body">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				</p>
				<br>
				<button class="btn success">Accept</button>
				<button class="btn danger">Decline</button>
			</div>
		</div>	
	</div>
</div>
```
	</div>
</div>

## Card with thumbnail
As you probably noticed, `.card-body` will put a small padding around your images. also, if you are going to use that `<img/>` as thumbnail, top border's radius are not applied.

To make your `card`'s thumbnail more compatible, move it outside of `<div class='card-body'>`. then place it into an element with `.card-thumb` class or just add `.card-thumb` to `<img/>`'s class list.

See examples below:

<div class='code-example'>
	<div class='preview'>
		<div class="row gutter-tiny">
			<div class="col xs-4">
				<div class="card">
					<div class="card-body">
						<img src="https://images.unsplash.com/photo-1489769811155-68b5848205ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</p>
					</div>
				</div>	
			</div>
			<div class="col xs-4">
				<div class="card">
					<div class="card-thumb">
						<img src="https://images.unsplash.com/photo-1581563282271-5c08b2c280c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
					</div>
					<div class="card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</p>
						<br>
						<button class="btn danger small">Read More</button>
					</div>
				</div>
			</div>
			<div class="col xs-4">
				<div class="card">
					<img class="card-thumb" src="https://images.unsplash.com/photo-1462817658085-08dd93969195?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
					<div class="card-body">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='source'>
```html
<div class="row gutter-tiny">
	<div class="col xs-4">
		<div class="card">
			<div class="card-body">
				<img src="https://images.unsplash.com/photo-1489769811155-68b5848205ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				</p>
			</div>
		</div>	
	</div>
	<div class="col xs-4">
		<div class="card">
			<div class="card-thumb">
				<img src="https://images.unsplash.com/photo-1581563282271-5c08b2c280c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
			</div>
			<div class="card-body">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				</p>
				<br>
				<button class="btn danger small">Read More</button>
			</div>
		</div>
	</div>
	<div class="col xs-4">
		<div class="card">
			<img class="card-thumb" src="https://images.unsplash.com/photo-1462817658085-08dd93969195?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
			<div class="card-body">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
				</p>
			</div>
		</div>
	</div>
</div>
```
	</div>
</div>