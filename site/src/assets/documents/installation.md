# Installation

Nord UI is written in css and no javascript included. so you can integrate it with any javascript framework or library.

based on your development environment, there are two methods to add Nord UI to your project:

- Using Package Managers (preferred)
- Using CDN Links

>  if you're using build tools like `webpack`, `parcel` , `rollup` you probably want to use package version.

also, using package, enables you can to tree shake your bundle and include necessary parts only, but CDN Link will bring whole package to your site.

both versions are minified and production ready.

## Using Package Managers

make sure you have `node` and `npm` (or `yarn`)

### NPM:

```bash
npm install nord-ui
```

### Yarn:

```bash
yarn add nord-ui
```

## Using CDN Links

paste following code in  `<head>`  section of your document, before any other styles:

```html
<link href="https://unpkg.com/nord-ui" rel="stylesheet" type="text/css">
```

## Starter Template

in case you need a quick start template with CDN links, paste following codes in your `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Nord UI -->
    <link href="https://unpkg.com/nord-ui" rel="stylesheet" type="text/css">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- your code goes here... -->
  </body>
</html>
```

