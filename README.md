# Qtheme

<p align="center">
  <img src="https://quak.com.pl/assets/logo/qtheme_Background_Removed.png" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/walikuperek/qtheme" />
  <img src="https://img.shields.io/badge/Tests-8%2F8%20%E2%9C%85-success" />
</p>

* [Qtheme GitHub repository](https://github.com/Walikuperek/Qtheme)
* [Qtheme NPM package](https://www.npmjs.com/package/@quak.lib/qtheme)

Created with ❤ by [QUAK](https://quak.com.pl)

~5kb.js, 0 dependencies, fast, fully typed and production-ready *css-in-js* library for managing themes in your app. Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

## Documentation
[Documentation](https://quak.com.pl/lib/qtheme/docs.html) with getting started, examples and API reference.

## Examples repository
Qtheme has separate [GitHub repo with examples](https://github.com/Walikuperek/Qtheme-examples) for each framework/compiler/library/vanilla JS/TS.

> Tested in **Svelte**, **Angular**, **React**. Will work with any framework/library. Below examples.
>
> Will work with **vanilla JS** if supports import/export. Below examples.

## What is Qtheme?

```typescript
import {Qtheme, Theme, CSSProps} from '@quak.lib/qtheme'

// CSSProps from Qtheme for intelisense in IDE
const btn: CSSProps = {
  'text-align': 'center', // use simple strings for anything you need
  backgroundColor: 'var(--primary)', // or use JS version of CSS with intelisense   
  color: 'var(--primary)',
  fontWeight: 900
}
const btnHover: CSSProps = { borderStyle: 'inset', cursor: 'pointer' }

const lightTheme: Theme = {
  name: 'light',
  atoms: [
    // SIMPLE ATOMS
    // generate --primary: dodgerblue
    ['primary', 'dodgerblue'],
    
    // COMPOUND ATOMS
    // generate CSS class .btn + .btn:hover
    ['btn', btn],
    ['btn:hover', btnHover],
      
    // ATOMS WITH CLASSES  
    // generate --bg-color: hsl(0, 0%, 100%) + .bg-color, etc...
    ['bg-color', 'background-color:hsl(0, 0%, 100%)'],
    ['text-color', 'color:black'],
    ['text-primary', 'color:var(--primary)']
  ] 
}

// Init/Change theme
Qtheme.setTheme(lightTheme)

// Or try to load saved from localStorage else lightTheme
Qtheme.init(lightTheme)
```
Once you added `atoms` you can use `class="bg-color"` to set background color or `class="text-primary"` to set text color, etc.
```html
<body class="bg-color text-color">
  <h1 class="text-primary">Hello world!</h1>
  <p>This is regular text color</p>
  <btn class="btn">Action</btn>
</body>
```

## DEMO

<p align="center">
  <img src="https://quak.com.pl/assets/qtheme/qtheme_DEMO.png" />
</p>

Check out [DEMO](https://quak.com.pl/lib/qtheme/index.html) to see Qtheme in action.

## Requirements
None, works with any framework and plain JS/TS with HTML.

## Install
```bash
npm install @quak.lib/qtheme
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


## Latest builds

*Latest single minified qtheme.js versions (1.5.1, 1.5.2, 1.5.4, 1.5.5 are just README updates)*

| minified version | link                                                               | size    |
|------------------|--------------------------------------------------------------------|---------|
| 1.5.3            | [qtheme.js](https://quak.com.pl/lib/qtheme/builds/1_5_3/qtheme.js) | 5.09 KB |
| 1.5.0            | [qtheme.js](https://quak.com.pl/lib/qtheme/builds/1_5_0/qtheme.js) | 5.04 KB |
| 1.4.1            | [qtheme.js](https://quak.com.pl/lib/qtheme/builds/1_4_1/index.js)  | 5.04 KB |




## License

[MIT LICENSE](https://github.com/Walikuperek/Qtheme/blob/master/LICENSE)

Made & maintained with ❤️ by [QUAK](https://quak.com.pl)
