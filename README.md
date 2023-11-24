# Qtheme

<p align="center">
  <img src="https://quak.com.pl/assets/logo/qtheme_Background_Removed.png" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/walikuperek/qtheme" />
  <img src="https://img.shields.io/badge/Tests-8%2F8%20%E2%9C%85-success" />
</p>

*Quick links:*
* [Website](https://quak.com.pl/lib/qtheme/index.html)
* [NPM package](https://www.npmjs.com/package/@quak.lib/qtheme)
* [GitHub repository](https://github.com/Walikuperek/Qtheme)


~5kb.js, 0 dependencies, fast, fully typed and production-ready *css-in-js* library for managing themes in your app. Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

Qtheme lets you:
* Create infinite number of themes
* Switch between them easily
* Set common theme atoms for all themes
* Initialize already chosen theme on app start
* Generate CSS classes for you, so you don't have to write it by yourself


*React Quick example:*
```typescript jsx
import {Qtheme} from '@quak.lib/qtheme'
import {darkTheme, lightTheme} from './your-themes'

function App() {
  useEffect(() => {
    // Try to initialize theme from localStorage else lightTheme
    Qtheme.init(lightTheme)
  }, [])
  return (
    <div class="bg-color text-color">
      <h1 class="text-primary">Hello world!</h1>
      <p>This is regular text color</p>
      <button onclick={() => Qtheme.setTheme(darkTheme)}>Dark theme</button>
    </div>
  )
}
```

*Angular Quick example:*
```typescript
import {Qtheme} from '@quak.lib/qtheme'
import {darkTheme, lightTheme} from './your-themes'

@Component({
  ..., // selector, stylesUrl,
  template: `<div class="bg-color text-color">
    <h1 class="text-primary">Hello world!</h1>
    <p>This is regular text color</p>
    <button (click)="setDarkTheme()">Dark theme</button>
  </div>`
})
class AppComponent {
  constructor() {
    // Try to initialize theme from localStorage else lightTheme
    Qtheme.init(lightTheme)
  }
  setDarkTheme() {
    Qtheme.setTheme(darkTheme)
  }
}
```

<h2 align="center">Requirements</h2>
<p align="center">
    None, works with any framework and plain JS/TS with HTML.
</p>

<h2 align="center">Install</h2>

```bash
npm install @quak.lib/qtheme
```

<h2 align="center">Website / DEMO</h2>
<p align="center">
  Check out <a href="https://quak.com.pl/lib/qtheme/index.html">website</a> to see Qtheme in action.
<p align="center">
    <em>Theme selector - top-right corner</em>
</p>
<p align="center">
  <img src="https://quak.com.pl/assets/qtheme/qtheme_webpage_tin.png" />
</p>



## Documentation & Examples
[Documentation](https://quak.com.pl/lib/qtheme/docs.html) with getting started, examples and API reference.

## Examples repository
> Will work with **vanilla JS** if supports import/export. (eg. with Vite builder)

Qtheme has separate [GitHub repo with examples](https://github.com/Walikuperek/Qtheme-examples) for:
* [Angular](https://github.com/Walikuperek/Qtheme-examples/tree/master/angular)
* [React](https://github.com/Walikuperek/Qtheme-examples/tree/master/react)
* [Svelte](https://github.com/Walikuperek/Qtheme-examples/tree/master/svelte)
* [Javascript](https://github.com/Walikuperek/Qtheme-examples/tree/master/vanilla)
* [Typescript](https://github.com/Walikuperek/Qtheme-examples/tree/master/typescript)


## What is Qtheme?
Import Qtheme
```typescript
import {Qtheme, Theme, CSSProps} from '@quak.lib/qtheme'
```

Declare light theme (`override` atoms in dark/each theme)
```typescript
const lightTheme: Theme = {
  name: 'light',
  atoms: [
    // SIMPLE ATOMS
    // generates --primary: dodgerblue
    ['primary', 'dodgerblue'],
    
    // COMPOUND ATOMS
    // generates CSS class .btn + .btn:hover 
    // can be ::after, ::before, :focus, etc.
    ['btn', btn],
    ['btn:hover', btnHover],
      
    // ATOMS WITH CSS CLASSES  
    // generates --bg-color: hsl(0, 0%, 100%) 
    // + .bg-color { background-color: var(--bg-color) }
    ['bg-color', 'background-color:hsl(0, 0%, 100%)'],
    ['text-color', 'color:black'],
    ['text-primary', 'color:var(--primary)']
  ] 
}
```

Initialize `lightTheme` at app start
```typescript
Qtheme.setTheme(lightTheme)

// Try to initialize theme from localStorage else lightTheme
Qtheme.init(lightTheme)
```
Once you initialized `atoms` you can use `class="bg-color"` to set background color or `class="text-primary"` to set primary text color, etc.
```html
<body class="bg-color text-color">
  <h1 class="text-primary">Hello world!</h1>
  <p>This is regular text color</p>
  <btn class="btn">Action</btn>
</body>
```
Change theme with `Qtheme.setTheme(theme)`.
```typescript
// btn, btnHover from previous examples
const darkTheme: Theme = {
  name: 'dark',
  atoms: [
    ['primary', 'red'],
    ['btn', btn],
    ['btn:hover', btnHover],
    ['bg-color', 'background-color:hsl(0, 0%, 0%)'],
    ['text-color', 'color:white'],
    ['text-primary', 'color:var(--primary)']
  ]
}

Qtheme.setTheme(darkTheme)
```
How to declare CSSProps for `.btn` and `.btn:hover`
```typescript
const btn: CSSProps = {
  'text-align': 'center', // simple strings for any CSS you need
  backgroundColor: 'var(--primary)', // or use intelisense   
  color: 'var(--primary-content)',
  fontWeight: 900
}
const btnHover: CSSProps = {
  borderStyle: 'inset',
  cursor: 'pointer'
}
```

## API

You will find all information about Qtheme theming API in [Qtheme Docs - API](https://quak.com.pl/lib/qtheme/docs/api.html)


## License

[MIT LICENSE](https://github.com/Walikuperek/Qtheme/blob/master/LICENSE)

Made & maintained with ❤️ by [QUAK](https://quak.com.pl)
