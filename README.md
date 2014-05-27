#checkbox-hack-polyfill

A Javascript polyfill for the checkbox hack in IE5, IE7 and IE8.

###Usage

If the original code is something like so:

```html
<!DOCTYPE HTML>
<html>
<head>
    <style>
        #toggle-me {
            display: none;
        }

        #toggle-checkbox:checked ~ #toggle-me {
            display: block;
        }
    </style>
</head>
<body>
    <label for="toggle-checkbox" id="toggle-label">Show / Hide</label>
    <input type="checkbox" id="toggle-checkbox"/>

    <div id="toggle-me">Toggle Me</div>
</body>
</html>
```

Add the following conditional statement to the `<head>`:

```html
<!--[if lt IE 9]>
<style>
    .checkbox--checked #toggle-me {
        display: block;
    }
</style>
<script src="checkboxHackPolyfill.min.js"></script>
<script>checkboxHackPolyfill('toggle-label');</script>
<![endif]-->
```

`#toggle-me` is the element which is affected by the checkbox hack.

`toggle-label` is the ID of the `<label>` used to toggle the checkbox.