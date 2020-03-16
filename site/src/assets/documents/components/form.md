# Form

Forms consists a variety of elements. in addition to generic form elements, we provide some custom inputs for better styling, built with css.


## Import Path

Import following style(s) to include `form` styles in your app.

- Base: `nord-ui/dist/form.css`
- Dark Theme: `nord-ui/dist/form.dark.css`
- Custom Checkbox: `nord-ui/dist/checkbox.css`
- Custom Checkbox Dark Theme: `nord-ui/dist/checkbox.dark.css`
- Custom Radio: `nord-ui/dist/radio.css`
- Custom Radio Dark Theme: `nord-ui/dist/radio.dark.css`

## Basic Form

Nord UI forms made up of three basic elements: `input`, `label` and `form-group` that holds other parts. each one has its own element and modifer classes.

We use following element classes on these elements:
- `.form-group` on `<div>`
- `.form-label` on `<label>`
- `.form-control` on textual `<input>`s and `<select>`.

A Basic form for example:

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="form-group">
				<label class="form-label" for="example-username">username</label>
				<input class="form-control" type="text" name="user-username" id="example-username">
			</div>
			<div class="form-group">
				<label class="form-label" for="example-password">password</label>
				<input class="form-control" type="password" name="user-password" id="example-password">
			</div>
			<button class="btn primary">Submit</button>
		</form>
	</div>
	<div class='source'>
```html
<form>
	<div class="form-group">
		<label class="form-label" for="example-username">username</label>
		<input class="form-control" type="password" name="user-username" id="example-username">
	</div>
	<div class="form-group">
		<label class="form-label" for="example-password">password</label>
		<input class="form-control" type="password" name="user-password" id="example-password">
	</div>
</form>
```
	</div>
</div>

> make sure to set `name`, `id` and `for` attributes on input and label.

## Using Grid

By default, `.form-group`s are block elements and fill their parent width. you can override this behaviour by placing `.form-group` inside `row` and `column`

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-4">
					<div class="form-group">
						<label class="form-label" for="example-firstname">first name</label>
						<input class="form-control" type="text" name="user-firstname" id="example-firstname">
					</div>	
				</div>
				<div class="col xs-12 md-4">
					<div class="form-group">
						<label class="form-label" for="example-lastname">last name</label>
						<input class="form-control" type="text" name="user-lastname" id="example-lastname">
					</div>
				</div>
				<div class="col xs-12 md-4">
					<div class="form-group">
						<label class="form-label" for='example-options'>select</label>
						<select class="form-control" id="example-options">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-4">
			<div class="form-group">
				<label class="form-label" for="example-firstname">first name</label>
				<input class="form-control" type="text" name="user-firstname" id="example-firstname">
			</div>	
		</div>
		<div class="col xs-12 md-4">
			<div class="form-group">
				<label class="form-label" for="example-lastname">last name</label>
				<input class="form-control" type="text" name="user-lastname" id="example-lastname">
			</div>
		</div>
		<div class="col xs-12 md-4">
			<div class="form-group">
				<label class="form-label" for='example-options'>select</label>
				<select class="form-control" id="example-options">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
	</div>
</form>
```
	</div>
</div>

## helper Text

Add hints and helper text to your form controls

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-6">
					<div class="form-group">
						<label class="form-label" for="example-new-username">choose username</label>
						<input class="form-control" type="text" name="user-new-username" id="example-new-username">
						<span class="form-helper">use lower case characters only</span>
					</div>	
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group">
						<label class="form-label" for="example-new-age">age</label>
						<input class="form-control" type="number" name="user-new-age" id="example-new-age">
						<span class="form-helper">you must be at least 15</span>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-6">
			<div class="form-group">
				<label class="form-label" for="example-new-username">choose username</label>
				<input class="form-control" type="text" name="user-new-username" id="example-new-username">
				<span class="form-helper">use lower case characters only</span>
			</div>	
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group">
				<label class="form-label" for="example-new-age">age</label>
				<input class="form-control" type="number" name="user-new-age" id="example-new-age">
				<span class="form-helper">you must be at least 15</span>
			</div>
		</div>
	</div>
</form>
```
	</div>
</div>

## Size

Add `.large` or `.small` modifer classes in order to modify `form-group`'s size.

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-6">
					<div class="form-group large">
						<input class="form-control" type="text" name="large-input" placeholder="large">
					</div>	
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group large">
						<select class="form-control" name="large-select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-6">
					<div class="form-group">
						<input class="form-control" type="text" name="input-normal" placeholder="normal">
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group">
						<select class="form-control" name="normal-select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-6">
					<div class="form-group small">
						<input class="form-control" type="text" name="input-small" placeholder="small">
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group small">
						<select class="form-control" name="small-select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-6">
			<div class="form-group large">
				<input class="form-control" type="text" name="large-input" placeholder="large">
			</div>	
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group large">
				<select class="form-control" name="large-select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
	</div>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-6">
			<div class="form-group">
				<input class="form-control" type="text" name="input-normal" placeholder="normal">
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group">
				<select class="form-control" name="normal-select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
	</div>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-6">
			<div class="form-group small">
				<input class="form-control" type="text" name="input-small" placeholder="small">
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group small">
				<select class="form-control" name="small-select">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
	</div>
</form>
```
	</div>
</div>

## Color Variants

Use color variants to colorize form elements. add color variant modifer class to `<div class='form-group'>`. form label will not be affected.

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="row gutter-tiny">
				<div class="col xs-12 md-6">
					<div class="form-group primary">
						<label class="form-label" for="primary-variant-input">primary</label>
						<input class="form-control" id="primary-variant-input" type="text" name="primary-input">
						<span class="form-helper">helper text</span>
					</div>	
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group secondary">
						<label class="form-label" for="secondary-variant-input">secondary:</label>
						<input class="form-control" id="secondary-variant-input" type="text" name="secondary-input">
						<span class="form-helper">helper text</span>
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group info">
						<label class="form-label" for="info-variant-input">info:</label>
						<input class="form-control" id="info-variant-input" type="text" name="info-input">
						<span class="form-helper">helper text</span>
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group success">
						<label class="form-label" for="success-variant-input">success:</label>
						<input class="form-control" id="success-variant-input" type="text" name="success-input">
						<span class="form-helper">helper text</span>
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group warning">
						<label class="form-label" for="warning-variant-input">warning:</label>
						<input class="form-control" id="warning-variant-input" type="text" name="warning-input">
						<span class="form-helper">helper text</span>
					</div>
				</div>
				<div class="col xs-12 md-6">
					<div class="form-group danger">
						<label class="form-label" for="danger-variant-input">danger:</label>
						<input class="form-control" id="danger-variant-input" type="text" name="danger-input">
						<span class="form-helper">helper text</span>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="row gutter-tiny">
		<div class="col xs-12 md-6">
			<div class="form-group primary">
				<label class="form-label" for="primary-variant-input">primary</label>
				<input class="form-control" id="primary-variant-input" type="text" name="primary-input">
				<span class="form-helper">helper text</span>
			</div>	
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group secondary">
				<label class="form-label" for="secondary-variant-input">secondary:</label>
				<input class="form-control" id="secondary-variant-input" type="text" name="secondary-input">
				<span class="form-helper">helper text</span>
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group info">
				<label class="form-label" for="info-variant-input">info:</label>
				<input class="form-control" id="info-variant-input" type="text" name="info-input">
				<span class="form-helper">helper text</span>
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group success">
				<label class="form-label" for="success-variant-input">success:</label>
				<input class="form-control" id="success-variant-input" type="text" name="success-input">
				<span class="form-helper">helper text</span>
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group warning">
				<label class="form-label" for="warning-variant-input">warning:</label>
				<input class="form-control" id="warning-variant-input" type="text" name="warning-input">
				<span class="form-helper">helper text</span>
			</div>
		</div>
		<div class="col xs-12 md-6">
			<div class="form-group danger">
				<label class="form-label" for="danger-variant-input">danger:</label>
				<input class="form-control" id="danger-variant-input" type="text" name="danger-input">
				<span class="form-helper">helper text</span>
			</div>
		</div>
	</div>
</form>
```
	</div>
</div>

## Readonly and Disabled

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="form-group">
				<label class="form-label" for="example-readonly">username</label>
				<input class="form-control" type="text" name="user-username" id="example-readonly" readonly value="readonly">
			</div>
			<div class="form-group">
				<label class="form-label" for="example-disabled">password</label>
				<input class="form-control" type="text" name="user-password" id="example-disabled" disabled placeholder="disabled">
			</div>
		</form>
	</div>
	<div class='source'>
```html
<form>
	<div class="form-group">
		<label class="form-label" for="example-readonly">username</label>
		<input class="form-control" type="text" name="user-username" id="example-readonly" readonly value="readonly">
	</div>
	<div class="form-group">
		<label class="form-label" for="example-disabled">password</label>
		<input class="form-control" type="text" name="user-password" id="example-disabled" disabled placeholder="disabled">
	</div>
</form>
```
	</div>
</div>

## Custom Inputs

The default HTML form control elements are not styled well enough and may change their look across the browsers. to solve this problem, Nord UI includes custom form controls to replace browser default form elements.

These custom form controls, use css `appearance` property and its prefixes to overwrite default style. `appearance` may not supported on older browsers. see [caniuse results](https://caniuse.com/#feat=mdn-css_properties_appearance_none).

### Checkbox

Each checkbox is an `<input type='checkbox'` with `.custom-checkbox` element class. also you need to replace `label`'s `.form-label` with `.custom-checkbox-label` class and place this element after `<input type="checkbox">`

Make sure you inputs have `type="checkbox"` attribute.

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="form-group">
				<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox1">
				<label class="custom-checkbox-label" for="example-custom-checkbox1">first item</label>
			</div>
			<div class="form-group">
				<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox2">
				<label class="custom-checkbox-label" for="example-custom-checkbox2">second item</label>
			</div>
			<div class="form-group">
				<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox3">
				<label class="custom-checkbox-label" for="example-custom-checkbox3">third item</label>
			</div>
			<div class="form-group">
				<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox4" checked>
				<label class="custom-checkbox-label" for="example-custom-checkbox4">checked</label>
			</div>
			<div class="form-group">
				<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox5" disabled>
				<label class="custom-checkbox-label" for="example-custom-checkbox5">disabled</label>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="form-group">
		<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox1">
		<label class="custom-checkbox-label" for="example-custom-checkbox1">first item</label>
	</div>
	<div class="form-group">
		<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox2">
		<label class="custom-checkbox-label" for="example-custom-checkbox2">second item</label>
	</div>
	<div class="form-group">
		<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox3">
		<label class="custom-checkbox-label" for="example-custom-checkbox3">third item</label>
	</div>
	<div class="form-group">
		<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox4" checked>
		<label class="custom-checkbox-label" for="example-custom-checkbox4">checked</label>
	</div>
	<div class="form-group">
		<input class="custom-checkbox" type="checkbox" name="custom-checkbox-group" id="example-custom-checkbox5" disabled>
		<label class="custom-checkbox-label" for="example-custom-checkbox5">disabled</label>
	</div>
</form>
```
	</div>
</div>

### Radio

Custom Radio elements have a similar structure to custom checkboxes. use `.custom-radio` instead of `.custom-checkbox` and `.custom-radio-label` instead of `.custom-checkbox-label`.

Make sure your inputs have `type="radio"` and same `name` attributes.

<div class='code-example'>
	<div class='preview'>
		<form>
			<div class="form-group">
				<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio1">
				<label class="custom-radio-label" for="example-custom-radio1">first item</label>
			</div>
			<div class="form-group">
				<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio2">
				<label class="custom-radio-label" for="example-custom-radio2">second item</label>
			</div>
			<div class="form-group">
				<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio3">
				<label class="custom-radio-label" for="example-custom-radio3">third item</label>
			</div>
			<div class="form-group">
				<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio4" checked>
				<label class="custom-radio-label" for="example-custom-radio4">checked</label>
			</div>
			<div class="form-group">
				<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio5" disabled>
				<label class="custom-radio-label" for="example-custom-radio5">disabled</label>
			</div>
		</form>
	</div>
	<div class='source fixed-height'>
```html
<form>
	<div class="form-group">
		<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio1">
		<label class="custom-radio-label" for="example-custom-radio1">first item</label>
	</div>
	<div class="form-group">
		<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio2">
		<label class="custom-radio-label" for="example-custom-radio2">second item</label>
	</div>
	<div class="form-group">
		<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio3">
		<label class="custom-radio-label" for="example-custom-radio3">third item</label>
	</div>
	<div class="form-group">
		<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio4" checked>
		<label class="custom-radio-label" for="example-custom-radio4">checked</label>
	</div>
	<div class="form-group">
		<input class="custom-radio" type="radio" name="custom-radio-group" id="example-custom-radio5" disabled>
		<label class="custom-radio-label" for="example-custom-radio5">disabled</label>
	</div>
</form>
```
	</div>
</div>
<br>

Custom Checkbox and Radio elements have their own Dark Theme styles. you need to include those styles if you're going to use them in Dark Theme. check [Import Path](/docs/components/form#importpath) section.