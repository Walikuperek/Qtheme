import { mapToKebabCase } from './helpers';
import { ThemeAtom, SetRootAtomsOptions } from './interfaces';
import { DEFAULT_OPTIONS } from './config';

/**
 * Main engine of Qtheme. Made to set root atoms of theme.
 * @param atoms
 * @param options defaults to DEFAULT_OPTIONS
 *
 * ```
 * DEFAULT_OPTIONS = {
 *  generateCSS: true,
 *  token: 'Qtheme',
 *  commonToken: 'Qtheme-common'
 * }
 * ```
 */
export const setRootAtoms = (atoms: ThemeAtom[], options?: Partial<SetRootAtomsOptions>): void => {
  const opts: SetRootAtomsOptions = options ? { ...DEFAULT_OPTIONS, ...options } : DEFAULT_OPTIONS; // to ensure that all options are set
  let cssCode = '';

  for (const themeAtom of atoms) {
    const atom = Atom(themeAtom);
    if (opts.generateCSS) {
      if (atom.isCSSRule) {
        const [cssProperty, value] = atom.splitCSSRule();
        atom.setVar(atom.key, value);
        if (cssProperty.length) {
          cssCode += CSS().varClassRow(atom.key, cssProperty);
        }
      } else {
        atom.setVar();
      }
    } else {
      atom.setVar();
    }
  }

  if (opts.generateCSS && opts.token) {
    Head().removeStyleTag(opts.token);
    Head().attachStyleTag(cssCode, opts.token);
  }
};

function Atom(atom: ThemeAtom) {
  const [key, cssRule] = atom;
  const rootVar = mapToKebabCase(key);

  return {
    key: rootVar,
    isCSSRule: cssRule.indexOf(':') !== -1,
    splitCSSRule: () => cssRule.split(':'),
    setVar(property = rootVar, value = cssRule) {
      Root().setVar(property, value);
    },
  };
}

function Root(documentRef: Document = document) {
  const root = documentRef.documentElement;
  return {
    setVar(className: string, cssRule: string) {
      root.style.setProperty(`--${className}`, cssRule);
    },
  };
}

function Head(documentRef: Document = document) {
  const head = documentRef.getElementsByTagName('head')[0];
  return {
    removeStyleTag(id: string) {
      const style = documentRef.getElementById(id);
      if (style) {
        head.removeChild(style);
      }
    },
    attachStyleTag(cssCode: string, id = DEFAULT_OPTIONS.token) {
      const style = documentRef.createElement('style');
      style.id = id;
      style.innerHTML = cssCode;
      head.appendChild(style);
    },
  };
}

function CSS() {
  return {
    varClassRow: (varName: string, property: string) => `.${varName} { ${property}: var(--${varName}); }\n`,
  };
}
