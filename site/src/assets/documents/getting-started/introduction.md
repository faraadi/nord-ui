# Introduction

Nord UI is a free and open-source CSS UI Framework, based on Nord color palette.

Using CSS features like Flexbox and Custom properties, Nord UI make it easy to build user interfaces for modern browsers.
it's lightweight and has minimum impact on your bundle size, see [Bundle Phobia result](https://bundlephobia.com/result?p=nord-ui).

## Features

- Built-in Dark Theme :waxing_crescent_moon:
- RTL Support
- Lightweight and Modular
- Built for Modern Browsers
- Easy Customization
- Javascript free


## Javascript

Nord UI written entirely in css (no preprocessor). so it's easy to integrate it with any js application.

Whether you're building a SPA, an universal app or a static site, you just have to import Nord UI bundle and start making your app.

Altough components created using CSS, some of them need javascript functionality to work (like `modal`). we provide only required classes to work and you need to handle class manipulation to use them in your app. some components (like `collapse`) also give you chances to whether use javascript with them or use only plain html.

## Browser Compatibility

Nord UI is built for modern web apps and tries to keep code base small and easily customizable. to achieve this goal, it makes heavy use of Modern CSS features like Flexbox and Custom properties. therefore, old browsers (like IE 11) are not supported at all and most components fail to display properly on them.

So if you're going to add Nord UI to your project, you may consider [Caniuse](https://caniuse.com/#feat=css-variables) browser support statistics for minimum support:

<table class="table">
	<thead>
		<tr>
			<th></th>
			<th>Global support</th>
			<th>Chrome Desktop</th>
			<th>Firefox Desktop</th>
			<th>Opera Desktop</th>
			<th>Safari</th>
			<th>Edge</th>
			<th>IE</th>
			<th>Chrome Android</th>
			<th>Safari IOS</th>
		</tr>
	</thead>
	<tbody>
		<tr></tr>
		<tr>
			<td>Custom Properties</td>
			<td>94%</td>
			<td>49</td>
			<td>31</td>
			<td>36</td>
			<td>9.1</td>
			<td>16</td>
			<td>-</td>
			<td>80</td>
			<td>9.3</td>
		</tr>
		<tr>
			<td>Flexbox</td>
			<td>96%</td>
			<td>29</td>
			<td>28</td>
			<td>17</td>
			<td>9</td>
			<td>12</td>
			<td>-</td>
			<td>80</td>
			<td>9</td>
		</tr>
	</tbody>
</table>