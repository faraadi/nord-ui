# Usage

## Basic Setup

Before we start, there are some few things we need to have in `index.html`.

### HTML5 Doctype

Add HTML5's `DOCTYPE` at top (first line):

```html
<!DOCTYPE html>
```

### Responsive Meta Tag

Make [Viewport](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) optimized for mobile:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Using Components

> Using CDN links in your project? you can skip this section.

If you've installed Nord UI using NPM or Yarn, it'll provide you with two way of importing it's component.

### import entire package

Import all components, helpers, dark theme and variables together. you just need a single import in your javascript:

```javascript
import 'nord-ui/nord.min.css'
// same as
import 'nord-ui'
```

or html:

```html
<link href="[path]/nord.min.css" rel="stylesheet" type="text/css">
```

> Replace `path` with path to the directory that Nord UI files exists.

Now you can head to next section and start building.

### import components and assets individually

Second, and way better, import components and tools individually. this is useful for production mode, since you'll make sure that only used components will included in your bundle and prevent from extra bytes each time users visits your site.

1. import `base` chunk that holds basic styles and variables needed by other components: 

	```javascript
import 'nord-ui/lib/base.css'
	```
	> Don't forget this import, other parts depends on it!

2. then, you can import your desired components. for example a button:

	```javascript
import 'nord-ui/lib/button.css'
	```

3. (optional) import dark theme of component, if had any. for example button's dark theme:

   	```javascript
import 'nord-ui/lib/button.dark.css'
	```

That's it.

Now visit next section and learn about colors and variables or head to the components. each component's document page, will provide import script for component itself and its dark theme (if supported).

