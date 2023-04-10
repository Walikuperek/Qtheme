# Qtheme

![QthemeLogo](https://quak.com.pl/assets/logo/qtheme_Background_Removed.png)
![LicenseBadge](https://img.shields.io/github/license/walikuperek/qtheme)
![TestsBadge](https://img.shields.io/badge/Tests-7%2F7%20%E2%9C%85-success)

* [GitHub repository](https://github.com/Walikuperek/Qtheme)
* [NPM package](https://www.npmjs.com/package/@quak.lib/qtheme)

~7kb.js, simple, fast and production-ready *css-in-js* library for managing themes in your app. Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

Tested in **Svelte**, **Angular**, **React**. Will work with any framework/library. Below examples.

> Will work with **vanilla JS** if supports import/export
> 
> Try [vitejs.dev](https://vitejs.dev/) to use powerful import/export in vanilla JS

## Install
```bash
npm install @quak.lib/qtheme
```

## Qtheme - Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Overview](#overview)
* [Getting started](#getting-started)
  - [Qtheme first things first](#qtheme---first-things-first)
    * [Declare themes](#declare-themes)
    * [Get theme](#get-theme)
    * [Initialize theme](#initialize-theme)
    * [Change theme](#change-theme)
    * [Use theme in HTML](#use-theme-in-html)
    * [Common theme atoms](#common-theme-atoms)
* [API](#api)
  - [Qtheme](#qtheme-api)
    * [Set theme](#set-theme-api)
    * [Get theme](#get-theme-api)
    * [Set common theme atoms](#set-common-theme-atoms)
    * [Get common theme atoms](#get-common-theme-atoms)
    * [Auto-generated CSS](#auto-generated-css)
* [Examples](#examples)
  - [Vanilla](#vanilla)
    * [Javascript + HTML](#javascript--html)
    * [Typescript + HTML](#typescript--html)
  - [Framework/library](#frameworklibrary)
    * [Svelte](#svelte)
    * [Angular](#angular)
    * [React](#react)
* [License](#license)


## Requirements
None, works with any framework and plain JS/TS with HTML.


## Installation
```bash
npm install @quak.lib/qtheme
```


## Overview
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
const lightTeme: Theme = {
  name: 'light',
  atoms: [
      ['primary', 'dodgerblue'],
      
      ['bg-color', 'background-color:hsl(0, 0%, 100%)'],
      ['text-color', 'color:black'],
      ['text-primary', 'color:var(--primary)']
  ] 
};

// Init theme
Qtheme.setTheme(darkTheme);

// Change theme
Qtheme.setTheme(lightTeme);
```

```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```


## Getting started
**Qtheme** main goal is to provide easy way to manage themes in your app (JS/TS/any framework). It's not a CSS framework, it's just a library that will help you to manage themes.

But... Qtheme can generate CSS for you(for theme atoms), so you don't have to write it by yourself. It's optional, you can use it or not.

To sum up, Qtheme lets you:
* Create infinite number of themes
* Switch between them easily
* Set common theme atoms for all themes
* Initialize already chosen theme on app start
* Generate CSS classes for you, so you don't have to write it by yourself


### Qtheme - first things first
#### Declare themes
```typescript
import {Theme} from '@quak.lib/qtheme'

const darkTheme: Theme = {
  name: 'dark',
  atoms: [
      // Will not generate any CSS, only :root { --primary: dodgerblue } 
      ['primary', 'dodgerblue'],
      
      // Will generate CSS like: .bg-color { background-color: var(--bg-color) }
      ['bg-color', 'background-color:hsl(0, 100%, 0%)'],
      ['text-color', 'color:#fff'],
      ['text-primary', 'color:var(--primary)']
  ] 
};
const lightTeme: Theme = {
  name: 'light',
  atoms: [
      ['primary', 'dodgerblue'],
      
      ['bg-color', 'background-color:hsl(0, 0%, 100%)'],
      ['text-color', 'color:black'],
      ['text-primary', 'color:var(--primary)']
  ] 
};
```

#### Get theme
```typescript
import {Qtheme} from '@quak.lib/qtheme'

const currentTheme = Qtheme.getTheme();

// Optional, to change default localStorage key, defaults to 'Qtheme'
const currentTheme = Qtheme.getTheme('yourThemeLocalStorageKey');
```

#### Initialize theme
You can utilize that Qtheme will save your theme in localStorage, you can initialize it on app start.
```typescript
import {Qtheme} from '@quak.lib/qtheme'
import {lightTeme, darkTheme} from 'path/to/your/themes'

const savedTheme: Theme | null = Qtheme.getTheme();
if (savedTheme) {
  Qtheme.setTheme(savedTheme);
} else {
  Qtheme.setTheme(darkTheme);
}

// Or with your custom localStorage key, defaults to 'Qtheme'
const savedThemeName: Theme | null = Qtheme.getTheme('yourThemeLocalStorageKey');
if (savedThemeName) {
  Qtheme.setTheme(savedThemeName, {token: 'yourThemeLocalStorageKey'});
} else {
  Qtheme.setTheme(darkTheme, {token: 'yourThemeLocalStorageKey'});
}
```

#### Change theme
```typescript
import {Qtheme} from '@quak.lib/qtheme'
import {lightTeme} from 'path/to/your/themes'

Qtheme.setTheme(lightTeme);

// Or with your custom localStorage key, defaults to 'Qtheme'
Qtheme.setTheme(lightTeme, {token: 'yourThemeLocalStorageKey'});
```

#### Use theme in HTML
```html
<div class="bg-color">
  <h1 class="text-primary">Hello world!</h1>
  <p class="text-color">This is regular text color</p>
</div>
```

#### Common theme atoms
```typescript
import {Qtheme, ThemeAtom} from '@quak.lib/qtheme'

const atoms: ThemeAtom[] = [
  ['border-radius', 'border-radius:5px'],
  ['border-radius-oval', 'border-radius:50vw 50vw'],
  ['font-size', 'font-size:16px'],
  ['font-size-12', 'font-size:12px'],
  ['font-size-14', 'font-size:14px'],
  ['bordered', 'border-radius:var(--border-radius)']
];

Qtheme.setCommonAtoms(atoms);

// or with your custom localStorage key, defaults to 'Qtheme-common'
Qtheme.setCommonAtoms(atoms, {commonToken: 'yourCustomCommonThemeAtomsToken'});
```


## API
### Qtheme API
#### Set theme API
Initialize or change theme with `setTheme` method. It will save theme in *localStorage* by default. You can change default key with `token` option.
```typescript
import {Qtheme, Theme, SetRootAtomOptions} from '@quak.lib/qtheme'

interface SetRootAtomOptions {
  token?: string;
  generateCSS?: boolean;
}

Qtheme.setTheme(theme: Theme, options?: SetRootAtomOptions)
```

#### Get theme API
Use `getTheme` to get current theme (from *localStorage*). You can initialize theme on app start with that.
```typescript
import {Qtheme, Theme} from '@quak.lib/qtheme'

Qtheme.getTheme(token?: string): Theme | null
```

#### Set common theme atoms
You can set common theme atoms with `setCommonAtoms` method. It will save theme atoms in *localStorage* by default. You can change default key with `commonToken` option.
```typescript
import {Qtheme, ThemeAtom, SetRootAtomOptions} from '@quak.lib/qtheme'

interface SetCommonAtomsOptions {
  commonToken?: string;
  generateCSS?: boolean;
}

Qtheme.setCommonAtoms(atoms: ThemeAtom[], options?: SetCommonAtomsOptions)
```

#### Get common theme atoms
Use `getCommonAtoms` to get current common theme atoms (from *localStorage*). You can initialize common theme atoms on app start with that.
```typescript
import {Qtheme, ThemeAtom} from '@quak.lib/qtheme'

Qtheme.getCommonAtoms(commonToken?: string): ThemeAtom[] | null
```

#### Auto-generated CSS
Qtheme can generate CSS for you(for theme atoms), so you don't have to write it by yourself. It's optional, you can use it or not.
```typescript
import {Qtheme, ThemeAtom, SetRootAtomOptions} from '@quak.lib/qtheme'

const yourThemeAtoms: ThemeAtom[] = [
  // Without CSS Generation
  ['primary', 'dodgerblue'],
  ['accent', 'pink'],
  ['bg', '#333'],
  ['bg-inner', '#222'],
  
  // With CSS Generation 
  ['bg-color', 'background-color:var(--bg)'],
  ['bg-accent', 'background-color:var(--accent)'],
  ['text-color', 'color:#fff'],
  ['text-accent', 'color:var(--accent)']
];
```

> You should use auto-generated CSS classes. It's less code for you ;)

If you want to use auto-generated CSS classes then you need to provide `color:` or `background-color:` or anything you need. Just follow regular CSS syntax.

| **ThemeAtom**                               | **generated :root variable**        | **generated CSS**                            |
|---------------------------------------------|-------------------------------------|----------------------------------------------|
| 'primary-color', 'color:hsl(53, 100%, 50%)' | --primary-color: hsl(53, 100%, 50%) | .primary-color {color:var(--primary-color)}  |
| 'bg-color', 'background-color:#fff'         | --bg-color: #fff                    | .bg-color {background-color:var(--bg-color)} |
| 'text-color', '#fff'                        | --text-color: #fff                  | <won't generate CSS>                         |
| ...                                         | ...                                 | ...                                          |
 

## Examples
**Qtheme** is agnostic to any framework/library. You can use it with any of them.

Examples are located in [GitHub Qtheme-examples](https://github.com/Walikuperek/Qtheme-examples) repository.

### Vanilla
Try Qtheme with vanilla JS/TS and HTML.
#### Javascript + HTML
[GitHub vanilla JS example](https://github.com/Walikuperek/Qtheme-examples/tree/master/vanilla)

#### Typescript + HTML
[GitHub Typescript example](https://github.com/Walikuperek/Qtheme-examples/tree/master/typescript)

### Framework/library
**Qtheme** works with **any** framework/library. You can use it with Angular, React, Svelte, Vue, etc.

#### Angular
[GitHub Angular Example](https://github.com/Walikuperek/Qtheme-examples/tree/master/angular)

#### React
[GitHub React example](https://github.com/Walikuperek/Qtheme-examples/tree/master/react)

#### Svelte
[GitHub Svelte example](https://github.com/Walikuperek/Qtheme-examples/tree/master/svelte)


## License

[MIT LICENSE](https://github.com/Walikuperek/Qtheme/blob/master/LICENSE)

Made & maintained with ❤️ by [QUAK](https://quak.com.pl)
