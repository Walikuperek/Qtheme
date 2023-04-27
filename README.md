# Qtheme

![QthemeLogo](https://quak.com.pl/assets/logo/qtheme_Background_Removed.png)
![LicenseBadge](https://img.shields.io/github/license/walikuperek/qtheme)
![TestsBadge](https://img.shields.io/badge/Tests-8%2F8%20%E2%9C%85-success)

* [Website & Docs & DEMO](https://quak.com.pl/lib/qtheme/index.html)
* [GitHub repository](https://github.com/Walikuperek/Qtheme)
* [NPM package](https://www.npmjs.com/package/@quak.lib/qtheme)
* [Examples repository](https://github.com/Walikuperek/Qtheme-examples)

~5kb.js, 0 deps, fast, fully typed and production-ready *css-in-js* library for managing themes in your app. Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

*Latest single minified index.js version*

| minified version | link                                                             | size    |
|------------------|------------------------------------------------------------------|---------|
| 1.4.1            | [index.js](https://quak.com.pl/lib/qtheme/builds/1_4_1/index.js) | 5.04 KB |


> Tested in **Svelte**, **Angular**, **React**. Will work with any framework/library. Below examples.
>
> Will work with **vanilla JS** if supports import/export
> 
> Try [vitejs.dev](https://vitejs.dev/) to use powerful import/export in vanilla JS

## What is Qtheme?

```typescript
import {Qtheme, Theme, CSSProps} from '@quak.lib/qtheme'

// CSSProps from Qtheme for intelisense in IDE
const btn: CSSProps = {
  'text-align': 'center', // use simple strings
  border: '1 px solid var(--primary)', // or use JS version of CSS with intelisense     
  backgroundColor: 'var(--primary)',
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
};

// Init/Change theme
Qtheme.setTheme(lightTheme)

// Or try to load saved from localStorage else lightTheme
Qtheme.init(lightTheme)
```
After you created `bg-color` atom you can use `class="bg-color"` to set background color or `class="text-primary"` to set text color, etc.
```html
<body class="bg-color text-color">
  <h1 class="text-primary">Hello world!</h1>
  <p>This is regular text color</p>
  <btn class="btn">Action</btn>
</body>
```

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


## Qtheme - Table of Contents

* [Overview](#overview)
* [Basic usage](#basic-usage)
* [Advanced usage](#advanced-usage)
* [Examples](#examples)
  - [Vanilla](#vanilla)
    * [Javascript + HTML](#javascript--html)
    * [Typescript + HTML](#typescript--html)
  - [Framework/library](#frameworklibrary)
    * [Svelte](#svelte)
    * [Angular](#angular)
    * [React](#react)
* [License](#license)


## Overview
Qtheme is based on `theme atoms`

Atom is a single theme element concept. It consists of **name** and **value**. Name is a string, value is a string or object.

```typescript
import { ThemeAtom } from '@quak.lib/qtheme'

const themeAtoms: ThemeAtom[] = [
  ['bg', '#333']
  ['bg', 'background:#333'],

  ['btn', { background: 'red', color: 'white' }],
  ['btn:hover', { background: 'ruby' }],

  ['your-class::after:hover', { content: 'Hello world!', color: 'white', background: '#333' }]
]
```

You can use atoms to create **compound CSS styles**. For example, you can create a button with `btn` atom and `btn-primary` atom. `btn-primary` will inherit all styles from `btn` atom and add some additional styles.

```tsx
import { Theme, CSSProps } from '@quak.lib/qtheme'
import { themeAtoms } from './path/to/your/themeAtoms'

const btn: CSSProps = {
  fontSize: '1rem',
  color: 'var(--primary)',
  backgroundColor: 'var(--primary-inner)',
  padding: '0.5rem 1rem',
  border: '1.5px solid var(--primary)',
  outlineColor: 'var(--primary-focus)',
  borderCadius: '0.25rem',
};
const btnPrimary: CSSProps = {
  ...btn,
  backgroundColor: 'var(--primary-focus)',
  color: 'var(--primary-content)'
}
const btnHover: CSSProps = {
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-content)',
  cursor: 'pointer'
};
const btnActive: CSSProps = {
  borderStyle: 'inset',
  borderWidth: '1.5px',
}

const commonAtoms: ThemeAtom[] = [
  ['btn', btn],
  ['btn:hover', btnHover],
  ['btn:active', btnActive],
  ['btn-primary', btnPrimary],
  ['btn-primary:hover', btnHover],
  ['btn-primary:active', btnActive],
]

// Init with Qtheme common atoms and theme atoms...
```

```html
<!-- Use like-->
<button class="btn">Button</button>
<button class="btn-primary">Primary Button</button>
```

## Basic usage
Basic usage example to show you how to use Qtheme. You can find more examples(JS/TS/React/Angular/Svelte) in [Qtheme Examples](https://github.com/Walikuperek/Qtheme-examples)

```typescript
import {Qtheme, Theme} from '@quak.lib/qtheme'

const darkTheme: Theme = {
  name: 'dark',
  atoms: [
      ['primary', 'dodgerblue'],
      
      ['bg-color', 'background-color:hsl(0, 100%, 0%)'],
      ['text-color', 'color:#fff'],
      ['text-primary', 'color:var(--primary)']
  ] 
};
const lightTheme: Theme = {
  name: 'light',
  atoms: [
      ['primary', 'dodgerblue'],
      
      ['bg-color', 'background-color:hsl(0, 0%, 100%)'],
      ['text-color', 'color:black'],
      ['text-primary', 'color:var(--primary)']
  ] 
};

// Init theme on app start * will load from local storage if exists
Qtheme.init(darkTheme);

// Change theme
Qtheme.setTheme(lightTheme);
```

```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```

## Advanced usage
Example of advanced usage with **compound CSS styles**.

Create some buttons

```html
<button class="btn">Button</button>
<button class="btn-primary">Primary Button</button>
```

Declare theme
```typescript
import { Theme, ThemeAtom } from '@quak.lib/qtheme'

const darkTheme: Theme = {
    name: 'dark',
    atoms: [
      ['primary', 'hsl(263, 66%, 63%)'], // purple
      ['primary-inner', 'hsl(263, 66%, 20%)'],
      ['primary-focus', 'hsl(263, 66%, 40%)'],
      ['primary-content', 'white'],
      // ...
    ]
};
```

Style buttons
```typescript
import {CSSProps} from '@quak.lib/qtheme'

const btn: CSSProps = {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    color: 'var(--primary)',
    border: '1.5px solid var(--primary)',
    borderRadius: '0.25rem',
    backgroundColor: 'var(--primary-inner)',
    outlineColor: 'var(--primary-focus)',
};
const btnPrimary: CSSProps = {
    ...btn,
    backgroundColor: 'var(--primary-focus)',
    color: 'var(--primary-content)'
}
```
Add some states for buttons
```typescript
import {CSSProps} from '@quak.lib/qtheme'

const btnHover: CSSProps = {
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-content)',
    cursor: 'pointer'
};
const btnActive: CSSProps = {
    borderStyle: 'inset'
}

```
Declare common atoms
```typescript
import { ThemeAtom } from '@quak.lib/qtheme'

const commonThemeAtoms: ThemeAtom[] = [
    ['btn', btn],
    ['btn:hover', btnHover],
    ['btn:active', btnActive],
    ['btn-primary', btnPrimary],
    ['btn-primary:hover', btnHover],
    ['btn-primary:active', btnActive],
]
```
Set theme
```typescript
import { Qtheme } from '@quak.lib/qtheme'
import { lightTheme, darkTheme, commonThemeAtoms } from '/path/to/your/themes'

// will load theme and common atoms from local storage if exists
// else loads from arguments
Qtheme.init(darkTheme, { commonAtoms: commonThemeAtoms })
// or
Qtheme.setTheme(darkTheme)
Qtheme.setCommonAtoms(commonThemeAtoms)

// Change theme to see the difference
Qtheme.setTheme(lightTheme)
```

## Examples
**Qtheme** is agnostic to any framework/library. You can use it with any of them.

Examples are located in [GitHub Qtheme-examples](https://github.com/Walikuperek/Qtheme-examples) repository.

- [Vanilla](#vanilla)
  * [Javascript + HTML](#javascript--html)
  * [Typescript + HTML](#typescript--html)
- [Framework/library](#frameworklibrary)
  * [Svelte](#svelte)
  * [Angular](#angular)
  * [React](#react)

### Vanilla
Try Qtheme with vanilla JS/TS and HTML.
#### Javascript + HTML
[GitHub vanilla JS usage example](https://github.com/Walikuperek/Qtheme-examples/tree/master/vanilla)

Brief example:
```javascript
import {Qtheme} from '@quak.lib/qtheme'
import {darkTheme} from 'path/to/your/themes'

const savedTheme = Qtheme.getTheme();
if (savedTheme) {
  Qtheme.setTheme(savedTheme);
} else {
  // Set some default theme
  Qtheme.setTheme(darkTheme);
}
```
```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```


#### Typescript + HTML
[GitHub Typescript usage example](https://github.com/Walikuperek/Qtheme-examples/tree/master/typescript)

Brief example:
```typescript
import {Qtheme, Theme} from '@quak.lib/qtheme'
import {darkTheme} from 'path/to/your/themes'

const savedTheme: Theme | null  = Qtheme.getTheme();
if (savedTheme) {
  Qtheme.setTheme(savedTheme);
} else {
  // Set some default theme
  Qtheme.setTheme(darkTheme);
}
```
```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```

### Framework/library
**Qtheme** works with **any** framework/library. You can use it with Angular, React, Svelte, Vue, etc.

#### Angular
[GitHub Angular usage example](https://github.com/Walikuperek/Qtheme-examples/tree/master/angular)

Brief example:
```typescript
import {Qtheme, Theme} from '@quak.lib/qtheme'
import {darkTheme} from 'path/to/your/themes'

class AppComponent {
  constructor() {
    const savedTheme: Theme | null = Qtheme.getTheme();
    if (savedTheme) {
      Qtheme.setTheme(savedTheme);
    } else {
      // Set some default theme
      Qtheme.setTheme(darkTheme);
    }
  }
}
```
```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```

#### React
[GitHub React usage example](https://github.com/Walikuperek/Qtheme-examples/tree/master/react)

Brief example:
```tsx
import {Qtheme} from '@quak.lib/qtheme'
import {darkTheme} from 'path/to/your/themes'

const App = () => {
  useEffect(() => {
    const savedTheme = Qtheme.getTheme();
    if (savedTheme) {
      Qtheme.setTheme(savedTheme);
    } else {
      // Set some default theme
      Qtheme.setTheme(darkTheme);
    }
  }, []);
  
  return (
    <div className="bg-color">
      <h1 className="text-primary">Hello world!</h1>
      <p className="text-color">This is regular text color</p>
    </div>
  );
}
```


#### Svelte
[GitHub Svelte usage example](https://github.com/Walikuperek/Qtheme-examples/tree/master/svelte)

Brief example:
```html
<script>
  import {Qtheme} from '@quak.lib/qtheme'
  import {darkTheme} from 'path/to/your/themes'
  
  const savedTheme = Qtheme.getTheme();
  if (savedTheme) {
    Qtheme.setTheme(savedTheme);
  } else {
    // Set some default theme
    Qtheme.setTheme(darkTheme);
  }
</script>

<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```

## License

[MIT LICENSE](https://github.com/Walikuperek/Qtheme/blob/master/LICENSE)

Made & maintained with ❤️ by [QUAK](https://quak.com.pl)
