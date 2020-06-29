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

then add the file to index.html file :

```html
...
    <title>Document</title>    
    <script src="src/index.jsx" defer></script>
</head>
...

```

And edit the index.jsx newly created to add the following lines :

```jsx
import React from 'react'
import { render } from 'react-dom'

import App from './App'

import '../scss/app.scss'

render(
    <App />,
    document.getElementById("app")
)
```

All te code of your application will remain into the `App.jsx` file.

here s a sample `App.jsx` file:

```jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { render } from 'react-dom'

class App extends Component{
    render = () =>{
        return <div>My Own App !</div>
    }
}
export default App
```


3. And now initialize this files as a react project with `npm` :

```bash
$> npm init -y
```

4. Add `react` and the `react-dom` as javascript dependencies:

```bash
$> npm add react react-dom
```

### Run or Debug

We will use [Parcel](https://parceljs.org/) as a build/serve/hot-reload tool to easily develop our react app:

1. add the `parcel` dev tool

```bash
$> npm add -d parcel-bundler
```

2. run the parcel debug server

```bash
$> npx parcel index.html
```

and just open the [http://localhost:1234](http://localhost:1234) page to see your app.

>**INFO**<br/>
>Don't hesitate to open the developer mode from your preferred browser (like Chrome or Firefox) and install the "React Developer Tool" extension to see the React component stack and optimize your code with a react dedicated Profiler.

### Build

7. Build your project

```bash
$> npx parcel build index.html
```

### Production

>TODO <br/>
>(see [reactjs-parcel-docker-example](https://github.com/anhvietcr/reactjs-parcel-docker-example))

Use docker to bundle the React App

```bash
$> docker-compose up -d --build
```

## Hooks

- **useState**  store a [state](https://fr.reactjs.org/docs/hooks-state.html) into a component
- **useEffect** store a function(or an [effect](https://fr.reactjs.org/docs/hooks-effect.html)) into a composant
- **useMemo** store a value in [memory](https://fr.reactjs.org/docs/hooks-reference.html#usememo) for a pure component
- **userCallback** set a [call back function](https://fr.reactjs.org/docs/hooks-reference.html#usecallback) for a pure component.

- **useRef** 

That's it !

[McGivrer](mailto:frederic.delorme@gmail.com?subject=React-and-Parcel<github> "Contact the author")
