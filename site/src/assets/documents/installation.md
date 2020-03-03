# Installation

Based on your development environment, there are two ways to add Nord UI to your project:

- Using Package Managers (preferred)
- Using CDN Links

> if you're using build tools like `webpack`, `parcel` , `rollup` you probably want to use package version.

Also, using package manager's version, enables you to tree shake your bundle and exclude unnecessary parts, but CDN Link will bring entire package to your site.

Both versions are minified and production ready.

## Using Package Managers

Make sure you have installed `node` and `npm` (or `yarn`):

### NPM:

```bash
npm install nord-ui
```

### Yarn:

```bash
yarn add nord-ui
```

## Using CDN Links

Paste following code in  `<head>`  section of your document, before any other styles:

```html
<link href="https://unpkg.com/nord-ui" rel="stylesheet" type="text/css">
```

## Starter Template

In case you need a quick start template with CDN links, paste following codes in your `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Nord UI -->
	<link href="https://unpkg.com/nord-ui" rel="stylesheet" type="text/css">
	<title>Hello World...!</title>
</head>
<body>
	<!-- your code goes here... -->
</body>
</html>
```

