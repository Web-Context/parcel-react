# README

## How-to react development

### create a project

1. add an `index.html` (html:src), add a div#app

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">

    </div>
</body>
</html>
```

2. add an src/index.jsx file

```bash
$> mkdir src
$> touch src/index.jsx
```
then add the fil to index.html file :


```html
...
    <title>Document</title>
    
    <script src="src/index.jsx" defer></script>

</head>
...

```


3. init project

```bash
$> npm init -y
```

4. add React as a dependency

```bash
$> npm add react react-dom
```

### Run or Debug

5. add parcel dev tool

```bash
$> npm add -d parcel-bundler
```

6. run the parcel debug server

```bash
$> npx parcel index.html
```

### Build

7. Build your project

```bash
$> npx parcel build index.html
```

That's it !

[McGivrer](mailto:frederic.delorme@gmail.com?subject=React-and-Parcel<github> "Contact the author")
