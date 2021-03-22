# Foundation

## Step 1 – Add Foundation as a Dependency

```shell
yarn add foundation-sites what-input jquery
```

?> Foundation will also need **what-input** and **jquery** as a dependency.

## Step 2 – Add Foundation Directories to Config

Open the file `config.yml` and uncomment the following:

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"

...

#      - "node_modules/what-input/dist/what-input.min.js"
#      - "node_modules/foundation-sites/dist/js/foundation.min.js"
```

## Step 3 – Add Foundation to the Config

Open the file `config.yml` and uncomment the following:

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"

...

#      - "node_modules/jquery/dist/jquery.min.js"
#      - "node_modules/what-input/dist/what-input.min.js"
#      - "node_modules/foundation-sites/dist/js/foundation.min.js"
```

## Step 4 – Import Foundation in SASS

Open the file `src/scss/main.scss` and uncomment the following:

```scss
//@import 'foundation';
//@include foundation-everything();
```

## Step 5 – Add JavaScript to HTML

Add the following before the closing `</body>` of your template:

```html
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/what-input.min.js"></script>
<script src="assets/js/foundation.min.js"></script>
<script>
	$(document).foundation();
</script>
```


