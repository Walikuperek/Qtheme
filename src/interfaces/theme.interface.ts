import { CSSProps } from '../types';

export type AtomName = string;

/**
 * @info AtomValue type contains any type, because it allows to use freely with React.
 */
export type AtomValue = string | CSSProps | any;

/**
 * @description Base css :root variable [key, value] or [key, { [key: string]: string }]
 * @example ['--color-primary', '#000']
 * */
export type ThemeAtom = [AtomName, AtomValue];

/**
 * @description Theme interface, base on it your theme or extend this interface with your own properties.
 */
export interface Theme {
  name: string;
  atoms: ThemeAtom[];
}
