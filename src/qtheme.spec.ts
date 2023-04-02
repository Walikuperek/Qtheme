import { Qtheme } from './qtheme';
import { Theme, ThemeAtom } from './interfaces';

const lightTheme = {
  name: 'light',
  atoms: [['bgColor', '#fff']],
} as Theme;

const darkTheme = {
  name: 'dark',
  atoms: [['bg-color', '#000']],
} as Theme;

const commonAtoms = [
  ['font-family', 'sans-serif'],
  ['font-size', '16px'],
] as ThemeAtom[];

describe('Qtheme', () => {
  it('should return null if theme was not set already', () => {
    const theme = Qtheme.getTheme();
    expect(theme).toBeNull();
  });

  it('should set light theme properly', () => {
    Qtheme.setTheme(lightTheme);
    const cssBgRootVar = document.documentElement.style.getPropertyValue('--bg-color');
    expect(cssBgRootVar).toEqual('#fff');
  });

  it('should get light theme properly', () => {
    Qtheme.setTheme(lightTheme);
    const theme = Qtheme.getTheme();
    expect(theme).toEqual(lightTheme);
    expect(theme?.name).toEqual('light');
  });

  it('should set dark theme properly', () => {
    Qtheme.setTheme(darkTheme);
    const cssBgRootVar = document.documentElement.style.getPropertyValue('--bg-color');
    expect(cssBgRootVar).toEqual('#000');
  });

  it('should get dark theme properly', () => {
    Qtheme.setTheme(darkTheme);
    const theme = Qtheme.getTheme();
    expect(theme).toEqual(darkTheme);
    expect(theme?.name).toEqual('dark');
  });

  it('should set common atoms properly', () => {
    Qtheme.setCommonAtoms(commonAtoms);
    const cssFontFamilyRootVar = document.documentElement.style.getPropertyValue('--font-family');
    expect(cssFontFamilyRootVar).toEqual('sans-serif');
  });

  it('should get common atoms properly', () => {
    Qtheme.setCommonAtoms(commonAtoms);
    const atoms = Qtheme.getCommonAtoms();
    expect(atoms).toEqual(commonAtoms);
  });
});
