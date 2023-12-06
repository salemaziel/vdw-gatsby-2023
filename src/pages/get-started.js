import * as React from "react"
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

//import HomeHero from "../components/PageComponents/home/hero"
//import S2about from "../components/PageComponents/home/s2about"
//import S3services from "../components/PageComponents/home/s3services"
//import CtaBanner from "../components/UI/ctaBanner"
//import CtaBanner2 from "../components/UI/ctaBanner2"
//import Banner from "../components/UI/banner"

const GetStarted = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
    
<section className="py-24 md:py-3 text-regular-text dark:text-white" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
  <div className="container px-4 mx-auto">
    <div className="max-w-sm mx-auto">
      <div className="mb-6 text-center">
        <a className="inline-block mb-6" href="#">
          <img className="h-16" src="flex-ui-assets/logos/flex-circle-green.svg" alt />
        </a>
        <h3 className="mb-4 text-2xl font-bold md:text-3xl text-heading-text">Join our community</h3>
        <p className="text-lg font-medium text-coolGray-500 text-regular-text dark:text-white">Start your journey with our product</p>
      </div>
      <form action>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-coolGray-800" htmlFor>Name*</label>
          <input className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" type="name" placeholder="Patryk" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-coolGray-800" htmlFor>Email*</label>
          <input className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" type="name" placeholder="dev@shuffle.dev" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-coolGray-800" htmlFor>Password*</label>
          <input className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="w-full md:w-1/2">
            <label className="relative inline-flex items-center">
              <input className="appearance-none form-checkbox" type="checkbox" />
              <img className="absolute left-0 transform -translate-y-1/2 top-1/2" src="flex-ui-assets/elements/sign-up/checkbox-icon.svg" alt />
              <span className="text-xs font-medium ml-7 text-coolGray-800">Remember me</span>
            </label>
          </div>
          <div className="w-full mt-1 md:w-auto"><a className="inline-block text-xs font-medium text-primary-500 hover:text-primary-600" href="#">Forgot your password?</a></div>
        </div>
        <a className="inline-block w-full py-3 mb-4 text-base font-medium leading-6 text-center rounded-md shadow-sm px-7 text-green-50 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50" href="#">Sign Up</a>
        <a className="inline-flex items-center justify-center w-full py-3 mb-6 text-base font-medium leading-6 text-center bg-white border rounded-md shadow-sm px-7 text-coolGray-500 border-coolGray-100 hover:border-coolGray-200" href="#">
          <img className="mr-2" src="flex-ui-assets/elements/sign-up/google-icon-sign-up.svg" alt />
          <span>Sign in with Google</span>
        </a>
        <p className="text-center">
          <span className="text-xs font-medium">Already have an account?</span>
          <a className="inline-block text-xs font-medium text-primary-500 hover:text-primary-600 hover:underline" href="#">Sign In</a>
        </p>
      </form>
    </div>
  </div>
</section>


    </Layout>
  )
}

export default GetStarted

export const Head = () => (
  <Seo title="Getting Started" />
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
