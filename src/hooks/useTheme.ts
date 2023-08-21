import { useEffect, useState } from 'preact/hooks';
import { ThemeType } from '~store/ThemeContext';

export default function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) {
      // Defaulted to the browser default setting.
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    } else {
      setTheme(localTheme === 'dark' ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
}
