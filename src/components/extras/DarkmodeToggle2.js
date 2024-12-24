import React from "react"
//import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import useDarkMode2 from "../hooks/useDarkMode2"

export const DarkmodeToggle2 = () => {
  const [isDark, setIsDark] = useDarkMode2()

  const handleToggle = () => {
    setIsDark(!isDark)
  }

  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        {/*<button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="text-[#CBC83C]"
    /*onClick={(e) => toggleTheme(theme === 'light' ? 'dark' : 'light')}
          className="text-[#CBC83C]"* /
    >*/}

        {/*theme === "light" && ( */}
        <span className="absolute left-0 z-10 p-1">
          {!isDark && (
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
          {/*)}*/}
        </span>
        {/*theme === "dark" && ( */}
        <span className="absolute right-0 z-10 p-1">
          {isDark && (
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
        </span>
        {/*)}*/}
      </div>
      <div className="sr-only">Switch color theme</div>
    </label>

  )
}
