# Qtheme

<p align="center">
  <img src="https://quak.com.pl/assets/logo/qtheme_Background_Removed.png" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/walikuperek/qtheme" />
  <img src="https://img.shields.io/badge/Tests-8%2F8%20%E2%9C%85-success" />
</p>

* [Qtheme Website](https://quak.com.pl/lib/qtheme/index.html)
* [Qtheme GitHub repository](https://github.com/Walikuperek/Qtheme)
* [Qtheme NPM package](https://www.npmjs.com/package/@quak.lib/qtheme)

Created with ❤ by [QUAK](https://quak.com.pl)

~5kb.js, 0 dependencies, fast, fully typed and production-ready *css-in-js* library for managing themes in your app. Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

<h2 align="center">Requirements</h2>
<p align="center">
    None, works with any framework and plain JS/TS with HTML.
</p>

<h2 align="center">Install</h2>

```bash
npm install @quak.lib/qtheme
```


<h2 align="center">Qtheme DEMO</h2>
<p align="center">
  Check out <a href="https://quak.com.pl/lib/qtheme/index.html">DEMO</a> to see Qtheme in action.
  <img src="https://quak.com.pl/assets/qtheme/qtheme_DEMO_2.png" />
</p>



## Documentation
[Documentation](https://quak.com.pl/lib/qtheme/docs.html) with getting started, examples and API reference.

## Examples repository
Qtheme has separate [GitHub repo with examples](https://github.com/Walikuperek/Qtheme-examples) for each framework/compiler/library/vanilla JS/TS.

> Will work with **vanilla JS** if supports import/export.

## What is Qtheme?

```typescript
import {Qtheme, Theme, CSSProps} from '@quak.lib/qtheme'

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

// Override atoms in each theme
// Use Qtheme.setCommonAtoms(atoms) to set atoms for all themes
const lightTheme: Theme = {
  name: 'light',
  atoms: [
    // SIMPLE ATOMS
    // generates --primary: dodgerblue
    ['primary', 'dodgerblue'],
    
    // COMPOUND ATOMS
    // generates CSS class .btn + .btn:hover
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

// Init theme
Qtheme.setTheme(lightTheme)

// Try to initialize theme from localStorage else lightTheme
Qtheme.init(lightTheme)
```
Once you initialized `atoms` you can use `class="bg-color"` to set background color or `class="text-primary"` to set text color, etc.
```html
<body class="bg-color text-color">
  <h1 class="text-primary">Hello world!</h1>
  <p>This is regular text color</p>
  <btn class="btn">Action</btn>
</body>
```
Change theme with `Qtheme.setTheme(theme)`.
```typescript
import {Qtheme} from '@quak.lib/qtheme'

// btn, btnHover from previous example
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

## Getting started
Qtheme lets you:
* Create infinite number of themes
* Switch between them easily
* Set common theme atoms for all themes
* Initialize already chosen theme on app start
* Generate CSS classes for you, so you don't have to write it by yourself

Continue getting started at [Qtheme Docs - Getting started](https://quak.com.pl/lib/qtheme/docs/getting-started.html)

## API

You will find all information about Qtheme theming API in [Qtheme Docs - API](https://quak.com.pl/lib/qtheme/docs/api.html)


## License

[MIT LICENSE](https://github.com/Walikuperek/Qtheme/blob/master/LICENSE)

Made & maintained with ❤️ by [QUAK](https://quak.com.pl)
