import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

//import Banner from "../components/UI/banner"
//import SectionIntro from "../components/PageComponents/about/s1Intro"

import AboutHero from "../components/PageComponents/about/AboutHero"
import S2Features from "../components/PageComponents/services/FeaturesSection2"
import CtaBanner2 from "../components/UI/ctaBanner2"
import Section from "../components/UI/Section"
import SectionHeader from "../components/UI/SectionHeader"

const About = ({ data, location }) => {
//  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location}>


      <AboutHero
        /*title={
          <>
            We are <span className="font-light">Via Del Web</span>
          </>
        }*/
        title=""
        subtitle="Let's build your Digital Real Estate."
        strapline=""
        size="md"
        bgColor=""
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white border-transparent"
      />



      <section className="relative block pt-5 pb-3 font-light leading-9 text-left font-lato dark:bg-[rgba(26,26,57,1)] dark:text-white border-transparent">
        <div className="leading-9 ">
          <div className="relative w-full px-4 mx-auto mt-4 mb-2 text-left xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md">
            <div className="flex flex-wrap items-stretch justify-center -mx-4">
              <div className="relative flex-grow w-full max-w-full px-1 py-3 basis-0">
                <header className="block px-2">
                  <h1 className="m-0 text-4xl font-extrabold tracking-tight font-merriweather text-heading-text dark:text-white" style={{ lineHeight: '1.2' }}>
                    Our Approach To Website Ownership
                  </h1>
                  <p className="relative block p-0 mx-0 my-4 text-regular-text dark:text-gray-200 font-lato">
                    Owning your business assets is important. Renting from other
                    companies means placing trust in those companies to have your best
                    interests in mind, even when making their own business decisions.
                    Unfortunately, this isn't always the case, and every day small
                    businesses are affected when solutions they rely on suddenly
                    disappear, taking everything down with them.
                  </p>
                  <p className="relative block p-0 mx-0 mt-0 mb-4 text-regular-text dark:text-gray-200 font-lato">
                    While it's true that there are big company website building
                    platforms like Wix and Squarespace that are not likely to
                    disappear overnight, but that doesn't mean depending on them is a
                    great idea. They charge you monthly, and their prices may seem
                    great at first; but in the long run, they will end up costing you
                    more. Your company website is something you are always going to
                    need, and after some time, those reasonable sounding costs will
                    start to add up; meanwhile, you are no closer to actually owning
                    your website than you were when you started.
                  </p>
                  <p className="relative block p-0 mx-0 mt-0 mb-4 text-regular-text dark:text-gray-200 font-lato">
                    At Via Del Web, we want you to own your company's online presence.
                    That's why we code everything from scratch, and give you the code
                    to your website along with detailed instructions on how to get
                    yourself back online, on your own if necessary, in the fastest,
                    simplest, and most efficient way possible.
                  </p>
                  <ul className="p-0 m-0" style={{ listStyle: 'none' }} />
                </header>
              </div>
            </div>
          </div>
        </div>
      </section>













      <CtaBanner2
        title="The fastest way from idea to live site. Period."
        description="We'll take care of everything, from design to deployment, so you can focus on your business."
        buttonText="Get Started"
        url="/contact"
      />

    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
