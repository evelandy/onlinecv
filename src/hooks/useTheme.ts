import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const query = '(prefers-color-scheme: dark)';
const systemTheme = (): Theme => (window.matchMedia(query).matches ? 'dark' : 'light');
const savedTheme = (): Theme | null => {
  const saved = localStorage.getItem('theme');
  return saved === 'dark' || saved === 'light' ? saved : null;
};

// Follows the OS setting until the visitor picks a theme; only an explicit pick is saved.
export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => savedTheme() ?? systemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => {
      if (!savedTheme()) setThemeState(systemTheme());
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const setTheme = (next: Theme) => {
    localStorage.setItem('theme', next);
    setThemeState(next);
  };

  return { theme, setTheme };
};
