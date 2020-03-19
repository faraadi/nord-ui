# Right To Left

Most parts of Nord UI, are made without direction in mind. so you have both rtl and ltr support out of the box for many components. but there are somw exceptions like `callout` that need direction specific style to display properly.

Nord UI comes with ltr direction by default, but it also fully supports rtl. follow these steps to change direction:

## Change Document Direction

Whether with `html` or `css`, you need to change document's direction first:

```html
<body dir='rtl'>
	...
</body>
```
<!-- <br> -->

or using `css`:

```css
:root {
	direction: rtl;
}
```

## Import RTL Styles

Just like components imports, for RTL styles you can import entire package or components individually.

### Entire RTL Styles

```javascript
import 'nord-ui/dist/nord.rtl.min.css';
```

### Individually

For example, importing `callout`'s RTL styles:

```javascript
import 'nord-ui/dist/callout.rtl.css';
```

### Using CDN
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/nord-ui/dist/nord.rtl.min.css">
```

Please note that not all the components require RTL styles. just a few of them have direction specific styles.

To check whether a component has RTL styles, head to `Import Path` section in component's documents and look for `Base - RTL` path.

## Using Alongside With Dark Theme

> If you're using CDN distribution or have imported entire package using `import 'nord-ui'`, you are all set and no further steps required.

Using Dark Schemes in RTL direction is almost same as LTR. only difference here is that if you're importing Dark Styles individually, you need replace component's base style with RTL styles.

For Example, `callout` has following imports:

```javascript
// import 'nord-ui/dist/callout.css'; // we replace this line with next one
import 'nord-ui/dist/callout.rtl.css';
import 'nord-ui/dist/callout.dark.css';
```