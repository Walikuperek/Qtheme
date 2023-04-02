import { setRootAtoms } from './set-root-atoms';
import { ThemeChanger, Theme, SetRootAtomsOptions, ThemeAtom } from './interfaces';
import { THEME_COMMON_TOKEN, THEME_TOKEN } from './config';

const cache = {
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  },
  set: <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value)),
};

export const Qtheme: ThemeChanger = {
  setTheme(theme: Theme, options?: Partial<SetRootAtomsOptions>) {
    setRootAtoms(theme.atoms, options);
    const themeToken = options?.token || THEME_TOKEN;
    cache.set(themeToken, theme);
  },

  getTheme(themeToken = THEME_TOKEN): Theme | null {
    return cache.get(themeToken);
  },

  setCommonAtoms(atoms: ThemeAtom[], options?: Partial<SetRootAtomsOptions>) {
    const commonThemeToken = options?.commonToken || THEME_COMMON_TOKEN;
    setRootAtoms(atoms, { ...options, token: commonThemeToken });
    cache.set(commonThemeToken, atoms);
  },

  getCommonAtoms(commonThemeToken = THEME_COMMON_TOKEN): ThemeAtom[] | null {
    return cache.get(commonThemeToken);
  },
};
