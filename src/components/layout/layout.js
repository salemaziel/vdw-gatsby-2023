import React, { useState, useEffect } from "react"
import Header from "./HeaderMain"
import Footer from "./footer"
import clsx from "clsx"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const headerClass = clsx(
    "sticky top-0 left-0 right-0 z-10 flex h-20 md:h-24 text-white dark:text-white transition-colors duration-300",
    {
      // Transparent on homepage when not scrolled
      "bg-transparent": isRootPath && !scroll,
      // Background color on other pages or when scrolled
      "bg-[#2579bceb] dark:bg-[rgba(26,26,57,1)]": !isRootPath || scroll,
    }
  )

  return (
    <>
      <header className={headerClass} data-is-root-path={isRootPath}>
        <Header />
      </header>
      <main className="bg-theme-light-bg dark:bg-theme-dark-bg text-theme-light-text dark:text-theme-dark-text">{children}</main>
      <Footer
        description="Via Del Web is a bilingual San Diego, California based Web Design Agency building fast, beautiful, and responsive websites for small businesses."
      />
    </>
  )
}

export default Layout
