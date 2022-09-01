# Articles and Posts

## Formating

Adding the `format.js` script to the html.

Also add `highlight.min.js` script to the html.

This will automatically format the document in the predefined format.

Following things will be added by `format.js` :

* Add Index to the rigth and also added needed buttons to toggle index.
* Index is automatically resized on mobile devices.
* Add a Toggle theme buttons ( light and dark theme ).
* Add a copy to clipboard button to each code block.
* Add window message event, sends message when theme is changed.

```html
<!-- Format -->
<script src="highlight.min.js"></script>
<script src="format.js"></script>

<!--Remove Default-->
<link rel="stylesheet" href="display-page.css" />
```
