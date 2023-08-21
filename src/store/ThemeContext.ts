import { createContext } from 'preact';

export type ThemeType = 'dark' | 'light';

export interface IThemeContext {
  theme: ThemeType;
}

const localTheme = localStorage.getItem('theme');

/**
 * Stores information about the side navigation.
 */
export const ThemeContext = createContext<IThemeContext>({
  // Defaulted to the browser default setting.
  theme: localTheme
    ? localTheme === 'dark'
      ? 'dark'
      : 'light'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
});
