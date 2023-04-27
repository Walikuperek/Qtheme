import { JSStyle } from './jsstyle.type';

export type CSSProps = JSStyle & Partial<Record<string, string | number>>;
