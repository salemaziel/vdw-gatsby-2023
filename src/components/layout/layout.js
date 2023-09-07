//import *  as React from "react"
import React, { useState, useCallback, useEffect } from 'react'
import { Link } from "gatsby"
import Header from "./HeaderMain"
import Footer from "./footer"
import clsx from "clsx"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 30);
  }, []);


  const headerClass = clsx(
    "sticky top-0 left-0 right-0 z-10 flex h-20 md:h-24 text-white dark:text-white " + (scroll ? " bg-[#2579bceb] dark:bg-[rgba(26,26,57,1)] text-white " : " text-white " ),
    {
      " bg-[#2579bceb] dark:bg-[rgba(26,26,57,1)] ": !isRootPath,
      "  text-white ": isRootPath,
    },

  );

  return (
    <>
      <header className={headerClass} data-is-root-path={isRootPath}><Header /></header>
      <main className="">{children}</main>
      <Footer />
    </>
  )
}

export default Layout


/*<div className="global-wrapper" data-is-root-path={isRootPath}>*/
