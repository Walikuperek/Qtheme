import { CSSProps } from '../types';

export type AtomName = string;

/**
 * Atom value can be string | object. Simply your CSS rules or CSS value/CSS value + CSS property name.
 * @info AtomValue type contains any type, because it allows to use freely with React.
 */
export type AtomValue = string | CSSProps | any;

/**
 * @example ['color-primary', '#000']
 * @example ['color-primary', 'color:#000']
 * @example ['color-primary', {color: '#000'}]
 * */
export type ThemeAtom = [AtomName, AtomValue];

/**
 * @description Theme interface, base on it your theme.
 */
export interface Theme {
  name: string;
  atoms: ThemeAtom[];
}
