# Qtheme
[GitHub repository](https://github.com/Walikuperek/Qtheme)

Simple, fast and production ready library for managing themes in your app.

Uses CSS root variables under the hood.
*Can create global CSS classes from theme atoms.*

> Based on **document.style.setProperty**, so can be used in any framework and vanilla JS as well.


## Install
```
npm install @quak.lib/qtheme
```

## Table of Contents

* [Features](#features)
* [API](#api)
* [Themes](#themes)
* [Javascript usage example](#javascript-usage-example)
* [Typescript usage example](#typescript-usage-example)
* [Angular usage](#angular-usage)
* [React usage](#react-usage)
    - [Example with Next.js](#example-with-nextjs)
* [Set common atoms](#set-common-atoms)
* [setTheme setCommonAtoms options](#settheme-setcommonatoms-options)

## Features
* Set theme
* Get theme
* Set common atoms
* Get common atoms
* Generate CSS classes from atoms and attach them to document head

## Getting started
```typescript
// Basic usage
import {Qtheme, Theme, ThemeAtom} from '@quak.lib/qtheme'

Qtheme.setTheme(theme) // Theme { name, atoms }, you can extend Theme interface
const theme: Theme = Qtheme.getTheme()

Qtheme.setCommonAtoms(atoms) // [ ['b-radius-oval', '50vw 50vw'], ['text-size', '16px'] ]
const commonThemeAtoms: ThemeAtom[] = Qtheme.getCommonAtoms()
```

## Themes
Create multiple themes and switch between them with **`Qtheme.setTheme(theme)`**

> Remember to use same atoms names in different themes to override values.
```typescript
type ThemeAtom = [string, string]; // [atomName, atomValue]

// Atom names will be converted to CSS variables names, like
['bgColor', '#fff'] -> `--bg-color: #fff`
['bg-color', '#fff'] -> `--bg-color: #fff`
```

> **AtomValue** can be any CSS value like: #fff, rgba(0,0,0,0.5), 16px, 50vw, etc.

And if you want to use CSS variables then you can use them like: `var(--atom-name)`


```typescript
interface Theme {
  name: string;
  atoms: ThemeAtom[];
}

const lightTheme: Theme = {
  name: 'light',
  atoms: [
      ['bgColor', 'background:#fff'], // will be converted to --bg-color
      // will provide CSS for &rarr; class="bg-color" with background:#fff
      ['textColor', 'color:#000'], // will be converted to --text-color
      // will provide CSS for &rarr; class="text-color" with color:#000
      
      ['primary', 'dodgerblue']
      // if you don't provide 'color:' in value or something else then
      // Qtheme won't generate CSS class for this atom
    
      // you will need to create CSS class for this atom on your own
      // like in your CSS code .primary { color: var(--primary) }
  ]
};
```
> If you want to use auto-generated CSS classes then you need to provide `color:` or `background:` or what you need. Just follow regular CSS syntax.
>
> 
> `['bg-color', 'background:#fff']` &rarr; `--bg-color: #fff` +
> 
> Will create global CSS class `.bg-color: {background:var(--bg-color)}`

```typescript
const darkTheme: Theme = {
  name: 'dark',
  atoms: [
      ['bg-color', 'background:#000'], // will be converted to --bg-color
      ['text-color', 'color:#fff'], // will be converted to --text-color
      ['primary', 'dodgerblue'] // will be converted to --primary
  ] 
};
```

## Javascript usage example
```javascript
import {Qtheme} from '@quak.lib/qtheme';

// Declare your themes
const lightTheme = {
  name: 'light',
  atoms: [
      ['bgColor', 'background:#fff'], // will be converted to --bg-color
      ['textColor', 'color:#000'], // will be converted to --text-color
      ['primary', 'dodgerblue'] // will be converted to --primary
  ]
};

// Set theme whenever you want
Qtheme.setTheme(lightTheme); // will set light theme
Qtheme.setTheme(darkTheme); // will set dark theme
const theme = Qtheme.getTheme(); // get current theme
```
Then in html
```html
<div class="bg-color">
  <p class="text-color">Hello world!</p>
</div>
```

## Typescript usage example
```typescript
import {Qtheme, Theme} from '@quak.lib/qtheme';

const lightTheme: Theme = {
  name: 'light',
  atoms: [
      ['bg-color', 'background:#fff'], // will be converted to --bg-color
      ['text-color', 'color:#000'], // will be converted to --text-color
      ['primary', 'dodgerblue'] // will be converted to --primary
  ]
};

Qtheme.setTheme(lightTheme); // set light theme
const theme = Qtheme.getTheme(); // get current theme
```
Then in html
```html
<div class="bg-color">
  <p class="text-color">Hello TS world!</p>
</div>
```

## React usage

### Example with Next.js
In */pages/index.tsx*

```tsx
import {useEffect} from 'react';
import {Qtheme} from '@quak.lib/qtheme';
import {lightTheme, darkTheme} from '../themes'; // import your themes

export function Index() {
  // Simply   
  useEffect(() => {
    Qtheme.setTheme(lightTheme);
  });

  setTimeout(() => { // use setTimeout if you want
    if (typeof window !== 'undefined') {
      Qtheme.setTheme(lightTheme);
    }
  });

  return (
    <div className='bg-color'>
      <button onClick={() => Qtheme.setTheme(darkTheme)}>Set dark theme</button>
      <p class="text-color">Hello React world!</p>
    </div>
  );
}
```

## Angular usage
In *app.component.ts*
```typescript
import {Qtheme} from '@quak.lib/qtheme';
import {lightTheme, darkTheme} from '../themes'; // import your themes

// regular angular imports and @Component...
class AppComponent implements OnInit {
  constructor() {
    Qtheme.setTheme(darkTheme);
  }
  
  setLightTheme(): void {
    Qtheme.setTheme(lightTheme);
  }
}
```
Then in *app.component.html*
```html
<div class="bg-color">
  <button (click)="setLightTheme()">Set light theme</button>
  <p class="text-color">Hello Angular world!</p>
</div>
```

## Set common atoms
If you want to set common atoms for all themes, you can use `setCommonAtoms` method
```typescript
import {Qtheme, Theme, ThemeAtom} from '@quak.lib/qtheme';

// With JS simply just remove types
const commonAtoms: ThemeAtom[] = [
  ['font-family', 'sans-serif'],
  ['font-size', 'font-size:16px'] // will provide CSS for &rarr; class="font-size" with font-size:16px
];

Qtheme.setCommonAtoms(commonAtoms);
const atoms = Qtheme.getCommonAtoms();
```

## setTheme setCommonAtoms options
You can pass partial options to `setTheme` and `setCommonAtoms` methods
```javascript
const options = {
    generateCSS: false, // default true
};
Qtheme.setTheme(theme, options);
Qtheme.setCommonAtoms(atoms, options);
```

**interface SetRootAtomsOptions**

| Key         | Type    | Default value   | Used for                                                       |
|-------------|---------|-----------------|----------------------------------------------------------------|
| generateCSS | boolean | true            | if false, won't generate css classes                           |
| token       | string  | 'Qtheme'        | tag style id=token - for theme + localStorage key              |
| commonToken | string  | 'Qtheme-common' | tag style id=commonToken - for common atoms + localStorage key |

## License
MIT

More info [quak.com.pl](https://quak.com.pl)
