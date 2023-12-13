//import *  as React from "react"
import React, { useState, useCallback, useEffect } from 'react'
//import { Link } from "gatsby"
import Header from "./HeaderMain"
import Footer from "./footer"
import clsx from "clsx"
//import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
//import { Link } from 'gatsby';

//console.log(getCookieConsentValue("your_custom_cookie_name"));

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  setHasMounted(true);
}, []);
//useLayoutEffect(() => {
//  setHasMounted(true);
//}, []);

  const [scroll, setScroll] = useState(false);


  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  


  const headerClass = clsx(
    `sticky top-0 left-0 right-0 z-10 flex h-20 md:h-24 text-white dark:text-white ` + (scroll && hasMounted ? ` bg-[#2579bceb] dark:bg-[rgba(26,26,57,1)] text-white ` : ` text-white ` ),
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
      {/*<CookieConsent
            enableDeclineButton
            visible='true'
            hideOnAccept={true}
            /*disableStyles={true}* /
            flipButtons
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName=""
            cookieValue={true}
            containerClasses='w-full mx-auto py-3 mb-3 text-base font-bold justify-between leading-loose text-center text-white max-w-full'
            buttonClasses='inline-block py-3 mb-4 text-base font-black font-merriweather leading-6 text-center rounded-md shadow-sm px-7 bg-primary-500 transition duration-300 ease-in-out hover:ring-primary-500 hover:border-primary-500 border cursor-pointer hover:text-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50'
            buttonWrapperClasses='flex flex-col sm:flex-row  justify-center mr-0 sm:mr-8'
            declineButtonClasses='hover:bg-white bg-transparent text-white inline-block px-4 py-3 mb-3 text-xl font-bold leading-loose text-center hover:text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 focus-within:outline outline-white focus:outline-white hover:shadow-lg  rounded-lg sm:w-auto'
            declineButtonId=''
            contentClasses=''
            overlay=''
            overlayClasses=''
            sameSite='none'
            /*cookieSecurity={true}* /
            debug={true}
            acceptOnScroll={true}
            acceptOnScrollPercentage={50}
            style={{
              background: 'linear-gradient(to right, transparent, #2579bceb)',
              textShadow: '2px 2px black',
              width: '100vw',

            }}
            /*buttonStyle={{
              background: 'radial-gradient(circle at top right, #222, transparent)',
              color: 'white',
              fontWeight: 'bolder',
              borderRadius: '3px',
              border: '1px black',
              textShadow: '2px 2px black',
            }}
          >
Don Boulton uses cookies for a better user experience.{' '}
            <span
              style={{
                fontSize: '14px',
                textAlign: 'center',
                marginLeft: '20px',
              }}
            >
              <span className="icon -lock">
                <SiGnuprivacyguard />
              </span>{' '}
              <Link to="https://publiuslogic.com/privacy" alt="Privacy Page">
                Privacy Page
              </Link>
            </span>* /}
          </CookieConsent>*/}
    </>
  )
}

export default Layout