import { Dispatch, SetStateAction, createContext, useEffect, useLayoutEffect, useRef, useState } from "react";

type Theme = 'light' | 'dark';

const usePrevious = (value: Theme) => {
  const ref = useRef<Theme>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const getInitialTheme = (key: string): Theme => {
  const storedTheme = window.localStorage.getItem(key) as Theme;
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const useStorageTheme = (key: string): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme(key));

  useEffect(() => {
    window.localStorage.setItem(key, theme.toString());
  }, [theme, key]);

  return [theme, setTheme];
};

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {
    console.log('hola');
  }
});

type PropsProvider = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: PropsProvider) => {
  const [theme, setTheme] = useStorageTheme("theme");

  const oldTheme = usePrevious(theme);

  useLayoutEffect(() => {
    document.documentElement.classList.remove(oldTheme as string);
    document.documentElement.classList.add(theme);
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
