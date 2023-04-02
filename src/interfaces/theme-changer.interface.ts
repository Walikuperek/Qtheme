import { Theme, ThemeAtom } from './theme.interface';
import { SetRootAtomsOptions } from './set-root-atoms-options.interface';

export interface ThemeChanger {
  /**
   * @description Sets provided css root atoms to the current theme
   * @sideEffect will update LocalStorage as well, key=options.token, defaults to 'Qtheme'
   * @param theme
   * @param options
   */
  setTheme(theme: Theme, options?: Partial<SetRootAtomsOptions>): void;

  /**
   * @description Returns current theme from localStorage
   * @param themeToken defaults to 'Qtheme'
   */
  getTheme(themeToken?: string): Theme | null;

  /**
   * @description Updates common atoms
   * @sideEffect will update LocalStorage as well, key=options.commonToken, defaults to 'Qtheme-common'
   * @param atoms
   * @param options
   */
  setCommonAtoms(atoms: ThemeAtom[], options?: Partial<SetRootAtomsOptions>): void;

  /**
   * @description Returns common atoms from localStorage
   * @param commonThemeToken defaults to 'Qtheme-common'
   */
  getCommonAtoms(commonThemeToken?: string): ThemeAtom[] | null;
}
