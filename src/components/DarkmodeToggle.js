import React from "react"
//import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import useDarkMode from "../hooks/useDarkMode"

export default function DarkmodeToggle() {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="text-[#CBC83C]"
      /*onClick={(e) => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-[#CBC83C]"*/
    >
      {theme === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="block w-6 h-6 dark:hidden"
          fill="#fffb2a"
          viewBox="0 0 24 24"
          stroke="#e7e440"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        )}
      {theme === "dark" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden w-6 h-6 dark:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
      <div className="sr-only">Switch color theme</div>
    </button>
  )
}
