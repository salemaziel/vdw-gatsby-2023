import { useEffect, useState, useCallback } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(() =>  {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        document.documentElement.classList.remove(prevTheme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      }
      return newTheme;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;