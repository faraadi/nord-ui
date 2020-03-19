# Table


`table` classes will help you to style native html table and give your data a better look.

## Import Path

Import following style(s) to include `table` styles in your app.

- Base: `nord-ui/dist/table.css`
- Dark Theme: `nord-ui/dist/table.dark.css`

## Basic

Using `table` is simple. just add `.table` class to `<table>` tag. other tags like `thead`, `tbody`, `tr` does not need any classes.

<div class='code-example'>
	<div class='preview'>
		<table class='table'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Company</th>
					<th>Country</th>
					<th>City</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Fletcher</td>
					<td>Nunc Laoreet Lectus LLC</td>
					<td>Eritrea</td>
					<td>Gibsons</td>
				</tr>
				<tr>
					<td>Ferris</td>
					<td>Risus Quis Diam PC</td>
					<td>Falkland Islands</td>
					<td>Osasco</td>
				</tr>
				<tr>
					<td>Warren</td>
					<td>Tempor Associates</td>
					<td>Tokelau</td>
					<td>Baarle-Hertog</td>
				</tr>
				<tr>
					<td>Byron</td>
					<td>Maecenas Iaculis Foundation</td>
					<td>Mauritania</td>
					<td>Bierges</td>
				</tr>
				<tr>
					<td>Trevor</td>
					<td>Ipsum Donec Sollicitudin Incorporated</td>
					<td>Saint Vincent and The Grenadines</td>
					<td>Columbus</td>
				</tr>
				<tr>
					<td>Ira</td>
					<td>Vulputate LLP</td>
					<td>Denmark</td>
					<td>Irkutsk</td>
				</tr>
				<tr>
					<td>Judah</td>
					<td>Nibh Aliquam Ornare Foundation</td>
					<td>United States Minor Outlying Islands</td>
					<td>Bellevue</td>
				</tr>
				<tr>
					<td>Omar</td>
					<td>Eget Magna Suspendisse LLP</td>
					<td>Swaziland</td>
					<td>Birkenhead</td>
				</tr>
				<tr>
					<td>Xerxes</td>
					<td>Morbi Sit PC</td>
					<td>British Indian Ocean Territory</td>
					<td>Pretoro</td>
				</tr>
				<tr>
					<td>Alan</td>
					<td>Et Ipsum Industries</td>
					<td>Marshall Islands</td>
					<td>Camrose</td>
				</tr>
				<tr>
					<td>Wanda</td>
					<td>Metus LLP</td>
					<td>Peru</td>
					<td>Lompret</td>
				</tr>
				<tr>
					<td>Murphy</td>
					<td>Massa Consulting</td>
					<td>Central African Republic</td>
					<td>Sohbatpur</td>
				</tr>
				<tr>
					<td>Sloane</td>
					<td>Libero At Corporation</td>
					<td>Fiji</td>
					<td>Castel San Niccolò</td>
				</tr>
				<tr>
					<td>Nash</td>
					<td>Interdum Feugiat Institute</td>
					<td>Mozambique</td>
					<td>Breton</td>
				</tr>
				<tr>
					<td>Boris</td>
					<td>Diam Institute</td>
					<td>United States</td>
					<td>Strona</td>
				</tr>
				<tr>
					<td>Zoe</td>
					<td>Amet Luctus Foundation</td>
					<td>Egypt</td>
					<td>Lanark</td>
				</tr>
				<tr>
					<td>Vance</td>
					<td>Mauris Blandit LLP</td>
					<td>Korea, North</td>
					<td>Chía</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='source fixed-height'>
```html
<table class='table'>
	<thead>
		<tr>
			<th>Name</th>
			<th>Company</th>
			<th>Country</th>
			<th>City</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Fletcher</td>
			<td>Nunc Laoreet Lectus LLC</td>
			<td>Eritrea</td>
			<td>Gibsons</td>
		</tr>
		<tr>
			<td>Ferris</td>
			<td>Risus Quis Diam PC</td>
			<td>Falkland Islands</td>
			<td>Osasco</td>
		</tr>
		<tr>
			<td>Warren</td>
			<td>Tempor Associates</td>
			<td>Tokelau</td>
			<td>Baarle-Hertog</td>
		</tr>
		<tr>
			<td>Byron</td>
			<td>Maecenas Iaculis Foundation</td>
			<td>Mauritania</td>
			<td>Bierges</td>
		</tr>
		<tr>
			<td>Trevor</td>
			<td>Ipsum Donec Sollicitudin Incorporated</td>
			<td>Saint Vincent and The Grenadines</td>
			<td>Columbus</td>
		</tr>
		<tr>
			<td>Ira</td>
			<td>Vulputate LLP</td>
			<td>Denmark</td>
			<td>Irkutsk</td>
		</tr>
		<tr>
			<td>Judah</td>
			<td>Nibh Aliquam Ornare Foundation</td>
			<td>United States Minor Outlying Islands</td>
			<td>Bellevue</td>
		</tr>
		<tr>
			<td>Omar</td>
			<td>Eget Magna Suspendisse LLP</td>
			<td>Swaziland</td>
			<td>Birkenhead</td>
		</tr>
		<tr>
			<td>Xerxes</td>
			<td>Morbi Sit PC</td>
			<td>British Indian Ocean Territory</td>
			<td>Pretoro</td>
		</tr>
		<tr>
			<td>Alan</td>
			<td>Et Ipsum Industries</td>
			<td>Marshall Islands</td>
			<td>Camrose</td>
		</tr>
		<tr>
			<td>Wanda</td>
			<td>Metus LLP</td>
			<td>Peru</td>
			<td>Lompret</td>
		</tr>
		<tr>
			<td>Murphy</td>
			<td>Massa Consulting</td>
			<td>Central African Republic</td>
			<td>Sohbatpur</td>
		</tr>
		<tr>
			<td>Sloane</td>
			<td>Libero At Corporation</td>
			<td>Fiji</td>
			<td>Castel San Niccolò</td>
		</tr>
		<tr>
			<td>Nash</td>
			<td>Interdum Feugiat Institute</td>
			<td>Mozambique</td>
			<td>Breton</td>
		</tr>
		<tr>
			<td>Boris</td>
			<td>Diam Institute</td>
			<td>United States</td>
			<td>Strona</td>
		</tr>
		<tr>
			<td>Zoe</td>
			<td>Amet Luctus Foundation</td>
			<td>Egypt</td>
			<td>Lanark</td>
		</tr>
		<tr>
			<td>Vance</td>
			<td>Mauris Blandit LLP</td>
			<td>Korea, North</td>
			<td>Chía</td>
		</tr>
	</tbody>
</table>
```
	</div>
</div>

## Interactive Mode

Interactive Mode changes the each table row's background color when user hover on it. add `.interactive` modifier class to `<table class="table">` to active it.

<div class='code-example'>
	<div class='preview'>
		<table class='table interactive'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Company</th>
					<th>Country</th>
					<th>City</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Fletcher</td>
					<td>Nunc Laoreet Lectus LLC</td>
					<td>Eritrea</td>
					<td>Gibsons</td>
				</tr>
				<tr>
					<td>Ferris</td>
					<td>Risus Quis Diam PC</td>
					<td>Falkland Islands</td>
					<td>Osasco</td>
				</tr>
				<tr>
					<td>Warren</td>
					<td>Tempor Associates</td>
					<td>Tokelau</td>
					<td>Baarle-Hertog</td>
				</tr>
				<tr>
					<td>Byron</td>
					<td>Maecenas Iaculis Foundation</td>
					<td>Mauritania</td>
					<td>Bierges</td>
				</tr>
				<tr>
					<td>Trevor</td>
					<td>Ipsum Donec Sollicitudin Incorporated</td>
					<td>Saint Vincent and The Grenadines</td>
					<td>Columbus</td>
				</tr>
				<tr>
					<td>Ira</td>
					<td>Vulputate LLP</td>
					<td>Denmark</td>
					<td>Irkutsk</td>
				</tr>
				<tr>
					<td>Judah</td>
					<td>Nibh Aliquam Ornare Foundation</td>
					<td>United States Minor Outlying Islands</td>
					<td>Bellevue</td>
				</tr>
				<tr>
					<td>Omar</td>
					<td>Eget Magna Suspendisse LLP</td>
					<td>Swaziland</td>
					<td>Birkenhead</td>
				</tr>
				<tr>
					<td>Xerxes</td>
					<td>Morbi Sit PC</td>
					<td>British Indian Ocean Territory</td>
					<td>Pretoro</td>
				</tr>
				<tr>
					<td>Alan</td>
					<td>Et Ipsum Industries</td>
					<td>Marshall Islands</td>
					<td>Camrose</td>
				</tr>
				<tr>
					<td>Wanda</td>
					<td>Metus LLP</td>
					<td>Peru</td>
					<td>Lompret</td>
				</tr>
				<tr>
					<td>Murphy</td>
					<td>Massa Consulting</td>
					<td>Central African Republic</td>
					<td>Sohbatpur</td>
				</tr>
				<tr>
					<td>Sloane</td>
					<td>Libero At Corporation</td>
					<td>Fiji</td>
					<td>Castel San Niccolò</td>
				</tr>
				<tr>
					<td>Nash</td>
					<td>Interdum Feugiat Institute</td>
					<td>Mozambique</td>
					<td>Breton</td>
				</tr>
				<tr>
					<td>Boris</td>
					<td>Diam Institute</td>
					<td>United States</td>
					<td>Strona</td>
				</tr>
				<tr>
					<td>Zoe</td>
					<td>Amet Luctus Foundation</td>
					<td>Egypt</td>
					<td>Lanark</td>
				</tr>
				<tr>
					<td>Vance</td>
					<td>Mauris Blandit LLP</td>
					<td>Korea, North</td>
					<td>Chía</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class='source fixed-height'>
```html
<table class='table interactive'>
	<thead>
		<tr>
			<th>Name</th>
			<th>Company</th>
			<th>Country</th>
			<th>City</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Fletcher</td>
			<td>Nunc Laoreet Lectus LLC</td>
			<td>Eritrea</td>
			<td>Gibsons</td>
		</tr>
		<tr>
			<td>Ferris</td>
			<td>Risus Quis Diam PC</td>
			<td>Falkland Islands</td>
			<td>Osasco</td>
		</tr>
		<tr>
			<td>Warren</td>
			<td>Tempor Associates</td>
			<td>Tokelau</td>
			<td>Baarle-Hertog</td>
		</tr>
		<tr>
			<td>Byron</td>
			<td>Maecenas Iaculis Foundation</td>
			<td>Mauritania</td>
			<td>Bierges</td>
		</tr>
		<tr>
			<td>Trevor</td>
			<td>Ipsum Donec Sollicitudin Incorporated</td>
			<td>Saint Vincent and The Grenadines</td>
			<td>Columbus</td>
		</tr>
		<tr>
			<td>Ira</td>
			<td>Vulputate LLP</td>
			<td>Denmark</td>
			<td>Irkutsk</td>
		</tr>
		<tr>
			<td>Judah</td>
			<td>Nibh Aliquam Ornare Foundation</td>
			<td>United States Minor Outlying Islands</td>
			<td>Bellevue</td>
		</tr>
		<tr>
			<td>Omar</td>
			<td>Eget Magna Suspendisse LLP</td>
			<td>Swaziland</td>
			<td>Birkenhead</td>
		</tr>
		<tr>
			<td>Xerxes</td>
			<td>Morbi Sit PC</td>
			<td>British Indian Ocean Territory</td>
			<td>Pretoro</td>
		</tr>
		<tr>
			<td>Alan</td>
			<td>Et Ipsum Industries</td>
			<td>Marshall Islands</td>
			<td>Camrose</td>
		</tr>
		<tr>
			<td>Wanda</td>
			<td>Metus LLP</td>
			<td>Peru</td>
			<td>Lompret</td>
		</tr>
		<tr>
			<td>Murphy</td>
			<td>Massa Consulting</td>
			<td>Central African Republic</td>
			<td>Sohbatpur</td>
		</tr>
		<tr>
			<td>Sloane</td>
			<td>Libero At Corporation</td>
			<td>Fiji</td>
			<td>Castel San Niccolò</td>
		</tr>
		<tr>
			<td>Nash</td>
			<td>Interdum Feugiat Institute</td>
			<td>Mozambique</td>
			<td>Breton</td>
		</tr>
		<tr>
			<td>Boris</td>
			<td>Diam Institute</td>
			<td>United States</td>
			<td>Strona</td>
		</tr>
		<tr>
			<td>Zoe</td>
			<td>Amet Luctus Foundation</td>
			<td>Egypt</td>
			<td>Lanark</td>
		</tr>
		<tr>
			<td>Vance</td>
			<td>Mauris Blandit LLP</td>
			<td>Korea, North</td>
			<td>Chía</td>
		</tr>
	</tbody>
</table>
```
	</div>
</div>