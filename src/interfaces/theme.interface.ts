/**
 * @description Base css :root variable [key, value]
 *
 * ```
 * ['bg-dark', 'background:#333'] // will create CSS CSS variable --bg-dark: #333 and class .bg-dark { background: var(--bg-dark) }
 * ['bg-dark', '#333'] // will create CSS variable --bg-dark: #333;
 * ```
 * */
export type ThemeAtom = [string, string];

/**
 * @description Theme interface, base on it your theme or extend this interface with your own properties.
 */
export interface Theme {
  name: string;
  atoms: ThemeAtom[];
}
